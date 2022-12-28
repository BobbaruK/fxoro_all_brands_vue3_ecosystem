<script>
import { onUpdated } from "@vue/runtime-core";

import languages from "../../composables/translations/languages";
import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";

import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";

export default {
  name: "LP~Education~Home",
  components: { Section1, Section2, Section3 },
  props: {
    lang: String,
  },
  setup(props, ctx) {
    const documentTitleTransl = {
      en: "Education",
      it: "Education",
      tr: "Education",
      ro: "Education",
      hu: "Education",
      ar: "Education",
      de: "Education",
      es: "Education",
      sv: "Education",
      pt: "Education",
      fi: "Education",
      pl: "Education",
      th: "Education",
      ms: "Education",
    };

    const metaDescritopn = {
      en: "WE SIGNAL OPPORTUNITIES, YOU TAKE ADVANTAGE OF THEM",
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

    const { lpLangs } = languages();
    checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescritopn, "#317689");
    onUpdated(() => {
      checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescritopn, "#317689");
    });

    // ctx.emit("formDetails", {
    //   id: "demo-modal",
    //   layout: 1,
    //   button: {
    //     en: "Register Now",
    //     it: "",
    //     tr: "",
    //     ro: "",
    //     hu: "",
    //     ar: "سجل الان",
    //     de: "",
    //     es: "",
    //     sv: "",
    //     pt: "",
    //     fi: "",
    //     pl: "",
    //     th: "",
    //     ms: "",
    //   },
    // });

    return {};
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <Section1 :lang="lang" />
      <Section2 :lang="lang" />
      <Section3 :lang="lang" />
    </div>
  </div>
</template>

<style lang="scss"></style>
