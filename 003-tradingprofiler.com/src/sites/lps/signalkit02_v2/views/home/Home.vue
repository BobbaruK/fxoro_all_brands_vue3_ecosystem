<script>
import { onUpdated } from "@vue/runtime-core";

import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";

import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";

export default {
  name: "LP~SignalKit02V2~Home",
  components: { Section1, Section2 },
  props: {
    lang: String,
  },
  setup(props) {
    /**
     * metatags
     */
    const documentTitleTransl = {
      en: "SignalKit02V2",
      it: "SignalKit02V2",
      tr: "SignalKit02V2",
      ro: "SignalKit02V2",
      hu: "SignalKit02V2",
      ar: "SignalKit02V2",
      de: "SignalKit02V2",
      es: "SignalKit02V2",
      sv: "SignalKit02V2",
      pt: "SignalKit02V2",
      fi: "SignalKit02V2",
      pl: "SignalKit02V2",
      th: "SignalKit02V2",
      ms: "SignalKit02V2",
    };

    const metaDescription = {
      en: "",
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

    checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#1f5181");
    onUpdated(() => {
      checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#1f5181");
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
</template>
