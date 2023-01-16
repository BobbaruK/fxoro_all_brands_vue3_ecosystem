<script>
import { ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import translationsGlossary from "../../composables/translationsGlossary";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Carousel",
  emits: ["carouselKey"],
  props: {
    lang: String,
    carouselDetails: Object,
  },
  setup(props, ctx) {
    /**
     * TODO
     *
     * * add svg carrets
     * * translations ready
     * * clean code
     * ! direction
     * *    left to right(ltr),
     * *    right to left(rtl),
     * ?    top to bottom(ttb),
     * *    bottom to top(btt)
     * ! scrollTrigger
     * ! next slide(s) via dots
     *
     *
     *
     */

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
    const allowedSlideTranitions = ["rifle", "jump", "fade"];
    const defaultSlideTranition = "rifle";
    const slideTransition = ref(
      props.carouselDetails.slideTransition
        ? allowedSlideTranitions.indexOf(props.carouselDetails.slideTransition) == -1
          ? !isNaN(props.carouselDetails.slideTransition)
            ? Number(props.carouselDetails.slideTransition)
            : defaultSlideTranition
          : props.carouselDetails.slideTransition
        : defaultSlideTranition
    );

    // true: will adjust the slide number depending on the viewport
    const responsive = ref(
      props.carouselDetails.responsive != undefined
        ? props.carouselDetails.responsive === "false"
          ? false
          : !!props.carouselDetails.responsive
        : true
    );

    // direction of the slide animation
    const allowedDirectionTranitions = ["ltr", "rtl", "ttb", "btt"];
    const defaultDirectionTranition = "ltr";
    const direction = ref(
      props.carouselDetails.direction
        ? allowedDirectionTranitions.indexOf(props.carouselDetails.direction) == -1
          ? defaultDirectionTranition
          : props.carouselDetails.direction
        : props.lang === "ar"
        ? "rtl"
        : defaultDirectionTranition
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
        ease: "back",
        // ease: "power4.out",
        // ease: "linear",
        // ease: "elastic",
      },
      // paused: true,
    });

    //Controls
    const controlsWrapper = document.createElement("div"); // create controls wrapper
    controlsWrapper.classList.add("scssecoCarousel__controls"); // add class on controls wrapper of scssecoCarousel__controls

    if (direction.value) {
      controlsWrapper.style = `direction: ${direction.value}`;
    }

    const arrowsWrapper = document.createElement("div"); // create arrows wrapper
    arrowsWrapper.classList.add("scssecoCarousel__controls--arrows"); // add class on arrows wrapper of scssecoCarousel__controls--arrows

    const dotsWrapper = document.createElement("div"); // create dots wrapper
    dotsWrapper.classList.add("scssecoCarousel__controls--dots"); // add class on dots wrapper of scssecoCarousel__controls--dots

    const prvButton = document.createElement("button"); // create prev button
    prvButton.classList.add("scssecoCarousel__controls--prev"); // add class on prev button of scssecoCarousel__controls--prev

    const prvButtonSpan = document.createElement("span"); // create span inside prev button
    prvButtonSpan.innerHTML =
      arrows.value == "arrows"
        ? direction.value === "rtl" || props.lang === "ar"
          ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="currentColor" d="M96 220a12.2 12.2 0 0 1-8.5-3.5a12 12 0 0 1 0-17L159 128L87.5 56.5a12 12 0 0 1 17-17l80 80a12 12 0 0 1 0 17l-80 80A12.2 12.2 0 0 1 96 220Z"/></svg>'
          : `<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 256 256'><path fill='currentColor' d='M160 220a12.2 12.2 0 0 1-8.5-3.5l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128l71.5 71.5a12 12 0 0 1 0 17a12.2 12.2 0 0 1-8.5 3.5Z'/></svg>`
        : translationsGlossary.p.previous[props.lang]; // add text on prev button of Prev
    prvButton.appendChild(prvButtonSpan); // append span to prev button

    const nxtButton = document.createElement("button"); // create next button
    nxtButton.classList.add("scssecoCarousel__controls--next"); // add class on next button of scssecoCarousel__controls--next

    const nxtButtonSpan = document.createElement("span"); // create span inside next button
    nxtButtonSpan.innerHTML =
      arrows.value == "arrows"
        ? direction.value === "rtl" || props.lang === "ar"
          ? `<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 256 256'><path fill='currentColor' d='M160 220a12.2 12.2 0 0 1-8.5-3.5l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128l71.5 71.5a12 12 0 0 1 0 17a12.2 12.2 0 0 1-8.5 3.5Z'/></svg>`
          : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="currentColor" d="M96 220a12.2 12.2 0 0 1-8.5-3.5a12 12 0 0 1 0-17L159 128L87.5 56.5a12 12 0 0 1 17-17l80 80a12 12 0 0 1 0 17l-80 80A12.2 12.2 0 0 1 96 220Z"/></svg>`
        : translationsGlossary.n.next[props.lang]; // add text on next button of Next
    nxtButton.appendChild(nxtButtonSpan); // append span to next button

    if (direction.value === "ltr" && props.lang === "ar") {
      prvButton.style = "direction: rtl";
      nxtButton.style = "direction: rtl";
    }

    const slideTransitionRifleNext = (stage, activeSlide, nextSlide, activeDot, nextDot) => {
      let stageTo = {};

      const onStartFunct = () => {
        time.value = 0; // Set time to 0
        activeSlide.classList.remove("active"); // remove class from active slide
        if (controls.value === "dots" || controls.value === "all") {
          activeDot.classList.remove("active"); // remove class from active dot - if controls is 'dots' or 'all'
        }
      };
      const onCompleteFunct = () => {
        time.value = 0; // Set time to 0
        nextSlide.classList.add("active"); // add class on active slide
        if (controls.value === "dots" || controls.value === "all") {
          nextDot.classList.add("active"); // add class on active dot - if controls is 'dots' or 'all'
        }
      };

      if (direction.value === "ltr") {
        stageTo = {
          xPercent: "-=100",
          onStart: () => onStartFunct(),
          onComplete: () => onCompleteFunct(),
        };
      }

      if (direction.value === "rtl") {
        stageTo = {
          xPercent: "+=100",
          onStart: () => onStartFunct(),
          onComplete: () => onCompleteFunct(),
        };
      }

      if (direction.value === "ttb") {
        stageTo = {
          yPercent: "+=100",
          onStart: () => onStartFunct(),
          onComplete: () => onCompleteFunct(),
        };
      }

      if (direction.value === "btt") {
        stageTo = {
          yPercent: "-=100",
          onStart: () => onStartFunct(),
          onComplete: () => onCompleteFunct(),
        };
      }

      slideAnim.to(stage, stageTo);
    };

    const slideTransitionRiflePrev = (stage, activeSlide, prevSlide, activeDot, prevDot) => {
      let stageTo = {};

      const onStartFunct = () => {
        time.value = 0; // Set time to 0
        activeSlide.classList.remove("active"); // remove class from active slide
        if (controls.value === "dots" || controls.value === "all") {
          activeDot.classList.remove("active"); // remove class from active dot - if controls is 'dots' or 'all'
        }
      };
      const onCompleteFunct = () => {
        time.value = 0; // Set time to 0
        prevSlide.classList.add("active"); // add class on active slide
        if (controls.value === "dots" || controls.value === "all") {
          prevDot.classList.add("active"); // add class on active dot - if controls is 'dots' or 'all'
        }
      };

      if (direction.value === "ltr") {
        stageTo = {
          xPercent: "+=100",
          onStart: () => onStartFunct(),
          onComplete: () => onCompleteFunct(),
        };
      }

      if (direction.value === "rtl") {
        stageTo = {
          xPercent: "-=100",
          onStart: () => onStartFunct(),
          onComplete: () => onCompleteFunct(),
        };
      }

      if (direction.value === "ttb") {
        stageTo = {
          yPercent: "-=100",
          onStart: () => onStartFunct(),
          onComplete: () => onCompleteFunct(),
        };
      }

      if (direction.value === "btt") {
        stageTo = {
          yPercent: "+=100",
          onStart: () => onStartFunct(),
          onComplete: () => onCompleteFunct(),
        };
      }

      slideAnim.to(stage, stageTo);
    };

    const slideTransitionRifleResetEnd = (currentSlide, slides, slidesPlusClones) => {
      let slidesPlusClonesSet;

      if (direction.value === "ltr") {
        slidesPlusClonesSet = {
          xPercent: `+=${slides.length}00`, // if is last slide reset to first
        };
      }

      if (direction.value === "rtl") {
        slidesPlusClonesSet = {
          xPercent: `-=${slides.length}00`, // if is last slide reset to first
        };
      }

      if (direction.value === "ttb") {
        slidesPlusClonesSet = {
          yPercent: `-=${slides.length}00`, // if is last slide reset to first
        };
      }

      if (direction.value === "btt") {
        slidesPlusClonesSet = {
          yPercent: `+=${slides.length}00`, // if is last slide reset to first
        };
      }

      if (Number(currentSlide.dataset.slidenr) === slides.length) {
        gsap.set(slidesPlusClones, slidesPlusClonesSet);
      }
    };

    const slideTransitionRifleResetStart = (currentSlide, slides, slidesPlusClones) => {
      let slidesPlusClonesSet;

      if (direction.value === "ltr") {
        slidesPlusClonesSet = {
          xPercent: `-=${slides.length}00`, // if is last slide reset to first
        };
      }

      if (direction.value === "rtl") {
        slidesPlusClonesSet = {
          xPercent: `+=${slides.length}00`, // if is last slide reset to first
        };
      }

      if (direction.value === "ttb") {
        slidesPlusClonesSet = {
          yPercent: `+=${slides.length}00`, // if is last slide reset to first
        };
      }

      if (direction.value === "btt") {
        slidesPlusClonesSet = {
          yPercent: `-=${slides.length}00`, // if is last slide reset to first
        };
      }

      if (Number(currentSlide.dataset.slidenr) === 1) {
        gsap.set(slidesPlusClones, slidesPlusClonesSet);
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
      let slideAnimActiveSlide,
        slideAnimNextSlideFrom,
        slideAnimNextSlideTo,
        slideAnimNextNextSlideFrom,
        slideAnimNextNextSlideTo = {};

      const onStartFunct = () => {
        time.value = 0; // Set time to 0
        activeSlide.classList.remove("active"); // remove class from active slide
        if (controls.value === "dots" || controls.value === "all") {
          activeDot.classList.remove("active"); // remove class from active dot - if controls is 'dots' or 'all'
        }
      };

      const onCompleteFunct = () => {
        time.value = 0; // Set time to 0
        nextSlide.classList.add("active"); // add class on active slide
        if (controls.value === "dots" || controls.value === "all") {
          nextDot.classList.add("active"); // add class on active dot - if controls is 'dots' or 'all'
        }
      };

      if (direction.value === "ltr") {
        slideAnimActiveSlide = { xPercent: -100 };
        slideAnimNextSlideFrom = { xPercent: 100 };
        slideAnimNextSlideTo = { xPercent: 0 };
        slideAnimNextNextSlideFrom = { xPercent: 200 };
        slideAnimNextNextSlideTo = {
          xPercent: 100,
          onStart: () => onStartFunct(),
          onComplete: () => onCompleteFunct(),
        };
      }
      if (direction.value === "rtl") {
        slideAnimActiveSlide = { xPercent: 100 };
        slideAnimNextSlideFrom = { xPercent: -100 };
        slideAnimNextSlideTo = { xPercent: 0 };
        slideAnimNextNextSlideFrom = { xPercent: -200 };
        slideAnimNextNextSlideTo = {
          xPercent: -100,
          onStart: () => onStartFunct(),
          onComplete: () => onCompleteFunct(),
        };
      }
      if (direction.value === "ttb") {
        slideAnimActiveSlide = { yPercent: 100 };
        slideAnimNextSlideFrom = { yPercent: -100, xPercent: 0 };
        slideAnimNextSlideTo = { yPercent: 0 };
        slideAnimNextNextSlideFrom = { yPercent: -200 };
        slideAnimNextNextSlideTo = {
          yPercent: -100,
          onStart: () => onStartFunct(),
          onComplete: () => onCompleteFunct(),
        };
      }
      if (direction.value === "btt") {
        slideAnimActiveSlide = { yPercent: -100 };
        slideAnimNextSlideFrom = { yPercent: 100, xPercent: 0 };
        slideAnimNextSlideTo = { yPercent: 0 };
        slideAnimNextNextSlideFrom = { yPercent: 200 };
        slideAnimNextNextSlideTo = {
          yPercent: 100,
          onStart: () => onStartFunct(),
          onComplete: () => onCompleteFunct(),
        };
      }

      slideAnim
        .to(activeSlide, slideAnimActiveSlide)
        .fromTo(nextSlide, slideAnimNextSlideFrom, slideAnimNextSlideTo, "<")
        .fromTo(nextNextSlide, slideAnimNextNextSlideFrom, slideAnimNextNextSlideTo, "<");
    };

    const slideTransitionJumpPrev = (activeSlide, prevSlide, prevPrevSlide, activeDot, prevDot) => {
      let slideAnimActiveSlide,
        slideAnimPrevSlideFrom,
        slideAnimPrevSlideTo,
        slideAnimPrevPrevSlideFrom,
        slideAnimPrevPrevSlideTo = {};

      const onStartFunct = () => {
        time.value = 0; // Set time to 0
        activeSlide.classList.remove("active"); // remove class from active slide
        if (controls.value === "dots" || controls.value === "all") {
          activeDot.classList.remove("active"); // remove class from active dot - if controls is 'dots' or 'all'
        }
      };

      const onCompleteFunct = () => {
        time.value = 0; // Set time to 0
        prevSlide.classList.add("active"); // add class on active slide
        if (controls.value === "dots" || controls.value === "all") {
          prevDot.classList.add("active"); // add class on active dot - if controls is 'dots' or 'all'
        }
      };

      if (direction.value === "ltr") {
        slideAnimActiveSlide = { xPercent: 100 };
        slideAnimPrevSlideFrom = { xPercent: -100 };
        slideAnimPrevSlideTo = { xPercent: 0 };
        slideAnimPrevPrevSlideFrom = { xPercent: -200 };
        slideAnimPrevPrevSlideTo = {
          xPercent: -100,
          onStart: () => onStartFunct(),
          onComplete: () => onCompleteFunct(),
        };
      }
      if (direction.value === "rtl") {
        slideAnimActiveSlide = { xPercent: -100 };
        slideAnimPrevSlideFrom = { xPercent: 100 };
        slideAnimPrevSlideTo = { xPercent: 0 };
        slideAnimPrevPrevSlideFrom = { xPercent: 200 };
        slideAnimPrevPrevSlideTo = {
          xPercent: 100,
          onStart: () => onStartFunct(),
          onComplete: () => onCompleteFunct(),
        };
      }
      if (direction.value === "ttb") {
        slideAnimActiveSlide = { yPercent: -100 };
        slideAnimPrevSlideFrom = { yPercent: 100, xPercent: 0 };
        slideAnimPrevSlideTo = { yPercent: 0 };
        slideAnimPrevPrevSlideFrom = { yPercent: 200 };
        slideAnimPrevPrevSlideTo = {
          yPercent: 100,
          onStart: () => onStartFunct(),
          onComplete: () => onCompleteFunct(),
        };
      }
      if (direction.value === "btt") {
        slideAnimActiveSlide = { yPercent: 100 };
        slideAnimPrevSlideFrom = { yPercent: -100, xPercent: 0 };
        slideAnimPrevSlideTo = { yPercent: 0 };
        slideAnimPrevPrevSlideFrom = { yPercent: -200 };
        slideAnimPrevPrevSlideTo = {
          yPercent: -100,
          onStart: () => onStartFunct(),
          onComplete: () => onCompleteFunct(),
        };
      }

      slideAnim
        .to(activeSlide, slideAnimActiveSlide)
        .fromTo(prevSlide, slideAnimPrevSlideFrom, slideAnimPrevSlideTo, "<")
        .fromTo(prevPrevSlide, slideAnimPrevPrevSlideFrom, slideAnimPrevPrevSlideTo, "<");
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

      // TODO
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
                if (slide.dataset.slidenr == 1) {
                  firstSlide = slide; // get first slide
                }
              });

              if (reset.value === false && currentSlide.dataset.slidenr == slidesLength) {
                return; // if reset is false and on last slide return
              }

              const nxtSlide =
                currentSlide.dataset.slidenr == slidesLength ? firstSlide : currentSlide.nextElementSibling; // if is last slide get 1st slide else next slide

              const nextNextSlide = nxtSlide.dataset.slidenr == slidesLength ? slides[0] : nxtSlide.nextElementSibling;
              const currentDot = dotsWrapper.querySelector(".active"); // get active dot
              const dtActNr = currentDot.dataset.slidenr; // get active dot data-slidenr
              const nextDot =
                dtActNr == slidesLength
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
            if (slide.dataset.slidenr == 1) {
              firstSlide = slide; // Get first slide
            }
          });

          const nxtSlide = currentSlide.dataset.slidenr == slidesLength ? firstSlide : currentSlide.nextElementSibling; // if is last slide get 1st slide else next slide
          const nextNextSlide = nxtSlide.dataset.slidenr == slidesLength ? slides[0] : nxtSlide.nextElementSibling;
          const currentDot = dotsWrapper.querySelector(".active"); // get active dot
          const dtActNr = currentDot.dataset.slidenr; // get active dot data-slidenr
          const nextDot =
            dtActNr == slidesLength
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
            if (slide.dataset.slidenr == slidesLength) {
              lastSlide = slide; // Get last slide
            }
          });

          const prvSld = currentSlide.dataset.slidenr == 1 ? lastSlide : currentSlide.previousElementSibling; // if is first slide get last slide else prev slide
          const prevPrevSlide = prvSld.dataset.slidenr == 1 ? slides[slidesLength - 1] : prvSld.previousElementSibling;
          const currentDot = dotsWrapper.querySelector(".active"); // get active dot
          const dtActNr = currentDot.dataset.slidenr; // get active dot data-slidenr
          const prevDot =
            dtActNr == 1
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
        for (let i = 0; i < slides.length; i++) {
          if (typeof slides[i].dataset.text != "undefined") {
            dotsArray[i].firstChild.innerHTML = slides[i].dataset.text;
          }
        }

        dotsWrapper.addEventListener("click", (e) => {
          const dotTarget = e.target.closest("button"); // get dot clicked
          const currentDot = dotsWrapper.querySelector(".active"); // get active dot
          const slidesLength = slides.length; // get slides length

          if (slideAnim.isActive() || !dotTarget || currentDot.dataset.slidenr == dotTarget.dataset.slidenr) return; // do nothing if animation is active or dotTarget not exists or if dot active is the same with target dot

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
          const dotsSlide = (amount) => {
            let percentAmount;

            const onStartFunct = () => {
              time.value = 0; // Set time to 0
              currentSlide.classList.remove("active"); // remove active class from current slide
              currentDot.classList.remove("active"); // remove active class from current dot
            };

            const onCompleteFunct = () => {
              time.value = 0; // Set time to 0
              targetSlide.classList.add("active"); // add active class on target slide
              dotTarget.classList.add("active"); // add active class on target dot
            };

            if (direction.value === "ltr") {
              console.log(amount);
              percentAmount = {
                xPercent: amount,
                onStart: () => onStartFunct(),
                onComplete: () => onCompleteFunct(),
              };
            }

            if (direction.value === "rtl") {
              percentAmount = {
                xPercent: amount,
                onStart: () => onStartFunct(),
                onComplete: () => onCompleteFunct(),
              };
            }

            if (direction.value === "ttb") {
              percentAmount = {
                yPercent: amount,
                onStart: () => onStartFunct(),
                onComplete: () => onCompleteFunct(),
              };
            }

            if (direction.value === "btt") {
              percentAmount = {
                yPercent: amount,
                onStart: () => onStartFunct(),
                onComplete: () => onCompleteFunct(),
              };
            }

            slideAnim.to(slidesPlusClones, percentAmount);
          };

          // Prev animation
          if (Number(currentDot.dataset.slidenr) > Number(dotTarget.dataset.slidenr)) {
            if (reset.value === false) {
              disablearrows(previousButton, nextButton, targetSlide, 1);
            }

            console.log(
              `${Number(currentDot.dataset.slidenr)} > ${Number(dotTarget.dataset.slidenr)}`,
              Number(currentDot.dataset.slidenr) > Number(dotTarget.dataset.slidenr),
              "prev"
            );

            // let amount;
            switch (slideTransition.value) {
              case "rifle":
                let amount;
                if (direction.value === "ltr") amount = `+=${cs_nr - ts_nr}00`;
                if (direction.value === "rtl") amount = `-=${cs_nr - ts_nr}00`;
                if (direction.value === "ttb") amount = `-=${cs_nr - ts_nr}00`;
                if (direction.value === "btt") amount = `+=${cs_nr - ts_nr}00`;
                // const amount = direction.value === "rtl" ? `-=${cs_nr - ts_nr}00` : `+=${cs_nr - ts_nr}00`;
                dotsSlide(amount);
                break;
              case "fade":
                prevSlide("", currentSlide, targetSlide, "", currentDot, dotTarget);
                break;
              case "jump":
                const prevPrevSlide =
                  targetSlide.dataset.slidenr == 1 ? slidesPlusClones[0] : targetSlide.previousElementSibling;
                slideTransitionJumpPrev(currentSlide, targetSlide, prevPrevSlide, currentDot, dotTarget);
                break;
              default: // set how much to move
                let dAmount;
                if (direction.value === "ltr") dAmount = `+=${cs_nr - ts_nr}00`;
                if (direction.value === "rtl") dAmount = `-=${cs_nr - ts_nr}00`;
                if (direction.value === "ttb") dAmount = `-=${cs_nr - ts_nr}00`;
                if (direction.value === "btt") dAmount = `+=${cs_nr - ts_nr}00`;
                // const dAmount = direction.value === "rtl" ? `-=${cs_nr - ts_nr}00` : `+=${cs_nr - ts_nr}00`;
                dotsSlide(dAmount);
            }
          }

          // Next animation
          if (Number(currentDot.dataset.slidenr) < Number(dotTarget.dataset.slidenr)) {
            if (reset.value === false) {
              disablearrows(nextButton, previousButton, targetSlide, slidesLength);
            }

            console.log(
              `${Number(currentDot.dataset.slidenr)} < ${Number(dotTarget.dataset.slidenr)}`,
              Number(currentDot.dataset.slidenr) < Number(dotTarget.dataset.slidenr),
              "next"
            );

            // let amount;
            switch (slideTransition.value) {
              case "rifle":
                let amount;
                if (direction.value === "ltr") amount = `-=${cs_nr - ts_nr}00`;
                if (direction.value === "rtl") amount = `+=${cs_nr - ts_nr}00`;
                if (direction.value === "ttb") amount = `+=${cs_nr - ts_nr}00`;
                if (direction.value === "btt") amount = `-=${cs_nr - ts_nr}00`;
                // const amount = direction.value === "rtl" ? `+=${ts_nr - cs_nr}00` : `-=${ts_nr - cs_nr}00`;
                dotsSlide(amount);
                break;
              case "fade":
                nextSlide("", currentSlide, targetSlide, "", currentDot, dotTarget);
                break;
              case "jump":
                const slidesPlusClonesLength = slidesPlusClones.length - 1;
                const nextNextSlide =
                  targetSlide.dataset.slidenr == slidesLength
                    ? slidesPlusClones[slidesPlusClonesLength]
                    : targetSlide.nextElementSibling;
                nextSlide("", currentSlide, targetSlide, nextNextSlide, currentDot, dotTarget);
                break;
              default: // set how much to move
                // const dAmount = direction.value === "rtl" ? `+=${ts_nr - cs_nr}00` : `-=${ts_nr - cs_nr}00`;

                let dAmount;
                if (direction.value === "ltr") dAmount = `-=${cs_nr - ts_nr}00`;
                if (direction.value === "rtl") dAmount = `+=${cs_nr - ts_nr}00`;
                if (direction.value === "ttb") dAmount = `+=${cs_nr - ts_nr}00`;
                if (direction.value === "btt") dAmount = `-=${cs_nr - ts_nr}00`;
                dotsSlide(dAmount);
            }
          }
        });
      }

      // reset
      if (reset.value === false && controls.value != "dots" && controls.value != "none") {
        if (activeSlide.dataset.slidenr == 1) {
          console.log("pore");
          previousButton.disabled = true; // disable prev button if first slide is active
        } else if (activeSlide.dataset.slidenr == slides.length) {
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

        const setSlidesInOrderX = () => {
          for (let i = 0; i < slidesPlusClones.length; i++) {
            gsap.set(slidesPlusClones[i], {
              xPercent: i * 100, // set slides in order
            });
          }
        };
        const setSlidesInOrderY = () => {
          for (let i = 0; i < slidesPlusClones.length; i++) {
            gsap.set(slidesPlusClones[i], {
              yPercent: i * 100, // set slides in order
            });
          }
        };

        if (direction.value === "ltr") {
          setSlidesInOrderX();

          gsap.set(slidesPlusClones, {
            xPercent: `-=${activeSlide.dataset.slidenr * 100}`, // set slides so active is visible
          });
        }

        if (direction.value === "rtl") {
          slidesPlusClones.reverse();

          setSlidesInOrderX();

          gsap.set(slidesPlusClones, {
            xPercent: "-=" + (slidesPlusClones.length - slideTransition.value) * 100, // reset slides position to 0
          });

          gsap.set(slidesPlusClones, {
            xPercent: `+=${activeSlide.dataset.slidenr * 100}`, // set slides so active is visible
          });
        }

        console.log("sdadsa");

        if (direction.value === "ttb") {
          slidesPlusClones.reverse();
          // console.log(slidesPlusClones);
          console.log(isNaN(slideTransition.value));
          // console.log(Number(activeSlide.dataset.slidenr) - slideTransition.value);
          setSlidesInOrderY();

          gsap.set(slidesPlusClones, {
            yPercent: isNaN(slideTransition.value)
              ? `-=${(Number(activeSlide.dataset.slidenr) + 1) * 100}`
              : `-=${(Number(activeSlide.dataset.slidenr) - slideTransition.value) * 100}`, // set slides so active is visible
          });
        }

        if (direction.value === "btt") {
          setSlidesInOrderY();
          gsap.set(slidesPlusClones, {
            yPercent: `-=${activeSlide.dataset.slidenr * 100}`, // set slides so active is visible
          });
        }
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
          if (slide.dataset.slidenr < activeSlide.dataset.slidenr) {
            slidesBefore.push(slide); // add before active slides to array
          }
          if (slide.dataset.slidenr > activeSlide.dataset.slidenr) {
            slidesAfter.push(slide); // add after active slides to array
          }
          if (slide.dataset.slidenr == 1) {
            firstSlide = slide; // add first slide to variable
          }
          if (slide.dataset.slidenr == slidesLength) {
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

        let firstSlideCloneSet,
          lastSlideCloneSet,
          slidesBeforeSet,
          slidesAfterSet = {};

        if (direction.value === "ltr") {
          firstSlideCloneSet = { xPercent: 100 };
          lastSlideCloneSet = { xPercent: -100 };
          slidesBeforeSet = { xPercent: -100 };
          slidesAfterSet = { xPercent: 100 };
        }
        if (direction.value === "rtl") {
          firstSlideCloneSet = { xPercent: -100 };
          lastSlideCloneSet = { xPercent: 100 };
          slidesBeforeSet = { xPercent: 100 };
          slidesAfterSet = { xPercent: -100 };
        }
        if (direction.value === "ttb") {
          firstSlideCloneSet = { yPercent: 100 };
          lastSlideCloneSet = { yPercent: -100 };
          slidesBeforeSet = { yPercent: -100 };
          slidesAfterSet = { yPercent: 100 };
        }
        if (direction.value === "btt") {
          firstSlideCloneSet = { yPercent: -100 };
          lastSlideCloneSet = { yPercent: 100 };
          slidesBeforeSet = { yPercent: 100 };
          slidesAfterSet = { yPercent: -100 };
        }

        gsap.set(firstSlideClone, firstSlideCloneSet);
        gsap.set(lastSlideClone, lastSlideCloneSet);

        if (slidesBefore.length) {
          gsap.set(slidesBefore, slidesBeforeSet);
        }
        if (slidesAfter.length) {
          gsap.set(slidesAfter, slidesAfterSet);
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

      if (!isNaN(slideTransition.value)) {
        if (slides.length <= slideTransition.value) {
          clearInterval(timeInt);

          console.log(
            `${scssecoCarousel.value.id} has less slides than expected: expected ${slideTransition.value + 1} have ${
              slides.length
            }`
          );

          scssecoCarousel.value.innerHTML = `${scssecoCarousel.value.id} has less slides than expected: expected ${
            slideTransition.value + 1
          } have ${slides.length}`;
          return;
        }

        if (responsive.value && (direction.value === "ltr" || direction.value === "rtl")) {
          const gsapmm = gsap.matchMedia();

          const mediaqXS = "(max-width: 575px)";
          const mediaqXSrecommendedSlides = 1;
          const mediaqSM = "(min-width: 576px) and (max-width: 767px)";
          const mediaqSMrecommendedSlides = 2;
          const mediaqMD = "(min-width: 768px) and (max-width: 991px)";
          const mediaqMDrecommendedSlides = 3;
          const mediaqLG = "(min-width: 992px) and (max-width: 1199px)";
          const mediaqLGrecommendedSlides = 5;
          const mediaqXL = "(min-width: 1200px) and (max-width: 1399px)";
          const mediaqXLrecommendedSlides = 7;

          gsapmm.add(mediaqXS, () => {
            slideTransition.value = 1;
          });

          gsapmm.add(mediaqSM, () => {
            if (mediaqSMrecommendedSlides > slideTransition.value) return;
            slideTransition.value = 2;
          });

          gsapmm.add(mediaqMD, () => {
            if (mediaqMDrecommendedSlides > slideTransition.value) return;
            slideTransition.value = 3;
          });

          gsapmm.add(mediaqLG, () => {
            if (mediaqLGrecommendedSlides > slideTransition.value) return;
            slideTransition.value = 5;
          });

          gsapmm.add(mediaqXL, () => {
            if (mediaqXLrecommendedSlides > slideTransition.value) return;
            slideTransition.value = 7;
          });
        }

        // Arange slides
        const middleOfSlide = Math.round(slideTransition.value / 2); // set the middle of the viewport
        const slidesPlusClones = Array.from(scssecoCarousel__stage.value.children); // create array with all slides(incl clones)
        const resetFormula =
          slideTransition.value % 2 === 0
            ? activeSlide.dataset.slidenr * 100 + 50
            : activeSlide.dataset.slidenr * 100 + 100;

        let startClones = [];

        for (let i = 0; i <= middleOfSlide; i++) {
          let slideFS = scssecoCarousel__stage.value.querySelector("div[data-slidenr='" + (i + 1) + "']"); // get slide
          let slideSClone = slideFS.cloneNode(true); // clone slide
          slideSClone.classList.add("clone"); // add class of "clone" to cloned slide
          slideSClone.classList.remove("active"); // remove "active" class if necessary
          slidesPlusClones.push(slideSClone); // add to the end of array
          startClones.push(slideSClone); // add to the end of empty array
          scssecoCarousel__stage.value.appendChild(slideSClone); // add to DOM

          let slideFE = scssecoCarousel__stage.value.querySelector("div[data-slidenr='" + (slides.length - i) + "']"); // get slide
          let slideEClone = slideFE.cloneNode(true); // clone slide
          slideEClone.classList.add("clone"); // add class of "clone" to cloned slide
          slideEClone.classList.remove("active"); // remove "active" class if necessary
          slidesPlusClones.unshift(slideEClone); // add at the beginning array
          scssecoCarousel__stage.value.insertBefore(slideEClone, scssecoCarousel__stage.value.childNodes[0]); // add to DOM
        }

        if (direction.value === "rtl") {
          slidesPlusClones.reverse();
        }

        const setSlides = (widthFormula, resetFormula) => {
          if (direction.value === "ltr" || direction.value === "rtl") {
            for (let i = 0; i < slidesPlusClones.length; i++) {
              gsap.set(slidesPlusClones[i], {
                xPercent: `${i}00`, // set slides in order
                width: widthFormula + "%",
              });
            }

            gsap.set(slidesPlusClones, {
              xPercent: direction.value === "rtl" ? `+=${resetFormula}` : `-=${resetFormula}`, // set slides so active is visible
            });
          }

          if (direction.value === "rtl") {
            gsap.set(slidesPlusClones, {
              xPercent: `-=${(slidesPlusClones.length - slideTransition.value) * 100}`, // set slides so active is visible
            });
          }

          if (direction.value === "btt" || direction.value === "ttb") {
            if (direction.value === "ttb") {
              slidesPlusClones.reverse();
            }
            for (let i = 0; i < slidesPlusClones.length; i++) {
              gsap.set(slidesPlusClones[i], {
                yPercent: `${i}00`, // set slides in order
                height: widthFormula + "%",
              });
            }

            gsap.set(slidesPlusClones, {
              yPercent: `-=${resetFormula}`, // set slides so active is visible
            });
          }

          if (direction.value === "ttb") {
            console.log(resetFormula);
            // console.log(slidesPlusClones.length - slideTransition.value);
            gsap.set(slidesPlusClones, {
              yPercent: `-=${100}`, // set slides so active is visible
            });
          }
        };

        const width = 100 / slideTransition.value;
        setSlides(width, resetFormula);
      }

      // Dev options [data-dev]
      if (dev.value === true) {
        const devWrap = document.createElement("div"); // create dev div wrapper
        devWrap.classList.add("scssecoCarousel__dev"); // add class on dev div of scssecoCarousel__dev
        devWrap.innerHTML = `<table> <thead> <tr> <th colspan="5" style="text-align: center">${scssecoCarousel.value.id}</th> </tr><tr> <th>Setting</th> <th>|</th> <th>Value</th> <th>|</th> <th>Description</th> </tr></thead> <tbody> <tr> <td>time</td><td>|</td><td> <b><span class="dev_time"></span></b> </td><td>|</td><td>time</td></tr><tr> <td>interval</td><td>|</td><td><b>${interval.value}</b></td><td>|</td><td>dur btwn animas(slide)</td></tr><tr> <td>animDuration</td><td>|</td><td><b>${animDuration.value}</b></td><td>|</td><td>anim dur</td></tr><tr></tr><tr> <td>autoplay</td><td>|</td><td><b>${autoplay.value}</b></td><td>|</td><td>auto play slider</td></tr><tr> <td>hoverPause</td><td>|</td><td><b>${hoverPause.value}</b></td><td>|</td><td>pause on hover</td></tr><tr> <td>controls</td><td>|</td><td><b>${controls.value}</b></td><td>|</td><td>add controls</td></tr><tr> <td>arrows</td><td>|</td><td><b>${arrows.value}</b></td><td>|</td><td>button text or chevron</td></tr><tr> <td>reset</td><td>|</td><td><b>${reset.value}</b></td><td>|</td><td>infinite cycle</td></tr><tr> <td>slideTransition</td><td>|</td><td><b>${slideTransition.value}</b></td><td>|</td><td>slide change effect</td></tr><tr> <td>responsive</td><td>|</td><td><b>${responsive.value}</b></td><td>|</td><td>adjust the slide number depending on the viewport</td></tr><tr> <td>direction</td><td>|</td><td><b>${direction.value}</b></td><td>|</td><td>direction of the slide animation</td></tr><tr> <td>css overflow</td><td>|</td><td> <b><input type="checkbox" class="showOverflow"/></b> </td><td>|</td><td>show overflow</td></tr></tbody></table>`; // add this content to devWrap

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
          if (showOverflow.checked === true) {
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
          display: flex;
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
    opacity: 0.7;
    table {
      text-align: left;
    }
  }

  .scssecoCarousel__dev-slide_number {
    align-items: center;
    background-color: honeydew;
    bottom: 20px;
    color: #000;
    display: flex;
    direction: ltr;
    font-size: clamp(16px, 10%, 26px);
    height: 40px;
    justify-content: center;
    position: absolute;
    right: 20px;
    width: clamp(20px, 3em, 45px);
  }
}
</style>
