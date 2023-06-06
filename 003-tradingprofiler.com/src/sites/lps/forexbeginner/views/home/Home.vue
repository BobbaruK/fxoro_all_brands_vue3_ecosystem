<script>
import { onUpdated } from "@vue/runtime-core";

import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";

import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";

export default {
  name: "LP~ForexBeginner~Home",
  components: { Section1,Section2 },
  props: {
    lang: String,
  },
  setup(props) {
    /**
     * metatags
     */
    const documentTitleTransl = {
      en: "ForexBeginner",
      it: "ForexBeginner",
      tr: "ForexBeginner",
      ro: "ForexBeginner",
      hu: "ForexBeginner",
      ar: "ForexBeginner",
      de: "ForexBeginner",
      es: "ForexBeginner",
      sv: "ForexBeginner",
      pt: "ForexBeginner",
      fi: "ForexBeginner",
      pl: "ForexBeginner",
      th: "ForexBeginner",
      ms: "ForexBeginner",
    };

    const metaDescription = {
      en: `${process.env.VUE_APP_BRAND_TITLE} offers you all the material you need in order to enter the world of trading, using your best abilities`,
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

    checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#00a619");
    onUpdated(() => {
      checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#00a619");
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
</style>
