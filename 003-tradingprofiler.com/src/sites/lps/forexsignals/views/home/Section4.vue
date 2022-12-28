<script>
import forexsignalsSection4Transl from "../../composables/translations/pages/home/forexsignalsSection4Transl";

export default {
  name: "LP~ForexSignals~Home~Section4",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, para } = forexsignalsSection4Transl();

    return { title, para };
  },
};
</script>

<template>
  <section id="section4" class="help">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>{{ title[lang] }}</h2>
          <p>{{ para[lang] }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section4.help {
  background-image: url(../../assets/imgs/section4/big.jpg);
  background-size: cover;
  padding: 35px 0px 30px;
  text-align: center;
  h2 {
    color: var(--clr-brandPrimaryColor);
    font-weight: bold;
  }
  p {
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    font-size: 1.5rem;
    color: #494949;
  }
}
</style>
