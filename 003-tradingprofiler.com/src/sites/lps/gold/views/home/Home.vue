<script>
import { onUpdated } from "@vue/runtime-core";
import { useRoute } from "vue-router";

import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";

import Section1V1 from "./Section1-v1.vue";
import Section1V2 from "./Section1-v2.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";
import Section4 from "./Section4.vue";

export default {
  name: "LP~Gold~Home",
  components: { Section1V1, Section1V2, Section2, Section3, Section4 },
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

    const route = useRoute();

    return { route };
  },
};
</script>

<template>
  <Teleport to="#teleportS1">
    <Section1-v1 v-if="route.name === 'GoldV1Home'" :lang="lang" />
    <Section1-v2 v-else-if="route.name === 'GoldV2Home'" :lang="lang" />
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

$borderRadius: 10px;
form.registerForm {
  position: relative;
  padding-top: 1rem;
  z-index: 1;
  .error {
    color: var(--clr-danger);
    font-size: 80%;
    padding-bottom: 3px;
    padding-top: 1px;
  }

  label {
    cursor: pointer;
  }

  .form-control {
    position: relative;
    label {
      font-size: 1rem;
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
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#41220b+0,41220b+44,c36522+100 */
      background: var(--clr-brandPrimaryColor-dark); /* Old browsers */
      background: -moz-linear-gradient(
        top,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        top,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to bottom,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

      border-radius: $borderRadius;
      border: 1px solid var(--clr-brandPrimaryColor-dark);
      color: var(--clr-white);
      height: 40px;
      max-width: 100%;
      padding: 5px 15px;
      transition: 350ms;
      width: 100%;
      &:hover {
      }
      &:focus {
        outline: none;
        border-bottom: 1px solid var(--clr-brandSecondaryColor);
      }
      &::placeholder {
        color: var(--clr-white);
      }
    }
    select option {
      margin: 40px;
      background: var(--clr-brandPrimaryColor-light);
      color: #fff;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
    }
    .phone {
      display: flex;
      [type="text"] {
        max-width: 80px;
        border-radius: $borderRadius 0 0 $borderRadius;
        border-right: 1px solid var(--clr-gray-100);
      }
      [type="tel"] {
        border-radius: 0 $borderRadius $borderRadius 0;
      }
    }
    input[type="checkbox"] {
    }
    button[type="submit"] {
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#41220b+0,41220b+44,c36522+100 */
      background: var(--clr-brandPrimaryColor); /* Old browsers */
      background: -moz-linear-gradient(
        top,
        var(--clr-brandPrimaryColor) 0%,
        var(--clr-brandPrimaryColor) 65%,
        var(--clr-brandSecondaryColor) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        top,
        var(--clr-brandPrimaryColor) 0%,
        var(--clr-brandPrimaryColor) 65%,
        var(--clr-brandSecondaryColor) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to bottom,
        var(--clr-brandPrimaryColor) 0%,
        var(--clr-brandPrimaryColor) 65%,
        var(--clr-brandSecondaryColor) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      border-radius: $borderRadius;
      border: 2px solid var(--clr-brandSecondaryColor);
      color: var(--clr-brandSecondaryColor);
      cursor: pointer;
      display: block;
      font-weight: bold;
      padding: 10px 15px;
      transition: 350ms;
      width: 100%;
      &:hover {
        background: var(--clr-brandSecondaryColor-500); /* Old browsers */
        border: 2px solid var(--clr-brandSecondaryColor-light);
        color: var(--clr-brandPrimaryColor-dark);
      }
    }
  }

  // Loader
  .loader {
    background: rgb(0 0 0 / 0.7);
    inset: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    .lds-ring {
      div {
        border-color: var(--clr-brandSecondaryColor) transparent transparent transparent;
      }
    }
  }
}

html[dir="rtl"] {
  form.registerForm {
    .form-control {
      &.phone {
        [type="text"] {
          border-radius: 0 $borderRadius $borderRadius 0;
          border-left: 1px solid var(--clr-gray-200);
          border-right: 1px solid var(--clr-brandPrimaryColor-dark);
        }
        [type="tel"] {
          border-radius: $borderRadius 0 0 $borderRadius;
        }
      }
      input[type="checkbox"] {
      }
    }
  }
}
</style>
