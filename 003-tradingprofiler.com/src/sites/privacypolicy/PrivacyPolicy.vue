<script>
import { onMounted, onUpdated } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

import checkLangAndMeta from "../../../../001-super_global_files/composables/checkLangAndMeta";
import languages from "./composables/languages";
import privacyPolicySection1Transl from "./composables/translations/privacyPolicySection1Transl";

import "./assets/scss/scsseco_privacypolicy.scss";

export default {
  name: "PrivacyPolicy",
  props: {
    lang: String,
  },
  setup(props) {
    const { title, section1, section2, section3, section4, section5, section6, section7 } = privacyPolicySection1Transl();

    const { lpLangs, defaultLang } = languages();
    checkLangAndMeta(props.lang, lpLangs, title);
    onUpdated(() => {
      checkLangAndMeta(props.lang, lpLangs, title);
    });

    /**
     * Redirect
     */
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      if (lpLangs.indexOf(route.params.lang) == -1) {
        router.replace({ name: "PrivacyPolicy", params: { lang: defaultLang } });
      }
    });

    return { title, section1, section2, section3, section4, section5, section6, section7 };
  },
};
</script>

<template>
  <div class="privacy-policy">
    <section id="sectionTitle">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>{{ title[lang] }}</h1>
          </div>
        </div>
      </div>
    </section>
    <section id="section1">
      <div class="container">
        <div class="row">
          <div class="col-12" v-html="section1[lang]"></div>
        </div>
      </div>
    </section>
    <section id="section2">
      <div class="container">
        <div class="row">
          <div class="col-12" v-html="section2[lang]"></div>
        </div>
      </div>
    </section>
    <section id="section3">
      <div class="container">
        <div class="row">
          <div class="col-12" v-html="section3[lang]"></div>
        </div>
      </div>
    </section>
    <section id="section4">
      <div class="container">
        <div class="row">
          <div class="col-12" v-html="section4[lang]"></div>
        </div>
      </div>
    </section>
    <section id="section4">
      <div class="container">
        <div class="row">
          <div class="col-12" v-html="section4[lang]"></div>
        </div>
      </div>
    </section>
    <section id="section5">
      <div class="container">
        <div class="row">
          <div class="col-12" v-html="section5[lang]"></div>
        </div>
      </div>
    </section>
    <section id="section6">
      <div class="container">
        <div class="row">
          <div class="col-12" v-html="section6[lang]"></div>
        </div>
      </div>
    </section>
    <section id="section7">
      <div class="container">
        <div class="row">
          <div class="col-12" v-html="section7[lang]"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@use "./assets/scss/abstracts/mixins" as mxns;

#siteWrapper {
  display: block;
}

.privacy-policy {
  h1 {
    font-weight: bold;
    margin-bottom: 2rem;
    color: black;
    margin-top: 2rem;
    text-align: center;
  }
  p,
  li {
    font-size: 18px;
  }
}
</style>
