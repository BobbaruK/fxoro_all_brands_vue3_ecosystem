<script>
import oilSection2Transl from "../../composables/translations/pages/home/oilSection2Transl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "LP~Oil~Home~Section2",
  emits: ["showForm"],
  props: {
    lang: String,
  },
  setup(_, ctx) {
    // Animations
    gsap.registerPlugin(ScrollTrigger);

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
    const onBeforeEnterPara = (el) => {
      gsap.set(el.children, {
        yPercent: 20,
        opacity: 0,
      });
    };
    const onEnterPara = (el) => {
      gsap.utils.toArray(el.children).forEach((child) => {
        gsap.to(child, {
          yPercent: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: scrollTriggerDefaults(child, false, "paragraphs"),
        });
      });
    };

    // Translations
    const { content } = oilSection2Transl();

    return {
      onBeforeEnterPara,
      onEnterPara,
      content,
    };
  },
};
</script>

<template>
  <section id="section2" class="knowledge">
    <div class="container">
      <div class="row">
        <div class="col-12 knowledgeInner">
          <transition appear @before-enter="onBeforeEnterPara" @enter="onEnterPara">
            <div v-html="content[lang]"></div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/variables" as vars;
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section2.knowledge {
  padding: 30px 0;
  .knowledgeInner {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  p {
    font-size: 16px;
    font-weight: 700;
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
    span {
      color: var(--clr-brandPrimaryColor);
    }
  }
}
</style>
