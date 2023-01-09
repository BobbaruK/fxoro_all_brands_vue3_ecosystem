<script>
import { ref } from "@vue/reactivity";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import homeSection1Transl from "../../composables/pages/home/homeSection1Transl";

import Modal from "../../../../../../001-super_global_files/components/Modal/Modal.vue";
import Form from "../../../../../../001-super_global_files/components/Form/Form.vue";

export default {
  name: "Brand~Home~Section1",
  components: { Modal, Form },
  props: {
    lang: String,
  },
  setup() {
    // translations
    const { title, content, formBtn } = homeSection1Transl();

    // animations
    gsap.registerPlugin(ScrollTrigger);

    const gScrollTo = () => {
      gsap.to(window, { duration: 1, scrollTo: "form" });
    };

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
        yPercent: -20,
        opacity: 0,
      });
    };
    const onEnterH1 = (el) => {
      gsap.to(el, {
        yPercent: 0,
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

    // Modal form combo
    const showModalForm = ref(false);
    const modalDetailsForm = {
      modalID: "brand-home-modal-form-section1",
      delay: 5000,
    };

    const formDetails = {
      formID: "brand-home-modal-section1",
      layout: 1,
      agreemenType: "woBrandName",
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
      gScrollTo,
      onBeforeEnterH1,
      onEnterH1,
      onBeforeEnterPara,
      onEnterPara,
      onBeforeEnterBtn,
      onEnterBtn,
      // Modal form combo
      showModalForm,
      modalDetailsForm,
      formDetails,
    };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="container">
      <div class="row">
        <div class="col-12 content">
          <transition appear @before-enter="onBeforeEnterH1" @enter="onEnterH1">
            <h1 v-html="title[lang]"></h1>
          </transition>

          <transition appear @before-enter="onBeforeEnterPara" @enter="onEnterPara">
            <div v-html="content[lang]"></div>
          </transition>
          <transition appear @before-enter="onBeforeEnterBtn" @enter="onEnterBtn">
            <!-- <a @click="gScrollTo" href="#" class="scssecoBtn">{{ formBtn[lang] }}</a>
            <br /><br /> -->
            <button class="scssecoBtn" @click="showModalForm = !showModalForm">{{ formBtn[lang] }}</button>
          </transition>
        </div>
      </div>
    </div>
    <Modal :lang="lang" :modalDetails="modalDetailsForm" v-model="showModalForm" @closeModal="showModalForm = false">
      <Form :lang="lang" :formDetails="formDetails" />
    </Modal>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/variables" as vars;
@use "../../assets/scss/abstracts/mixins" as mxns;

$borderRadius: 10px;

// Section
section#section1.subHeader {
  position: relative;
  &::before,
  &::after {
    background: var(--clr-brandSecondaryColor);
    height: 6px;
    position: absolute;
    width: 35%;
    @include mxns.mediamin(xl) {
      content: "";
    }
  }
  &::before {
    inset: -6px auto auto 0;
  }
  &::after {
    inset: auto 0 -6px auto;
  }
  @include mxns.mediamin(xl) {
    background-image: url(../../assets/imgs/section1/bg-ltr.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--clr-white);
    margin-top: 60px;
  }
  .content {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 25px;
    position: relative;
    &::before {
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1e5799+0,000000+15,000000+85,7db9e8+100&0+0,1+15,1+85,0+100 */
      background: -moz-linear-gradient(left, rgba(30, 87, 153, 0) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(125, 185, 232, 0) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(left, rgba(30, 87, 153, 0) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(125, 185, 232, 0) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to right, rgba(30, 87, 153, 0) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(125, 185, 232, 0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001e5799', endColorstr='#007db9e8',GradientType=1 ); /* IE6-9 */
      height: 100%;
      inset: 0 auto 0 -180px;
      opacity: 0.75;
      position: absolute;
      width: 980px;
      @include mxns.mediamin(xl) {
        content: "";
      }
    }
    @include mxns.mediamin(xl) {
      align-items: flex-start;
      padding: 50px 0 40px;
    }
  }
  p {
    font-size: 13px;
    line-height: 26px;
    text-align: center;
    margin-bottom: 40px;
    position: relative;
    &::before {
      background: var(--clr-brandSecondaryColor);
      height: 25px;
      inset: 10px auto auto -15px;
      position: absolute;
      width: 2px;
      @include mxns.mediamin(xl) {
        content: "";
      }
    }
    @include mxns.mediamin(sm) {
      font-size: 16px;
      line-height: 28px;
      max-width: 40ch;
    }
    @include mxns.mediamin(md) {
      font-size: 18px;
      line-height: 30px;
    }
    @include mxns.mediamin(lg) {
      font-size: 22px;
      line-height: 34px;
    }
    @include mxns.mediamin(xl) {
      text-align: start;
      font-size: 25px;
      line-height: 48px;
      margin-bottom: 25px;
    }
  }
}

html[dir="rtl"] {
  section#section1.subHeader {
    &::before {
      inset: -6px 0 auto auto;
    }
    &::after {
      inset: auto auto -6px 0;
    }
    @include mxns.mediamin(xl) {
      background-image: url(../../assets/imgs/section1/bg-rtl.jpg);
    }
    .content {
      &::before {
        inset: 0 -180px 0 auto;
      }
    }
    p {
      &::before {
        inset: 10px -15px auto auto;
      }
    }
  }
}

// Modal (overwrite)
.modalOverlay {
  .modal {
    border-color: var(--clr-brandSecondaryColor-400);
    .close {
      color: var(--clr-black);
      background: var(--clr-brandSecondaryColor-400);
    }
  }
}

// Form
#siteWrapper,
#modals {
  #brand-home-modal-section1-form,
  #brand-home-section4-form {
    // position: relative;
    margin-top: 1rem;
    .error {
      color: var(--clr-danger);
      font-size: 80%;
      padding-bottom: 3px;
      padding-top: 1px;
    }

    label {
      cursor: pointer;
    }

    .form-control {
      position: relative;
      label {
        font-size: 1rem;
        &:not(.agreement):not(.gdpr) {
          bottom: 5px;
          display: none;
          left: 0;
          padding: 5px;
          // pointer-events: none;
          // position: absolute;
        }
      }
      input[type="text"],
      input[type="email"],
      input[type="tel"],
      select {
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#41220b+0,41220b+44,c36522+100 */
        background: var(--clr-brandPrimaryColor-dark); /* Old browsers */
        background: -moz-linear-gradient(top, var(--clr-brandPrimaryColor-dark) 0%, var(--clr-brandPrimaryColor-dark) 65%, var(--clr-brandPrimaryColor-light) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, var(--clr-brandPrimaryColor-dark) 0%, var(--clr-brandPrimaryColor-dark) 65%, var(--clr-brandPrimaryColor-light) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, var(--clr-brandPrimaryColor-dark) 0%, var(--clr-brandPrimaryColor-dark) 65%, var(--clr-brandPrimaryColor-light) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

        border-radius: $borderRadius;
        border: 1px solid var(--clr-brandPrimaryColor-dark);
        color: var(--clr-white);
        height: 40px;
        max-width: 100%;
        padding: 5px 15px;
        transition: 350ms;
        width: 100%;
        &:hover {
        }
        &:focus {
          outline: none;
          border-bottom: 1px solid var(--clr-brandSecondaryColor);
        }
        &::placeholder {
          color: var(--clr-white);
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
          border-radius: 0 $borderRadius $borderRadius 0;
        }
      }
      input[type="checkbox"] {
      }
      button[type="submit"] {
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#41220b+0,41220b+44,c36522+100 */
        background: var(--clr-brandPrimaryColor-dark); /* Old browsers */
        background: -moz-linear-gradient(top, var(--clr-brandPrimaryColor-dark) 0%, var(--clr-brandPrimaryColor-dark) 65%, var(--clr-brandPrimaryColor-light) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, var(--clr-brandPrimaryColor-dark) 0%, var(--clr-brandPrimaryColor-dark) 65%, var(--clr-brandPrimaryColor-light) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, var(--clr-brandPrimaryColor-dark) 0%, var(--clr-brandPrimaryColor-dark) 65%, var(--clr-brandPrimaryColor-light) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        border-radius: $borderRadius;
        border: 2px solid var(--clr-brandPrimaryColor-light);
        color: var(--clr-brandSecondaryColor-200);
        cursor: pointer;
        display: block;
        font-weight: bold;
        // padding: 10px 15px;
        padding: 0;
        transition: 350ms;
        width: 100%;
        &:hover {
          background: var(--clr-brandSecondaryColor-light); /* Old browsers */
          border: 2px solid var(--clr-brandSecondaryColor);
          color: var(--clr-brandPrimaryColor-dark);
        }
      }
    }

    // Loader
    .loader {
      background: rgb(0 0 0 / 0.7);
      inset: 0;
      margin: 0;
      padding: 0;
      position: absolute;
      .lds-ring {
        div {
          border-color: var(--clr-brandSecondaryColor) transparent transparent transparent;
        }
      }
    }
  }
}

html[dir="rtl"] {
  #brand-home-modal-section1-form,
  #brand-home-section4-form {
    .form-control {
      &.phone {
        [type="text"] {
          border-radius: 0 $borderRadius $borderRadius 0;
          border-left: 1px solid var(--clr-gray-200);
          border-right: 1px solid var(--clr-brandPrimaryColor-dark);
        }
        [type="tel"] {
          border-radius: $borderRadius 0 0 $borderRadius;
        }
      }
      input[type="checkbox"] {
      }
    }
  }
}
</style>
