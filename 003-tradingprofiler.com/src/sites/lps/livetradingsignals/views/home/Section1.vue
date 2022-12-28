<script>
import livetradingsignalsSection1Transl from "../../composables/translations/pages/home/livetradingsignalsSection1Transl";
import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";

export default {
  name: "LP~LiveTradingSignals~Home~Section1",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, content } = livetradingsignalsSection1Transl();

    const formDetails = {
      formID: "LiveTradingSignals-section1",
      layout: 3,
      button: translationsGlossary.j.join,
    };

    return { title, content, formDetails };
  },
};

</script>

<template>
  <section id="section1" class="subHeader">
    <div class="subHeaderInner">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 d-none d-lg-block">
            <img
              src="../../assets/imgs/section1/hands_holding_tablet.png"
              alt="Hands holding tablet"
              width="945"
              height="641"
            />
          </div>
          <div class="col-12 col-lg-6">
            <h1>{{ title[lang] }}</h1>
            <div v-html="content[lang]"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section1.subHeader {
  background-color: #55c284;
  // background-color: var(--clr-brandSecondaryColor);
  background-image: url(../../assets/imgs/section1/mobile_bg.jpg);
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  border-color: #606060;
  border-style: solid;
  border-width: 7px 0;
  color: #ffffff;
  overflow: hidden;
  text-align: center;
  @include mxns.mediamin(lg) {
    background: transparent;
    border-color: #606060;
    border-style: solid;
    border-width: 0 0 10px;
    padding: 0 0 100px;
    text-align: left;
  }

  .subHeaderInner {
    @include mxns.mediamin(lg) {
      background-color: var(--clr-brandSecondaryColor);
    }

    img {
      position: absolute;
      max-width: 120%;
      right: -10px;
      top: 10px;
      width: 120%;
      @include mxns.mediamin(xl) {
        max-width: 100%;
        width: 100%;
      }
    }

    h1 {
      color: var(--clr-black);
      font-size: 25px;
      margin: 10px 0 35px;
      position: relative;
      text-transform: uppercase;
      @include mxns.mediamin(sm) {
        font-size: 28px;
      }
      @include mxns.mediamin(md) {
        font-size: 34px;
      }
      @include mxns.mediamin(lg) {
        font-size: 44px;
      }
    }
    p {
      color: var(--clr-black);
      font-size: 14px;
      @include mxns.mediamin(md) {
        font-size: 16px;
      }
      @include mxns.mediamin(lg) {
        line-height: normal;
        margin-bottom: 35px;
      }
    }
  }
}
</style>
