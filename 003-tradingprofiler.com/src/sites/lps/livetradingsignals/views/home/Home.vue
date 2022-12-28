<script>
import { onUpdated } from "@vue/runtime-core";

import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";
import languages from "../../composables/translations/languages";

import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";

export default {
  name: "LP~LiveTradingSignals~Home",
  components: { Section1, Section2 },
  props: {
    lang: String,
  },
  setup(props) {
    /**
     * metatags
     */
    const documentTitleTransl = {
      en: "LiveTradingSignals",
    };

    const metaDescription = {
      en: "Receive free trading signals directly to your smartphone or to your email, so that you can always be aware of market developments.",
    };

    const { lpLangs } = languages();
    checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescription, "#1E1E24");
    onUpdated(() => {
      checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescription, "#1E1E24");
    });

    return {};
  },
};
</script>

<template>
  <Section1 :lang="lang" />
  <Section2 :lang="lang" />
</template>
