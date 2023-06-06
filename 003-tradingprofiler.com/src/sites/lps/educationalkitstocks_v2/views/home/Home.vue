<script>
import { onUpdated } from "@vue/runtime-core";

import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";

import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";

export default {
  name: "LP~EducationalKitStocksV2~Home",
  components: { Section1, Section2, Section3 },
  props: {
    lang: String,
  },
  setup(props) {
    /**
     * metatags
     */
    const documentTitleTransl = {
      en: "EducationalKitStocksV2",
      it: "EducationalKitStocksV2",
      tr: "EducationalKitStocksV2",
      ro: "EducationalKitStocksV2",
      hu: "EducationalKitStocksV2",
      ar: "EducationalKitStocksV2",
      de: "EducationalKitStocksV2",
      es: "EducationalKitStocksV2",
      sv: "EducationalKitStocksV2",
      pt: "EducationalKitStocksV2",
      fi: "EducationalKitStocksV2",
      pl: "EducationalKitStocksV2",
      th: "EducationalKitStocksV2",
      ms: "EducationalKitStocksV2",
    };

    const metaDescription = {
      en: "Whether you are a beginner or a pro trader, build your knowledge and make better investing decisions with our extraordinary educational tools",
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

    checkLangAndMeta(
      props.lang,
      documentTitleTransl,
      metaDescription,
      "#f1a800"
    );
    onUpdated(() => {
      checkLangAndMeta(
        props.lang,
        documentTitleTransl,
        metaDescription,
        "#f1a800"
      );
    });

    return {};
  },
};
</script>

<template>
  <div class="customBg">
    <Section1 :lang="lang" />
    <Section2 :lang="lang" />
  </div>
  <Section3 :lang="lang" />
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

.customBg {
  @include mxns.mediamin(lg) {
    background-image: url(../../assets/imgs/signalskitmain.jpg);
    background-image: image-set(
      url("../../assets/imgs/signalskitmain.avif") type("image/avif"),
      url("../../assets/imgs/signalskitmain.webp") type("image/webp"),
      url("../../assets/imgs/signalskitmain.jpg") type("image/jpg")
    );
    // background-size: auto 330px;
    background-size: cover;
    background-position: -150px;
    background-repeat: no-repeat;
  }
  @include mxns.mediamin(lg) {
    background-position: center;
  }
}
</style>
