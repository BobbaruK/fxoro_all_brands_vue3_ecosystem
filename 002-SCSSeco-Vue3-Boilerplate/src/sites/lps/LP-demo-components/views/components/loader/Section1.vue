<script>
import { onMounted } from "@vue/runtime-core";

import translationsGlossary from "../../../../../../../../001-super_global_files/composables/translationsGlossary";

import Loader from "../../../../../../../../001-super_global_files/components/Loader/Loader.vue";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);
hljs.registerLanguage("css", css);
import "highlight.js/styles/github-dark.css";

export default {
  name: "LP~DemoComponents~Components~Loader~Section1",
  components: { Loader },
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
          <h1>{{ translationsGlossary.l.loader[lang] }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="loaders">
            <div>
              <p><strong>audio</strong></p>
              <Loader :loader="'audio'" />
            </div>
            <div>
              <pre><code class="language-html">&lt;Loader :loader=&quot;'audio'&quot; /&gt;</code></pre>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="loaders">
            <div>
              <p><strong>ball-triangle</strong></p>
              <Loader :loader="'ball-triangle'" />
            </div>
            <div>
              <pre><code class="language-html">&lt;Loader :loader=&quot;'ball-triangle'&quot; /&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="loaders">
            <div>
              <p><strong>bars</strong></p>
              <Loader :loader="'bars'" />
            </div>
            <div>
              <pre><code class="language-html">&lt;Loader :loader=&quot;'bars'&quot; /&gt;</code></pre>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="loaders">
            <div>
              <p><strong>circles</strong></p>
              <Loader :loader="'circles'" />
            </div>
            <div>
              <pre><code class="language-html">&lt;Loader :loader=&quot;'circles'&quot; /&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="loaders">
            <div>
              <p><strong>grid</strong></p>
              <Loader :loader="'grid'" />
            </div>
            <div>
              <pre><code class="language-html">&lt;Loader :loader=&quot;'grid'&quot; /&gt;</code></pre>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="loaders">
            <div>
              <p><strong>hearts</strong></p>
              <Loader :loader="'hearts'" />
            </div>
            <div>
              <pre><code class="language-html">&lt;Loader :loader=&quot;'hearts'&quot; /&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="loaders">
            <div>
              <p><strong>oval</strong></p>
              <Loader :loader="'oval'" />
            </div>
            <div>
              <pre><code class="language-html">&lt;Loader :loader=&quot;'oval'&quot; /&gt;</code></pre>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="loaders">
            <div>
              <p><strong>puff</strong></p>
              <Loader :loader="'puff'" />
            </div>
            <div>
              <pre><code class="language-html">&lt;Loader :loader=&quot;'puff'&quot; /&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="loaders">
            <div>
              <p><strong>rings</strong></p>
              <Loader :loader="'rings'" />
            </div>
            <div>
              <pre><code class="language-html">&lt;Loader :loader=&quot;'rings'&quot; /&gt;</code></pre>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="loaders">
            <div>
              <p><strong>spinning-circles</strong></p>
              <Loader :loader="'spinning-circles'" />
            </div>
            <div>
              <pre><code class="language-html">&lt;Loader :loader=&quot;'spinning-circles'&quot; /&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="loaders">
            <div>
              <p><strong>tail-spin</strong></p>
              <Loader :loader="'tail-spin'" />
            </div>
            <div>
              <pre><code class="language-html">&lt;Loader :loader=&quot;'tail-spin'&quot; /&gt;</code></pre>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="loaders">
            <div>
              <p><strong>three-dots</strong></p>
              <Loader :loader="'three-dots'" />
            </div>
            <div>
              <pre><code class="language-html">&lt;Loader :loader=&quot;'three-dots'&quot; /&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Real life example</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12 example">
          <Loader :loader="'bars'" class="loaderExample" />
          <div>
            <pre><code class="language-html">&lt;Loader :loader=&quot;'bars'&quot; class=&quot;loaderExample&quot; /&gt;</code></pre>
          </div>
          <div>
            <pre><code class="language-css">.loaderExample {
  background-color: rebeccapurple;
  border-radius: 50%;
  color: aqua;
  font-size: 45px;
  height: 150px;
  width: 150px;
}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.loaders,
.loaders > div {
  align-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.loaders > div {
  justify-content: center;
  flex-direction: row;
}
.loaders {
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem 0;
  > div {
  }
  p {
    margin: 0;
  }
}
.loader {
  color: var(--clr-brandPrimaryColor);
  font-size: 60px;
}

.example {
  .loaderExample {
    background-color: rebeccapurple;
    border-radius: 50%;
    color: aqua;
    font-size: 45px;
    height: 150px;
    width: 150px;
  }
}
</style>
