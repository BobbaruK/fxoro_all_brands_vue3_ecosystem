<script>
import { onUpdated } from "@vue/runtime-core";

import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";

import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";
import Section4 from "./Section4.vue";

export default {
  name: "LP~FreedomToTrade~Home",
  components: { Section1, Section2, Section3, Section4 },
  props: {
    lang: String,
  },
  setup(props) {
    /**
     * metatags
     */
    const documentTitleTransl = {
      en: "FreedomToTrade",
      it: "FreedomToTrade",
      tr: "FreedomToTrade",
      ro: "FreedomToTrade",
      hu: "FreedomToTrade",
      ar: "FreedomToTrade",
      de: "FreedomToTrade",
      es: "FreedomToTrade",
      sv: "FreedomToTrade",
      pt: "FreedomToTrade",
      fi: "FreedomToTrade",
      pl: "FreedomToTrade",
      th: "FreedomToTrade",
      ms: "FreedomToTrade",
    };

    const metaDescription = {
      en: "FXORO offers a variety of tools to trade trade CFDs on Forex, stocks, commodities and indices through FXORO as well as trade CFDs on Cryptocurrencies and ETFs.",
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

    checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#00a390");
    onUpdated(() => {
      checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#00a390");
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
@use "../../assets/scss/abstracts/mixins" as mxns;

form.registerForm {
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.16);
  color: var(--clr-black);
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
      background: var(--clr-white);
      border: solid 1px var(--clr-gray-500);
      font-size: 14px;
      color: #000;
      border-radius: 0px;
      &::placeholder {
        color: var(--clr-gray-500);
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
      background-color: var(--clr-brandPrimaryColor);
      border-radius: 0;
      padding: 1rem 2rem;
      text-transform: uppercase;
      &:hover {
        background-color: var(--clr-brandSecondaryColor);
        color: var(--clr-white);
      }
    }
  }
}
</style>
