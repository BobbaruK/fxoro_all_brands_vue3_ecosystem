<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import oilSection4Transl from "../../composables/translations/pages/home/oilSection4Transl";

import Modal from "../../../../../../../001-super_global_files/components/Modal/Modal.vue";
import Form from "../../../../../../../001-super_global_files/components/Form/Form.vue";

export default {
  name: "LP~Oil~Home~Section4",
  components: { Modal, Form },
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
    const { button } = oilSection4Transl();

    // Modal with form
    const showModalForm = ref(false);
    const modalDetailsForm = {
      modalID: "brand-home-modal-form-s4",
    };

    const route = useRoute();

    const btnAction = () => {
      if (route.name === "OilV1Home") {
        showModalForm.value = !showModalForm.value;
        return;
      }

      gsap.to(window, { duration: 1, ease: "power4.inOut", scrollTo: ".registerForm" });
    };

    return {
      onBeforeEnterBtn,
      onEnterBtn,
      button,
      showModalForm,
      modalDetailsForm,
      btnAction,
      route,
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
            <button class="scssecoBtn" @click="btnAction">{{ button[lang] }}</button>
          </transition>
        </div>
      </div>
    </div>
  </section>
  <Modal
    v-if="route.name === 'OilV1Home'"
    :lang="lang"
    :modalDetails="modalDetailsForm"
    v-model="showModalForm"
    @closeModal="showModalForm = false"
  >
    <Form :agreementType="'wBrandName'" :buttonText="button[lang]" :lang="lang" :layout="1" :test="false" />
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
  button.scssecoBtn {
    box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 0.4);
    &:hover {
      box-shadow: 0px 0px 25px 0px rgb(0 0 0 / 0.6);
    }
  }
}
</style>
