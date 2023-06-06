<script>
import educationalKitStocksV2Section1Transl from "../../composables/translations/pages/home/educationalKitStocksV2Section1Transl";

export default {
  name: "LP~EducationalKitStocksV2~Home~Section1",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, para } = educationalKitStocksV2Section1Transl();

    return { title, para };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 v-html="title[lang]" />
          <p v-html="para[lang]" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section1.subHeader {
  @include mxns.mediamax(lg) {
    height: clamp(270px, 62.5vw, 750px);

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
  color: var(--clr-white);

  h1 {
    span {
      display: block;
      padding: 0 5px;
      width: fit-content;

      font-size: clamp(23px, 5.4vw, 64px);

      background: repeating-linear-gradient(
        -48deg,
        var(--clr-brandSecondaryColor-600),
        var(--clr-brandSecondaryColor-600) 1px,
        var(--clr-brandSecondaryColor) 2px,
        var(--clr-brandSecondaryColor) 6px
      );
      &::first-letter {
        text-transform: capitalize;
      }
    }
  }
  p {
    max-width: 35ch;

    font-family: "Asap", sans-serif;
    font-style: italic;
    font-size: clamp(13px, 2vw, 24px);
    @include mxns.mediamin(sm) {
      max-width: 50ch;
    }
  }
}
</style>
