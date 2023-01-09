<script>
import { useRoute } from "vue-router";

import footerTransl from "../../../../../001-super_global_files/composables/footerTransl";

export default {
  name: "Brand~Footer",
  props: {
    lang: String,
  },
  setup() {
    const route = useRoute();

    console.log(route.params.lang);

    const { content, privacyLinkLabel } = footerTransl();

    return { route, content, privacyLinkLabel };
  },
};
</script>

<template>
  <footer id="footer" class="siteFooter">
    <div class="container">
      <div class="row">
        <div class="col-12 content" v-html="content[lang]"></div>
        <div class="col-12">
          <a class="privacyLink" :href="`${route.params.lang}/privacy-policy`">{{ privacyLinkLabel[lang] }}</a>
        </div>
        <img src="@/sites/brand/assets/imgs/logos/TradingProfilerLogoSquare-color-white.svg" alt="Logo" class="logo" width="200" height="120" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer#footer.siteFooter {
  background-color: var(--clr-gray-700);
  color: var(--clr-white);
  font-size: 12px;
  padding: 30px 0;
  text-align: center;
  .content {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
  }
  p {
    line-height: 30px;
    font-size: inherit;
    margin-bottom: 1rem;
    margin: 0;
    max-width: 114ch;
  }
  .privacyLink {
    color: var(--clr-brandSecondaryColor-400);
    display: inline-block;
    margin-top: 0.5rem;
    &:hover {
      color: var(--clr-brandSecondaryColor-600);
    }
  }
  svg.logo,
  img.logo {
    display: block;
    margin: 1rem auto 0;
    max-height: 120px;
    width: auto;
  }
}
</style>
