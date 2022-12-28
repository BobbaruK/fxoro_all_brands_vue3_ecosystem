<script>
import "../../001-super_global_files/assets/scss/scsseco_global.scss";

export default {
  name: "SiteWrapper",
  components: {},
  setup() {},
};
</script>

<template>asd
  <router-view />
</template>

<style lang="scss">
#siteWrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  position: relative;
}

pre code.hljs {
  @media screen and (max-width: 575px) {
    max-width: 250px;
  }
}
</style>
