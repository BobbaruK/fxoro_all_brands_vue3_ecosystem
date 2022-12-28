<script>
import { onUpdated } from "@vue/runtime-core";

import languages from "../../composables/translations/languages";
import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";

import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";
import Section4 from "./Section4.vue";

export default {
  name: "LP~OilV2~Home",
  components: { Section1, Section2, Section3, Section4 },
  emits: ["showForm", "formDetails"],
  props: {
    lang: String,
  },
  setup(props, ctx) {
    const documentTitleTransl = {
      en: "Oil",
      it: "Oil",
      tr: "Oil",
      ro: "Oil",
      hu: "Oil",
      ar: "Oil",
      de: "Oil",
      es: "Oil",
      sv: "Oil",
      pt: "Oil",
      fi: "Oil",
      pl: "Oil",
      th: "Oil",
      ms: "Oil",
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

    const { lpLangs } = languages();
    checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescription, "#143842");
    onUpdated(() => {
      checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescription, "#143842");
    });

    // form call
    const formCall = (e) => {
      ctx.emit("showForm");
    };

    ctx.emit("formDetails", {
      id: "oil-modal",
      layout: 1,
      button: {
        en: "Register Now",
        it: "",
        tr: "",
        ro: "",
        hu: "",
        ar: "سجل الان",
        de: "",
        es: "",
        sv: "",
        pt: "",
        fi: "",
        pl: "",
        th: "",
        ms: "",
      },
    });

    return { formCall };
  },
};
</script>

<template>
  <Teleport to="#teleportS1">
    <Section1 :lang="lang" @showForm="formCall" />
  </Teleport>
  <Section2 :lang="lang" />
  <Section3 :lang="lang" />
  <Section4 :lang="lang" @showForm="formCall" />
</template>

<style lang="scss">
$borderRadius: 10px;

#siteWrapper,
#modals {
  #oil-modal-form {
    // position: relative;
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
      padding-top: 1rem;
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
        background: -moz-linear-gradient(top, var(--clr-brandPrimaryColor-dark) 0%, var(--clr-brandPrimaryColor-dark) 65%, var(--clr-brandPrimaryColor-light) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, var(--clr-brandPrimaryColor-dark) 0%, var(--clr-brandPrimaryColor-dark) 65%, var(--clr-brandPrimaryColor-light) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, var(--clr-brandPrimaryColor-dark) 0%, var(--clr-brandPrimaryColor-dark) 65%, var(--clr-brandPrimaryColor-light) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

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
      &.phone {
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
        margin-right: 0.5rem;
      }
      button[type="submit"] {
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#41220b+0,41220b+44,c36522+100 */
        background: var(--clr-brandPrimaryColor-dark); /* Old browsers */
        background: -moz-linear-gradient(top, var(--clr-brandPrimaryColor-dark) 0%, var(--clr-brandPrimaryColor-dark) 65%, var(--clr-brandPrimaryColor-light) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, var(--clr-brandPrimaryColor-dark) 0%, var(--clr-brandPrimaryColor-dark) 65%, var(--clr-brandPrimaryColor-light) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, var(--clr-brandPrimaryColor-dark) 0%, var(--clr-brandPrimaryColor-dark) 65%, var(--clr-brandPrimaryColor-light) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        border-radius: $borderRadius;
        border: 2px solid var(--clr-brandPrimaryColor-light);
        color: var(--clr-brandPrimaryColor-light);
        cursor: pointer;
        display: block;
        font-weight: bold;
        padding: 10px 15px;
        transition: 350ms;
        width: 100%;
        &:hover {
          background: var(--clr-brandPrimaryColor-light); /* Old browsers */
          border: 2px solid var(--clr-brandPrimaryColor);
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
}

html[dir="rtl"] {
  #siteWrapper,
  #modals {
    #oil-modal-form {
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
          margin-left: 0.5rem;
        }
      }
    }
  }
}
</style>
