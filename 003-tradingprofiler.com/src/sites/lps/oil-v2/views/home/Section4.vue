<script>
import oilSection4Transl from "../../composables/translations/pages/home/oilSection4Transl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default {
  name: "LP~OilV2~Home~Section4",
  props: {
    lang: String,
  },
  setup(_, ctx) {
    // Animations
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const scrollTriggerDefaults = (el, markers, id) => {
      return {
        id: id,
        trigger: el,
        start: "top 98%",
        end: "bottom 2%",
        markers: markers,
        toggleActions: "play none none reverse",
      };
    };
    // Paragraphs
    const onBeforeEnterBtn = (el) => {
      gsap.set(el, {
        yPercent: 20,
        opacity: 0,
      });
    };
    const onEnterBtn = (el) => {
      gsap.to(el, {
        yPercent: 0,
        opacity: 1,
        duration: 0.6,
        scrollTrigger: scrollTriggerDefaults(el, false, "paragraphs"),
      });
    };

    // Translations
    const { button } = oilSection4Transl();

    // form call
    const formCall = () => {
      gsap.to(window, { duration: 1, ease: "power4.inOut", scrollTo: "#oil-section1-form" });
    };

    return {
      onBeforeEnterBtn,
      onEnterBtn,
      button,
      formCall,
    };
  },
};
</script>

<template>
  <section id="section4" class="btnSection">
    <div class="container">
      <div class="row">
        <div class="col-12 btnSectionInner">
          <transition appear @before-enter="onBeforeEnterBtn" @enter="onEnterBtn">
            <button class="scssecoBtn" @click="formCall">{{ button[lang] }}</button>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/variables" as vars;
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section4.btnSection {
  padding: 30px 0;
  .btnSectionInner {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  p {
    font-size: 16px;
    line-height: 30px;
    margin: 0;
    max-width: 53ch;
    text-align: center;
    @include mxns.mediamin(sm) {
      font-size: 18px;
    }
    @include mxns.mediamin(md) {
      font-size: 20px;
    }
    @include mxns.mediamin(lg) {
      font-size: 22px;
    }
    @include mxns.mediamin(xl) {
      font-size: 25px;
    }
  }
  button.scssecoBtn {
    box-shadow: 0px 0px 15px 0px rgb(0 0 0 / .4);
    &:hover {
      box-shadow: 0px 0px 25px 0px rgb(0 0 0 / .6);
    }
  }
}
</style>
