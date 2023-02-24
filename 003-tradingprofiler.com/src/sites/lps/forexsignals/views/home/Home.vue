<script>
import { onUpdated } from "@vue/runtime-core";

import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";

import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";
import Section4 from "./Section4.vue";
import Section5 from "./Section5.vue";

export default {
  name: "LP~ForexSignals~Home",
  components: { Section1, Section2, Section3, Section4, Section5 },
  props: {
    lang: String,
  },
  setup(props) {
    /**
     * metatags
     */
    const documentTitleTransl = {
      en: "ForexSignals",
      it: "ForexSignals",
      tr: "ForexSignals",
      ro: "ForexSignals",
      hu: "ForexSignals",
      ar: "ForexSignals",
      de: "ForexSignals",
      es: "ForexSignals",
      sv: "ForexSignals",
      pt: "ForexSignals",
      fi: "ForexSignals",
      pl: "ForexSignals",
      th: "ForexSignals",
      ms: "ForexSignals",
    };

    const metaDescription = {
      en: `ForexSignals - If you’ve spent any time around our site, you’ll know that we at ${process.env.VUE_APP_BRAND_TITLE} love teaching our traders how to use Forex trading signals and maximise their financial gains.`,
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

    checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#095d98");
    onUpdated(() => {
      checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#095d98");
    });

    return {};
  },
};
</script>

<template>
  <Section1 :lang="lang" />
  <Section2 :lang="lang" />
  <Section3 :lang="lang" />
  <Section4 :lang="lang" />
  <Section5 :lang="lang" />
</template>
