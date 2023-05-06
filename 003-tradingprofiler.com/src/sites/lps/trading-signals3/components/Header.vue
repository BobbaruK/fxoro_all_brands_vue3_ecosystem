<script>
export default {
  components: {},
  name: "LP~Demo2~Header",
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
    <div class="container">
      <div class="row">
        <div class="col-12 siteHeaderInner" style="position: static">
          <div class="site-logo">
            <router-link :to="{ name: 'SignalsHome', params: { lang: lang } }" class="logo">
              <img src="../../../brand/assets/imgs/logos/TradingProfilerLogo-color-black.svg" alt="Logo" />
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
  padding: 1rem 0 !important;
  .siteHeaderInner {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .logo {
    img {
      max-width: 200px;
    }
  }
}
</style>
