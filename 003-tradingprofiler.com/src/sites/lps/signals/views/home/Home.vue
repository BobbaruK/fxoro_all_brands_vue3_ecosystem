<script>
import { onUpdated } from "@vue/runtime-core";

import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";

import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";

export default {
  name: "LP~Signals~Home",
  components: { Section1, Section2, Section3 },
  props: {
    lang: String,
  },
  setup(props) {
    /**
     * metatags
     */
    const documentTitleTransl = {
      en: "Signals",
      it: "Signals",
      tr: "Signals",
      ro: "Signals",
      hu: "Signals",
      ar: "Signals",
      de: "Signals",
      es: "Signals",
      sv: "Signals",
      pt: "Signals",
      fi: "Signals",
      pl: "Signals",
      th: "Signals",
      ms: "Signals",
    };

    const metaDescription = {
      en: "We provide free trading signals, directly to your cell phone so you can always be aware of the market and make the right decision at the right time.",
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

    checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#f5ab00");
    onUpdated(() => {
      checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#f5ab00");
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
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

form.registerForm {
  .form-control {
    label {
      font-size: 0.8rem;
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
      border: 1px solid var(--clr-black);
      // color: var(--clr-white);
      height: 40px;
      &::placeholder {
        color: var(--clr-gray-400);
      }
    }

    select option {
      background: var(--clr-brandSecondaryColor-light);
      color: var(--clr-black);
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
      background: var(--clr-brandSecondaryColor); /* Old browsers */
      display: inline-block;
      border-radius: var(--borderRadius);
      color: var(--clr-black);
      height: auto;
      padding: 20px 10px;
      font-size: 32px;
      font-weight: 900;
      &:hover {
        background: var(--clr-brandPrimaryColor); /* Old browsers */
      }
    }
  }
}
</style>
