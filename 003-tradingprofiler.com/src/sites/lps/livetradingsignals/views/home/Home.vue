<script>
import { onUpdated } from "@vue/runtime-core";

import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";

import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";

export default {
  name: "LP~LiveTradingSignals~Home",
  components: { Section1, Section2 },
  props: {
    lang: String,
  },
  setup(props) {
    /**
     * metatags
     */
    const documentTitleTransl = {
      en: "LiveTradingSignals",
    };

    const metaDescription = {
      en: "Receive free trading signals directly to your smartphone or to your email, so that you can always be aware of market developments.",
    };

    checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#1E1E24");
    onUpdated(() => {
      checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#1E1E24");
    });

    return {};
  },
};
</script>

<template>
  <Section1 :lang="lang" />
  <Section2 :lang="lang" />
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

form.registerForm {
  $borderRadius: 5px;

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
    background-position: 10px center;
    background-repeat: no-repeat;
    background-color: #d6d6d7;
    border-radius: $borderRadius;
    border: 1px solid var(--clr-white);
    color: var(--clr-gray-700);
    display: block;
    font-size: 14px;
    font-weight: bold;
    line-height: normal;
    margin: 0;
    padding: 10px;
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
      border-radius: $borderRadius 0 0 $borderRadius;
      border-right: 1px solid var(--clr-gray-100);
      padding-left: 0;
      padding-right: 0;
      text-align: center;
    }
    [type="tel"] {
      border-radius: 0 $borderRadius $borderRadius 0;
    }
  }

  input[type="checkbox"] {
    margin-right: 0.5rem;
  }

  .error {
    color: var(--clr-danger);
    font-size: 80%;
  }

  button[type="submit"] {
    background: var(--clr-brandPrimaryColor);
    border-color: #195e5b;
    border-radius: $borderRadius;
    border-style: solid;
    border-width: 0 2px 2px 0;
    color: #fff;
    display: block;
    float: none;
    max-width: 230px;
    margin: 0 auto;
    padding: 7px 25px;
    &:hover {
      background-color: var(--clr-brandSecondaryColor-600);
    }
  }
}
</style>
