<script>
import demoSection1Transl from "../../composables/translations/pages/home/demoSection1Transl";
import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";

import Form from "../../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

export default {
  name: "LP~Demo2~Home~Section1",
  components: { Form },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, content } = demoSection1Transl();

    return { title, content, translationsGlossary };
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
        <div class="col-12">
          <Form
            :agreementType="'wBrandName'"
            :buttonText="translationsGlossary.j.join[lang]"
            :lang="lang"
            :layout="3"
            :test="false"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss"></style>
