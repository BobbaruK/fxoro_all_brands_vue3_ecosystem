<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import oilSection3Transl from "../../composables/translations/pages/home/oilSection3Transl";

export default {
  name: "LP~Oil~Home~Section3",
  emits: ["showForm"],
  props: {
    lang: String,
  },
  setup(_, ctx) {
    // Animations

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
      Array.from(el.children).forEach((child) => {
        if (child.classList.contains("icon")) {
          gsap.set(child, {
            rotate: 50,
            opacity: 0,
          });
        }
        if (child.classList.contains("content")) {
          gsap.set(child, {
            yPercent: 20,
            opacity: 0,
          });
        }
      });
    };
    const onEnterPara = (el) => {
      Array.from(el.children).forEach((child) => {
        if (child.classList.contains("icon")) {
          gsap.to(child, {
            rotate: 0,
            opacity: 1,
            duration: 1.2,
            ease: "elastic",
            scrollTrigger: scrollTriggerDefaults(child, false, "icons"),
          });
        }
        if (child.classList.contains("content")) {
          gsap.to(child, {
            yPercent: 0,
            opacity: 1,
            duration: 0.6,
            scrollTrigger: scrollTriggerDefaults(child, false, "paragraphs"),
          });
        }
      });

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
    const { bullet1, bullet2, bullet3, bullet4 } = oilSection3Transl();

    return {
      onBeforeEnterPara,
      onEnterPara,
      bullet1,
      bullet2,
      bullet3,
      bullet4,
    };
  },
};
</script>

<template>
  <section id="section3" class="bullets">
    <div class="container">
      <div class="row">
        <div class="col-12 bulletsWrapper">
          <transition appear @before-enter="onBeforeEnterPara" @enter="onEnterPara">
            <div class="bulletsInner">
              <div class="icon">
                <img
                  src="../../assets/imgs/section3/icon1.svg"
                  :alt="bullet1.title[lang]"
                  width="150"
                  height="150"
                />
              </div>
              <div class="content">
                <h3>{{ bullet1.title[lang] }}</h3>
                <p>{{ bullet1.content[lang] }}</p>
              </div>
            </div>
          </transition>
          <transition appear @before-enter="onBeforeEnterPara" @enter="onEnterPara">
            <div class="bulletsInner">
              <div class="icon">
                <img
                  src="../../assets/imgs/section3/icon2.svg"
                  :alt="bullet2.title[lang]"
                  width="150"
                  height="150"
                />
              </div>
              <div class="content">
                <h3>{{ bullet2.title[lang] }}</h3>
                <p>{{ bullet2.content[lang] }}</p>
              </div>
            </div>
          </transition>
          <transition appear @before-enter="onBeforeEnterPara" @enter="onEnterPara">
            <div class="bulletsInner">
              <div class="icon">
                <img
                  src="../../assets/imgs/section3/icon3.svg"
                  :alt="bullet3.title[lang]"
                  width="150"
                  height="150"
                />
              </div>
              <div class="content">
                <h3>{{ bullet3.title[lang] }}</h3>
                <p>{{ bullet3.content[lang] }}</p>
              </div>
            </div>
          </transition>
          <transition appear @before-enter="onBeforeEnterPara" @enter="onEnterPara">
            <div class="bulletsInner">
              <div class="icon">
                <img
                  src="../../assets/imgs/section3/icon4.svg"
                  :alt="bullet4.title[lang]"
                  width="150"
                  height="150"
                />
              </div>
              <div class="content">
                <h3>{{ bullet4.title[lang] }}</h3>
                <p>{{ bullet4.content[lang] }}</p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/variables" as vars;
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section3.bullets {
  $bulletGap: 3rem;

  background-image: url(../../assets/imgs/section3/bg-mobile.jpg);
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--clr-white);
  padding: 30px 0;
  @include mxns.mediamin(lg) {
    background-image: url(../../assets/imgs/section3/bg-desktop.jpg);
  }
  .bulletsWrapper,
  .bulletsInner,
  .content {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  .bulletsWrapper {
    align-items: stretch;
    gap: $bulletGap;
    @include mxns.mediamin(sm) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  .bulletsInner {
    justify-content: flex-start;
    width: 100%;
    @include mxns.mediamin(lg) {
      align-items: center;
      flex-direction: row;
      justify-content: flex-start;
      width: calc(36% - $bulletGap);
    }
  }
  .icon {
    img {
      display: block;
      max-width: 100px;
      width: 100%;
      @include mxns.mediamin(lg) {
        max-width: 125px;
      }
      @include mxns.mediamin(xl) {
        max-width: 150px;
      }
    }
  }
  .content {
    gap: 0;
    @include mxns.mediamin(lg) {
      align-items: flex-start;
    }
  }
  h3,
  p {
    font-size: 16px;
    line-height: 30px;
    margin: 0;
    text-align: center;
    @include mxns.mediamin(md) {
      font-size: 18px;
    }
    @include mxns.mediamin(lg) {
      text-align: start;
      line-height: 25px;
    }
  }
  h3 {
    color: var(--clr-brandSecondaryColor);
    font-weight: bold;
    text-transform: uppercase;
  }
  p {
    max-width: 23ch;
  }
}
</style>
