<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

import SVGMask from "../../../../../../../001-super_global_files/components/SVGMask/SVGMask.vue";
import Modal from "../../../../../../../001-super_global_files/components/Modal/Modal.vue";
import Form from "../../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

import demoV1HomeSection2Transl from "../../composables/translations/pages/home/demoV1HomeSection2Transl";
import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";

export default {
  name: "LP~NewRealShare2~Home~Section2",
  components: { SVGMask, Modal, Form },
  props: {
    lang: String,
  },
  setup() {
    const showModalForm = ref(false);
    const modalDetailsForm = {
      modalID: "brand-home-modal-form",
    };

    const formBtn = {
      en: "Start trading shares",
    };
    return { showModalForm, modalDetailsForm, formBtn, demoV1HomeSection2Transl };
  },
};
</script>

<template>
  <section id="section2" class="bullets">
    <div class="contaier">
      <div class="row">
        <div class="col-12 btnWrapper">
          <button class="myBtn scssecoBtn" v-html="demoV1HomeSection2Transl().btn[lang]" @click="showModalForm = !showModalForm" />
          <p v-html="demoV1HomeSection2Transl().btnDisclaimer[lang]" />
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 bullet" v-for="bullet in demoV1HomeSection2Transl().bullets">
            <SVGMask :svg-encoded="bullet.icon" />
            <p v-html="bullet.para[lang]" />
          </div>
        </div>
      </div>
    </div>

    <Modal :lang="lang" :modalDetails="modalDetailsForm" v-model="showModalForm" @closeModal="showModalForm = false">
      <Form :agreementType="'wBrandName'" :buttonText="formBtn[lang]" :lang="lang" :test="false" />
    </Modal>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section2.bullets {
  background-image: url(../../assets/imgs/bullets-mobile.jpg);
  background-image: image-set(url("../../assets/imgs/bullets-mobile.avif") type("image/avif"), url("../../assets/imgs/bullets-mobile.webp") type("image/webp"), url("../../assets/imgs/bullets-mobile.jpg") type("image/jpg"));
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: var(--clr-white);
  @include mxns.mediamin(sm) {
    background-image: url(../../assets/imgs/bullets-desktop.jpg);
    background-image: image-set(url("../../assets/imgs/bullets-desktop.avif") type("image/avif"), url("../../assets/imgs/bullets-desktop.webp") type("image/webp"), url("../../assets/imgs/bullets-desktop.jpg") type("image/jpg"));
  }
  .bottom {
    background-color: rgba(255, 179, 0, 0.8);
    color: var(--clr-brandPrimaryColor);
    margin-top: 2rem;
    padding: 2rem 0;
    .bullet {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      .svgEncode {
        color: var(--clr-white);
        font-size: 110px;
      }
    }
    img {
      color: var(--clr-white);
      width: 100px;
      height: 100px;
    }
    p {
      margin: 0;
      text-align: center;
      strong {
        font-weight: 900;
      }
    }
  }
}
</style>
