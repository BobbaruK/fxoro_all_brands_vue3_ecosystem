<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import Modal from "../../../../../../../001-super_global_files/components/Modal/Modal.vue";
import Form from "../../../../../../../001-super_global_files/components/Form/Form.vue";

import cryptoUniverseSection1Transl from "../../composables/translations/pages/home/cryptoUniverseSection1Transl";
import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";

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
        toggleActions: "play none none none",
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

    const buttonAction = () => {
      if (route.name === "CryptoUniverseV1Home") {
        showModalForm.value = !showModalForm.value;
        return;
      }

      gsap.to(window, { duration: 1, ease: "power4.inOut", scrollTo: ".section3Form-V2" });
    };

    const route = useRoute();

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
      translationsGlossary,
      buttonAction,
      route,
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
          <button class="scssecoBtn" @click="buttonAction">
            {{ formBtn[lang] }}
          </button>
        </transition>
      </div>
    </div>
    <Modal
      v-if="route.name === 'CryptoUniverseV1Home'"
      :lang="lang"
      :modalDetails="modalDetailsForm"
      v-model="showModalForm"
      @closeModal="showModalForm = false"
    >
      <Form
        class="section1ModalForm-V1"
        :agreementType="'wBrandName'"
        :buttonText="translationsGlossary.j.join[lang]"
        :lang="lang"
        :layout="1"
        :test="false"
      />
    </Modal>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/variables" as vars;
@use "../../assets/scss/abstracts/mixins" as mxns;

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
</style>
