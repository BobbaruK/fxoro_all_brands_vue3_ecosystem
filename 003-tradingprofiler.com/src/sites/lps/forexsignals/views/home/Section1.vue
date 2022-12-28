<script>
import forexsignalsSection1Transl from "../../composables/translations/pages/home/forexsignalsSection1Transl";

export default {
  name: "LP~ForexSignals~Home~Section1",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title } = forexsignalsSection1Transl();

    return { title };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ title[lang] }}</h1>
        </div>
        <div class="col-12"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section1.subHeader {
  padding: 0;
  h1 {
    color: #494949;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    padding: 0 0 10px;
    position: relative;
    margin: 25px 0 0;
    &::after {
      background: -webkit-gradient(
        linear,
        left top,
        right top,
        from(rgba(228, 228, 228, 0)),
        color-stop(10%, #e4e4e4),
        color-stop(90%, #e4e4e4),
        to(rgba(228, 228, 228, 0))
      );
      background: linear-gradient(
        to right,
        rgba(228, 228, 228, 0) 0%,
        #e4e4e4 10%,
        #e4e4e4 90%,
        rgba(228, 228, 228, 0) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00e4e4e4', endColorstr='#00e4e4e4',GradientType=1 );
      bottom: 0;
      content: "";
      display: none;
      height: 1px;
      left: 0;
      position: absolute;
      right: 0;
      width: 100%;
      @include mxns.mediamin(lg) {
        display: block;
      }
    }
  }
}
</style>
