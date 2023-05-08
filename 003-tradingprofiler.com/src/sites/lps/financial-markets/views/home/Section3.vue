<script>
import financialMarketsSection3Transl from "../../composables/translations/pages/home/financialMarketsSection3Transl";
import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";

export default {
  name: "LP~FinancialMarkets~Home~Section3",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, bullets } = financialMarketsSection3Transl();

    return { title, bullets };
  },
};
</script>

<template>
  <section id="section3" class="accounts">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h2 v-html="title[lang]" />
        </div>
      </div>
      <div class="row content" v-for="bullet in bullets" :key="bullet.title[lang]">
        <div class="col-12 col-md-6 left">
          <div class="row">
            <div class="col-12 col-md-4 order-md-3 numberWrapper">
              <div class="number" />
            </div>
            <div class="col-12 col-md-4 order-md-1 iconWrapper" v-html="bullet.picture" />
            <div class="col-12 col-md-4 order-md-2 titleWrapper">
              <h3 v-html="bullet.title[lang]" />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 right" v-html="bullet.para[lang]" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section3.accounts {
  background-color: var(--clr-gray-100);
  counter-reset: nr;
  h2 {
    text-align: center;
  }
  .content {
    margin-bottom: 2rem;
    @include mxns.mediamin(md) {
      margin-bottom: 0;
    }
    .left,
    .right {
      @include mxns.mediamin(md) {
        padding-bottom: 2rem;
      }
    }
    .left {
      @include mxns.mediamin(md) {
        border-right: 1px solid var(--clr-brandPrimaryColor);
      }
      .numberWrapper,
      .iconWrapper,
      .titleWrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
      }
      .numberWrapper {
        margin-bottom: 0.5rem;
        .number {
          align-items: center;
          background-color: var(--clr-white);
          border-radius: 50%;
          color: var(--clr-brandSecondaryColor);
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          font-weight: bold;
          height: 40px;
          justify-content: center;
          width: 40px;
          &::before {
            counter-increment: nr;
            content: counter(nr) ". ";
          }
        }
      }
      .iconWrapper {
        margin-bottom: 0.5rem;
      }
      .titleWrapper {
        margin-bottom: 0.5rem;
        text-align: center;
      }
    }
    .right {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      p {
        text-align: center;
        margin: 0;
        @include mxns.mediamin(md) {
          text-align: end;
        }
      }
    }
    svg {
      max-width: 100px;
      display: block;
      height: auto;
    }
  }
}
</style>
