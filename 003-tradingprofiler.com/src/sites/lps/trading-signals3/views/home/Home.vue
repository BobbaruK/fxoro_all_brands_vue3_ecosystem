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
