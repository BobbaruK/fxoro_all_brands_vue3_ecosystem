<script>
import { ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Loader from "../Loader/Loader.vue";

import translationsGlossary from "../../composables/translationsGlossary";

export default {
  name: "Carousel",
  components: { Loader },
  props: {
    lang: String,
    carouselDetails: Object,
  },
  setup(props) {
    /**
     * TODO
     *
     */

    const loading = ref(true);

    // The amount of time between the end of the animation and the start of the next animation
    const carouselInterval = ref(
      Number.isInteger(Number(props.carouselDetails.carouselInterval))
        ? Number(props.carouselDetails.carouselInterval) < 0
          ? 0
          : Number(props.carouselDetails.carouselInterval)
        : 5000
    );

    // The duration of the animation
    const carouselAnimDuration = ref(
      Number.isInteger(Number(props.carouselDetails.carouselAnimDuration))
        ? Number(props.carouselDetails.carouselAnimDuration) < 100
          ? 100
          : Number(props.carouselDetails.carouselAnimDuration)
        : 320
    );

    // true: autoplay slides; false: will not autoplay
    const carouselAutoplay = ref(
      props.carouselDetails.carouselAutoplay != undefined
        ? props.carouselDetails.carouselAutoplay === "false"
          ? false
          : !!props.carouselDetails.carouselAutoplay
        : true
    );

    // true: will allow the carousel to pause when hover and resumes on mouseleave; false: will not pause the carousel on hover
    const carouselHoverPause = ref(
      props.carouselDetails.carouselHoverPause != undefined
        ? props.carouselDetails.carouselHoverPause === "false"
          ? false
          : !!props.carouselDetails.carouselHoverPause
        : true
    );

    // "all": will show previous indicator, next indicator and the dot buttons; "dots": will show only the dot buttons; "arrows": will show only the indicators; "none": will not show any controls
    const allowedControls = ["all", "dots", "arrows", "none"];
    const defaultControl = "all";
    const carouselControls = ref(
      props.carouselDetails.carouselControls
        ? allowedControls.indexOf(props.carouselDetails.carouselControls) == -1
          ? defaultControl
          : props.carouselDetails.carouselControls
        : defaultControl
    );

    // "arrows": show arrow indicators; "text": show next and prev indicators
    const allowedArrows = ["arrows", "text"];
    const defaultArrow = "arrows";
    const carouselArrows = ref(
      props.carouselDetails.carouselArrows
        ? allowedArrows.indexOf(props.carouselDetails.carouselArrows) == -1
          ? defaultArrow
          : props.carouselDetails.carouselArrows
        : defaultArrow
    );

    // true: will cycle infinitely; false will stop at the last slide
    const carouselReset = ref(
      props.carouselDetails.carouselReset != undefined
        ? props.carouselDetails.carouselReset === "false"
          ? false
          : !!props.carouselDetails.carouselReset
        : true
    );

    // "rifle": if you are on slide 1 and click on the dot for slide 4 will cycle trough all the slides in between; "jump": will jump directly to target slide; "fade": same as jump but with fade; "number": how many slides in viewport
    const allowedSlideTranitions = ["rifle", "jump", "fade"];
    const defaultSlideTranition = "rifle";
    const carouselTransition = ref(
      !isNaN(props.carouselDetails.carouselTransition)
        ? Number(props.carouselDetails.carouselTransition)
        : props.carouselDetails.carouselTransition
        ? allowedSlideTranitions.indexOf(props.carouselDetails.carouselTransition) == -1
          ? !isNaN(props.carouselDetails.carouselTransition)
            ? Number(props.carouselDetails.carouselTransition)
            : defaultSlideTranition
          : props.carouselDetails.carouselTransition
        : defaultSlideTranition
    );

    // true: will adjust the slide number depending on the viewport
    const carouselResponsive = ref(
      props.carouselDetails.carouselResponsive != undefined
        ? props.carouselDetails.carouselResponsive === "false"
          ? false
          : !!props.carouselDetails.carouselResponsive
        : false
    );

    // direction of the slide animation
    const allowedDirectionTranitions = ["ltr", "rtl", "ttb", "btt"];
    const defaultDirectionTranition = "ltr";
    const carouselDirection = ref(
      props.carouselDetails.carouselDirection
        ? allowedDirectionTranitions.indexOf(props.carouselDetails.carouselDirection) == -1
          ? defaultDirectionTranition
          : props.carouselDetails.carouselDirection
        : defaultDirectionTranition
    );

    // "true": Show information(maybe usefull)
    const carouselDev = ref(
      props.carouselDetails.carouselDev != undefined
        ? props.carouselDetails.carouselDev === "false"
          ? false
          : !!props.carouselDetails.carouselDev
        : false
    );

    const scssecoCarousel = ref(null);
    const scssecoCarousel__stage = ref(null);
    const scssecoCarousel__slides = ref(null);
    const scssecoCarousel__activeSlide = ref(null);
    const scssecoCarousel__controls = ref(null);
    const scssecoCarousel__controls_prevBtn = ref(null);
    const scssecoCarousel__controls_nextBtn = ref(null);

    const time = ref(0);
    const isPaused = ref(true);
    let timeInt;

    const dataSlide = (number) => `[data-slide='${number}']:not(.clone)`;

    const slideAnim = gsap.timeline({
      defaults: {
        duration: carouselAnimDuration.value / 1000,
        // ease: "back",
        ease: "power4.out",
        // ease: "linear",
        // ease: "elastic",
      },
      // paused: true,
    });

    const slideAnimOnStartFunct = (htmlActiveSlide, htmlActiveDot) => {
      time.value = 0; // Set time to 0
      htmlActiveSlide.classList.remove("active"); // remove class from active slide

      if (carouselControls.value === "dots" || carouselControls.value === "all") {
        htmlActiveDot.classList.remove("active"); // remove class from active dot - if controls is 'dots' or 'all'
      }
    };

    const slideAnimOnCompleteFunct = (htmlNextSlide, htmlNextDot) => {
      time.value = 0; // Set time to 0
      scssecoCarousel__activeSlide.value = htmlNextSlide;
      htmlNextSlide.classList.add("active"); // add class on active slide

      if (carouselControls.value === "dots" || carouselControls.value === "all") {
        htmlNextDot.classList.add("active"); // add class on active dot - if controls is 'dots' or 'all'
      }
    };

    const slidesArrangeFade = () => {
      if (carouselTransition.value != "fade") return;
      // Arange slides
      gsap.set(scssecoCarousel__slides.value, {
        autoAlpha: 0,
        xPercent: 0,
        yPercent: 0,
      });
      gsap.set(scssecoCarousel__activeSlide.value, {
        autoAlpha: 1,
        xPercent: 0,
        yPercent: 0,
      });
    };

    const slideAnimFade = (htmlActiveSlide, htmlActiveDot, htmlNextSlide, htmlNextDot) => {
      let htmlActiveSlideAnim, htmlNextSlideAnim;
      htmlActiveSlideAnim = {
        xPercent: 0,
        autoAlpha: 0,
        ease: "linear", // force linear
      };
      htmlNextSlideAnim = {
        xPercent: 0,
        autoAlpha: 1,
        ease: "linear",
        onStart: () => slideAnimOnStartFunct(htmlActiveSlide, htmlActiveDot),
        onComplete: () => slideAnimOnCompleteFunct(htmlNextSlide, htmlNextDot),
      };

      slideAnim.to(htmlActiveSlide, htmlActiveSlideAnim).to(htmlNextSlide, htmlNextSlideAnim, "<");
    };

    const slidesArrangeJump = (slides) => {
      if (carouselTransition.value != "jump") return;

      const firstSlidePos = {
        ltr: { xPercent: -100 },
        rtl: { xPercent: 100 },
        btt: { yPercent: -100 },
        ttb: { yPercent: 100 },
      };
      const lastSlidePos = {
        ltr: { xPercent: 100 },
        rtl: { xPercent: -100 },
        btt: { yPercent: 100 },
        ttb: { yPercent: -100 },
      };
      const slidesBeforePos = {
        ltr: { xPercent: -100 },
        rtl: { xPercent: 100 },
        btt: { yPercent: -100 },
        ttb: { yPercent: 100 },
      };
      const slidesAfterPos = {
        ltr: { xPercent: 100 },
        rtl: { xPercent: -100 },
        btt: { yPercent: 100 },
        ttb: { yPercent: -100 },
      };

      let slidesBefore = []; // create empty array for slides before the active slide
      let slidesAfter = []; // create empty array for slides after the active slide

      const cloneSlide = (slide, slidePos) => {
        const clone = slide.cloneNode(true);
        clone.classList.add("clone");
        clone.classList.remove("active");

        if (slidePos === "first") {
          scssecoCarousel__stage.value.appendChild(clone);
          gsap.set(clone, firstSlidePos[carouselDirection.value]);
        }
        if (slidePos === "last") {
          scssecoCarousel__stage.value.insertBefore(clone, scssecoCarousel__stage.value.childNodes[0]);
          gsap.set(clone, lastSlidePos[carouselDirection.value]);
        }
      };

      slides.forEach((slide, index) => {
        const datasetSlide = Number(slide.dataset.slide);
        const datasetActiveSlide = Number(scssecoCarousel__activeSlide.value.dataset.slide);

        if (datasetSlide < datasetActiveSlide) {
          slidesBefore.push(slide); // add before active slides to array
        }

        if (datasetSlide > datasetActiveSlide) {
          slidesAfter.push(slide); // add after active slides to array
        }

        if (datasetSlide === 1) {
          cloneSlide(slide, "first");
        }

        if (datasetSlide === slides.length) {
          cloneSlide(slide, "last");
        }
      });

      if (slidesBefore.length) {
        gsap.set(slidesBefore, slidesBeforePos[carouselDirection.value]);
      }
      if (slidesAfter.length) {
        gsap.set(slidesAfter, slidesAfterPos[carouselDirection.value]);
      }
    };

    const slidesAnimJump = (htmlActiveSlide, htmlActiveDot, htmlNextSlide, htmlNextDot, anim = "next") => {
      // TODO de facut clona la primu si ultimu slide
      const htmlNextSlideNumber = Number(htmlNextSlide.dataset.slide);
      // const htmlActiveSlideNumber = Number(htmlActiveSlide.dataset.slide);

      // let nextSlide;

      const nextNextSlideNumber =
        anim === "next"
          ? htmlNextSlideNumber + 1 > scssecoCarousel__slides.value.length
            ? 1
            : htmlNextSlideNumber + 1
          : htmlNextSlideNumber;

      const prevPrevSlideNumber =
        anim === "prev"
          ? htmlNextSlideNumber - 1 < 1
            ? scssecoCarousel__slides.value.length
            : htmlNextSlideNumber - 1
          : htmlNextSlideNumber;

      const htmlNextNextSlide =
        anim === "next"
          ? htmlNextSlideNumber === scssecoCarousel__slides.value.length
            ? htmlNextSlide.nextElementSibling
            : scssecoCarousel__stage.value.querySelector(dataSlide(nextNextSlideNumber))
          : htmlNextSlideNumber === 1
          ? htmlNextSlide.previousElementSibling
          : scssecoCarousel__stage.value.querySelector(dataSlide(prevPrevSlideNumber));

      let slideAnimHtmlActiveSlideFrom,
        slideAnimHtmlActiveSlideTo,
        slideAnimHtmlNextSlideFrom,
        slideAnimHtmlNextSlideTo,
        slideAnimHtmlNextNextSlideFrom,
        slideAnimHtmlNextNextSlideTo = {};

      if (anim === "prev") {
        const slideAnimHtmlActiveSlideFromPos = {
          ltr: { xPercent: 0 },
          rtl: { xPercent: 0 },
          btt: { yPercent: 0 },
          ttb: { yPercent: 0 },
        };
        const slideAnimHtmlActiveSlideToPos = {
          ltr: { xPercent: 100 },
          rtl: { xPercent: -100 },
          btt: { yPercent: 100 },
          ttb: { yPercent: -100 },
        };
        const slideAnimHtmlNextSlideFromPos = {
          ltr: { xPercent: -100 },
          rtl: { xPercent: 100 },
          btt: { yPercent: -100 },
          ttb: { yPercent: 100 },
        };
        const slideAnimHtmlNextSlideToPos = {
          ltr: { xPercent: 0 },
          rtl: { xPercent: 0 },
          btt: { yPercent: 0 },
          ttb: { yPercent: 0 },
        };
        const slideAnimHtmlNextNextSlideFromPos = {
          ltr: { xPercent: -200 },
          rtl: { xPercent: 200 },
          btt: { yPercent: -200 },
          ttb: { yPercent: 200 },
        };
        const slideAnimHtmlNextNextSlideToPos = {
          ltr: {
            xPercent: -100,
            onStart: () => slideAnimOnStartFunct(htmlActiveSlide, htmlActiveDot),
            onComplete: () => slideAnimOnCompleteFunct(htmlNextSlide, htmlNextDot),
          },
          rtl: {
            xPercent: 100,
            onStart: () => slideAnimOnStartFunct(htmlActiveSlide, htmlActiveDot),
            onComplete: () => slideAnimOnCompleteFunct(htmlNextSlide, htmlNextDot),
          },
          btt: {
            yPercent: -100,
            onStart: () => slideAnimOnStartFunct(htmlActiveSlide, htmlActiveDot),
            onComplete: () => slideAnimOnCompleteFunct(htmlNextSlide, htmlNextDot),
          },
          ttb: {
            yPercent: 100,
            onStart: () => slideAnimOnStartFunct(htmlActiveSlide, htmlActiveDot),
            onComplete: () => slideAnimOnCompleteFunct(htmlNextSlide, htmlNextDot),
          },
        };

        slideAnimHtmlActiveSlideFrom = slideAnimHtmlActiveSlideFromPos[carouselDirection.value];
        slideAnimHtmlActiveSlideTo = slideAnimHtmlActiveSlideToPos[carouselDirection.value];
        slideAnimHtmlNextSlideFrom = slideAnimHtmlNextSlideFromPos[carouselDirection.value];
        slideAnimHtmlNextSlideTo = slideAnimHtmlNextSlideToPos[carouselDirection.value];
        slideAnimHtmlNextNextSlideFrom = slideAnimHtmlNextNextSlideFromPos[carouselDirection.value];
        slideAnimHtmlNextNextSlideTo = slideAnimHtmlNextNextSlideToPos[carouselDirection.value];
      }

      if (anim === "next") {
        const slideAnimHtmlActiveSlideFromPos = {
          ltr: { xPercent: 0 },
          rtl: { xPercent: 0 },
          btt: { yPercent: 0 },
          ttb: { yPercent: 0 },
        };
        const slideAnimHtmlActiveSlideToPos = {
          ltr: { xPercent: -100 },
          rtl: { xPercent: 100 },
          btt: { yPercent: -100 },
          ttb: { yPercent: 100 },
        };
        const slideAnimHtmlNextSlideFromPos = {
          ltr: { xPercent: 100 },
          rtl: { xPercent: -100 },
          btt: { yPercent: 100 },
          ttb: { yPercent: -100 },
        };
        const slideAnimHtmlNextSlideToPos = {
          ltr: { xPercent: 0 },
          rtl: { xPercent: 0 },
          btt: { yPercent: 0 },
          ttb: { yPercent: 0 },
        };
        const slideAnimHtmlNextNextSlideFromPos = {
          ltr: { xPercent: 200 },
          rtl: { xPercent: -200 },
          btt: { yPercent: 200 },
          ttb: { yPercent: -200 },
        };
        const slideAnimHtmlNextNextSlideToPos = {
          ltr: {
            xPercent: 100,
            onStart: () => slideAnimOnStartFunct(htmlActiveSlide, htmlActiveDot),
            onComplete: () => slideAnimOnCompleteFunct(htmlNextSlide, htmlNextDot),
          },
          rtl: {
            xPercent: -100,
            onStart: () => slideAnimOnStartFunct(htmlActiveSlide, htmlActiveDot),
            onComplete: () => slideAnimOnCompleteFunct(htmlNextSlide, htmlNextDot),
          },
          btt: {
            yPercent: 100,
            onStart: () => slideAnimOnStartFunct(htmlActiveSlide, htmlActiveDot),
            onComplete: () => slideAnimOnCompleteFunct(htmlNextSlide, htmlNextDot),
          },
          ttb: {
            yPercent: -100,
            onStart: () => slideAnimOnStartFunct(htmlActiveSlide, htmlActiveDot),
            onComplete: () => slideAnimOnCompleteFunct(htmlNextSlide, htmlNextDot),
          },
        };

        slideAnimHtmlActiveSlideFrom = slideAnimHtmlActiveSlideFromPos[carouselDirection.value];
        slideAnimHtmlActiveSlideTo = slideAnimHtmlActiveSlideToPos[carouselDirection.value];
        slideAnimHtmlNextSlideFrom = slideAnimHtmlNextSlideFromPos[carouselDirection.value];
        slideAnimHtmlNextSlideTo = slideAnimHtmlNextSlideToPos[carouselDirection.value];
        slideAnimHtmlNextNextSlideFrom = slideAnimHtmlNextNextSlideFromPos[carouselDirection.value];
        slideAnimHtmlNextNextSlideTo = slideAnimHtmlNextNextSlideToPos[carouselDirection.value];
      }

      slideAnim
        .fromTo(htmlActiveSlide, slideAnimHtmlActiveSlideFrom, slideAnimHtmlActiveSlideTo)
        .fromTo(htmlNextSlide, slideAnimHtmlNextSlideFrom, slideAnimHtmlNextSlideTo, "<")
        .fromTo(htmlNextNextSlide, slideAnimHtmlNextNextSlideFrom, slideAnimHtmlNextNextSlideTo, "<");
    };

    const slidesArrangeRifle = (slides) => {
      if (carouselTransition.value != "rifle") return;

      let slideActive;

      const cloneSlide = (slide, slidePos) => {
        const clone = slide.cloneNode(true);
        clone.classList.add("clone");
        clone.classList.remove("active");
        // console.log(clone);
        if (slidePos === "first") {
          scssecoCarousel__stage.value.appendChild(clone);
          // gsap.set(clone, firstSlidePos[carouselDirection.value]);
        }
        if (slidePos === "last") {
          scssecoCarousel__stage.value.insertBefore(clone, scssecoCarousel__stage.value.childNodes[0]);
          // gsap.set(clone, lastSlidePos[carouselDirection.value]);
        }
      };

      slides.forEach((slide, index) => {
        const datasetSlide = Number(slide.dataset.slide);
        const datasetActiveSlide = Number(scssecoCarousel__activeSlide.value.dataset.slide);

        if (slide.classList.contains("active")) {
          slideActive = slide;
        }

        if (datasetSlide === 1) {
          cloneSlide(slide, "first");
        }

        if (datasetSlide === slides.length) {
          cloneSlide(slide, "last");
        }
      });

      let slidesAndClones = Array.from(scssecoCarousel__stage.value.children);
      const activeSlideNumber = Number(slideActive.dataset.slide);

      const slidesAndClonesArrange = (index, direction) => {
        if (direction === "ltr") return { xPercent: index * 100 };
        if (direction === "rtl") return { xPercent: index * 100 * -1 };
        if (direction === "btt") return { yPercent: index * 100 };
        if (direction === "ttb") return { yPercent: index * 100 * -1 };
      };

      const slidesAndClonesActivePos = {
        ltr: { xPercent: `-=${activeSlideNumber * 100}` },
        rtl: { xPercent: `+=${activeSlideNumber * 100}` },
        btt: { yPercent: `-=${activeSlideNumber * 100}` },
        ttb: { yPercent: `+=${activeSlideNumber * 100}` },
      };

      slidesAndClones.forEach((slide, index) => {
        gsap.set(slide, slidesAndClonesArrange(index, carouselDirection.value));
      });

      gsap.set(slidesAndClones, slidesAndClonesActivePos[carouselDirection.value]);
    };

    const slidesAnimRifle = (htmlActiveSlide, htmlActiveDot, htmlNextSlide, htmlNextDot, anim = "next") => {
      const slidesAndClones = Array.from(scssecoCarousel__stage.value.children);
      const htmlActiveSlideNumber = Number(htmlActiveSlide.dataset.slide);
      const htmlNextSlideNumber = Number(htmlNextSlide.dataset.slide);

      let slidesAndClonesPos, nextSlidePos;

      if (anim === "next") {
        if (htmlNextSlideNumber > htmlActiveSlideNumber) {
          nextSlidePos = htmlNextSlideNumber - htmlActiveSlideNumber;
        }
        if (htmlNextSlideNumber === 1) {
          nextSlidePos = 1;
          slidesAndClones.forEach((slide, index) => {
            if (carouselDirection.value === "ltr") {
              gsap.set(slide, {
                xPercent: `+=${scssecoCarousel__slides.value.length}00`,
              });
            }
            if (carouselDirection.value === "rtl") {
              gsap.set(slide, {
                xPercent: `-=${scssecoCarousel__slides.value.length}00`,
              });
            }
            if (carouselDirection.value === "btt") {
              gsap.set(slide, {
                yPercent: `+=${scssecoCarousel__slides.value.length}00`,
              });
            }
            if (carouselDirection.value === "ttb") {
              gsap.set(slide, {
                yPercent: `-=${scssecoCarousel__slides.value.length}00`,
              });
            }
          });
        }

        slidesAndClonesPos = {
          ltr: {
            xPercent: `-=${nextSlidePos}00`,
            onStart: () => slideAnimOnStartFunct(htmlActiveSlide, htmlActiveDot),
            onComplete: () => slideAnimOnCompleteFunct(htmlNextSlide, htmlNextDot),
          },
          rtl: {
            xPercent: `+=${nextSlidePos}00`,
            onStart: () => slideAnimOnStartFunct(htmlActiveSlide, htmlActiveDot),
            onComplete: () => slideAnimOnCompleteFunct(htmlNextSlide, htmlNextDot),
          },
          btt: {
            yPercent: `-=${nextSlidePos}00`,
            onStart: () => slideAnimOnStartFunct(htmlActiveSlide, htmlActiveDot),
            onComplete: () => slideAnimOnCompleteFunct(htmlNextSlide, htmlNextDot),
          },
          ttb: {
            yPercent: `+=${nextSlidePos}00`,
            onStart: () => slideAnimOnStartFunct(htmlActiveSlide, htmlActiveDot),
            onComplete: () => slideAnimOnCompleteFunct(htmlNextSlide, htmlNextDot),
          },
        };
      }

      if (anim === "prev") {
        if (htmlNextSlideNumber < htmlActiveSlideNumber) {
          nextSlidePos = htmlActiveSlideNumber - htmlNextSlideNumber;
        }
        if (htmlNextSlideNumber === scssecoCarousel__slides.value.length) {
          nextSlidePos = 1;
          slidesAndClones.forEach((slide, index) => {
            if (carouselDirection.value === "ltr") {
              gsap.set(slide, {
                xPercent: `-=${scssecoCarousel__slides.value.length}00`,
              });
            }
            if (carouselDirection.value === "rtl") {
              gsap.set(slide, {
                xPercent: `+=${scssecoCarousel__slides.value.length}00`,
              });
            }
            if (carouselDirection.value === "btt") {
              gsap.set(slide, {
                yPercent: `-=${scssecoCarousel__slides.value.length}00`,
              });
            }
            if (carouselDirection.value === "ttb") {
              gsap.set(slide, {
                yPercent: `+=${scssecoCarousel__slides.value.length}00`,
              });
            }
          });
        }

        slidesAndClonesPos = {
          ltr: {
            xPercent: `+=${nextSlidePos}00`,
            onStart: () => slideAnimOnStartFunct(htmlActiveSlide, htmlActiveDot),
            onComplete: () => slideAnimOnCompleteFunct(htmlNextSlide, htmlNextDot),
          },
          rtl: {
            xPercent: `-=${nextSlidePos}00`,
            onStart: () => slideAnimOnStartFunct(htmlActiveSlide, htmlActiveDot),
            onComplete: () => slideAnimOnCompleteFunct(htmlNextSlide, htmlNextDot),
          },
          btt: {
            yPercent: `+=${nextSlidePos}00`,
            onStart: () => slideAnimOnStartFunct(htmlActiveSlide, htmlActiveDot),
            onComplete: () => slideAnimOnCompleteFunct(htmlNextSlide, htmlNextDot),
          },
          ttb: {
            yPercent: `-=${nextSlidePos}00`,
            onStart: () => slideAnimOnStartFunct(htmlActiveSlide, htmlActiveDot),
            onComplete: () => slideAnimOnCompleteFunct(htmlNextSlide, htmlNextDot),
          },
        };
      }

      slideAnim.to(slidesAndClones, slidesAndClonesPos[carouselDirection.value]);
    };

    const slidesArrangeNumber = (slides) => {
      if (isNaN(carouselTransition.value)) return;

      if (slides.length <= carouselTransition.value) {
        console.log(
          `${scssecoCarousel.value.id} has less slides than expected: expected ${carouselTransition.value + 1} have ${
            slides.length
          }`
        );
        scssecoCarousel.value.innerHTML = `<div><strong>${
          scssecoCarousel.value.id
        }</strong> has less slides than expected: expected <strong>${
          carouselTransition.value + 1
        }</strong> have <strong>${slides.length}</strong></div>`;
      }

      const activeSlideNumber = Number(scssecoCarousel__activeSlide.value.dataset.slide);
      const cloneOffset = Math.round(scssecoCarousel__slides.value.length / 2); // set the middle of the viewport
      const halfOfSlidesInViewPort = Math.round(carouselTransition.value / 2);
      const offsetNumber =
        scssecoCarousel__slides.value.length % 2 === 0
          ? Number((cloneOffset + (activeSlideNumber - halfOfSlidesInViewPort)) * 100)
          : Number((cloneOffset + (activeSlideNumber - halfOfSlidesInViewPort) - 1) * 100);
      const resetFormula =
        carouselTransition.value % 2 === 0
          ? carouselDirection.value === "rtl" || carouselDirection.value === "ttb"
            ? offsetNumber - 150
            : offsetNumber - 50
          : carouselDirection.value === "rtl" || carouselDirection.value === "ttb"
          ? offsetNumber - 100
          : offsetNumber;

      let beforeSlidesClones = [];
      slides.forEach((slide, index) => {
        const slideNumber = Number(slide.dataset.slide);

        if (slideNumber <= Math.round(slides.length / 2)) {
          const slideClone = slide.cloneNode(true);
          slideClone.classList.add("clone");
          slideClone.classList.remove("active");
          slideClone.removeAttribute("data-text");
          scssecoCarousel__stage.value.appendChild(slideClone);
        }

        if (slideNumber > Math.round(slides.length / 2)) {
          const slideClone = slide.cloneNode(true);
          slideClone.classList.add("clone");
          slideClone.classList.remove("active");
          slideClone.removeAttribute("data-text");
          beforeSlidesClones.push(slideClone);
        }
      });
      beforeSlidesClones.reverse();
      beforeSlidesClones.forEach((slide) => {
        scssecoCarousel__stage.value.insertBefore(slide, scssecoCarousel__stage.value.childNodes[0]);
      });

      const slidesAndClones = Array.from(scssecoCarousel__stage.value.children);

      if (carouselDirection.value === "rtl" || carouselDirection.value === "ttb") {
        slidesAndClones.reverse();
      }

      const slideClonePos = (index) => {
        if (carouselDirection.value === "ltr" || carouselDirection.value === "rtl")
          return { xPercent: index * 100, width: `${100 / carouselTransition.value}%` };

        if (carouselDirection.value === "ttb")
          return { yPercent: index * 100, height: `${100 / carouselTransition.value}%` };

        if (carouselDirection.value === "btt")
          return { yPercent: index * 100, height: `${100 / carouselTransition.value}%` };
      };

      slidesAndClones.forEach((slide, index) => {
        gsap.set(slide, slideClonePos(index));
      });

      const slidesAndClonesShowActive = {
        ltr: { xPercent: "-=" + resetFormula },
        rtl: { xPercent: "-=" + resetFormula },
        btt: { yPercent: "-=" + resetFormula },
        ttb: { yPercent: "-=" + resetFormula },
      };

      gsap.set(slidesAndClones, slidesAndClonesShowActive[carouselDirection.value]);
    };

    const carouselResponsiveMatchMedia = () => {
      if (carouselResponsive.value !== true && !isNaN(carouselTransition.value)) return;

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
        carouselTransition.value = 1;
      });

      gsapmm.add(mediaqSM, () => {
        if (mediaqSMrecommendedSlides > carouselTransition.value) return;
        carouselTransition.value = 2;
      });

      gsapmm.add(mediaqMD, () => {
        if (mediaqMDrecommendedSlides > carouselTransition.value) return;
        carouselTransition.value = 3;
      });

      gsapmm.add(mediaqLG, () => {
        if (mediaqLGrecommendedSlides > carouselTransition.value) return;
        carouselTransition.value = 5;
      });

      gsapmm.add(mediaqXL, () => {
        if (mediaqXLrecommendedSlides > carouselTransition.value) return;
        carouselTransition.value = 7;
      });
    };

    const initVarsSlidesAnim = (anim = "next", targetDot = Number()) => {
      const slidesLength = scssecoCarousel__slides.value.length;
      // active slide and dot
      const activeSlideNumber = Number(scssecoCarousel__activeSlide.value.dataset.slide);
      const htmlActiveSlide = scssecoCarousel__stage.value.querySelector(dataSlide(activeSlideNumber));
      const htmlActiveDot =
        carouselControls.value === "dots" || carouselControls.value === "all"
          ? scssecoCarousel__controls.value.querySelector(dataSlide(activeSlideNumber))
          : null;

      // next slide numbers
      let nextSlideNumber;
      if (anim === "next") {
        nextSlideNumber = slidesLength < activeSlideNumber + 1 ? 1 : activeSlideNumber + 1;
      }
      if (anim === "prev") {
        nextSlideNumber = activeSlideNumber === 1 ? slidesLength : activeSlideNumber - 1;
      }
      if (anim === "dots") {
        nextSlideNumber = targetDot;
      }

      // next  slide and dot
      const htmlNextSlide = scssecoCarousel__stage.value.querySelector(dataSlide(nextSlideNumber));
      const htmlNextDot =
        carouselControls.value === "dots" || carouselControls.value === "all"
          ? scssecoCarousel__controls.value.querySelector(dataSlide(nextSlideNumber))
          : null;

      // console.log("slidesLength", slidesLength);
      // console.log("activeSlideNumber", activeSlideNumber);
      // console.log("htmlActiveSlide", htmlActiveSlide);
      // console.log("htmlActiveDot", htmlActiveDot);
      // console.log("prevSlideNumber", prevSlideNumber);
      // console.log("nextSlideNumber", nextSlideNumber);
      // console.log("htmlPrevSlide", htmlPrevSlide);
      // console.log("htmlPrevDot", htmlPrevDot);
      // console.log("htmlNextSlide", htmlNextSlide);
      // console.log("htmlNextDot", htmlNextDot);

      return {
        htmlActiveSlide,
        htmlActiveDot,
        htmlNextSlide,
        htmlNextDot,
      };
    };

    const prevSlide = () => {
      const activeSlide = Number(scssecoCarousel__activeSlide.value.dataset.slide);
      if (slideAnim.isActive() || (carouselReset.value === false && activeSlide === 1)) return;

      const { htmlActiveSlide, htmlActiveDot, htmlNextSlide, htmlNextDot } = initVarsSlidesAnim("prev");
      if (carouselTransition.value === "fade") {
        slideAnimFade(htmlActiveSlide, htmlActiveDot, htmlNextSlide, htmlNextDot);
      }
      if (carouselTransition.value === "jump") {
        slidesAnimJump(htmlActiveSlide, htmlActiveDot, htmlNextSlide, htmlNextDot, "prev");
      }
      if (carouselTransition.value === "rifle" || !isNaN(carouselTransition.value)) {
        slidesAnimRifle(htmlActiveSlide, htmlActiveDot, htmlNextSlide, htmlNextDot, "prev");
      }

      disableArrows(htmlNextSlide, "prev");
    };

    const nextSlide = () => {
      const activeSlideNumber = Number(scssecoCarousel__activeSlide.value.dataset.slide);
      if (
        slideAnim.isActive() ||
        (carouselReset.value === false && activeSlideNumber === scssecoCarousel__slides.value.length)
      )
        return;

      const { htmlActiveSlide, htmlActiveDot, htmlNextSlide, htmlNextDot } = initVarsSlidesAnim("next");
      if (carouselTransition.value === "fade") {
        slideAnimFade(htmlActiveSlide, htmlActiveDot, htmlNextSlide, htmlNextDot);
      }
      if (carouselTransition.value === "jump") {
        slidesAnimJump(htmlActiveSlide, htmlActiveDot, htmlNextSlide, htmlNextDot, "next");
      }
      if (carouselTransition.value === "rifle" || !isNaN(carouselTransition.value)) {
        slidesAnimRifle(htmlActiveSlide, htmlActiveDot, htmlNextSlide, htmlNextDot, "next");
      }

      disableArrows(htmlNextSlide, "next");
    };

    const dotSlide = (e) => {
      const targetDot = Number(e.target.dataset.slide);
      const { htmlActiveSlide, htmlActiveDot, htmlNextSlide, htmlNextDot } = initVarsSlidesAnim("dots", targetDot);

      if (slideAnim.isActive() || htmlActiveDot.dataset.slide == htmlNextDot.dataset.slide) return; // do nothing if animation is active or if dot active is the same with target dot

      if (carouselTransition.value === "fade") {
        slideAnimFade(htmlActiveSlide, htmlActiveDot, htmlNextSlide, htmlNextDot);
      }

      if (carouselTransition.value === "jump") {
        const activeDataSlide = Number(htmlActiveSlide.dataset.slide);
        const nextDot = Number(htmlNextDot.dataset.slide);

        // prev
        if (activeDataSlide > nextDot) {
          slidesAnimJump(htmlActiveSlide, htmlActiveDot, htmlNextSlide, htmlNextDot, "prev");
        }

        //next
        if (activeDataSlide < nextDot) {
          slidesAnimJump(htmlActiveSlide, htmlActiveDot, htmlNextSlide, htmlNextDot, "next");
        }
      }

      if (carouselTransition.value === "rifle" || !isNaN(carouselTransition.value)) {
        const activeDataSlide = Number(htmlActiveSlide.dataset.slide);
        const nextDot = Number(htmlNextDot.dataset.slide);

        // prev
        if (activeDataSlide > nextDot) {
          slidesAnimRifle(htmlActiveSlide, htmlActiveDot, htmlNextSlide, htmlNextDot, "prev");
        }

        //next
        if (activeDataSlide < nextDot) {
          slidesAnimRifle(htmlActiveSlide, htmlActiveDot, htmlNextSlide, htmlNextDot, "next");
        }
      }

      // const datasetSlide = Number(slide.dataset.slide);
      const datasetActiveSlide = Number(scssecoCarousel__activeSlide.value.dataset.slide);
      let anim;

      if (targetDot < datasetActiveSlide) anim = "prev";

      if (targetDot > datasetActiveSlide) anim = "next";

      disableArrows(htmlNextSlide, anim);
    };

    const autoPlay = () => {
      if (carouselAutoplay.value) {
        timeInt = window.setInterval(() => {
          if (isPaused.value) {
            time.value = time.value + 10;

            if (time.value >= carouselInterval.value) {
              time.value = 0;
              if (slideAnim.isActive()) return; // If animation is active do nothing
              nextSlide();
            }
          }
        }, 10);
      }
    };

    const pauseOnHover = () => {
      if (carouselHoverPause.value) {
        isPaused.value = !isPaused.value;
      }
    };

    const disableArrows = (htmlNextSlide, anim = "next") => {
      if (carouselReset.value != false || carouselControls.value === "dots" || carouselControls.value === "none")
        return;
      const nextSlideNumber = Number(htmlNextSlide.dataset.slide);

      // console.log(nextSlideNumber === scssecoCarousel__slides.value.length);

      if (anim === "next" && nextSlideNumber === scssecoCarousel__slides.value.length) {
        scssecoCarousel__controls_nextBtn.value.disabled = true;
      } else {
        scssecoCarousel__controls_nextBtn.value.disabled = false;
      }

      if (anim === "prev" && nextSlideNumber === 1) {
        scssecoCarousel__controls_prevBtn.value.disabled = true;
      } else {
        scssecoCarousel__controls_prevBtn.value.disabled = false;
      }
    };

    const devOptions = [
      { name: "carouselInterval", value: carouselInterval.value, description: "duration btwn slide animations" },
      { name: "carouselAnimDuration", value: carouselAnimDuration.value, description: "animation duration" },
      { name: "carouselAutoplay", value: carouselAutoplay.value, description: "auto play slider" },
      { name: "carouselHoverPause", value: carouselHoverPause.value, description: "pause on hover" },
      { name: "carouselControls", value: carouselControls.value, description: "add controls" },
      { name: "carouselArrows", value: carouselArrows.value, description: "text or chevrons" },
      { name: "carouselReset", value: carouselReset.value, description: "infinite cycle" },
      { name: "carouselTransition", value: carouselTransition.value, description: "slide effect" },
      {
        name: "carouselResponsive",
        value: carouselResponsive.value,
        description: "adjust the visible slides depending on the viewport",
      },
      { name: "carouselDirection", value: carouselDirection.value, description: "direction of the slide animation" },
    ];

    const devOverflow = (e) => {
      if (e.target.checked === true) {
        scssecoCarousel.value.style.overflow = "visible";
        scssecoCarousel__stage.value.style.overflow = "visible";
      } else {
        scssecoCarousel.value.style.overflow = "";
        scssecoCarousel__stage.value.style.overflow = "";
      }
    };

    const addDevSlideNumber = () => {
      if (carouselDev.value) {
        Array.from(scssecoCarousel__stage.value.children).forEach((slide, index) => {
          const devSldNr = document.createElement("div"); // create slide nr div
          devSldNr.classList.add("scssecoCarousel__dev-slide_number"); // add class of scssecoCarousel__dev-slide_number in slide nr div
          const cloneText = slide.classList.contains("clone") ? "(c)" : "";
          devSldNr.innerHTML = `${slide.dataset.slide} / ${scssecoCarousel__slides.value.length}${cloneText}`; // add nr/total
          slide.appendChild(devSldNr); // append to slide
        });
      }
    };

    onMounted(() => {
      scssecoCarousel__slides.value = Array.from(scssecoCarousel__stage.value.children);
      scssecoCarousel__slides.value.forEach((slide, index) => {
        slide.setAttribute("data-slide", index + 1);
      });
      scssecoCarousel__activeSlide.value = scssecoCarousel__stage.value.querySelector(".active");

      carouselResponsiveMatchMedia();

      autoPlay();

      slidesArrangeFade();
      slidesArrangeJump(scssecoCarousel__slides.value);
      slidesArrangeRifle(scssecoCarousel__slides.value);
      slidesArrangeNumber(scssecoCarousel__slides.value);

      addDevSlideNumber();
    });

    onUnmounted(() => {
      clearInterval(timeInt);
    });

    return {
      carouselControls,
      carouselDev,
      carouselDirection,
      scssecoCarousel,
      scssecoCarousel__stage,
      scssecoCarousel__slides,
      scssecoCarousel__activeSlide,
      scssecoCarousel__controls,
      scssecoCarousel__controls_prevBtn,
      scssecoCarousel__controls_nextBtn,
      time,
      pauseOnHover,
      devOptions,
      devOverflow,
      nextSlide,
      prevSlide,
      dotSlide,
      translationsGlossary,
    };
  },
};
</script>

