<script>
import { ref } from "@vue/reactivity";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import oilSection1Transl from "../../composables/translations/pages/home/oilSection1Transl";

import Modal from "../../../../../../../001-super_global_files/components/Modal/Modal.vue";
import Form from "../../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

export default {
  name: "LP~Oil~Home~Section1V1",
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
    const { title, content, formBtn } = oilSection1Transl();

    // Modal with form
    const showModalForm = ref(false);
    const modalDetailsForm = {
      modalID: "brand-home-modal-form-s1",
      delay: 5000,
    };

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
      showModalForm,
      modalDetailsForm,
    };
  },
};
</script>

<template>
  <section id="section1-v1" class="subHeader">
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
  </section>
  <Modal :lang="lang" :modalDetails="modalDetailsForm" v-model="showModalForm" @closeModal="showModalForm = false">
    <Form :agreementType="'wBrandName'" :buttonText="formBtn[lang]" :lang="lang" :layout="1" :test="false" />
  </Modal>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/variables" as vars;
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section1-v1.subHeader {
  color: var(--clr-white);
  padding-bottom: 30px;
  @include mxns.mediamin(sm) {
    padding-bottom: 40px;
  }
  @include mxns.mediamin(md) {
    padding-bottom: 45px;
  }
  @include mxns.mediamin(lg) {
    padding-bottom: 55px;
  }
  @include mxns.mediamin(xl) {
    padding-bottom: 60px;
  }
  .subHeaderInner {
    align-content: center;
    align-items: center;
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
    text-align: center;
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
    text-align: center;
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
}
</style>
