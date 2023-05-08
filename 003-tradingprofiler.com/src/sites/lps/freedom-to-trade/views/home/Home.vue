<script>
import { onUpdated } from "@vue/runtime-core";

import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";

import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";
import Section4 from "./Section4.vue";

export default {
  name: "LP~FreedomToTrade~Home",
  components: { Section1, Section2, Section3, Section4 },
  props: {
    lang: String,
  },
  setup(props) {
    /**
     * metatags
     */
    const documentTitleTransl = {
      en: "FreedomToTrade",
      it: "FreedomToTrade",
      tr: "FreedomToTrade",
      ro: "FreedomToTrade",
      hu: "FreedomToTrade",
      ar: "FreedomToTrade",
      de: "FreedomToTrade",
      es: "FreedomToTrade",
      sv: "FreedomToTrade",
      pt: "FreedomToTrade",
      fi: "FreedomToTrade",
      pl: "FreedomToTrade",
      th: "FreedomToTrade",
      ms: "FreedomToTrade",
    };

    const metaDescription = {
      en: "FXORO offers a variety of tools to trade trade CFDs on Forex, stocks, commodities and indices through FXORO as well as trade CFDs on Cryptocurrencies and ETFs.",
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

    checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#00a390");
    onUpdated(() => {
      checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#00a390");
    });

    return {};
  },
};
</script>

<template>
  <Teleport to="#teleportS1">
    <Section1 :lang="lang" />
  </Teleport>
  <Section2 :lang="lang" />
  <Section3 :lang="lang" />
  <Section4 :lang="lang" />
</template>
