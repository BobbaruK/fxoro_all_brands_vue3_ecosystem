<script>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

import financialMarketsSection4Transl from "../../composables/translations/pages/home/financialMarketsSection4Transl";
import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";

export default {
  name: "LP~FinancialMarkets~Home~Section4",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, bullets, image, button } = financialMarketsSection4Transl();

    const goToForm = () => {
      gsap.to(window, { scrollTo: ".registerForm" });
    };

    return { title, bullets, image, button, translationsGlossary, goToForm };
  },
};
</script>

<template>
  <section id="section4" class="steps">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h2 v-html="title[lang]" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 content">
          <ol>
            <li v-for="bullet in bullets" :key="bullet[lang]" v-html="bullet[lang]" />
          </ol>
        </div>
        <div class="col-12 col-md-6 image" v-html="image" />
      </div>
      <div class="row">
        <div class="col-12">
          <div class="btnWrapper">
            <button @click="goToForm" class="scssecoBtn scsseco_scrollTo" v-html="button[lang]" />
            <p v-html="translationsGlossary.d.disclaimerTrading[lang]" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section4.steps {
  h2 {
    text-align: center;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  ol {
    margin: 0;
    padding: 0;
    list-style-position: inside;
    text-align: right;
    li {
      // text-align: right;
    }
  }
  .image {
    display: flex;
  }
  svg {
    max-width: 200px;
    height: auto;
  }
  .btnWrapper {
    margin-top: 2rem;
  }
}
</style>
