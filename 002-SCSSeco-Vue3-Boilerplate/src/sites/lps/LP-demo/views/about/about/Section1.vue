<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

import demoV1AboutSection1Transl from "../../../composables/translations/pages/about/about/demoV1AboutSection1Transl";
import demoV3AboutSection1Transl from "../../../composables/translations/pages/about/about/demoV3AboutSection1Transl";

export default {
  name: "LP~DemoV1~About~Section1",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    const router = useRouter();
    const lpName = router.currentRoute.value.matched[1].name;

    const routerAboutLPs = ref("");

    if (lpName === "Demo") {
      routerAboutLPs.value = "DemoV1AboutLP";
    }
    if (lpName === "DemoV2") {
      routerAboutLPs.value = "DemoV2AboutLP";
    }
    if (lpName === "DemoV3") {
      routerAboutLPs.value = "DemoV3AboutLP";
    }

    // Translations
    const title = ref({});
    const content = ref({});

    if (
      router.currentRoute.value.matched[1].name === "Demo" ||
      router.currentRoute.value.matched[1].name === "DemoV2"
    ) {
      title.value = demoV1AboutSection1Transl().title;
      content.value = demoV1AboutSection1Transl().content;
    }

    if (router.currentRoute.value.matched[1].name === "DemoV3") {
      title.value = demoV3AboutSection1Transl().title;
      content.value = demoV3AboutSection1Transl().content;
    }

    return { routerAboutLPs, title, content };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ title[lang] }}</h1>
          <router-link class="scssecoBtn" :to="{ name: routerAboutLPs, params: { lang: lang } }">about lp</router-link>
        </div>
        <div class="col-12" v-html="content[lang]"></div>
      </div>
    </div>
  </section>
</template>

<style></style>
