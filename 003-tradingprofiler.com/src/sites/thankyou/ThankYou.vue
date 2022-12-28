<script>
import { onMounted, onUpdated } from "@vue/runtime-core";
import { gsap } from "gsap";

import checkLangAndMeta from "../../../../001-super_global_files/composables/checkLangAndMeta";
import languages from "../brand/composables/languages";

import "../../../../001-super_global_files/assets/scss/scsseco_global.scss";
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

    // Meta
    const title = {
      en: "Thank you!",
      it: "Grazie",
      tr: "Teşekkürler!",
      ro: "Mulțumesc!",
      hu: "Köszönjük!",
      ar: "شكرًا لك!",
      de: "",
      es: "Gracias!",
      sv: "Tack!",
      pt: "",
      fi: "Kiitos!",
      pl: "Dziękujemy!",
      th: "",
      ms: "Terima kasih!",
    };

    const { lang } = languages();
    checkLangAndMeta(props.lang, lang, title);
    onUpdated(() => {
      checkLangAndMeta(props.lang, lang, title);
    });

    // Redirect
    // onMounted(() => {
    //   setTimeout(() => {
    //     window.location.href = "/";
    //   }, 10000);
    // });

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
