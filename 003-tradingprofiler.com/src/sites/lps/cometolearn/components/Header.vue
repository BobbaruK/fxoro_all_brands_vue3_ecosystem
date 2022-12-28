<script>
export default {
  components: {},
  name: "LP~ComeToLearn~Header",
  props: {
    lang: String,
  },
  setup() {
    // Language
    return {};
  },
};
</script>

<template>
  <header id="header" class="siteHeader">
    <div class="row">
      <div class="col-12 siteHeaderInner">
        <router-link :to="{ name: 'ComeToLearnHome', params: { lang: lang } }">
          <img
            src="../../../brand/assets/imgs/logos/TradingProfilerLogo-color-blackstroke-white.svg"
            alt="Logo"
            class="logo"
            width="200"
            height="60"
          />
        </router-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use "../assets/scss/abstracts/mixins" as mxns;

header#header.siteHeader {
  .siteHeaderInner {
    align-items: center;
    display: flex;
    justify-content: space-between;
    img {
      margin: 10px 0 20px;
      @include mxns.mediamin(lg) {
        margin: 20px 0 30px;
      }
    }
  }
}
</style>
