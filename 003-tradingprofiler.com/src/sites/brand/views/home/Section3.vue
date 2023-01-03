<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import homeSection3Transl from "../../composables/pages/home/homeSection3Transl";
// import ''
export default {
  name: "Brand~Home~Section3",
  emits: ["showForm"],
  props: {
    lang: String,
  },
  setup() {
    // translations
    const { title, content } = homeSection3Transl();

    // animations
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
    // Heading
    const onBeforeEnterH2 = (el) => {
      gsap.set(el, {
        // yPercent: -20,
        opacity: 0,
        rotate: "2.5deg",
      });
    };
    const onEnterH2 = (el) => {
      gsap.to(el, {
        // yPercent: 0,
        opacity: 1,
        duration: 0.4,
        scrollTrigger: scrollTriggerDefaults(el, false, "h2"),
      });
      gsap.to(el, {
        // yPercent: 0,
        rotate: 0,
        duration: 0.8,
        ease: "bounce.out",
        scrollTrigger: scrollTriggerDefaults(el, false, "h2"),
      });
    };
    // Paragraphs
    const onBeforeEnterPara = (el) => {
      gsap.set(el.children, {
        xPercent: -20,
        opacity: 0,
      });
    };
    const onEnterPara = (el) => {
      gsap.utils.toArray(el.children).forEach((child) => {
        gsap.to(child, {
          xPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "elastic",
          scrollTrigger: scrollTriggerDefaults(child, false),
        });
      });
    };

    return {
      title,
      content,
      // animations
      onBeforeEnterH2,
      onEnterH2,
      onBeforeEnterPara,
      onEnterPara,
    };
  },
};
</script>

<template>
  <section id="section3" class="whyChoose">
    <div class="container">
      <div class="row">
        <div class="col-12 content">
          <!-- <transition appear @before-enter="onBeforeEnterH2" @enter="onEnterH2">
            <h2>{{ title[lang] }}</h2>
          </transition> -->
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

.overlay {
  position: fixed;
  inset: 0;
  background-color: red;
  z-index: 10;
}

section#section3.whyChoose {
  background-image: url(../../assets/imgs/section3/bg-mobil.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-color: var(--clr-black);
  border-style: solid;
  border-width: 4px 0;
  text-align: center;
  padding: 1rem 0;
  @include mxns.mediamin(xl) {
    background-image: url(../../assets/imgs/section3/bg-desktop.jpg);
    padding: 45px 0;
  }
  .content {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h2 {
  }
  p {
    max-width: 75ch;
    &:last-child {
      margin: 0;
    }
  }
}
</style>
