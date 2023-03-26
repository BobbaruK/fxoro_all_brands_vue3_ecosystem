<script>
import { onMounted } from "@vue/runtime-core";

import translationsGlossary from "../../../../../../../../001-super_global_files/composables/translationsGlossary";

import BackToTop from "../../../../../../../../001-super_global_files/components/BackToTop/BackToTop.vue";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);
import "highlight.js/styles/github-dark.css";

export default {
  name: "LP~DemoComponents~Components~BackToTop~Section1",
  components: { BackToTop },
  props: {
    lang: String,
  },
  setup() {
    onMounted(() => {
      document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el);
      });
    });
    return { translationsGlossary };
  },
};
</script>

<template>
  <section id="section1" class="section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ translationsGlossary.b.backToTop[lang] }}</h1>
        </div>
      </div>
      <div class="row" style="margin-top: 55vh">
        <div class="col-12 col-lg-6">
          <div>
            <pre><code class="language-html">&lt;BackToTop class=&quot;backToTopExample&quot; :caret=&quot;'caret-down-bold'&quot; /&gt;</code></pre>
          </div>
          <div>
            <BackToTop class="backToTopExample" :caret="'caret-down-bold'" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div>
            <pre><code class="language-html">&lt;BackToTop :progress=&quot;false&quot; class=&quot;backToTopExample&quot; /&gt;</code></pre>
          </div>
          <div>
            <BackToTop :progress="false" class="backToTopExample" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
html {
  .backToTopExample {
    position: relative;
    inset: 0 !important;
  }
}
</style>
