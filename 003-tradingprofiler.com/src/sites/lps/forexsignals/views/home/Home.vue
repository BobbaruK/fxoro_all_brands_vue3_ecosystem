<script>
import { onUpdated } from "@vue/runtime-core";

import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";

import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";
import Section4 from "./Section4.vue";
import Section5 from "./Section5.vue";

export default {
  name: "LP~ForexSignals~Home",
  components: { Section1, Section2, Section3, Section4, Section5 },
  props: {
    lang: String,
  },
  setup(props) {
    /**
     * metatags
     */
    const documentTitleTransl = {
      en: "ForexSignals",
      it: "ForexSignals",
      tr: "ForexSignals",
      ro: "ForexSignals",
      hu: "ForexSignals",
      ar: "ForexSignals",
      de: "ForexSignals",
      es: "ForexSignals",
      sv: "ForexSignals",
      pt: "ForexSignals",
      fi: "ForexSignals",
      pl: "ForexSignals",
      th: "ForexSignals",
      ms: "ForexSignals",
    };

    const metaDescription = {
      en: `ForexSignals - If you’ve spent any time around our site, you’ll know that we at ${process.env.VUE_APP_BRAND_TITLE} love teaching our traders how to use Forex trading signals and maximise their financial gains.`,
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

    checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#095d98");
    onUpdated(() => {
      checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#095d98");
    });

    return {};
  },
};
</script>

<template>
  <Section1 :lang="lang" />
  <Section2 :lang="lang" />
  <Section3 :lang="lang" />
  <Section4 :lang="lang" />
  <Section5 :lang="lang" />
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

form.registerForm {
  $borderRadius: 3px;

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
    background-color: #818181;
    border-radius: $borderRadius;
    border: 1px solid var(--clr-white);
    color: var(--clr-white);
    display: block;
    font-size: 14px;
    font-weight: bold;
    line-height: normal;
    margin: 0;
    padding: 10px 0 10px 40px;
    width: 100%;
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

  #forexsignals-section2-firstName,
  #forexsignals-section2-lastName {
    background-image: url(../../assets/imgs/section2/user.png);
  }
  #forexsignals-section2-email {
    background-image: url(../../assets/imgs/section2/mail.png);
  }
  #forexsignals-section2-country {
    background-image: url(../../assets/imgs/section2/country.png);
  }
  #forexsignals-section2-phone {
    background-image: url(../../assets/imgs/section2/phone.png);
  }

  .error {
    color: var(--clr-danger);
    font-size: 80%;
  }

  button[type="submit"] {
    background-color: var(--clr-brandSecondaryColor);
    border: medium none;
    color: var(--clr-white);
    cursor: pointer;
    font-size: 28px;
    font-weight: bold;
    line-height: inherit;
    max-width: 100%;
    padding: 5px 10px;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    &:hover {
      background-color: var(--clr-brandSecondaryColor-600);
    }
  }
}
</style>
