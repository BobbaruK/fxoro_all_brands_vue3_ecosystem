<script>
import { ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Carousel",
  props: {
    lang: String,
    carouselDetails: Object,
  },
  setup(props) {
    // The amount of time between the end of the animation and the start of the next animation
    const interval = ref(
      Number.isInteger(Number(props.carouselDetails.interval))
        ? Number(props.carouselDetails.interval) < 0
          ? 0
          : Number(props.carouselDetails.interval)
        : 5000
    );

    // The duration of the animation
    const animDuration = ref(
      Number.isInteger(Number(props.carouselDetails.animDuration))
        ? Number(props.carouselDetails.animDuration) < 100
          ? 100
          : Number(props.carouselDetails.animDuration)
        : 320
    );

    // true: autoplay slides; false: will not autoplay
    const autoplay = ref(
      props.carouselDetails.autoplay != undefined
        ? props.carouselDetails.autoplay === "false"
          ? false
          : !!props.carouselDetails.autoplay
        : true
    );

    // true: will allow the carousel to pause when hover and resumes on mouseleave; false: will not pause the carousel on hover
    const hoverPause = ref(
      props.carouselDetails.hoverPause != undefined
        ? props.carouselDetails.hoverPause === "false"
          ? false
          : !!props.carouselDetails.hoverPause
        : true
    );

    // "all": will show previous indicator, next indicator and the dot buttons; "dots": will show only the dot buttons; "arrows": will show only the indicators; "none": will not show any controls
    const allowedControls = ["all", "dots", "arrows", "none"];
    const defaultControl = "all";
    const controls = ref(
      props.carouselDetails.controls
        ? allowedControls.indexOf(props.carouselDetails.controls) == -1
          ? defaultControl
          : props.carouselDetails.controls
        : defaultControl
    );

    // "arrows": show arrow indicators; "text": show next and prev indicators
    const allowedArrows = ["arrows", "text"];
    const defaultArrow = "arrows";
    const arrows = ref(
      props.carouselDetails.arrows
        ? allowedArrows.indexOf(props.carouselDetails.arrows) == -1
          ? defaultArrow
          : props.carouselDetails.arrows
        : defaultArrow
    );

    // true: will cycle infinitely; false will stop at the last slide
    const reset = ref(
      props.carouselDetails.reset != undefined
        ? props.carouselDetails.reset === "false"
          ? false
          : !!props.carouselDetails.reset
        : true
    );

    // "rifle": if you are on slide 1 and click on the dot for slide 4 will cycle trough all the slides in between; "jump": will jump directly to target slide; "fade": same as jump but with fade; "number": how many slides in viewport
    const allowedSlideTranitions = ["rifle", "jump", "fade", "number"];
    const defaultSlideTranition = "rifle";
    const slideTransition = ref(
      props.carouselDetails.slideTransition
        ? allowedSlideTranitions.indexOf(props.carouselDetails.slideTransition) == -1
          ? defaultSlideTranition
          : props.carouselDetails.slideTransition
        : defaultSlideTranition
    );

    // "true": Show information(maybe usefull)
    const dev = ref(
      props.carouselDetails.dev != undefined
        ? props.carouselDetails.dev === "false"
          ? false
          : !!props.carouselDetails.dev
        : false
    );

    const scssecoCarousel = ref(null);
    const scssecoCarousel__stage = ref(null);
    const time = ref(0);
    let timeInt;
    const isPaused = ref(true);

    // Set GSAP slide animation timeline
    const slideAnim = gsap.timeline({
      defaults: {
        duration: animDuration.value / 1000,
        // ease: "back",
        // ease: "power4.out",
        ease: "linear",
        // ease: "elastic",
      },
      // paused: true,
    });

    // Set GSAP sliders show when in viewport timeline
    const slideInVP = gsap.timeline({
      defaults: {
        duration: 0.12,
        ease: "none",
      },
    });

    //Controls
    const controlsWrapper = document.createElement("div"); // create controls wrapper
    controlsWrapper.classList.add("scssecoCarousel__controls"); // add class on controls wrapper of scssecoCarousel__controls

    const arrowsWrapper = document.createElement("div"); // create arrows wrapper
    arrowsWrapper.classList.add("scssecoCarousel__controls--arrows"); // add class on arrows wrapper of scssecoCarousel__controls--arrows

    const dotsWrapper = document.createElement("div"); // create dots wrapper
    dotsWrapper.classList.add("scssecoCarousel__controls--dots"); // add class on dots wrapper of scssecoCarousel__controls--dots

    const prvButton = document.createElement("button"); // create prev button
    prvButton.classList.add("scssecoCarousel__controls--prev"); // add class on prev button of scssecoCarousel__controls--prev

    const prvButtonSpan = document.createElement("span"); // create span inside prev button
    prvButtonSpan.innerHTML = arrows.value == "arrows" ? "&lsaquo;" : "Prev"; // add text on prev button of Prev
    prvButton.appendChild(prvButtonSpan); // append span to prev button

    const nxtButton = document.createElement("button"); // create next button
    nxtButton.classList.add("scssecoCarousel__controls--next"); // add class on next button of scssecoCarousel__controls--next
    const nxtButtonSpan = document.createElement("span"); // create span inside next button
    nxtButtonSpan.innerHTML = arrows.value == "arrows" ? "&rsaquo;" : "Next"; // add text on next button of Next
    nxtButton.appendChild(nxtButtonSpan); // append span to next button

    const slideTransitionRifleNext = (stage, activeSlide, nextSlide, activeDot, nextDot) => {
      slideAnim.to(stage, {
        xPercent: "-=100",
        onStart: () => {
          time.value = 0; // Set time to 0
          activeSlide.classList.remove("active"); // remove class from active slide
          if (controls.value === "dots" || controls.value === "all") {
            activeDot.classList.remove("active"); // remove class from active dot - if controls is 'dots' or 'all'
          }
        },
        onComplete: () => {
          time.value = 0; // Set time to 0
          nextSlide.classList.add("active"); // add class on active slide
          if (controls.value === "dots" || controls.value === "all") {
            nextDot.classList.add("active"); // add class on active dot - if controls is 'dots' or 'all'
          }
        },
      });
    };

    const slideTransitionRiflePrev = (stage, activeSlide, prevSlide, activeDot, prevDot) => {
      slideAnim.to(stage, {
        xPercent: "+=100",
        onStart: () => {
          time.value = 0; // Set time to 0
          activeSlide.classList.remove("active"); // remove class from active slide
          if (controls.value === "dots" || controls.value === "all") {
            activeDot.classList.remove("active"); // remove class from active dot - if controls is 'dots' or 'all'
          }
        },
        onComplete: () => {
          time.value = 0; // Set time to 0
          prevSlide.classList.add("active"); // add class on active slide
          if (controls.value === "dots" || controls.value === "all") {
            prevDot.classList.add("active"); // add class on active dot - if controls is 'dots' or 'all'
          }
        },
      });
    };

    const slideTransitionRifleResetEnd = (currentSlide, slides, slidesPlusClones) => {
      if (Number(currentSlide.dataset.slidenr) === slides.length) {
        gsap.set(slidesPlusClones, {
          xPercent: "+=" + slides.length + "00", // if is last slide reset to first
        });
      }
    };

    const slideTransitionRifleResetStart = (currentSlide, slides, slidesPlusClones) => {
      if (Number(currentSlide.dataset.slidenr) === 1) {
        gsap.set(slidesPlusClones, {
          xPercent: "-=" + slides.length + "00", // if is first slide reset to last
        });
      }
    };

    const slideTransitionFade = (activeSlide, nextSlide, activeDot, nextDot) => {
      slideAnim
        .to(activeSlide, {
          xPercent: 0,
          autoAlpha: 0,
          ease: "linear",
        })
        .to(
          nextSlide,
          {
            xPercent: 0,
            autoAlpha: 1,
            ease: "linear",
            onStart: () => {
              time.value = 0; // Set time to 0
              activeSlide.classList.remove("active"); // remove class from active slide
              if (controls.value === "dots" || controls.value === "all") {
                activeDot.classList.remove("active"); // remove class from active dot - if controls is 'dots' or 'all'
              }
            },
            onComplete: () => {
              time.value = 0; // Set time to 0
              nextSlide.classList.add("active"); // add class on active slide
              if (controls.value === "dots" || controls.value === "all") {
                nextDot.classList.add("active"); // add class on active dot - if controls is 'dots' or 'all'
              }
            },
          },
          "<"
        );
    };

    const slideTransitionJumpNext = (activeSlide, nextSlide, nextNextSlide, activeDot, nextDot) => {
      slideAnim
        .to(activeSlide, {
          xPercent: -100,
        })
        .fromTo(
          nextSlide,
          {
            xPercent: 100,
          },
          {
            xPercent: 0,
          },
          "<"
        )
        .fromTo(
          nextNextSlide,
          {
            xPercent: 200,
          },
          {
            xPercent: 100,
            onStart: () => {
              time.value = 0; // Set time to 0
              activeSlide.classList.remove("active"); // remove class from active slide
              if (controls.value === "dots" || controls.value === "all") {
                activeDot.classList.remove("active"); // remove class from active dot - if controls is 'dots' or 'all'
              }
            },
            onComplete: () => {
              time.value = 0; // Set time to 0
              nextSlide.classList.add("active"); // add class on active slide
              if (controls.value === "dots" || controls.value === "all") {
                nextDot.classList.add("active"); // add class on active dot - if controls is 'dots' or 'all'
              }
            },
          },
          "<"
        );
    };

    const slideTransitionJumpPrev = (activeSlide, prevSlide, prevPrevSlide, activeDot, prevDot) => {
      slideAnim
        .to(activeSlide, {
          xPercent: 100,
        })
        .fromTo(
          prevSlide,
          {
            xPercent: -100,
          },
          {
            xPercent: 0,
          },
          "<"
        )
        .fromTo(
          prevPrevSlide,
          {
            xPercent: -200,
          },
          {
            xPercent: -100,
            onStart: () => {
              time.value = 0; // Set time to 0
              activeSlide.classList.remove("active"); // remove class from active slide
              if (controls.value === "dots" || controls.value === "all") {
                activeDot.classList.remove("active"); // remove class from active dot - if controls is 'dots' or 'all'
              }
            },
            onComplete: () => {
              time.value = 0; // Set time to 0
              prevSlide.classList.add("active"); // add class on active slide
              if (controls.value === "dots" || controls.value === "all") {
                prevDot.classList.add("active"); // add class on active dot - if controls is 'dots' or 'all'
              }
            },
          },
          "<"
        );
    };

    const nextSlide = (stage, activeSlide, nextSlide, nextnextSlide, activeDot, nextDot) => {
      switch (slideTransition.value) {
        case "rifle":
          slideTransitionRifleNext(stage, activeSlide, nextSlide, activeDot, nextDot);
          break;
        case "fade":
          slideTransitionFade(activeSlide, nextSlide, activeDot, nextDot);
          break;
        case "jump":
          slideTransitionJumpNext(activeSlide, nextSlide, nextnextSlide, activeDot, nextDot);
          break;
        default:
          slideTransitionRifleNext(stage, activeSlide, nextSlide, activeDot, nextDot);
      }
    };

    const prevSlide = (stage, activeSlide, prevSlide, prevPrevSlide, activeDot, prevDot) => {
      switch (slideTransition.value) {
        case "rifle":
          slideTransitionRiflePrev(stage, activeSlide, prevSlide, activeDot, prevDot);
          break;
        case "fade":
          slideTransitionFade(activeSlide, prevSlide, activeDot, prevDot);
          break;
        case "jump":
          slideTransitionJumpPrev(activeSlide, prevSlide, prevPrevSlide, activeDot, prevDot);
          break;
        default:
          slideTransitionRiflePrev(stage, activeSlide, prevSlide, activeDot, prevDot);
      }
    };

    const disablearrows = (prev, next, currentSlide, currentSlideNr) => {
      if (controls.value != "dots" && controls.value != "none") {
        if (Number(currentSlide.dataset.slidenr) === currentSlideNr) {
          prev.disabled = true; // disable prev button - if target slide is first slide
        } else if (Number(currentSlide.dataset.slidenr) === currentSlideNr) {
          next.disabled = true; // disable next button - if target slide is last slide
        }
        next.removeAttribute("disabled"); // remove disabled attr if jump from last slide or first slide
      }
    };

    onMounted(() => {
      // get the active slide
      const activeSlide = scssecoCarousel__stage.value.querySelector(".active");

      // Run slider only if in viewport
      // ScrollTrigger.create({
      //   animation: slideInVP,
      //   trigger: `#${props.carouselDetails.sliderID}`,
      //   start: "top 60%",
      //   end: "bottom 30%",
      //   markers: true,
      //   toggleActions: "play reverse play reverse",
      //   onEnter: () => {
      //     isPaused.value = false;
      //     slideAnim.resume();
      //   },
      //   onLeave: () => {
      //     isPaused.value = true;
      //     slideAnim.pause();
      //   },
      //   onEnterBack: () => {
      //     isPaused.value = false;
      //     slideAnim.resume();
      //   },
      //   onLeaveBack: () => {
      //     isPaused.value = true;
      //     slideAnim.pause();
      //   },
      // });

      const slides = Array.from(scssecoCarousel__stage.value.children);

      // create dot for each slide
      slides.forEach((slide, index) => {
        const slideNr = index + 1; // slide number
        const dotButton = document.createElement("button"); // create dot button
        const dotButtonSpan = document.createElement("span"); // create span inside dot button
        slide.setAttribute("data-slidenr", slideNr); // add data-slide on each slide of nr of slide
        dotButton.setAttribute("data-slidenr", slideNr); // add data-slide on each dot button of nr of slide
        const dotNr = document.createTextNode(slideNr); // create numbers for each dot

        dotButtonSpan.appendChild(dotNr); // append text to span
        dotButton.appendChild(dotButtonSpan); // append span on each button dot
        dotsWrapper.appendChild(dotButton); // add buttons from dots array
      });

      const dots = Array.from(dotsWrapper.children); // get all the dots

      dots.forEach((dot) => {
        if (dot.dataset.slidenr === activeSlide.dataset.slidenr) {
          dot.classList.add("active"); // add class of active on active dot
        }
      });

      arrowsWrapper.appendChild(prvButton); // append prev button to arrows wrapper
      arrowsWrapper.appendChild(nxtButton); // append next button to arrows wrapper

      // Controls
      switch (controls.value) {
        case "dots":
          controlsWrapper.appendChild(dotsWrapper); // append dots wrapper to controls wrapper
          break;
        case "all":
          controlsWrapper.appendChild(arrowsWrapper); // append arrows wrapper to controls wrapper
          controlsWrapper.appendChild(dotsWrapper); // append dots wrapper to controls wrapper
          break;
        case "arrows":
          controlsWrapper.appendChild(arrowsWrapper); // append arrows wrapper to controls wrapper
          break;
        case "none":
          console.log(`${scssecoCarousel.value.id} is outta control`); // log a message that show which slider has no controls
          break;
        default: // append arrows wrapper to controls wrapper
          controlsWrapper.appendChild(arrowsWrapper);
          controlsWrapper.appendChild(dotsWrapper); // append dots wrapper to controls wrapper
      }

      scssecoCarousel.value.appendChild(controlsWrapper);

      const nextButton = scssecoCarousel.value.querySelector(".scssecoCarousel__controls--next"); // get next btn
      const previousButton = scssecoCarousel.value.querySelector(".scssecoCarousel__controls--prev"); // get prev btn

      // autoplay and hoverPause
      if (autoplay.value === true) {
        if (hoverPause.value === true) {
          scssecoCarousel.value.addEventListener("mouseenter", () => {
            isPaused.value = false;
            // slideAnim.pause();
          });
          scssecoCarousel.value.addEventListener("mouseleave", () => {
            isPaused.value = true;
            // slideAnim.resume();
          });
        }
        timeInt = window.setInterval(() => {
          // Time interval
          // console.log(!isPaused.value);
          if (isPaused.value) {
            time.value = time.value + 10;
            // console.log("dasd");
            if (time.value >= interval.value) {
              time.value = 0;
              if (slideAnim.isActive()) {
                return; // If animation is active do nothing
              }

              const slidesPlusClones = Array.from(scssecoCarousel__stage.value.children);
              const slidesLength = slides.length;

              let currentSlide = ""; // create empty var for current slide
              let firstSlide = ""; // create empty var for first slide
              slides.forEach((slide, index) => {
                if (slide.classList.contains("active")) {
                  currentSlide = slide; // get current slide
                }
                if (Number(slide.dataset.slidenr) === 1) {
                  firstSlide = slide; // get first slide
                }
              });

              if (reset.value === false && Number(currentSlide.dataset.slidenr) === slidesLength) {
                return; // if reset is false and on last slide return
              }

              const nxtSlide =
                currentSlide.dataset.slidenr == slidesLength ? firstSlide : currentSlide.nextElementSibling; // if is last slide get 1st slide else next slide

              const nextNextSlide =
                Number(nxtSlide.dataset.slidenr) === slidesLength ? slides[0] : nxtSlide.nextElementSibling;
              const currentDot = dotsWrapper.querySelector(".active"); // get active dot
              const dtActNr = currentDot.dataset.slidenr; // get active dot data-slidenr
              const nextDot =
                Number(dtActNr) === slidesLength
                  ? dotsWrapper.querySelector("button[data-slidenr='1']")
                  : currentDot.nextElementSibling; // if is last dot get 1st dot else next dot

              if (slideTransition.value === "rifle" || !isNaN(slideTransition.value)) {
                slideTransitionRifleResetEnd(currentSlide, slides, slidesPlusClones);
              }

              nextSlide(slidesPlusClones, currentSlide, nxtSlide, nextNextSlide, currentDot, nextDot);

              if (reset.value === false) {
                disablearrows(nextButton, previousButton, currentSlide, slidesLength - 1);
              }
            }
            if (dev.value === true) {
              const devTime = scssecoCarousel.value.querySelector(".dev_time");
              devTime.innerHTML = time.value; // add time to dev stats
            }
          }
        }, 10);
      }

      // controls: Check if arrows are active -> controls: "arrow" and handle click
      if (nextButton != null && previousButton != null) {
        nextButton.addEventListener("click", (e) => {
          if (slideAnim.isActive()) {
            return; // If animation is active do nothing
          }

          const slidesPlusClones = Array.from(scssecoCarousel__stage.value.children); // get all the slides including the clones if any
          const slidesLength = slides.length; // get slides length

          let currentSlide = ""; // create empty var for current slide
          let firstSlide = ""; // create empty var for first slide
          slides.forEach((slide, index) => {
            if (slide.classList.contains("active")) {
              currentSlide = slide; // Get active slide
            }
            if (Number(slide.dataset.slidenr) === 1) {
              firstSlide = slide; // Get first slide
            }
          });

          const nxtSlide = currentSlide.dataset.slidenr == slidesLength ? firstSlide : currentSlide.nextElementSibling; // if is last slide get 1st slide else next slide
          const nextNextSlide =
            Number(nxtSlide.dataset.slidenr) === slidesLength ? slides[0] : nxtSlide.nextElementSibling;
          const currentDot = dotsWrapper.querySelector(".active"); // get active dot
          const dtActNr = currentDot.dataset.slidenr; // get active dot data-slidenr
          const nextDot =
            Number(dtActNr) === slidesLength
              ? dotsWrapper.querySelector("button[data-slidenr='1']")
              : currentDot.nextElementSibling; // if is last dot get 1st dot else next dot

          if (slideTransition.value === "rifle" || !isNaN(slideTransition.value)) {
            slideTransitionRifleResetEnd(currentSlide, slides, slidesPlusClones);
          }

          nextSlide(slidesPlusClones, currentSlide, nxtSlide, nextNextSlide, currentDot, nextDot);

          if (reset.value === false) {
            disablearrows(nextButton, previousButton, currentSlide, slidesLength - 1);
          }
        });

        previousButton.addEventListener("click", (e) => {
          if (slideAnim.isActive()) {
            return; // If animation is active do nothing
          }

          const slidesPlusClones = Array.from(scssecoCarousel__stage.value.children); // get all the slides including the clones if any
          const slidesLength = slides.length; // get slides length

          let currentSlide = ""; // create empty var for current slide
          let lastSlide = ""; // create empty var for last slide
          slides.forEach((slide, index) => {
            if (slide.classList.contains("active")) {
              currentSlide = slide; // Get active slide
            }
            if (Number(slide.dataset.slidenr) === slidesLength) {
              lastSlide = slide; // Get last slide
            }
          });

          const prvSld = Number(currentSlide.dataset.slidenr) === 1 ? lastSlide : currentSlide.previousElementSibling; // if is first slide get last slide else prev slide
          const prevPrevSlide =
            Number(prvSld.dataset.slidenr) === 1 ? slides[slidesLength - 1] : prvSld.previousElementSibling;
          const currentDot = dotsWrapper.querySelector(".active"); // get active dot
          const dtActNr = currentDot.dataset.slidenr; // get active dot data-slidenr
          const prevDot =
            Number(dtActNr) === 1
              ? dotsWrapper.querySelector("button[data-slidenr='" + slidesLength + "']")
              : currentDot.previousElementSibling; // if is first dot get last dot else prev dot

          if (slideTransition.value === "rifle" || !isNaN(slideTransition.value)) {
            slideTransitionRifleResetStart(currentSlide, slides, slidesPlusClones);
          }

          prevSlide(slidesPlusClones, currentSlide, prvSld, prevPrevSlide, currentDot, prevDot);

          if (reset.value === false) {
            disablearrows(previousButton, nextButton, currentSlide, 2);
          }
        });
      }

      // controls: Check if dots are active -> and handle click
      if (controls.value === "dots" || controls.value === "all") {
        const dotsArray = Array.from(dotsWrapper.children);
        // console.log(dotsArray);
        for (let i = 0; i < slides.length; i++) {
          if (typeof slides[i].dataset.text != "undefined") {
            // console.log(slides[i].dataset.text);
            dotsArray[i].firstChild.innerHTML = slides[i].dataset.text;
          }
        }
        // console.log(scssecoCarousel.value.id, dotsWrapper);
        dotsWrapper.addEventListener("click", (e) => {
          const dotTarget = e.target.closest("button"); // get dot clicked
          const currentDot = dotsWrapper.querySelector(".active"); // get active dot
          const slidesLength = slides.length; // get slides length

          if (
            slideAnim.isActive() ||
            !dotTarget ||
            Number(currentDot.dataset.slidenr) === Number(dotTarget.dataset.slidenr)
          ) {
            return; // do nothing if animation is active or dotTarget not exists or if dot active is the same with target dot
          }

          let currentSlide = ""; // create empty var for current slide
          const ts_nr = Number(dotTarget.dataset.slidenr); // get target slide number
          const targetSlide = slides[ts_nr - 1]; // get target slide

          slides.forEach((slide, index) => {
            if (slide.classList.contains("active")) {
              currentSlide = slide; // get current slide
            }
          });

          const cs_nr = Number(currentSlide.dataset.slidenr); // get current slide number
          const slidesPlusClones = Array.from(scssecoCarousel__stage.value.children); // get all the slides including the clones if any

          // how much to move depends on what button is clicked
          function dotsSlide(amount) {
            slideAnim.to(slidesPlusClones, {
              xPercent: amount,
              onStart: () => {
                time.value = 0; // Set time to 0
                currentSlide.classList.remove("active"); // remove active class from current slide
                currentDot.classList.remove("active"); // remove active class from current dot
              },
              onComplete: () => {
                time.value = 0; // Set time to 0
                targetSlide.classList.add("active"); // add active class on target slide
                dotTarget.classList.add("active"); // add active class on target dot
              },
            });
          }

          // Prev animation
          if (Number(currentDot.dataset.slidenr) > Number(dotTarget.dataset.slidenr)) {
            if (reset.value === false) {
              disablearrows(previousButton, nextButton, targetSlide, 1);
            }

            switch (slideTransition.value) {
              case "rifle":
                const amount = "+=" + (cs_nr - ts_nr) + "00"; // set how much to move
                dotsSlide(amount);
                break;
              case "fade":
                prevSlide("", currentSlide, targetSlide, "", currentDot, dotTarget);
                break;
              case "jump":
                const prevPrevSlide =
                  Number(targetSlide.dataset.slidenr) === 1 ? slidesPlusClones[0] : targetSlide.previousElementSibling;
                slideTransitionJumpPrev(currentSlide, targetSlide, prevPrevSlide, currentDot, dotTarget);
                break;
              default: // set how much to move
                const damount = "+=" + (cs_nr - ts_nr) + "00";
                dotsSlide(damount);
            }
          }

          // Next animation
          if (Number(currentDot.dataset.slidenr) < Number(dotTarget.dataset.slidenr)) {
            if (reset.value === false) {
              disablearrows(nextButton, previousButton, targetSlide, slidesLength);
            }

            switch (slideTransition.value) {
              case "rifle":
                const amount = "-=" + (ts_nr - cs_nr) + "00"; // set how much to move
                dotsSlide(amount);
                break;
              case "fade":
                nextSlide("", currentSlide, targetSlide, "", currentDot, dotTarget);
                break;
              case "jump":
                const slidesPlusClonesLength = slidesPlusClones.length - 1;
                const nextNextSlide =
                  Number(targetSlide.dataset.slidenr) === slidesLength
                    ? slidesPlusClones[slidesPlusClonesLength]
                    : targetSlide.nextElementSibling;
                nextSlide("", currentSlide, targetSlide, nextNextSlide, currentDot, dotTarget);
                break;
              default: // set how much to move
                const damount = "-=" + (ts_nr - cs_nr) + "00";
                dotsSlide(damount);
            }
          }
        });
      }

      // reset
      if (reset.value === false && controls.value != "dots" && controls.value != "none") {
        if (Number(activeSlide.dataset.slidenr) === 1) {
          console.log("pore");
          previousButton.disabled = true; // disable prev button if first slide is active
        } else if (Number(activeSlide.dataset.slidenr) === slides.length) {
          console.log("nexto");
          nextButton.disabled = true; // disable next button if last slide is active
        }
      }

      // slideTransition: "rifle"
      if (slideTransition.value === "rifle") {
        // Arange slides
        const firstSlide = scssecoCarousel__stage.value.querySelector("div[data-slidenr='1']"); // get first slide
        const firsSlideClone = firstSlide.cloneNode(true); // clone first slide

        const lastSlide = scssecoCarousel__stage.value.querySelector("div[data-slidenr='" + slides.length + "']"); // get last slide
        const lastSlideClone = lastSlide.cloneNode(true); // clone last slide

        lastSlideClone.classList.add("clone"); // add class clone to last slide clone
        firsSlideClone.classList.add("clone"); // add class clone to first slide clone

        const slidesPlusClones = Array.from(scssecoCarousel__stage.value.children); // create array with all slides(incl clones)

        slidesPlusClones.unshift(lastSlideClone); // add last child clone at the begging of the array
        slidesPlusClones.push(firsSlideClone); // add last child clone at the end of the array

        scssecoCarousel__stage.value.insertBefore(lastSlideClone, scssecoCarousel__stage.value.childNodes[0]); // add last child clone at the beggining of the stage
        scssecoCarousel__stage.value.appendChild(firsSlideClone); // add last child clone at the end of the stage

        for (let i = 0; i < slidesPlusClones.length; i++) {
          gsap.set(slidesPlusClones[i], {
            xPercent: i * 100, // set slides in order
          });
        }

        gsap.set(slidesPlusClones, {
          xPercent: "-=" + activeSlide.dataset.slidenr * 100, // set slides so active is visible
        });
      }

      // slideTransition: "jump"
      if (slideTransition.value === "jump") {
        // Arange slides
        const slidesLength = slides.length;
        let slidesBefore = []; // create empty array for slides before the active slide
        let slidesAfter = []; // create empty array for slides after the active slide
        let firstSlide = ""; // create empty variable for first slide
        let lastSlide = ""; // create empty variable for last slide

        slides.forEach((slide, index) => {
          if (Number(slide.dataset.slidenr) < Number(activeSlide.dataset.slidenr)) {
            slidesBefore.push(slide); // add before active slides to array
          }
          if (Number(slide.dataset.slidenr) > Number(activeSlide.dataset.slidenr)) {
            slidesAfter.push(slide); // add after active slides to array
          }
          if (Number(slide.dataset.slidenr) === 1) {
            firstSlide = slide; // add first slide to variable
          }
          if (Number(slide.dataset.slidenr) === slidesLength) {
            lastSlide = slide; // add last slide to variable
          }
        });

        const firstSlideClone = firstSlide.cloneNode(true); // clone first slide
        const lastSlideClone = lastSlide.cloneNode(true); // clone last slide

        firstSlideClone.classList.add("clone"); // add class of clone to the first slide
        lastSlideClone.classList.add("clone"); // add class of clone to the last slide
        firstSlideClone.classList.remove("active"); // add class of active to the first slide
        lastSlideClone.classList.remove("active"); // add class of active to the last slide

        scssecoCarousel__stage.value.appendChild(firstSlideClone); // add first slide to DOM
        scssecoCarousel__stage.value.insertBefore(lastSlideClone, scssecoCarousel__stage.value.childNodes[0]); // add last slide to DOM

        gsap.set(firstSlideClone, {
          xPercent: 100,
        });
        gsap.set(lastSlideClone, {
          xPercent: -100,
        });

        if (slidesBefore.length) {
          gsap.set(slidesBefore, {
            xPercent: -100,
          });
        }
        if (slidesAfter.length) {
          gsap.set(slidesAfter, {
            xPercent: 100,
          });
        }
      }

      // slideTransition: "fade"
      if (slideTransition.value === "fade") {
        // Arange slides
        gsap.set(slides, {
          autoAlpha: 0,
          xPercent: 0,
        });

        gsap.set(activeSlide, {
          autoAlpha: 1,
          xPercent: 0,
        });
      }

      // Dev options [data-dev]
      if (dev.value === true) {
        const devWrap = document.createElement("div"); // create dev div wrapper
        devWrap.classList.add("scssecoCarousel__dev"); // add class on dev div of scssecoCarousel__dev
        devWrap.innerHTML = `<table> <thead> <tr> <th colspan="5" style="text-align: center">${scssecoCarousel.value.id}</th> </tr><tr> <th>Setting</th> <th>|</th> <th>Value</th> <th>|</th> <th>Description</th> </tr></thead> <tbody> <tr> <td>time</td><td>|</td><td> <b><span class="dev_time"></span></b> </td><td>|</td><td>time</td></tr><tr> <td>interval</td><td>|</td><td><b>${interval.value}</b></td><td>|</td><td>dur btwn animas(slide)</td></tr><tr> <td>animDuration</td><td>|</td><td><b>${animDuration.value}</b></td><td>|</td><td>anim dur</td></tr><tr></tr><tr> <td>autoplay</td><td>|</td><td><b>${autoplay.value}</b></td><td>|</td><td>auto play slider</td></tr><tr> <td>hoverPause</td><td>|</td><td><b>${hoverPause.value}</b></td><td>|</td><td>pause on hover</td></tr><tr> <td>controls</td><td>|</td><td><b>${controls.value}</b></td><td>|</td><td>add controls</td></tr><tr> <td>arrows</td><td>|</td><td><b>${arrows.value}</b></td><td>|</td><td>button text or chevron</td></tr><tr> <td>reset</td><td>|</td><td><b>${reset.value}</b></td><td>|</td><td>infinite cycle</td></tr><tr> <td>slideTransition</td><td>|</td><td><b>${slideTransition.value}</b></td><td>|</td><td>slide change effect</td></tr><tr> <td>css overflow</td><td>|</td><td> <b><input type="checkbox" class="showOverflow"/></b> </td><td>|</td><td>show overflow</td></tr></tbody></table>`; // add this content to devWrap

        scssecoCarousel.value.appendChild(devWrap); // append dev stuff to the slider

        const slidesPlusClones = Array.from(scssecoCarousel__stage.value.children);

        slidesPlusClones.forEach((slide, index) => {
          const devSldNr = document.createElement("div"); // create slide nr div
          devSldNr.classList.add("scssecoCarousel__dev-slide_number"); // add class of scssecoCarousel__dev-slide_number in slide nr div
          const cloneText = slide.classList.contains("clone") ? "(c)" : "";
          devSldNr.innerHTML = `${slide.dataset.slidenr} / ${slides.length}${cloneText}`; // add nr/total
          slide.appendChild(devSldNr); // append to slide
        });

        const showOverflow = scssecoCarousel.value.querySelector(".showOverflow");

        showOverflow.addEventListener("change", () => {
          if (showOverflow.checked == true) {
            scssecoCarousel.value.style.overflow = "visible";
            scssecoCarousel__stage.value.style.overflow = "visible";
          } else {
            scssecoCarousel.value.style.overflow = "hidden";
            scssecoCarousel__stage.value.style.overflow = "hidden";
          }
        });
      }
    });

    onUnmounted(() => {
      clearInterval(timeInt);
    });

    return { scssecoCarousel, scssecoCarousel__stage, isPaused };
  },
};
</script>

