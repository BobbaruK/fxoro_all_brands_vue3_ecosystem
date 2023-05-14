<script>
import { onUpdated } from "@vue/runtime-core";

import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";

import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";

export default {
  name: "LP~TradingSignals3~Home",
  components: { Section1, Section2 },
  props: {
    lang: String,
  },
  setup(props) {
    /**
     * metatags
     */
    const documentTitleTransl = {
      en: "TradingSignals3",
      it: "TradingSignals3",
      tr: "TradingSignals3",
      ro: "TradingSignals3",
      hu: "TradingSignals3",
      ar: "TradingSignals3",
      de: "TradingSignals3",
      es: "TradingSignals3",
      sv: "TradingSignals3",
      pt: "TradingSignals3",
      fi: "TradingSignals3",
      pl: "TradingSignals3",
      th: "TradingSignals3",
      ms: "TradingSignals3",
    };

    const metaDescription = {
      en: `${process.env.VUE_APP_BRAND_TITLE} provides you with easy-to-follow, FREE Trading Signals, and real-time results.`,
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

    checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#44b2dc");
    onUpdated(() => {
      checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#44b2dc");
    });

    return {};
  },
};
</script>

<template>
  <Section1 :lang="lang" />
  <Section2 :lang="lang" />
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

form.registerForm {
  .form-control {
    label {
      font-size: 14px;
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
      background: #e7e7e7;
      border-radius: 10px;
      font-size: 14px;
      line-height: 1.5;
      color: #495057;
      border: 1px solid #ced4da;
      display: block;
      width: 100%;
      padding: 0.375rem 0.75rem;
      @include mxns.mediamin(lg) {
        font-size: 16px;
      }
      &::placeholder {
        color: var(--clr-gray-600);
      }
    }
    .phone {
      [type="text"] {
        border-radius: var(--borderRadius) 0 0 var(--borderRadius);
      }
      [type="tel"] {
        border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
      }
    }
    button[type="submit"] {
      background: var(--clr-brandSecondaryColor);
      border: medium none;
      border-radius: 20px;
      color: #fff;
      display: block;
      font-size: 20px;
      cursor: pointer;
      line-height: 250%;
      margin: 0 auto;
      max-width: 200px;
      text-align: center;
      width: 100%;
      padding: 0;
      &:hover {
        background: var(--clr-brandSecondaryColor-dark);
      }
    }
  }
}
</style>
