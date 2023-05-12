<script>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

import freedomToTradeSection4Transl from "../../composables/translations/pages/home/freedomToTradeSection4Transl";
import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";

export default {
  name: "LP~FinancialMarkets~Home~Section4",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { button } = freedomToTradeSection4Transl();

    const goToForm = () => {
      gsap.to(window, { scrollTo: ".registerForm" });
    };

    return { button, goToForm, translationsGlossary };
  },
};
</script>

<template>
  <section id="section4" class="btn">
    <div class="container-fluid">
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
// @use "../../assets/scss/abstracts/mixins" as mxns;
</style>
