<script>
import { onMounted } from "@vue/runtime-core";

import footerTransl from "../../../../../../001-super_global_files/composables/footerTransl";

export default {
  name: "LP~DemoComponents~Footer",
  props: {
    lang: String,
  },
  setup() {
    const { content } = footerTransl();

    return { content };
  },
};
</script>

<template>
  <footer id="footer" class="siteFooter">
    <div class="container">
      <div class="row">
        <div class="col-12" v-html="content[lang]"></div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer#footer.siteFooter {
  background-color: var(--clr-brandPrimaryColor);
  color: var(--clr-brandSecondaryColor);
}
</style>