<template>
  <strong>TODO</strong>: vezi ca responsive are buguri ** <br />
  daca nu pun <code>carouselResponsive: false</code>, <br />
  cand am <code>carouselTransition: fade|jump|rifle</code> <br />
  o ia randeaua cand se schimba viewportu <br />
  cel mai bine vezi la <a href="#heroSlider" style="text-decoration: underline">heroSlider</a>, la <a href="#sliderTabs" style="text-decoration: underline">sliderTabs</a> si la <a href="#sliderTabsVertical" style="text-decoration: underline">sliderTabsVertical</a>
  <div
    ref="scssecoCarousel"
    @mouseenter="pauseOnHover()"
    @mouseleave="pauseOnHover()"
    :id="carouselDetails.sliderID"
    class="scssecoCarousel"
  >
    <div ref="scssecoCarousel__stage" class="scssecoCarousel__stage">
      <slot />
    </div>

    <div
      ref="scssecoCarousel__controls"
      v-if="carouselControls != 'none'"
      class="scssecoCarousel__controls"
      :style="{
        direction: carouselDirection === 'ltr' ? 'ltr' : carouselDirection === 'rtl' || lang === 'ar' ? 'rtl' : 'ltr',
      }"
    >
      <div v-if="carouselControls === 'arrows' || carouselControls === 'all'" class="scssecoCarousel__controls--arrows">
        <button ref="scssecoCarousel__controls_prevBtn" class="scssecoCarousel__controls--prev" @click="prevSlide">
          <span v-if="carouselDetails.carouselArrows === 'text'" :style="{ direction: lang === 'ar' ? 'rtl' : 'ltr' }">
            {{ translationsGlossary.p.previous[lang] }}
          </span>
          <span v-else>
            <svg
              v-if="carouselDirection === 'rtl'"
              xmlns="httb://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M96 220a12.2 12.2 0 0 1-8.5-3.5a12 12 0 0 1 0-17L159 128L87.5 56.5a12 12 0 0 1 17-17l80 80a12 12 0 0 1 0 17l-80 80A12.2 12.2 0 0 1 96 220Z"
              />
            </svg>
            <svg v-else xmlns="httb://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256">
              <path
                fill="currentColor"
                d="M160 220a12.2 12.2 0 0 1-8.5-3.5l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128l71.5 71.5a12 12 0 0 1 0 17a12.2 12.2 0 0 1-8.5 3.5Z"
              />
            </svg>
          </span>
        </button>
        <button ref="scssecoCarousel__controls_nextBtn" class="scssecoCarousel__controls--next" @click="nextSlide">
          <span v-if="carouselDetails.carouselArrows === 'text'" :style="{ direction: lang === 'ar' ? 'rtl' : 'ltr' }">
            {{ translationsGlossary.n.next[lang] }}
          </span>
          <span v-else>
            <svg
              v-if="carouselDirection === 'rtl'"
              xmlns="httb://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M160 220a12.2 12.2 0 0 1-8.5-3.5l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128l71.5 71.5a12 12 0 0 1 0 17a12.2 12.2 0 0 1-8.5 3.5Z"
              />
            </svg>
            <svg v-else xmlns="httb://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256">
              <path
                fill="currentColor"
                d="M96 220a12.2 12.2 0 0 1-8.5-3.5a12 12 0 0 1 0-17L159 128L87.5 56.5a12 12 0 0 1 17-17l80 80a12 12 0 0 1 0 17l-80 80A12.2 12.2 0 0 1 96 220Z"
              />
            </svg>
          </span>
        </button>
      </div>
      <div v-if="carouselControls === 'dots' || carouselControls === 'all'" class="scssecoCarousel__controls--dots">
        <button
          v-for="(slide, index) in scssecoCarousel__slides"
          :key="index"
          @click="dotSlide"
          :data-slide="index + 1"
          :class="{ active: scssecoCarousel__activeSlide.dataset.slide == index + 1 }"
        >
          <span v-if="slide.dataset.text" :style="{ direction: lang === 'ar' ? 'rtl' : 'ltr' }">{{
            slide.dataset.text
          }}</span>
          <span v-else>{{ index + 1 }}</span>
        </button>
      </div>
    </div>

    <div v-if="carouselDev" class="scssecoCarousel__dev">
      <table>
        <thead>
          <tr>
            <th colspan="5" style="text-align: center">{{ carouselDetails.sliderID }}</th>
          </tr>
          <tr>
            <th>Setting</th>
            <th>|</th>
            <th>Value</th>
            <th>|</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>time</td>
            <td>|</td>
            <td>
              <b>{{ time }}</b>
            </td>
            <td>|</td>
            <td>miliseconds</td>
          </tr>
          <tr v-for="(option, index) in devOptions">
            <td>{{ option.name }}</td>
            <td>|</td>
            <td>
              <b>{{ option.value }}</b>
            </td>
            <td>|</td>
            <td>{{ option.description }}</td>
          </tr>
          <tr>
            <td>css overflow</td>
            <td>|</td>
            <td>
              <b><input type="checkbox" @change="devOverflow" /></b>
            </td>
            <td>|</td>
            <td>show overflow</td>
          </tr>
        </tbody>
      </table>
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
    pointer-events: none;
    button {
      cursor: pointer;
      pointer-events: all;
    }
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
          background-color: var(--clr-brandSecondaryColor);
        }
        span {
          pointer-events: none;
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
    width: clamp(20px, 4rem, 65px);
  }
}
</style>
