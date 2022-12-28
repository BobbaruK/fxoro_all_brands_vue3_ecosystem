<script>
import languages from "../composables/translations/languages";

export default {
  components: {},
  name: "LP~ForexSignals~Header",
  props: {
    lang: String,
  },
  setup() {
    const { lpLangs, defaultLang, flagPath } = languages();

    const langsDetails = {
      lpLangs: lpLangs,
      defaultLang: defaultLang,
      flagPath: flagPath,
    };

    return { langsDetails };
  },
};
</script>

<template>
  <header id="header" class="siteHeader">
    <div class="container">
      <div class="row">
        <div class="col-12 siteHeaderInner" style="position: static">
          <div class="site-logo">
            <router-link :to="{ name: 'ForexSignalsHome', params: { lang: lang } }" class="logo">
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
    </div>
  </header>
</template>

<style lang="scss">
@use "../assets/scss/abstracts/variables" as vars;
@use "../assets/scss/abstracts/mixins" as mxns;

header#header.siteHeader {
  border-bottom: 1px solid #e4e4e4;
  padding: 1rem 0;
  .siteHeaderInner {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
}
</style>
