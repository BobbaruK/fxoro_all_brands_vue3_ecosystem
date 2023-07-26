<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

import Modal from "../../../../../../001-super_global_files/components/Modal/Modal.vue";
import Form from "../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

import languages from "../composables/translations/languages";

import translationsGlossary from "../../../../../../001-super_global_files/composables/translationsGlossary";
import demoHomeTransl from "../composables/translations/pages/home/demoV1HomeHeaderTransl";

export default {
  components: { Modal, Form },
  name: "LP~NewRealShare2~Header",
  props: {
    lang: String,
  },
  setup() {
    const showModalForm = ref(false);
    const modalDetailsForm = {
      modalID: "brand-home-modal-form",
      delay: 3500,
    };

    const formBtn = {
      en: "Start trading shares",
    };

    return { showModalForm, modalDetailsForm, formBtn, translationsGlossary, demoHomeTransl };
  },
};
</script>

<template>
  <header id="header" class="siteHeader">
    <section class="top">
      <div class="container">
        <div class="row">
          <div class="col-12 siteHeaderInner" style="position: static">
            <div class="site-logo">
              <router-link :to="{ name: 'NewRealShare2Home', params: { lang: lang } }" class="logo">
                <img src="../../../brand/assets/imgs/logos/TradingProfilerLogo-color-white.svg" alt="Logo" width="220" height="75" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="subHeader">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-7">
            <h1 v-html="demoHomeTransl().title[lang]" />
            <p v-html="demoHomeTransl().para[lang]" />
            <div class="btnWrapper">
              <button class="myBtn scssecoBtn" @click="showModalForm = !showModalForm" v-html="demoHomeTransl().btn[lang]" />
              <p v-html="demoHomeTransl().btnDisclaimer[lang]" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bottom">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="someBullets">
              <ul>
                <li v-for="listItem in demoHomeTransl().list" v-html="listItem[lang]" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Modal :lang="lang" :modalDetails="modalDetailsForm" v-model="showModalForm" @closeModal="showModalForm = false">
      <Form :agreementType="'wBrandName'" :buttonText="formBtn[lang]" :lang="lang" :test="false" />
    </Modal>
  </header>
</template>

<style lang="scss">
@use "../assets/scss/abstracts/mixins" as mxns;

header#header.siteHeader {
  background-image: url(../assets/imgs/topbg-mobile.jpg);
  background-image: image-set(url("../assets/imgs/topbg-mobile.avif") type("image/avif"), url("../assets/imgs/topbg-mobile.webp") type("image/webp"), url("../assets/imgs/topbg-mobile.jpg") type("image/jpg"));
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  @include mxns.mediamin(sm) {
    background-position: center;
  }
  @include mxns.mediamin(lg) {
    background-image: url(../assets/imgs/topbg-desktop.jpg);
    background-image: image-set(url("../assets/imgs/topbg-desktop.avif") type("image/avif"), url("../assets/imgs/topbg-desktop.webp") type("image/webp"), url("../assets/imgs/topbg-desktop.jpg") type("image/jpg"));
  }

  padding: 0;
  .top {
    padding: 15px 0;
    .logo {
      max-width: clamp(110px, 12vw, 220px);
      width: 100%;
      height: auto;
    }
  }
  .subHeader {
    color: var(--clr-white);
    h1,
    p {
      text-align: center;
      @include mxns.mediamin(lg) {
        text-align: start;
      }
    }
    h1 {
      text-transform: uppercase;
      font-weight: 900;
      color: var(--clr-brandSecondaryColor);
      span {
        color: var(--clr-white);
      }
    }
    p {
      font-size: clamp(16px, 2vw, 25px);
    }
  }

  .bottom {
    color: var(--clr-white);
    margin-top: 1.5rem;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 0.5rem 0;
    @include mxns.mediamin(lg) {
      margin-top: 8rem;
    }
    ul {
      align-content: center;
      align-items: center;
      column-gap: 1.5rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      list-style-position: inside;
      margin: 0;
      padding: 0;
      row-gap: 0.5rem;
      text-align: center;
      @include mxns.mediamin(lg) {
        justify-content: space-between;
      }
      li {
        font-weight: 900;
        font-size: clamp(16px, 2vw, 25px);
        span {
          color: var(--clr-brandSecondaryColor);
        }
      }
    }
  }

  .btnWrapper {
    margin-top: 2rem;
    @include mxns.mediamin(lg) {
      max-width: 360px;
      // align-items: flex-start;
    }
  }
}
</style>
