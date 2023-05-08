<script>
import { onMounted } from "@vue/runtime-core";

import footerTransl from "../../../../../../001-super_global_files/composables/footerTransl";

export default {
  name: "LP~OilV2~Footer",
  props: {
    lang: String,
  },
  setup() {
    const { content } = footerTransl();

    onMounted(() => {
      if (document.getElementById("year")) {
        document.getElementById("year").innerText = new Date().getFullYear(); // year
      }
    });

    return { content };
  },
};
</script>

<template>
  <footer id="footer" class="siteFooter">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 content" v-html="content[lang]"></div>
        <img src="../../../brand/assets/imgs/logos/TradingProfilerLogoSquare-color-white.svg" alt="Logo" class="logo" width="200" height="120"/>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer#footer.siteFooter {
  background-color: var(--clr-gray-700);
  color: var(--clr-white);
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
    font-size: 12px;
    line-height: 30px;
    margin-bottom: 1rem;
    margin: 0;
    max-width: 114ch;
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