<template>
  <div ref="scssecoCarousel" :id="carouselDetails.sliderID" class="scssecoCarousel">
    <div ref="scssecoCarousel__stage" class="scssecoCarousel__stage">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.scssecoCarousel {
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;

  .scssecoCarousel__stage {
    aspect-ratio: 16/9;
    /* padding-top: 56.25%; */
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .scssecoCarousel__slide {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: auto;
    height: 100%;
    width: 100%;
    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
    .scssecoCarousel__dev-slide_number {
      align-items: center;
      background-color: honeydew;
      bottom: 20px;
      color: #000;
      display: flex;
      font-size: clamp(16px, 10%, 26px);
      height: 40px;
      justify-content: center;
      position: absolute;
      right: 20px;
      // width: min(max(40px, 100% - 40px), 100%, 80px);
      width: 40px;
    }
  }

  .scssecoCarousel__controls {
    border: 2px solid green;
    .scssecoCarousel__controls--arrows {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      .scssecoCarousel__controls--prev,
      .scssecoCarousel__controls--next {
        span {
          pointer-events: none;
        }
      }
    }
    .scssecoCarousel__controls--dots {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 10px;
      button {
        &.active {
          background-color: red;
        }
      }
    }
  }

  .scssecoCarousel__dev {
    background-color: honeydew;
    left: 20px;
    padding: 10px;
    position: absolute;
    top: 20px;
    table {
      text-align: left;
    }
  }
}
</style>
