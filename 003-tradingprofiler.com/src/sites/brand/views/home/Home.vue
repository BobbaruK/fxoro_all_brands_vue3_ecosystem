<script>
import { onUpdated } from "@vue/runtime-core";

import checkLangAndMeta from "../../../../../../001-super_global_files/composables/checkLangAndMeta";

import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";
import Section4 from "./Section4.vue";

export default {
  name: "Brand~Home",
  components: { Section1, Section2, Section3, Section4 },
  props: {
    lang: String,
  },
  setup(props) {
    const documentTitleTransl = {
      en: "Home",
      it: "Casa",
      tr: "Ev",
      ro: "Acasă",
      hu: "Itthon",
      ar: "مسكن",
      de: "Heim",
      es: "Casa",
      sv: "Hem",
      pt: "Casa",
      fi: "Koti",
      pl: "Dom",
      th: "บ้าน",
      ms: "Rumah",
    };

    const metaDescription = {
      en: "With TradingProfiler you can trade CFDs on some of the top commodities in the world",
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

    checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#000000");
    onUpdated(() => {
      checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#000000");
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
