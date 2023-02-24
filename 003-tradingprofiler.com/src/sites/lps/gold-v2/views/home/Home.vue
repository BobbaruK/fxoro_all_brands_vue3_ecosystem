<script>
import { onUpdated } from "@vue/runtime-core";

import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";

import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";
import Section4 from "./Section4.vue";

export default {
  name: "LP~GoldV2~Home",
  components: { Section1, Section2, Section3, Section4 },
  emits: ["showForm", "formDetails"],
  props: {
    lang: String,
  },
  setup(props, ctx) {
    const documentTitleTransl = {
      en: "Gold",
      it: "Gold",
      tr: "Gold",
      ro: "Gold",
      hu: "Gold",
      ar: "Gold",
      de: "Gold",
      es: "Gold",
      sv: "Gold",
      pt: "Gold",
      fi: "Gold",
      pl: "Gold",
      th: "Gold",
      ms: "Gold",
    };

    const metaDescription = {
      en: `${process.env.VUE_APP_BRAND_TITLE}.com offers you all the knowledge you need and the last generation tools in order to help you trade gold comfortably and reach your full potential.`,
      it: "",
      tr: "",
      ro: "",
      hu: "",
      ar: `${process.env.VUE_APP_BRAND_TITLE}.com offers you all the knowledge you need and the last generation tools in order to help you trade gold comfortably and reach your full potential.`,
      de: "",
      es: "",
      sv: "",
      pt: "",
      fi: "",
      pl: "",
      th: "",
      ms: "",
    };

    checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#343434");
    onUpdated(() => {
      checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#343434");
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

<style lang="scss">
@use "../../assets/scss/abstracts/variables" as vars;
@use "../../assets/scss/abstracts/mixins" as mxns;

.formOverlay {
  align-content: center;
  align-items: center;
  display: flex;
  inset: 0;
  justify-content: center;
  position: fixed;
  z-index: 20;
  &::before {
    background-color: var(--clr-brandPrimaryColor);
    content: "";
    inset: 0;
    opacity: 0.9;
    position: absolute;
    z-index: 0;
  }
  .formWrapper {
    background: var(--clr-brandPrimaryColor-dark);
    border: 2px solid var(--clr-brandSecondaryColor);
    color: var(--clr-white);
    border-radius: 7px;
    margin: 0 calc(vars.$gap / 2);
    max-height: 100vh;
    max-width: 500px;
    overflow-y: auto;
    padding: 30px 15px 15px;
    position: relative;
    .close {
      background: var(--clr-brandSecondaryColor);
      color: var(--clr-black);
      align-content: center;
      align-items: center;
      border-radius: 0 0 0 5px;
      cursor: pointer;
      display: flex;
      font-size: 1.5rem;
      font-weight: 700;
      justify-content: center;
      line-height: 1;
      padding: 3px;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}

html[dir="rtl"] .formOverlay {
  .formWrapper {
    .close {
      border-radius: 0 0 5px 0;
      right: auto;
      left: 0;
    }
  }
}
</style>
