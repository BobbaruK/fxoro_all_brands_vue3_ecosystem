<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Form from "../../../../../../../001-super_global_files/components/Form/Form.vue";

import cryptoUniverseSection3Transl from "../../composables/translations/pages/home/cryptoUniverseSection3Transl";

export default {
  name: "LP~CryptoUniverseV2-Home-Section3",
  components: { Form },
  props: {
    lang: String,
  },
  setup(_, ctx) {
    // translations
    const { title, content, formBtn } = cryptoUniverseSection3Transl();

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
        xPercent: -20,
        opacity: 0,
      });
    };
    const onEnterH2 = (el) => {
      gsap.to(el, {
        xPercent: 0,
        opacity: 1,
        scrollTrigger: scrollTriggerDefaults(el, false, "h2"),
      });
    };
    // Paragraphs
    const onBeforeEnterPara = (el) => {
      gsap.set(el.children, {
        yPercent: -20,
        opacity: 0,
      });
    };
    const onEnterPara = (el) => {
      gsap.utils.toArray(el.children).forEach((child) => {
        gsap.to(child, {
          yPercent: 0,
          opacity: 1,
          duration: 0.4,
          scrollTrigger: scrollTriggerDefaults(child, false, "paragraphs"),
        });
      });
    };
    // Form
    const onBeforeEnterForm = (el) => {
      gsap.set(gsap.utils.toArray(el.querySelectorAll(".form-control")), {
        yPercent: 20,
        opacity: 0,
      });
      // gsap.set(gsap.utils.toArray(el.querySelectorAll(".error")), {
      //   yPercent: 20,
      //   opacity: 0,
      // });
    };
    const onEnterForm = (el) => {
      gsap.to(gsap.utils.toArray(el.querySelectorAll(".form-control")), {
        yPercent: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: scrollTriggerDefaults(el, false, "form"),
      });
      // gsap.to(gsap.utils.toArray(el.querySelectorAll(".error")), {
      //   yPercent: 0,
      //   opacity: 1,
      //   stagger: 0.1,
      //   scrollTrigger: scrollTriggerDefaults(el, false, "errors"),
      // });
    };

    const formDetails = {
      formID: "crypto-universe-section3",
      layout: 1,
      button: {
        en: "Register Now",
        it: "",
        tr: "",
        ro: "",
        hu: "",
        ar: "سجل الان",
        de: "",
        es: "",
        sv: "",
        pt: "",
        fi: "",
        pl: "",
        th: "",
        ms: "",
      },
    };

    return {
      title,
      content,
      formBtn,
      // animations
      onBeforeEnterH2,
      onEnterH2,
      onBeforeEnterPara,
      onEnterPara,
      onBeforeEnterForm,
      onEnterForm,
      formDetails,
    };
  },
};
</script>

<template>
  <section id="section3" class="form">
    <div class="container">
      <div class="row">
        <div class="col-12 content">
          <transition appear @before-enter="onBeforeEnterH2" @enter="onEnterH2">
            <h2 v-html="title[lang]"></h2>
          </transition>
          <transition appear @before-enter="onBeforeEnterPara" @enter="onEnterPara">
            <div v-html="content[lang]"></div>
          </transition>
          <transition appear @before-enter="onBeforeEnterForm" @enter="onEnterForm">
            <Form :lang="lang" :formDetails="formDetails" />
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/variables" as vars;
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section3.form {
  background-image: url(../../assets/imgs/section3/bg-mobile.jpg);
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100% auto;
  color: var(--clr-white);
  padding: 30px 0 0;
  @include mxns.mediaminmax(sm, md) {
    background-position: 0px -170px;
  }
  @include mxns.mediamin(md) {
    background-image: url(../../assets/imgs/section3/bg-desktop.jpg);
    background-size: cover;
    padding: 45px 0;
  }
  .content {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  strong {
    color: var(--clr-brandSecondaryColor);
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 30px;
    text-align: center;
    max-width: 20ch;
    @include mxns.mediamin(sm) {
      font-size: 20px;
    }
    @include mxns.mediamin(md) {
      font-size: 22px;
      max-width: none;
    }
    @include mxns.mediamin(lg) {
      font-size: 24px;
    }
    @include mxns.mediamin(xl) {
      font-size: 25px;
    }
  }
  p {
    text-align: center;
    max-width: 30ch;
    @include mxns.mediamin(md) {
      max-width: 40ch;
    }
  }
}

#siteWrapper,
#modals {
  form#crypto-universe-section3-form {
    $borderRadius: 10px;

    background: var(--clr-black);
    color: var(--clr-white);
    margin-top: 4rem;
    max-width: 820px;
    padding: 20px 0;
    position: relative;
    z-index: 1;
    @include mxns.mediamin(sm) {
      margin-top: 6rem;
    }
    @include mxns.mediamin(md) {
      padding: 30px;
    }
    &::before,
    &::after {
      background: var(--clr-black);
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      inset: 0;
      width: 1000px;
    }
    &::before {
      left: -1000px;
      right: auto;
      @include mxns.mediamin(md) {
        width: 100%;
        z-index: 0;
        transform: skew(3deg, -4deg);
        inset: 0;
        background: rgb(255 255 255 / 0.4);
      }
    }
    &::after {
      left: auto;
      right: -1000px;
      @include mxns.mediamin(md) {
        background: var(--clr-black);
        border: 5px solid var(--clr-white);
        width: 100%;
        height: 100%;
        inset: 0;
        z-index: 0;
      }
    }
    > .row:first-child {
      position: relative;
      z-index: 2;
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
        border: none;
        padding: 7px 10px;
        max-width: 100%;
        width: 100%;
      }
      select option {
        margin: 40px;
        background: var(--clr-brandPrimaryColor-light);
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
      }
      &.phone {
        display: flex;
        [type="text"] {
          max-width: 80px;
          // border-radius: $borderRadius 0 0 $borderRadius;
          border-right: 1px solid var(--clr-gray-100);
        }
        [type="tel"] {
          // border-radius: 0 $borderRadius $borderRadius 0;
        }
      }
      input[type="checkbox"] {
      }
    }
    button {
      background: var(--clr-brandSecondaryColor);
      border: 1px solid var(--clr-brandSecondaryColor);
      border-radius: 0;
      box-shadow: none;
      cursor: pointer;
      font-weight: 800;
      font-size: 18px;
      // padding: 5px 20px;
      padding: 0;
      width: 100%;
      &:hover,
      &:focus {
        background: var(--clr-black);
        color: var(--clr-brandSecondaryColor);
      }
      @include mxns.mediamin(md) {
        font-size: 25px;
      }
    }

    .formLoader {
      .loader {
        background: rgb(0 0 0 / 0.7);
        inset: 0;
        margin: 0;
        padding: 0;
        position: absolute;
        z-index: 3;
        .lds-ring {
          div {
            border-color: var(--clr-brandSecondaryColor) transparent transparent transparent;
          }
        }
      }
    }
  }
}
</style>
