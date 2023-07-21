<script>
import demoSection1Transl from "../../composables/translations/pages/home/demoSection1Transl";
import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";

export default {
  name: "LP~ARealSharesOffer~Home~Section1",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, para, listTitle, list } = demoSection1Transl();

    return { title, para, listTitle, list, translationsGlossary };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="container">
      <div class="row">
        <div class="col-12 topTextWrapper">
          <h2 v-html="title[lang]" />
          <p v-html="para[lang]" />
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 bottomImageWrapper">
            <img src="../../assets/imgs/m-desktop.png" alt="Mobile Brands" class="d-none d-lg-block" width="630" height="275" />
          </div>
          <div class="col-12 col-lg-6 bottomTextWrapper">
            <div class="works">
              <h3 v-html="listTitle[lang]" />
              <ul>
                <li v-for="(el, index) in list" :key="index">
                  {{ el[lang] }}
                </li>
              </ul>
            </div>
            <img src="../../assets/imgs/m-mobile.png" alt="Mobile Brands" class="d-lg-none" width="270" height="298" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section1.subHeader {
  padding-top: 1rem;
  padding-bottom: 0;
  .topTextWrapper,
  .bottomImageWrapper,
  .bottomTextWrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }
  p,
  li {
    font-size: 16px;
    // margin: 0;
    text-align: center;
    @include mxns.mediamin(sm) {
      font-size: 18px;
    }
    @include mxns.mediamin(md) {
      font-size: 20px;
    }
    @include mxns.mediamin(lg) {
      // font-size: 22px;
    }
    @include mxns.mediamin(xl) {
      // font-size: 25px;
    }
  }
  p {
    max-width: 64ch;
  }
  h2 {
    text-align: center;
    max-width: 30ch;
    span {
      color: var(--clr-brandSecondaryColor);
    }
  }
  .bottom {
    padding: 1.5rem 0;
    background-color: var(--clr-gray-100);
    @include mxns.mediamin(lg) {
      background-color: transparent;
      padding-bottom: 0;
    }
    h3,
    li {
      text-align: center;
      @include mxns.mediamin(lg) {
        text-align: end;
      }
    }
    h3 {
    }
    img {
      max-width: 100%;
      position: relative;
      z-index: 1;
    }
    .works {
      background-color: var(--clr-gray-100);
      padding: 0.5rem 0;
      position: relative;
      &::before,
      &::after {
        background-color: var(--clr-gray-100);
        height: 100%;
        width: 4000px;
        inset: 0;
        left: auto;
        right: auto;
        position: absolute;
        z-index: 0;
        @include mxns.mediamin(lg) {
          content: "";
        }
      }
      &::before {
        left: -4000px;
      }
      &::after {
        right: -4000px;
      }
    }
    ul {
      list-style-position: inside;
      li {
        font-size: 20px;
        max-width: none;
      }
    }
  }
}
</style>
