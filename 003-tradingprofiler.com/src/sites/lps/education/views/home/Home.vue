<script>
import { onUpdated } from "@vue/runtime-core";

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

    checkLangAndMeta(props.lang, documentTitleTransl, metaDescritopn, "#317689");
    onUpdated(() => {
      checkLangAndMeta(props.lang, documentTitleTransl, metaDescritopn, "#317689");
    });

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

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

form.registerForm {
  $borderRadius: 10px;

  position: relative;
  text-align: start;
  z-index: 2;
  @include mxns.mediamax(sm) {
    padding: 0 15px;
  }
  &::before,
  &::after {
    background: var(--clr-black);
    display: block;
    height: 100%;
    position: absolute;
    inset: 0;
    width: 1000px;
    @include mxns.mediamax(lg) {
      content: "";
    }
  }
  &::before {
    left: -1000px;
    right: auto;
  }
  &::after {
    left: auto;
    right: -1000px;
  }
  .error {
    color: var(--clr-danger);
    font-size: 80%;
    padding-bottom: 3px;
    padding-top: 1px;
  }
  .form-control {
    label {
      cursor: pointer;
      &:not(.agreement) {
        display: none;
      }
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    select {
      background: var(--clr-white);
      border: none;
      height: 40px;
      max-width: 100%;
      padding: 7px 10px;
      width: 100%;
      &::placeholder {
        color: var(--clr-gray-700);
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
        // border-radius: $borderRadius 0 0 $borderRadius;
        border-right: 1px solid var(--clr-gray-100);
      }
      [type="tel"] {
        // border-radius: 0 $borderRadius $borderRadius 0;
      }
    }
    input[type="checkbox"] {
    }
    button[type="submit"] {
      background-color: var(--clr-brandSecondaryColor);
      border: medium none;
      border-radius: 0;
      color: var(--clr-black);
      cursor: pointer;
      font-size: 19px;
      font-weight: bold;
      height: 40px;
      max-width: 100%;
      padding: 5px 10px;
      text-align: center;
      text-transform: uppercase;
      width: 100%;
      &:hover {
        background-color: #ffc94c;
      }
      @include mxns.mediamin(lg) {
        font-size: 25px;
      }
    }
  }

  .loader {
    background: rgb(0 0 0 / 0.7);
    inset: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    z-index: 3;
    .lds-ring {
      div {
        border-color: var(--clr-brandSecondaryColor) transparent transparent transparent;
      }
    }
  }
}
</style>
