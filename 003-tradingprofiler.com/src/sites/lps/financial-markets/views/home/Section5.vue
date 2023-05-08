<script>
import financialMarketsSection5Transl from "../../composables/translations/pages/home/financialMarketsSection5Transl";

export default {
  name: "LP~FinancialMarkets~Home~Section5",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, bullets } = financialMarketsSection5Transl();

    return { title, bullets };
  },
};
</script>

<template>
  <section id="section5" class="freeEducation">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 v-html="title[lang]" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-7">
          <ol>
            <li v-for="bullet in bullets">
              <h3 v-html="bullet.title[lang]" />
              <p v-html="bullet.para[lang]" />
            </li>
          </ol>
        </div>
        <div class="col-12 col-lg-5 imgWrapper">
          <img src="../../assets/imgs/phone.png" alt="Phone" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
// @use "../../assets/scss/abstracts/mixins" as mxns;

section#section5.freeEducation {
  background-color: var(--clr-brandPrimaryColor);
  color: var(--clr-white);
  padding-bottom: 0;
  .imgWrapper {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  h2 {
    text-align: center;
  }
  h3,
  li span {
    color: var(--clr-brandSecondaryColor);
  }
  p {
    margin: 0;
  }
  img {
    display: block;
  }
  ol {
    counter-reset: title;
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      margin-bottom: 2.5rem;
      h3 {
        &::before {
          counter-increment: title;
          content: counter(title) ". ";
        }
      }
    }
  }
}
</style>
