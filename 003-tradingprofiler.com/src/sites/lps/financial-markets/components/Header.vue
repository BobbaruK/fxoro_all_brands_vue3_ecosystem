<script>
export default {
  components: {},
  name: "LP~FinancialMarkets~Header",
  props: {
    lang: String,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <header id="header" class="siteHeader">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 siteHeaderInner" style="position: static">
          <div class="site-logo">
            <router-link :to="{ name: 'FinancialMarketsHome', params: { lang: lang } }" class="logo">
              <img src="../../../brand/assets/imgs/logos/TradingProfilerLogo-color-white.svg" alt="Logo" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use "../assets/scss/abstracts/variables" as vars;
@use "../assets/scss/abstracts/mixins" as mxns;

header#header.siteHeader {
  padding-top: 1rem !important;
  padding-bottom: 0 !important;
  .logo {
    img {
      max-width: 200px;
      @include mxns.mediamax(md) {
        max-width: 130px;
      }
    }
  }
}
</style>
