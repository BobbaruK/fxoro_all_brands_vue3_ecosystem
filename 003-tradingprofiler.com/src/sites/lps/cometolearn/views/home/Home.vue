<script>
import { onUpdated } from "@vue/runtime-core";

import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";

import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";

export default {
  name: "LP~ComeToLearn-Home",
  components: { Section1, Section2 },
  props: {
    lang: String,
  },
  setup(props, ctx) {
    const documentTitleTransl = {
      en: "Come to learn",
      it: "Come to learn",
      tr: "Come to learn",
      ro: "Come to learn",
      hu: "Come to learn",
      ar: "Come to learn",
      de: "Come to learn",
      es: "Come to learn",
      sv: "Come to learn",
      pt: "Come to learn",
      fi: "Come to learn",
      pl: "Come to learn",
      th: "Come to learn",
      ms: "Come to learn",
    };

    const metaDescritopn = {
      en: "Learn how to trade on the financial markets for FREE, with zero risk",
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

    checkLangAndMeta(props.lang, documentTitleTransl, metaDescritopn, "#fdb60e");
    onUpdated(() => {
      checkLangAndMeta(props.lang, documentTitleTransl, metaDescritopn, "#fdb60e");
    });

    return {};
  },
};
</script>

<template>
  <Section1 :lang="lang" />
  <Section2 :lang="lang" />
</template>

<style lang="scss"></style>
