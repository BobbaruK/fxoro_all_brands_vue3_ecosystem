<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import oilSection1Transl from "../../composables/translations/pages/home/oilSection1Transl";

import Form from "../../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

export default {
  name: "LP~OilV2~Home~Section1V2",
  components: { Form },
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
    // Heading
    const onBeforeEnterH1 = (el) => {
      gsap.set(el, {
        opacity: 0,
      });
    };
    const onEnterH1 = (el) => {
      gsap.to(el, {
        opacity: 1,
        duration: 1.2,
        scrollTrigger: scrollTriggerDefaults(el, false, "h1"),
      });
    };
    // Paragraphs
    const onBeforeEnterPara = (el) => {
      gsap.set(el.children, {
        xPercent: 20,
        opacity: 0,
      });
    };
    const onEnterPara = (el) => {
      gsap.utils.toArray(el.children).forEach((child) => {
        gsap.to(child, {
          xPercent: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: scrollTriggerDefaults(child, false, "paragraphs"),
        });
      });
      // gsap.to(gsap.utils.toArray(el.children), {
      //   xPercent: 0,
      //   opacity: 1,
      //   duration: 0.6,
      //   stagger: 0.3,
      //   scrollTrigger: scrollTriggerDefaults(el, false, "paragraphs"),
      // });
    };
    // Button
    const onBeforeEnterBtn = (el) => {
      gsap.set(el, {
        opacity: 0,
      });
    };
    const onEnterBtn = (el) => {
      gsap.fromTo(
        el,
        {
          scale: 0.2,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: scrollTriggerDefaults(el, false, "btn"),
        }
      );
    };

    // Translations
    const { title, content, formBtn } = oilSection1Transl();

    return {
      onBeforeEnterH1,
      onEnterH1,
      onBeforeEnterPara,
      onEnterPara,
      onBeforeEnterBtn,
      onEnterBtn,
      title,
      content,
      formBtn,
    };
  },
};
</script>

<template>
  <section id="section1-v2" class="subHeader">
    <div class="row">
      <div class="col-12 col-lg-6 subHeaderInner">
        <transition appear @before-enter="onBeforeEnterH1" @enter="onEnterH1">
          <h1 v-html="title[lang]"></h1>
        </transition>
        <transition
          appear
          @before-enter="onBeforeEnterPara"
          @enter="onEnterPara"
        >
          <div v-html="content[lang]"></div>
        </transition>
      </div>
      <div class="col-12 col-lg-6">
        <transition appear @before-enter="onBeforeEnterBtn" @enter="onEnterBtn">
          <Form
            :agreementType="'wBrandName'"
            :buttonText="formBtn[lang]"
            :lang="lang"
            
            :test="false"
          />
        </transition>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/variables" as vars;
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section1-v2.subHeader {
  color: var(--clr-white);
  padding-bottom: 0;
  text-align: center;
  @include mxns.mediamin(sm) {
  }
  @include mxns.mediamin(md) {
  }
  @include mxns.mediamin(lg) {
    padding-bottom: 55px;
    text-align: start;
  }
  @include mxns.mediamin(xl) {
    padding-bottom: 60px;
  }
  .subHeaderInner {
    align-content: center;
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > * {
      z-index: 3;
      position: relative;
    }
    @include mxns.mediamin(xl) {
      // align-items: flex-start;
    }
  }
  h1,
  p {
    span {
      color: var(--clr-brandSecondaryColor);
    }
  }
  h1 {
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    max-width: 35ch;
    margin-bottom: 30px;
    @include mxns.mediamin(sm) {
      font-size: 22px;
      line-height: 32px;
    }
    @include mxns.mediamin(md) {
      font-size: 28px;
      line-height: 33px;
    }
    @include mxns.mediamin(lg) {
      font-size: 36px;
      line-height: 40px;
      margin-bottom: 60px;
    }
    @include mxns.mediamin(xl) {
      font-size: 40px;
      line-height: 43px;
    }
  }
  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    max-width: 40ch;
    @include mxns.mediamin(sm) {
      font-size: 22px;
      line-height: 36px;
    }
    @include mxns.mediamin(md) {
      font-size: 26px;
      line-height: 38px;
    }
    @include mxns.mediamin(lg) {
      font-size: 30px;
      line-height: 40px;
    }
    @include mxns.mediamin(xl) {
      font-size: 32px;
      line-height: 43px;
    }
  }
  button.scssecoBtn {
    box-shadow: 0px 0px 15px 0px rgb(255 255 255 / 0.4);
    @include mxns.mediamin(md) {
      margin-top: 2rem;
    }
    @include mxns.mediamin(lg) {
      margin-top: 3rem;
    }
    @include mxns.mediamin(xl) {
      margin-top: 5rem;
    }
    &:hover {
      box-shadow: 0px 0px 25px 0px rgb(255 255 255 / 0.6);
    }
  }

  form.registerForm {
    $borderRadius: 0;

    background: var(--clr-black);
    color: var(--clr-white);
    max-width: 820px;
    padding: 20px 0;
    position: relative;
    text-align: start;
    z-index: 1;
    @include mxns.mediamin(sm) {
    }
    @include mxns.mediamin(lg) {
      background: rgba(0 0 0 / 0.6);
      max-width: 400px;
      padding: 30px;
    }
    &::before,
    &::after {
      background: var(--clr-black);
      display: block;
      height: 100%;
      position: absolute;
      inset: 0;
      width: 1000px;
      @include mxns.mediamax(lg) {
        content: "";
      }
    }
    &::before {
      left: -1000px;
      right: auto;
    }
    &::after {
      left: auto;
      right: -1000px;
    }
    .error {
      color: var(--clr-danger);
      font-size: 80%;
      padding-bottom: 3px;
      padding-top: 1px;
    }
    .form-control {
      label {
        cursor: pointer;
        &:not(.agreement) {
          display: none;
        }
      }
      input[type="text"],
      input[type="email"],
      input[type="tel"],
      select {
        background: var(--clr-white);
        border-radius: $borderRadius;
        border: none;
        color: var(--clr-black);
        padding: 7px 10px;
        max-width: 100%;
        width: 100%;

        &::placeholder {
          color: var(--clr-gray-600);
        }
      }
      select option {
        margin: 40px;
        background: var(--clr-brandPrimaryColor-light);
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
      }
      .phone {
        display: flex;
        [type="text"] {
          max-width: 80px;
          border-radius: $borderRadius 0 0 $borderRadius;
          border-right: 1px solid var(--clr-gray-100);
        }
        [type="tel"] {
          // border-radius: 0 $borderRadius $borderRadius 0;
        }
      }
      input[type="checkbox"] {
      }

      button[type="submit"] {
        background: var(--clr-brandSecondaryColor);
        border: 1px solid var(--clr-brandSecondaryColor);
        border-radius: $borderRadius;
        cursor: pointer;
        color: var(--clr-black);
        font-weight: 800;
        font-size: 18px;
        margin: 0 !important;
        padding: 5px 20px;
        width: 100%;
        &:hover {
          background: var(--clr-black);
          color: var(--clr-brandSecondaryColor);
        }
        @include mxns.mediamin(lg) {
          font-size: 25px;
        }
      }
    }

    .loader {
      background: rgb(0 0 0 / 0.7);
      inset: 0;
      margin: 0;
      padding: 0;
      position: absolute;
      z-index: 3;
      .lds-ring {
        div {
          border-color: var(--clr-brandSecondaryColor) transparent transparent
            transparent;
        }
      }
    }
  }
}
</style>
