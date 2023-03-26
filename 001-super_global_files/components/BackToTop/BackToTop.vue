<script>
import { ref } from "@vue/reactivity";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { onMounted } from "@vue/runtime-core";

import Caret from "../Caret/Caret.vue";
import caretPropValidation from "../Caret/composables/caretPropValidation";

gsap.registerPlugin(ScrollToPlugin);

export default {
  name: "BackToTop",
  components: { Caret },
  props: {
    progress: {
      type: Boolean,
      required: false,
      default: true,
    },
    caret: {
      type: String,
      required: false,
      ...caretPropValidation(),
    },
  },
  setup(props) {
    // Scroll to top of the page
    const bttFunct = () => {
      gsap.to(window, { scrollTo: "#siteWrapper" });
    };

    // Get the BackToTop button element
    const backToTop = ref();

    // Set animation defaults
    const bttAnims = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.1,
        ease: "none",
      },
    });

    // Calculate scrolling percent
    const progressPercent = ref();
    window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scrollTop / (docHeight - winHeight);
      progressPercent.value = Math.round(scrollPercent * 100);

      if (progressPercent.value > 0) {
        bttAnims.play();
      } else if (progressPercent.value == 0) {
        bttAnims.reverse();
      }
    });

    onMounted(() => {
      // set opacity and position
      gsap.set(backToTop.value, {
        autoAlpha: 0,
        yPercent: 70,
      });

      // animate opacity and position
      bttAnims.to(backToTop.value, {
        autoAlpha: 1,
        yPercent: 0,
      });
    });

    return { bttFunct, backToTop, progressPercent };
  },
};
</script>

<template>
  <button ref="backToTop" @click="bttFunct" class="backToTop" aria-label="Back to top">
    <Caret :caret="caret" />
    <div v-if="progress" class="progress" :style="{ width: progressPercent + '%' }"></div>
  </button>
</template>

<style lang="scss">
// @use "../../assets/scss/abstracts/variables" as vars;
@use "../../assets/scss/abstracts/mixins" as mxns;

.backToTop {
  align-content: center;
  align-items: center;
  background: var(--clr-brandSecondaryColor);
  border-radius: 5px;
  border: 1px solid var(--clr-brandPrimaryColor);
  color: var(--clr-brandPrimaryColor);
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: 20px;
  font-size: clamp(20px, 2vw, 25px);
  height: 1.5em;
  inset: auto 1rem 1rem auto;
  justify-content: center;
  opacity: 0.7;
  overflow: hidden;
  position: fixed;
  transition: all 320ms linear;
  width: 1.5em;
  cursor: pointer;
  @include mxns.mediamin(sm) {
    inset: auto 1.5rem 2rem auto;
  }
  &.nearBottom,
  &:hover,
  &:focus {
    opacity: 1;
  }
  &:hover,
  &:focus {
    background: var(--clr-brandPrimaryColor);
    color: var(--clr-brandSecondaryColor);
    .progress {
      background: var(--clr-brandSecondaryColor);
    }
  }
  .progress {
    background: var(--clr-brandPrimaryColor);
    height: 3px;
    inset: auto auto 0 0;
    position: absolute;
  }

  .caretWrapper {
    transform: rotate(180deg);
  }
}

html[dir="rtl"] {
  .backToTop {
    inset: auto auto 1rem 1rem;
    @include mxns.mediamin(sm) {
      inset: auto auto 2rem 1.5rem;
    }
    .progress {
      inset: auto 0 0 auto;
    }
  }
}
</style>
