<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

import demoV1ServicesSection1Transl from "../../composables/translations/pages/services/demoV1ServicesSection1Transl";
import demoV3ServicesSection1Transl from "../../composables/translations/pages/services/demoV3ServicesSection1Transl";

export default {
  name: "LP~DemoV1~Services~Section1",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    const router = useRouter();
    const lpName = router.currentRoute.value.matched[1].name;

    // Translations
    const title = ref({});
    const content = ref({});

    if (lpName === "Demo" || lpName === "DemoV2") {
      title.value = demoV1ServicesSection1Transl().title;
      content.value = demoV1ServicesSection1Transl().content;
    }

    if (lpName === "DemoV3") {
      title.value = demoV3ServicesSection1Transl().title;
      content.value = demoV3ServicesSection1Transl().content;
    }

    return { title, content };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ title[lang] }}</h1>
        </div>
        <div class="col-12" v-html="content[lang]"></div>
      </div>
    </div>
  </section>
</template>

<style></style>
