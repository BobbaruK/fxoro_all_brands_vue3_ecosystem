<script>
import tradingSignals3Section1Transl from "../../composables/translations/pages/home/tradingSignals3Section1Transl";

export default {
  name: "LP~TradingSignals3~Home~Section1",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, subTitle, paras } = tradingSignals3Section1Transl();

    return { title, subTitle, paras };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="container">
      <div class="row">
        <div class="col-12 textWrapper">
          <h1 v-html="title[lang]" />
          <h2 v-html="subTitle[lang]" />
          <div v-html="paras[lang]" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section1.subHeader {
  background-image: url(../../assets/imgs/bg.jpg);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  border-color: var(--clr-gray-900) transparent var(--clr-gray-400) transparent;
  border-style: solid;
  border-width: 5px 0;
  color: #fff;
  padding: 38px 0;
  position: relative;
  text-align: center;
  @include mxns.mediamin(sm) {
    background-position: 100% 0;
  }
  @include mxns.mediamin(md) {
  }
  @include mxns.mediamin(lg) {
    border: medium none;
    text-align: start;
    background-position: top center;
    // background-size: auto;
    border-top: 0px solid transparent;
  }

  &::before {
    background: rgba(24, 29, 31, 0.6);
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 0;
    @include mxns.mediamin(lg) {
      display: none;
    }
  }

  .textWrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    @include mxns.mediamin(lg) {
      align-items: flex-start;
    }

    > * {
      margin: 0;
    }
  }

  h1,
  h2 {
    text-transform: uppercase;
  }
  h2 {
    max-width: 25ch;
  }
  p {
    max-width: 70ch;
    text-align: start;
  }

  .stampGreen {
    display: block;
    width: 55px;
    // width: 150px;
    height: 55px;
    // height: 150px;
    margin: 0.5rem;
    float: right;
    line-height: 1.15;
    border-radius: 50%;
    border: 4px solid var(--clr-brandSecondaryColor);
    padding: 29px;
    position: relative;
    transform: rotate(20deg);

    @include mxns.mediamin(lg) {
      width: 110px;
      height: 110px;
    }

    &::before {
      position: absolute;
      content: "";
      width: 90%;
      height: 90%;
      border-radius: 50%;
      border: 1px solid var(--clr-brandSecondaryColor);
      inset: 50% auto auto 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    .star {
      color: var(--clr-brandSecondaryColor);
      height: auto;
      position: absolute;
      inset: auto;
      &.star1,
      &.star3 {
        top: 15%;
        width: 18%;
      }
      &.star1 {
        left: 20%;
      }
      &.star2 {
        top: 4%;
        width: 30%;
        left: 35%;
      }
      &.star3 {
        right: 20%;
      }
    }

    span {
      // display: block;
      font-size: 14px;
      @include mxns.mediamin(lg) {
        font-size: 24px;
      }
      &.percent {
        color: var(--clr-brandSecondaryColor);
        font-weight: bold;
        position: relative;
        top: -12px;
        left: -16px;
        @include mxns.mediamin(lg) {
          top: 5px;
          left: -7px;
        }
      }
      &.free {
        color: var(--clr-brandSecondaryColor);
        position: relative;
        font-weight: bold;
        top: -14px;
        left: -16px;
        @include mxns.mediamin(lg) {
          top: 3px;
          left: -6px;
        }
      }
    }
  }
}

</style>
