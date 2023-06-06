<script>
export default {
  components: {},
  name: "LP~ForexBeginner~Header",
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
            <router-link
              :to="{ name: 'ForexBeginnerHome', params: { lang: lang } }"
              class="logo"
            >
              <img
                src="../../../brand/assets/imgs/logos/TradingProfilerLogo-color-black.svg"
                alt="Logo"
                width="130"
                height="40"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use "../assets/scss/abstracts/mixins" as mxns;

header#header.siteHeader {
  padding: 14px 0;
  border-bottom: 1px solid var(--clr-gray-700);
  @include mxns.mediamin(sm) {
    padding: 1.375rem 0;
  }
  .logo {
    img {
      width: 100%;
      height: auto;
      max-width: 130px;
      @include mxns.mediamin(md) {
        max-width: 200px;
      }
    }
  }
}
</style>
