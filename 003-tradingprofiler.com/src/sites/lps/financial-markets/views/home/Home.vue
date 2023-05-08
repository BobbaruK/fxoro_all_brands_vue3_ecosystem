<script>
import { onUpdated } from "@vue/runtime-core";

import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";

import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";
import Section4 from "./Section4.vue";
import Section5 from "./Section5.vue";
import Section6 from "./Section6.vue";

export default {
  name: "LP~FinancialMarkets~Home",
  components: { Section1, Section2, Section3, Section4, Section5, Section6 },
  props: {
    lang: String,
  },
  setup(props) {
    /**
     * metatags
     */
    const documentTitleTransl = {
      en: "Financial Markets",
      it: "Financial Markets",
      tr: "Financial Markets",
      ro: "Financial Markets",
      hu: "Financial Markets",
      ar: "Financial Markets",
      de: "Financial Markets",
      es: "Financial Markets",
      sv: "Financial Markets",
      pt: "Financial Markets",
      fi: "Financial Markets",
      pl: "Financial Markets",
      th: "Financial Markets",
      ms: "Financial Markets",
    };

    const metaDescription = {
      en: "Start trading using specific toolkits to navigate the financial markets.",
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

    checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#1E1E24");
    onUpdated(() => {
      checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#1E1E24");
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
  <Section5 :lang="lang" />
  <Section6 :lang="lang" />
</template>
