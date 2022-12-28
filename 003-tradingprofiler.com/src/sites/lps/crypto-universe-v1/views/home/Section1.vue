<script>
import { ref } from "@vue/reactivity";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Modal from "../../../../../../../001-super_global_files/components/Modal/Modal.vue";
import Form from "../../../../../../../001-super_global_files/components/Form/Form.vue";

import cryptoUniverseSection1Transl from "../../composables/translations/pages/home/cryptoUniverseSection1Transl";

export default {
  name: "LP~CryptoUniverse~Home~Section1",
  components: { Modal, Form },
  props: {
    lang: String,
  },
  setup() {
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
    const { title, content, formBtn } = cryptoUniverseSection1Transl();

    // Modal Form combo
    const showModalForm = ref(false);
    const modalDetailsForm = {
      modalID: "cryptouniversev1-home-modal-form-section1",
      delay: 5000,
    };

    const formDetails = {
      formID: "cryptouniversev1-home-modal-section1",
      layout: 1,
      button: {
        en: "Join",
        it: "Giuntura",
        tr: "Katılmak",
        ro: "Alătură-te",
        hu: "Csatlakozik",
        ar: "انضم",
        de: "Beitreten",
        es: "Entrar",
        sv: "Ansluta sig",
        pt: "Juntar",
        fi: "Liittyä seuraan",
        pl: "Dołączyć",
        th: "เข้าร่วม",
        ms: "Sertai",
      },
    };

    return {
      // animations
      onBeforeEnterH1,
      onEnterH1,
      onBeforeEnterPara,
      onEnterPara,
      onBeforeEnterBtn,
      onEnterBtn,
      // translations
      title,
      content,
      formBtn,
      // modal form combo
      showModalForm,
      modalDetailsForm,
      formDetails,
    };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="row">
      <div class="col-12 subHeaderInner">
        <transition appear @before-enter="onBeforeEnterH1" @enter="onEnterH1">
          <h1 v-html="title[lang]"></h1>
        </transition>
        <transition appear @before-enter="onBeforeEnterPara" @enter="onEnterPara">
          <div v-html="content[lang]"></div>
        </transition>
        <transition appear @before-enter="onBeforeEnterBtn" @enter="onEnterBtn">
          <button class="scssecoBtn" @click="showModalForm = !showModalForm">{{ formBtn[lang] }}</button>
        </transition>
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
  text-align: center;
  padding-bottom: 80px;
  @include mxns.mediamin(xl) {
    text-align: start;
    padding: 100px 0;
  }
  .subHeaderInner {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @include mxns.mediamin(xl) {
      align-items: flex-start;
    }
  }
  h1 {
    color: var(--clr-brandSecondaryColor);
    font-size: 18px;
    font-weight: 800;
    line-height: 32px;
    max-width: 25ch;
    @include mxns.mediamin(sm) {
      font-size: 24px;
      line-height: 28px;
    }
    @include mxns.mediamin(md) {
      font-size: 30px;
      line-height: 36px;
    }
    @include mxns.mediamin(lg) {
      font-size: 36px;
      line-height: 42px;
    }
    @include mxns.mediamin(xl) {
      font-size: 40px;
      line-height: 48px;
      max-width: 17ch;
    }
    span {
      color: var(--clr-white);
    }
  }
  p {
    font-size: 15px;
    line-height: 32px;
    margin-bottom: 3rem;
    max-width: 30ch;
    @include mxns.mediamin(sm) {
      font-size: 18px;
      line-height: 34px;
    }
    @include mxns.mediamin(md) {
      font-size: 20px;
      line-height: 38px;
    }
    @include mxns.mediamin(lg) {
      font-size: 24px;
      line-height: 40px;
    }
    @include mxns.mediamin(xl) {
      font-size: 25px;
      line-height: 48px;
      max-width: 30ch;
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
  #cryptouniversev1-home-modal-section1-form,
  #cryptouniversev1-home-section3-form {
    // position: relative;
    padding-top: 1rem;
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
        box-shadow: none;
        color: var(--clr-brandSecondaryColor-200);
        cursor: pointer;
        display: block;
        font-weight: bold;
        font-size: 18px;
        // padding: 10px 15px;
        padding: 0;
        transition: 350ms;
        width: 100%;
        &:hover {
          background: var(--clr-brandSecondaryColor-light) !important; /* Old browsers */
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
  #cryptouniversev1-home-modal-section1-form,
  #cryptouniversev1-home-section3-form {
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
