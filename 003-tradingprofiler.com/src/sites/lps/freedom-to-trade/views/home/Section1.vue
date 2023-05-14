<script>
import freedomToTradeSection1Transl from "../../composables/translations/pages/home/freedomToTradeSection1Transl";

import Form from "../../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

export default {
  name: "LP~FreedomToTrade~Home~Section1",
  components: { Form },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title } = freedomToTradeSection1Transl();

    const formBtn = {
      en: "Start trading",
    };

    return { title, formBtn };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6 col-xl-7 title">
          <h1 v-html="title[lang]" />
          <!-- <img src="../../assets/imgs/hand.png" alt="Hand" width="325" height="539" class="d-none d-md-block" /> -->
          <picture class="d-none d-md-block">
            <source srcset="../../assets/imgs/phone.avif" type="image/avif" />
            <source srcset="../../assets/imgs/phone.webp" type="image/webp" />
            <img
              src="../../assets/imgs/phone.png"
              alt="Phone"
              width="325"
              height="539"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
        <div class="col-12 col-md-6 col-xl-5">
          <Form
            class="section3Form-V2"
            :agreementType="'wBrandName'"
            :buttonText="formBtn[lang]"
            :lang="lang"
            :layout="1"
            :test="false"
          />
          <!-- <img src="../../assets/imgs/hand.png" alt="Hand" width="325" height="539" class="d-block d-md-none" /> -->
          <picture class="d-block d-md-none">
            <source srcset="../../assets/imgs/phone.avif" type="image/avif" />
            <source srcset="../../assets/imgs/phone.webp" type="image/webp" />
            <img
              src="../../assets/imgs/phone.png"
              alt="Phone"
              width="325"
              height="539"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section1.subHeader {
  overflow: hidden;
  @media screen and (max-width: 767px) {
    padding-bottom: 0;
  }
  h1,
  p {
    span {
      color: #f8bb39;
    }
  }
  h1 {
    text-align: center;
    @include mxns.mediamin(md) {
      max-width: 30ch;
      text-align: start;
    }
  }
  p {
    font-size: clamp(16px, 2vw, 25px);
    line-height: clamp(25px, 2vw, 35px);
    text-align: center;
    @include mxns.mediamin(md) {
      max-width: 30ch;
      text-align: start;
    }
  }
  picture {
    max-width: 300px;
    height: auto;
    margin: 30px auto -340px;
    width: 100%;
    @include mxns.mediamin(sm) {
      margin-bottom: -200px;
    }
    @include mxns.mediamin(md) {
      position: absolute;
      margin: 0;
      right: 30px;
      bottom: -110px;
      max-width: 260px;
    }
    @include mxns.mediamin(lg) {
      bottom: -160px;
      max-width: 280px;
    }
    @include mxns.mediamin(xl) {
      bottom: -90px;
      max-width: 250px;
    }
    @include mxns.mediamin(xxl) {
      bottom: -240px;
      max-width: 320px;
    }
  }
}
</style>
