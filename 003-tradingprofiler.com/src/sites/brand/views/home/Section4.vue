<script>
import { ref } from "@vue/reactivity";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Modal from "../../../../../../001-super_global_files/components/Modal/Modal.vue";
import Form from "../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

import homeSection4Transl from "../../composables/pages/home/homeSection4Transl";

gsap.registerPlugin(ScrollTrigger);
// import ''
export default {
  name: "Brand~Home~Section4",
  components: { Modal, Form },
  props: {
    lang: String,
  },
  setup(_, ctx) {
    // translations
    const { title, content, formBtn } = homeSection4Transl();

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
    // Form anim
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
      modalID: "brand-home-modal-form-section4",
    };

    const formButton = {
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
      // Modal form combo
      showModalForm,
      modalDetailsForm,
      formButton,
    };
  },
};
</script>

<template>
  <section id="section4" class="form">
    <div class="container">
      <div class="row">
        <div class="col-12 content">
          <transition appear @before-enter="onBeforeEnterH2" @enter="onEnterH2">
            <h2>{{ title[lang] }}</h2>
          </transition>
          <transition appear @before-enter="onBeforeEnterPara" @enter="onEnterPara">
            <div v-html="content[lang]"></div>
          </transition>
          <button class="scssecoBtn" @click="showModalForm = !showModalForm">{{ formBtn[lang] }}</button>
        </div>
      </div>
    </div>
    <Modal :lang="lang" :modalDetails="modalDetailsForm" v-model="showModalForm" @closeModal="showModalForm = false">
      <Form :agreementType="'wBrandName'" :buttonText="formButton[lang]" :lang="lang" :layout="1" :test="false" />
    </Modal>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/variables" as vars;
@use "../../assets/scss/abstracts/mixins" as mxns;

// Section
section#section4.form {
  padding: 30px 0;
  @include mxns.mediamin(xl) {
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
    margin-bottom: 1rem;
  }
  p {
    text-align: center;
    max-width: 40ch;
  }
}
</style>
