<script>
import { onUpdated } from "@vue/runtime-core";

import languages from "../../composables/translations/languages";
import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";

import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";

export default {
  name: "LP~CryptoUniverseV2-Home",
  components: { Section1, Section2, Section3 },
  emits: ["showForm", "formDetails"],
  props: {
    lang: String,
  },
  setup(props, ctx) {
    const documentTitleTransl = {
      en: "CryptoUniverse",
      it: "CryptoUniverse",
      tr: "CryptoUniverse",
      ro: "CryptoUniverse",
      hu: "CryptoUniverse",
      ar: "CryptoUniverse",
      de: "CryptoUniverse",
      es: "CryptoUniverse",
      sv: "CryptoUniverse",
      pt: "CryptoUniverse",
      fi: "CryptoUniverse",
      pl: "CryptoUniverse",
      th: "CryptoUniverse",
      ms: "CryptoUniverse",
    };

    const metaDescription = {
      en: "We can direct you to the most suitable and the most profitable cryptocurrency according to your trading profile",
      it: "",
      tr: "",
      ro: "",
      hu: "",
      ar: "We can direct you to the most suitable and the most profitable cryptocurrency according to your trading profile",
      de: "",
      es: "",
      sv: "",
      pt: "",
      fi: "",
      pl: "",
      th: "",
      ms: "",
    };

    const { lpLangs } = languages();
    checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescription, "#000000");
    onUpdated(() => {
      checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescription, "#000000");
    });

    // form call
    const formCall = (e) => {
      ctx.emit("showForm");
    };

    ctx.emit("formDetails", {
      id: "crypto-universe-modal-v2",
      layout: 1,
      button: {
        en: "Register Now",
        it: "",
        tr: "",
        ro: "",
        hu: "",
        ar: "سجل الان",
        de: "",
        es: "",
        sv: "",
        pt: "",
        fi: "",
        pl: "",
        th: "",
        ms: "",
      },
    });

    return { formCall };
  },
};
</script>

<template>
  <Teleport to="#teleportS1">
    <Section1 :lang="lang" @showForm="formCall" />
  </Teleport>
  <Section2 :lang="lang" />
  <Section3 :lang="lang" @showForm="formCall" />
</template>

<style lang="scss">
// @use "../../assets/scss/abstracts/variables" as vars;
// @use "../../assets/scss/abstracts/mixins" as mxns;
</style>
