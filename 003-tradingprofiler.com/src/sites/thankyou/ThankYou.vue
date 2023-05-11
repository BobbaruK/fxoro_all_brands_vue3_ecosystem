<script>
import { onMounted, onUpdated } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { gsap } from "gsap";

import checkLangAndMeta from "../../../../001-super_global_files/composables/checkLangAndMeta";
import languages from "./composables/languages";
import thankYouSection1Transl from "./composables/translations/thankYouSection1Transl";

// import "../../../../001-super_global_files/assets/scss/scsseco_global.scss";
import "./assets/scss/scsseco_thankyou.scss";

export default {
  name: "ThankYou",
  props: {
    lang: String,
  },
  setup(props) {
    // Animations
    onMounted(() => {
      gsap.from("h1", {
        scale: 0,
        duration: 0.6,
      });
    });

    const { tyTitleTransl } = thankYouSection1Transl();

    // Meta
    const title = tyTitleTransl;

    const { lpLangs, defaultLang } = languages();
    checkLangAndMeta(props.lang, tyTitleTransl, {}, "#000000");
    onUpdated(() => {
    checkLangAndMeta(props.lang, tyTitleTransl, {}, "#000000");
    });

    /**
     * Redirect
     */
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      if (lpLangs.indexOf(route.params.lang) == -1) {
        router.replace({ name: "ThankYou", params: { lang: defaultLang } });
      }
    });

    return { title };
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 thankYou">
        <h1>{{ title[lang] }}</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "./assets/scss/abstracts/variables" as vars;
@use "./assets/scss/abstracts/mixins" as mxns;

#siteWrapper {
  background-image: url("./assets/imgs/bg.jpg");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
.thankYou {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100vh;
  h1 {
    font-weight: bold;
    margin-bottom: 2rem;
    @include mxns.mediamin(sm) {
      font-size: 4rem;
    }
  }
}
</style>
