<script>
import financialMarketsSection2Transl from "../../composables/translations/pages/home/financialMarketsSection2Transl";

export default {
  name: "LP~FinancialMarkets~Home~Section2",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, bullets } = financialMarketsSection2Transl();

    return { title, bullets };
  },
};
</script>

<template>
  <section id="section2" class="tradingExperience">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h2 v-html="title[lang]" />
          <ol>
            <li v-for="bullet in bullets" :key="bullet[lang]" v-html="bullet[lang]" />
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
// @use "../../assets/scss/abstracts/mixins" as mxns;

section#section2.tradingExperience {
  background-color: var(--clr-brandPrimaryColor);
  color: var(--clr-white);
  text-align: center;
  h2,
  li {
    span {
      color: var(--clr-brandSecondaryColor);
      font-weight: bold;
    }
  }
  h2 {
  }
  ol {
    list-style-position: inside;
    li {
      margin-bottom: 1rem;
    }
  }
}
</style>
