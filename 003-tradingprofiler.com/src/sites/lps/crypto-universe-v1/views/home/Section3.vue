<script>
import { ref } from "@vue/reactivity";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Modal from "../../../../../../../001-super_global_files/components/Modal/Modal.vue";
import Form from "../../../../../../../001-super_global_files/components/Form/Form.vue";

import cryptoUniverseSection3Transl from "../../composables/translations/pages/home/cryptoUniverseSection3Transl";

export default {
  name: "LP~CryptoUniverse~Home~Section3",
  components: { Modal, Form },
  props: {
    lang: String,
  },
  setup() {
    // translations
    const { title, content, formBtn } = cryptoUniverseSection3Transl();

    // animations
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
      gsap.set(gsap.utils.toArray(el.querySelectorAll(".error")), {
        yPercent: 20,
        opacity: 0,
      });
    };
    const onEnterForm = (el) => {
      gsap.to(gsap.utils.toArray(el.querySelectorAll(".form-control")), {
        yPercent: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: scrollTriggerDefaults(el, false, "form"),
      });
      gsap.to(gsap.utils.toArray(el.querySelectorAll(".error")), {
        yPercent: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: scrollTriggerDefaults(el, false, "errors"),
      });
    };

    // Modal form combo
    const showModalForm = ref(false);
    const modalDetailsForm = {
      modalID: "cryptouniversev1-home-modal-form-section3",
    };

    const showModalFormFunct = () => {
      showModalForm.value = true;
    };

    const closeModalForm = () => {
      showModalForm.value = false;
    };

    const formDetails = {
      formID: "cryptouniversev1-home-section3",
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
      // modal form combo
      showModalForm,
      modalDetailsForm,
      showModalFormFunct,
      closeModalForm,
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
          <button class="scssecoBtn" @click="showModalFormFunct">{{ formBtn[lang] }}</button>
        </div>
      </div>
    </div>
    <Modal :lang="lang" :modalDetails="modalDetailsForm" v-model="showModalForm" @closeModal="closeModalForm">
      <Form :lang="lang" :formDetails="formDetails" />
    </Modal>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/variables" as vars;
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section3.form {
  background-image: url(../../assets/imgs/section3/bg-mobile.jpg);
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--clr-white);
  padding: 30px 0;
  @include mxns.mediamin(md) {
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
  button {
    margin-top: 3rem;
  }
}
</style>
