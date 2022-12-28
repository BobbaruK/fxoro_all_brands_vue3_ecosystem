<script>
import { ref } from "@vue/reactivity";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Modal from "../../../../../../../001-super_global_files/components/Modal/Modal.vue";
import Form from "../../../../../../../001-super_global_files/components/Form/Form.vue";

import goldSection4Transl from "../../composables/translations/pages/home/goldSection4Transl";

export default {
  name: "LP~Gold~Home~Section4",
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
            <button class="scssecoBtn" @click="showModalForm = !showModalForm">{{ button[lang] }}</button>
          </transition>
        </div>
      </div>
    </div>
  </section>
  <Modal :lang="lang" :modalDetails="modalDetailsForm" v-model="showModalForm" @closeModal="showModalForm = false">
    <Form :lang="lang" :formDetails="formDetailsModal" />
  </Modal>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/variables" as vars;
@use "../../assets/scss/abstracts/mixins" as mxns;

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
</style>
