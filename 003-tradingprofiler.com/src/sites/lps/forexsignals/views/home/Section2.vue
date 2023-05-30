<script>
import forexsignalsSection2Transl from "../../composables/translations/pages/home/forexsignalsSection2Transl";

import Form from "../../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

export default {
  name: "LP~ForexSignals~Home~Section2",
  components: { Form },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { contentSections, formTitle, imgCaption } = forexsignalsSection2Transl();

    const formDetails = {
      formID: "forexsignals-section2",
      layout: 2,
      button: {
        en: "Start Trading",
      },
    };

    const formBtn = {
      en: "Start Trading",
    };

    return { contentSections, formTitle, imgCaption, formBtn };
  },
};
</script>

<template>
  <section id="section2" class="content">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-7">
          <div v-for="(section, index) in contentSections" :key="index">
            <h2 v-html="section.title[lang]"></h2>
            <div v-html="section.paras[lang]"></div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xl-5 sidebar">
          <div class="formWrapper">
            <h3>{{ formTitle[lang] }}</h3>
            <Form
              class="layout1"
              :agreementType="'wBrandName'"
              :buttonText="formBtn[lang]"
              :lang="lang"
              :registerType="lang === 'en' ? 'sms' : 'clasic'"
              :test="false"
            />
          </div>

          <img src="../../assets/imgs/section2/233.jpg" alt="Candles" class="candles" width="451" height="374" />
          <p v-html="imgCaption[lang]"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section2.content {
  padding: 35px 0px 30px;
  @include mxns.mediamin(lg) {
    padding: 55px 0;
  }

  h2 {
    color: var(--clr-brandPrimaryColor);
    font-size: 1.75rem;
    font-weight: 400;
  }

  .sidebar {
    .formWrapper {
      background: rgba(0, 0, 0, 0.75);
      color: var(--clr-white);
      padding: 10px;
      position: relative;
      @include mxns.mediamin(sm) {
        padding: 10px 30px;
      }

      h3 {
        text-align: center;
      }
    }

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 3rem;
      max-width: 100%;
      height: auto;
    }
  }
}

.loader {
  background: rgb(0 0 0 / 0.7);
  inset: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  .lds-ring {
    div {
      border-color: var(--clr-brandSecondaryColor) transparent transparent transparent;
    }
  }
}
</style>
