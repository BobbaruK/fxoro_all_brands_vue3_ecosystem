<script>
import { onMounted } from "@vue/runtime-core";

import translationsGlossary from "../../../../../../../../001-super_global_files/composables/translationsGlossary";

import Caret from "../../../../../../../../001-super_global_files/components/Caret/Caret.vue";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);
import "highlight.js/styles/github-dark.css";

export default {
  name: "LP~DemoComponents~Components~Caret~Section1",
  components: { Caret },
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
          <h1>{{ translationsGlossary.c.caret[lang] }}</h1>
        </div>
      </div>
    </div>
    <div class="container showCase">
      <div class="row">
        <div class="col-1 dfc">
          <Caret />
        </div>
        <div class="col-11">
          <pre><code class="language-html">&lt;Caret /&gt;</code></pre>
        </div>
      </div>
      <div class="row">
        <div class="col-1 dfc">
          <Caret :caret="'caret-down'" />
        </div>
        <div class="col-11">
          <pre><code class="language-html">&lt;Caret :caret=&quot;'caret-down'&quot; /&gt;</code></pre>
        </div>
      </div>
      <div class="row">
        <div class="col-1 dfc">
          <Caret :caret="'caret-down-bold'" />
        </div>
        <div class="col-11">
          <pre><code class="language-html">&lt;Caret :caret=&quot;'caret-down-bold'&quot; /&gt;</code></pre>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
section#section1.section {
  .showCase {
    .dfc {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
    }
    .caretWrapper {
      font-size: 40px;
    }
  }
}
</style>
