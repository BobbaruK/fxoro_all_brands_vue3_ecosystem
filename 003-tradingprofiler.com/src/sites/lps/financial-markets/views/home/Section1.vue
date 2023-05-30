<script>
import financialMarketsSection1Transl from "../../composables/translations/pages/home/financialMarketsSection1Transl";

import Form from "../../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

export default {
  name: "LP~FinancialMarkets~Home~Section1",
  components: { Form },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title } = financialMarketsSection1Transl();

    const formDetails = {
      formID: "financialMarkets-section1",
      layout: 2,
      button: {
        en: "Get Information",
        it: "",
        tr: "",
        ro: "",
        hu: "",
        ar: "",
        de: "",
        es: "",
        sv: "",
        pt: "",
        fi: "",
        pl: "",
        th: "",
        ms: "",
      },
    };

    const formBtn = {
      en: "Get Information",
      it: "",
      tr: "",
      ro: "",
      hu: "",
      ar: "",
      de: "",
      es: "",
      sv: "",
      pt: "",
      fi: "",
      pl: "",
      th: "",
      ms: "",
    };

    return { title, formBtn };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6 col-xxl-7 title">
          <h1 v-html="title[lang]" />
        </div>
        <div class="col-12 col-md-6 col-xxl-5">
          <Form
            class="section3Form-V2 layout1"
            :agreementType="'wBrandName'"
            :buttonText="formBtn[lang]"
            :lang="lang"
            :registerType="lang === 'en' ? 'sms' : 'clasic'"
            :test="false"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section1.subHeader {
  .title {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    @include mxns.mediamin(md) {
      justify-content: flex-start;
    }
  }
  h1 {
    color: var(--clr-white);
    max-width: 20ch;
    text-align: center;
    @include mxns.mediamin(md) {
      margin: 0;
      text-align: start;
    }
    span {
      color: var(--clr-brandSecondaryColor);
    }
  }
}
</style>
