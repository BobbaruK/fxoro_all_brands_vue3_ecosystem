<script>
export default {
  components: {},
  name: "LP~Education~Header",
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
    <div class="container">
      <div class="row">
        <div class="col-12 siteHeaderInner">
          <router-link :to="{ name: 'EducationHome', params: { lang: lang } }">
            <img
              src="../../../brand/assets/imgs/logos/TradingProfilerLogo-color-blackstroke-black.svg"
              alt="Logo"
              class="logo"
              width="200"
              height="60"
            />
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header#header.siteHeader {
  .siteHeaderInner {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
}
</style>
