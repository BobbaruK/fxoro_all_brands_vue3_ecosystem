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
      en: "Discover the newest forex trends and learn the language of the market.",
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

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

form.registerForm {
  padding: 0;

  > .registerFormInner {
    @include mxns.mediamin(xl) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    > .form-control {
      &.emailWrapper {
        @include mxns.mediamin(xl) {
          grid-column-start: 3;
          grid-column-end: 5;
        }
      }

      &.phoneNumberWrapper {
        @include mxns.mediamin(xl) {
          grid-column-start: 3;
          grid-column-end: 5;
        }
      }

      &.countryWrapper {
        @include mxns.mediamin(xl) {
          grid-column-start: 1;
          grid-column-end: 3;
        }
      }

      &.agreementWrapper {
        @include mxns.mediamin(xl) {
          grid-column-start: 1;
          grid-column-end: 5;
        }
      }

      &.submitButtonWrapper {
        @include mxns.mediamin(xl) {
          grid-column-start: 1;
          grid-column-end: 5;
        }
      }
    }
  }

  .form-control {
    label {
      color: var(--clr-white);
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
      background-color: var(--clr-white);
      border: 1px solid var(--clr-black);
      border-radius: 0;
      color: #484848;
      font-size: 1rem;
      padding: 0.625rem 0.875rem;
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
      background-color: transparent;
      border: 2px solid var(--clr-white);
      border-radius: 0;
      color: var(--clr-white);
      font-size: 1.5rem;
      padding: 0.75rem 1.125rem;
      width: 100%;
      line-height: 0.99;
      &:hover {
        border-color: var(--clr-brandSecondaryColor);
        background-color: var(--clr-brandSecondaryColor);
      }
    }
  }
}
</style>
