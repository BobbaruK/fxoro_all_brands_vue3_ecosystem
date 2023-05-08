<script>
import financialMarketsSection1Transl from "../../composables/translations/pages/home/financialMarketsSection1Transl";
import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";

import Form from "../../../../../../../001-super_global_files/components/Form/Form.vue";

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

    return { title, formDetails };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6 col-xl-7 title">
          <h1 v-html="title[lang]" />
        </div>
        <div class="col-12 col-md-6 col-xl-5">
          <Form :lang="lang" :formDetails="formDetails" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

#financialMarkets-section1-form {
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.16);
  background-color: var(--clr-white);
  padding: 1rem;
  @include mxns.mediamin(md) {
    padding: 1.7rem;
    margin: 0;
  }
  .form-control {
    label {
      &:not(.agreement):not(.gdpr) {
        bottom: 5px;
        display: none;
        left: 0;
        padding: 5px;
        // pointer-events: none;
        // position: absolute;
      }
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    select {
      width: 100%;
      height: 40px;
      background: #fff;
      border: solid 1px #707070;
      font-size: 14px;
      color: #000;
      border-radius: 0px;

      &::placeholder {
        color: var(--clr-gray-700);
      }
    }
    .phone {
      [type="text"] {
        // border-radius: var(--borderRadius) 0 0 var(--borderRadius);
      }
      [type="tel"] {
        // border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
      }
    }
    button[type="submit"] {
      width: 100%;
      padding: 1rem 2rem;
      font-weight: bold;
      &:hover {
        color: var(--clr-brandSecondaryColor);
      }
    }
  }
}

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
