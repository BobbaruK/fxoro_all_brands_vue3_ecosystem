<script>
import { ref } from "@vue/reactivity";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Modal from "../../../../../../../001-super_global_files/components/Modal/Modal.vue";
import Form from "../../../../../../../001-super_global_files/components/Form/Form.vue";

import goldSection4Transl from "../../composables/translations/pages/home/goldSection4Transl";

export default {
  name: "LP~GoldV2~Home~Section4",
  components: { Modal, Form },
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
    const { button } = goldSection4Transl();

    // Modal with form
    const showModalForm = ref(false);
    const modalDetailsForm = {
      modalID: "brand-home-modal-s4-form",
      // maxWidth: "400px",
    };

    const showModalFormFunct = () => {
      showModalForm.value = true;
    };

    const closeModalForm = () => {
      showModalForm.value = false;
    };

    const formDetailsModal = {
      formID: "gold-modal-s4",
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
      onBeforeEnterBtn,
      onEnterBtn,
      button,
      showModalForm,
      modalDetailsForm,
      showModalFormFunct,
      closeModalForm,
      formDetailsModal,
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
            <button class="scssecoBtn" @click="showModalFormFunct">{{ button[lang] }}</button>
          </transition>
        </div>
      </div>
    </div>
  </section>
  <Modal :lang="lang" :modalDetails="modalDetailsForm" v-model="showModalForm" @closeModal="closeModalForm">
    <Form :lang="lang" :formDetails="formDetailsModal" />
  </Modal>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/variables" as vars;
@use "../../assets/scss/abstracts/mixins" as mxns;

$borderRadius: 10px;

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
}

#siteWrapper,
#modals {
  #gold-modal-s4-form {
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
        background: var(--clr-brandPrimaryColor); /* Old browsers */
        background: -moz-linear-gradient(top, var(--clr-brandPrimaryColor) 0%, var(--clr-brandPrimaryColor) 65%, var(--clr-brandSecondaryColor) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, var(--clr-brandPrimaryColor) 0%, var(--clr-brandPrimaryColor) 65%, var(--clr-brandSecondaryColor) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, var(--clr-brandPrimaryColor) 0%, var(--clr-brandPrimaryColor) 65%, var(--clr-brandSecondaryColor) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        border-radius: $borderRadius;
        border: 2px solid var(--clr-brandSecondaryColor);
        color: var(--clr-brandSecondaryColor);
        cursor: pointer;
        display: block;
        font-weight: bold;
        padding: 10px 15px;
        transition: 350ms;
        width: 100%;
        &:hover {
          background: var(--clr-brandSecondaryColor-500); /* Old browsers */
          border: 2px solid var(--clr-brandSecondaryColor-light);
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
  #siteWrapper,
  #modals {
    #gold-modal-s4-form {
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
}
</style>
