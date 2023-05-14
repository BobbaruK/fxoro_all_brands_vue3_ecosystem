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

    checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#1b1e36");
    onUpdated(() => {
      checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#1b1e36");
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

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

form.registerForm {
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.16);
  background-color: var(--clr-white);
  padding: 1rem;
  @include mxns.mediamin(md) {
    padding: 1.7rem;
    margin: 0;
  }
  .form-control {
    label {
      &:not(.agreement):not(.gdpr) {
        bottom: 5px;
        display: none;
        left: 0;
        padding: 5px;
        // pointer-events: none;
        // position: absolute;
      }
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    select {
      width: 100%;
      height: 40px;
      background: #fff;
      border: solid 1px #707070;
      font-size: 14px;
      color: #000;
      border-radius: 0px;

      &::placeholder {
        color: var(--clr-gray-700);
      }
    }
    .phone {
      [type="text"] {
        // border-radius: var(--borderRadius) 0 0 var(--borderRadius);
      }
      [type="tel"] {
        // border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
      }
    }
    button[type="submit"] {
      width: 100%;
      padding: 1rem 2rem;
      font-weight: bold;
      &:hover {
        color: var(--clr-brandSecondaryColor);
      }
    }
  }
}
</style>
