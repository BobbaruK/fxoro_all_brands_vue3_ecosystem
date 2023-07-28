<script setup>
import { ref } from "@vue/reactivity";
import { defineAsyncComponent } from "vue";

import demoSection1Transl from "../../composables/translations/pages/home/demoSection1Transl";
import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";

// import Modal from "../../../../../../../001-super_global_files/components/Modal/Modal3.vue";
import Form from "../../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

const props = defineProps({
  lang: String,
});

const Modal = defineAsyncComponent({
  loader: () => import("../../../../../../../001-super_global_files/components/Modal/Modal3.vue"),
});

// Modal with form
const showModalForm = ref(false);
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="whiteBG"></div>
    <div class="container">
      <div class="yellowBG"></div>
      <div class="row">
        <div class="col-12 content">
          <h1 v-html="demoSection1Transl().title[lang]" />
          <p v-html="demoSection1Transl().para[lang]" />
          <div class="btnWarn">
            <button class="myBtn scssecoBtn" @click="showModalForm = !showModalForm">{{ demoSection1Transl().formBtn[lang] }}</button>
            <p>Trading is risky</p>
          </div>
          <Modal :lang="lang" :modalID="'brand-home-modal-form'" :delay="1500" v-model="showModalForm" @closeModal="showModalForm = false">
            <Form :agreementType="'wBrandName'" :buttonText="demoSection1Transl().formBtn[lang]" :lang="lang" :test="false" @submitForm="showModalForm = false" />
          </Modal>
          <picture>
            <source srcset="../../assets/imgs/company_logos.avif" type="image/avif" />
            <source srcset="../../assets/imgs/company_logos.webp" type="image/webp" />
            <img src="../../assets/imgs/company_logos.png" class="phone" alt="FANG" width="508" height="398" loading="lazy" decoding="async" />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section1.subHeader {
  background-image: url(https://fxoro.com/wp-content/themes/CSSecoStarterThemeV2-master/imgs/invest-stocks/section1/bg-mobile.jpg);
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  color: var(--clr-white);
  position: relative;
  padding: 0;
  overflow: hidden;
  @include mxns.mediamin(sm) {
    background-image: url(https://fxoro.com/wp-content/themes/CSSecoStarterThemeV2-master/imgs/invest-stocks/section1/bg-tablet.jpg);
  }
  @include mxns.mediamin(md) {
    background-image: url(https://fxoro.com/wp-content/themes/CSSecoStarterThemeV2-master/imgs/invest-stocks/section1/bg-desktop.jpg);
    background-size: cover;
    font-size: 20px;
  }
  &::before,
  &::after,
  .whiteBG {
    position: absolute;
    height: 360px;
    width: 100%;
  }
  &::before,
  &::after {
    clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%);
    content: "";
    @include mxns.mediamin(md) {
      display: none;
    }
  }
  &::before {
    background-color: var(--clr-brandSecondaryColor);
    bottom: 5px;
    z-index: 1;
  }
  &::after {
    background-color: var(--clr-brandPrimaryColor);
    bottom: 0;
    z-index: 0;
  }
  .whiteBG {
    bottom: -5px;
    background-color: var(--clr-white);
    @include mxns.mediamin(md) {
      background-color: var(--clr-brandSecondaryColor);
      right: -100%;
      top: 0;
      height: 100%;
    }
  }
  .yellowBG {
    display: none;
    @include mxns.mediamin(md) {
      background-color: var(--clr-brandSecondaryColor);
      display: block;
      height: 100%;
      right: -10000px;
      top: 0;
      width: 10000px;
      position: absolute;
      z-index: 0;
    }
  }
  .container {
    padding-top: 2rem;
    padding-bottom: 2rem;
    position: relative;
    @include mxns.mediamin(md) {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
    @include mxns.mediamin(lg) {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
    &::before,
    &::after {
      bottom: 0;
      clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 0% 50%);
      content: "";
      height: 100%;
      left: auto;
      position: absolute;
      top: 0;
      width: 250px;
      display: none;
      @include mxns.mediamin(md) {
        display: block;
      }
      @include mxns.mediamin(lg) {
        width: 320px;
      }
    }
    &::before {
      background-color: var(--clr-brandSecondaryColor);
      z-index: 1;
      right: -5px;
    }
    &::after {
      background-color: var(--clr-white);
      z-index: 0;
      right: 0;
    }
  }
  .content {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    @include mxns.mediamin(md) {
      align-items: flex-start;
    }
  }
  h1 {
    font-weight: bold;
    font-style: italic;
    font-size: 26px;
    color: var(--clr-brandSecondaryColor);
    text-align: center;
    text-transform: uppercase;
    @include mxns.mediamin(md) {
      font-size: 36px;
      text-align: start;
    }
    @include mxns.mediamin(lg) {
      font-size: 50px;
    }
    @include mxns.mediamin(xl) {
      font-size: 60px;
    }
  }
  p {
    text-align: center;
    @include mxns.mediamin(md) {
      text-align: start;
      max-width: 33ch;
      margin-bottom: 3rem;
    }
    @include mxns.mediamin(lg) {
      font-size: 30px;
      line-height: 1.2;
    }
    @include mxns.mediamin(xl) {
      font-size: 40px;
    }
    span {
      color: var(--clr-brandSecondaryColor);
    }
  }
  .btnWarn {
    display: inline-block;
    margin: 0 !important;
    a.cssecoBtn {
      border: 1px solid var(--clr-brandSecondaryColor);
      font-size: inherit;
      @include mxns.mediamin(md) {
        margin: 0;
      }
    }
    p {
      font-size: 16px;
      text-align: center;
      margin: 0;
      padding: 0.5rem 0 0 0;
    }
  }
  img.phone {
    margin: 8rem 0 0 0;
    // max-width: 170px;
    position: relative;
    z-index: 2;
    @include mxns.mediamin(sm) {
      margin: 2rem 0 0 0;
      // max-width: 240px;
    }
    @include mxns.mediamin(md) {
      position: absolute;
      right: -300px;
      top: 0;
      // height: 135%;
      // bottom: -70px;
    }
    @include mxns.mediamin(lg) {
      height: auto;
      // bottom: -95px;
      right: -230px;
    }
    @include mxns.mediamin(xl) {
      // min-width: 270px;
    }
  }
}
</style>
