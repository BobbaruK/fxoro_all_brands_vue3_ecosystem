<script>
import educationSection1Transl from "../../composables/translations/pages/home/educationSection1Transl";

export default {
  name: "LP~Education~Home~Section1",
  props: {
    lang: String,
  },
  setup(_, ctx) {
    // Translations
    const { title } = educationSection1Transl();

    return { title };
  },
};
</script>

<template>
  <section id="section1" class="col-12 order-1 subHeader">
    <div class="container">
      <div class="row">
        <div class="col-12 subHeaderInner">
          <h1 v-html="title[lang]"></h1>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
section#section1.subHeader {
  .subHeaderInner {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  h1 {
    color: var(--clr-brandSecondaryColor);
    max-width: 28ch;
    span {
      display: block;
      font-weight: bold;
      color: var(--clr-brandPrimaryColor);
    }
  }
}
</style>
