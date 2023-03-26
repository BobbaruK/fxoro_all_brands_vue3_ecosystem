<script>
import { onMounted } from "@vue/runtime-core";

import translationsGlossary from "../../../../../../../../001-super_global_files/composables/translationsGlossary";

import Countdown from "../../../../../../../../001-super_global_files/components/Countdown/Countdown.vue";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);
import "highlight.js/styles/github-dark.css";

export default {
  name: "LP~DemoComponents~Components~Countdown~Section1",
  components: { Countdown },
  props: {
    lang: String,
  },
  setup() {
    const dateTo = new Date(`March 25 2023 00:00:00`);
    const dateFrom = new Date(`February 25 2023 00:00:00`);
    const dateToStop = dateFrom;

    onMounted(() => {
      document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el);
      });
    });

    return {
      translationsGlossary,
      dateTo,
      dateFrom,
      dateToStop,
    };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ translationsGlossary.c.countdown[lang] }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div>
            <pre><code class="language-javascript">const dateTo = new Date(`March 25 2023 00:00:00`);
const dateFrom = new Date(`February 25 2023 00:00:00`);
const dateToStop = dateFrom;</code></pre>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>
            Count to <strong>{{ dateTo }}</strong>
          </h3>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown 
  :lang=&quot;lang&quot; 
  :countdown-to=&quot;dateTo&quot; 
  id=&quot;countDown0&quot; 
/&gt;</code></pre>
            <Countdown :lang="lang" :countdown-to="dateTo" id="countDown0" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown 
  :lang=&quot;lang&quot; 
  :countdown-to=&quot;dateTo&quot; 
  :hide-weeks=&quot;true&quot; 
  id=&quot;countDown1&quot; 
/&gt;</code></pre>
            <Countdown :lang="lang" :countdown-to="dateTo" :hide-weeks="true" id="countDown1" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown 
  :lang=&quot;lang&quot; 
  :countdown-to=&quot;dateTo&quot; 
  :hide-days=&quot;true&quot; 
  id=&quot;countDown2&quot; 
/&gt;</code></pre>
            <Countdown :lang="lang" :countdown-to="dateTo" :hide-days="true" id="countDown2" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown 
  :lang=&quot;lang&quot; 
  :countdown-to=&quot;dateTo&quot; 
  :hide-hours=&quot;true&quot; 
  id=&quot;countDown3&quot; 
/&gt;</code></pre>
            <Countdown :lang="lang" :countdown-to="dateTo" :hide-hours="true" id="countDown3" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown 
  :lang=&quot;lang&quot; 
  :countdown-to=&quot;dateTo&quot; 
  :hide-minutes=&quot;true&quot; 
  id=&quot;countDown4&quot; 
/&gt;</code></pre>
            <Countdown :lang="lang" :countdown-to="dateTo" :hide-minutes="true" id="countDown4" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown 
  :lang=&quot;lang&quot; 
  :countdown-to=&quot;dateTo&quot; 
  :hide-seconds=&quot;true&quot; 
  id=&quot;countDown5&quot; 
/&gt;</code></pre>
            <Countdown :lang="lang" :countdown-to="dateTo" :hide-seconds="true" id="countDown5" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown
  :lang=&quot;lang&quot;
  :countdown-to=&quot;dateTo&quot;
  :auto-remove=&quot;false&quot;
  :hide-minutes=&quot;true&quot;
  :hide-seconds=&quot;true&quot;
  id=&quot;countDown6&quot;
/&gt;</code></pre>
            <Countdown
              :lang="lang"
              :countdown-to="dateTo"
              :auto-remove="false"
              :hide-minutes="true"
              :hide-seconds="true"
              id="countDown6"
            />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html"> &lt;Countdown
  :lang=&quot;lang&quot;
  :countdown-to=&quot;dateTo&quot;
  :auto-remove=&quot;false&quot;
  :hide-days=&quot;true&quot;
  :hide-minutes=&quot;true&quot;
  id=&quot;countDown7&quot;
/&gt;</code></pre>
            <Countdown
              :lang="lang"
              :countdown-to="dateTo"
              :auto-remove="false"
              :hide-days="true"
              :hide-minutes="true"
              id="countDown7"
            />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown
  :lang=&quot;lang&quot;
  :countdown-to=&quot;dateTo&quot;
  :auto-remove=&quot;false&quot;
  :hide-weeks=&quot;true&quot;
  :hide-hours=&quot;true&quot;
  id=&quot;countDown8&quot;
/&gt;</code></pre>
            <Countdown
              :lang="lang"
              :countdown-to="dateTo"
              :auto-remove="false"
              :hide-weeks="true"
              :hide-hours="true"
              id="countDown8"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>
            Count From <strong>{{ dateFrom }}</strong>
          </h3>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown 
  :lang=&quot;lang&quot; 
  :countdown-to=&quot;dateFrom&quot; 
  id=&quot;countDown0_1&quot; 
/&gt;</code></pre>
            <Countdown :lang="lang" :countdown-to="dateFrom" id="countDown0_1" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown 
  :lang=&quot;lang&quot; 
  :countdown-to=&quot;dateFrom&quot; 
  :hide-weeks=&quot;true&quot; 
  id=&quot;countDown1_1&quot; 
/&gt;</code></pre>
            <Countdown :lang="lang" :countdown-to="dateFrom" :hide-weeks="true" id="countDown1_1" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown 
  :lang=&quot;lang&quot; 
  :countdown-to=&quot;dateFrom&quot; 
  :hide-days=&quot;true&quot; 
  id=&quot;countDown2_1&quot; 
/&gt;</code></pre>
            <Countdown :lang="lang" :countdown-to="dateFrom" :hide-days="true" id="countDown2_1" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown 
  :lang=&quot;lang&quot; 
  :countdown-to=&quot;dateFrom&quot; 
  :hide-hours=&quot;true&quot; 
  id=&quot;countDown3_1&quot; 
/&gt;</code></pre>
            <Countdown :lang="lang" :countdown-to="dateFrom" :hide-hours="true" id="countDown3_1" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown 
  :lang=&quot;lang&quot; 
  :countdown-to=&quot;dateFrom&quot; 
  :hide-minutes=&quot;true&quot; 
  id=&quot;countDown4_1&quot; 
/&gt;</code></pre>
            <Countdown :lang="lang" :countdown-to="dateFrom" :hide-minutes="true" id="countDown4_1" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown 
  :lang=&quot;lang&quot; 
  :countdown-to=&quot;dateFrom&quot; 
  :hide-seconds=&quot;true&quot; 
  id=&quot;countDown5_1&quot; 
/&gt;</code></pre>
            <Countdown :lang="lang" :countdown-to="dateFrom" :hide-seconds="true" id="countDown5_1" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown
  :lang=&quot;lang&quot;
  :countdown-to=&quot;dateFrom&quot;
  :auto-remove=&quot;false&quot;
  :hide-minutes=&quot;true&quot;
  :hide-seconds=&quot;true&quot;
  id=&quot;countDown6_1&quot;
/&gt;</code></pre>
            <Countdown
              :lang="lang"
              :countdown-to="dateFrom"
              :auto-remove="false"
              :hide-minutes="true"
              :hide-seconds="true"
              id="countDown6_1"
            />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown
  :lang=&quot;lang&quot;
  :countdown-to=&quot;dateFrom&quot;
  :auto-remove=&quot;false&quot;
  :hide-days=&quot;true&quot;
  :hide-minutes=&quot;true&quot;
  id=&quot;countDown7_1&quot;
/&gt;</code></pre>
            <Countdown
              :lang="lang"
              :countdown-to="dateFrom"
              :auto-remove="false"
              :hide-days="true"
              :hide-minutes="true"
              id="countDown7_1"
            />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown
  :lang=&quot;lang&quot;
  :countdown-to=&quot;dateFrom&quot;
  :auto-remove=&quot;false&quot;
  :hide-weeks=&quot;true&quot;
  :hide-hours=&quot;true&quot;
  id=&quot;countDown8_1&quot;
/&gt;</code></pre>
            <Countdown
              :lang="lang"
              :countdown-to="dateFrom"
              :auto-remove="false"
              :hide-weeks="true"
              :hide-hours="true"
              id="countDown8_1"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3>
            Count From <strong>{{ dateToStop }}</strong> with <strong>stopEnd: true</strong>
          </h3>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown 
  :lang=&quot;lang&quot; 
  :countdown-to=&quot;dateToStop&quot; 
  :stop-end=&quot;true&quot; 
  id=&quot;countDown0_2&quot; 
/&gt;</code></pre>
            <Countdown :lang="lang" :countdown-to="dateToStop" :stop-end="true" id="countDown0_2" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown
  :lang=&quot;lang&quot;
  :countdown-to=&quot;dateToStop&quot;
  :stop-end=&quot;true&quot;
  :hide-weeks=&quot;true&quot;
  id=&quot;countDown1_2&quot;
/&gt;</code></pre>
            <Countdown :lang="lang" :countdown-to="dateToStop" :stop-end="true" :hide-weeks="true" id="countDown1_2" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown
  :lang=&quot;lang&quot;
  :countdown-to=&quot;dateToStop&quot;
  :stop-end=&quot;true&quot;
  :hide-days=&quot;true&quot;
  id=&quot;countDown2_2&quot;
/&gt;</code></pre>
            <Countdown :lang="lang" :countdown-to="dateToStop" :stop-end="true" :hide-days="true" id="countDown2_2" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown
  :lang=&quot;lang&quot;
  :countdown-to=&quot;dateToStop&quot;
  :stop-end=&quot;true&quot;
  :hide-hours=&quot;true&quot;
  id=&quot;countDown3_2&quot;
/&gt;</code></pre>
            <Countdown :lang="lang" :countdown-to="dateToStop" :stop-end="true" :hide-hours="true" id="countDown3_2" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown
  :lang=&quot;lang&quot;
  :countdown-to=&quot;dateToStop&quot;
  :stop-end=&quot;true&quot;
  :hide-minutes=&quot;true&quot;
  id=&quot;countDown4_2&quot;
/&gt;</code></pre>
            <Countdown :lang="lang" :countdown-to="dateToStop" :stop-end="true" :hide-minutes="true" id="countDown4_2" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown
  :lang=&quot;lang&quot;
  :countdown-to=&quot;dateToStop&quot;
  :stop-end=&quot;true&quot;
  :hide-seconds=&quot;true&quot;
  id=&quot;countDown5_2&quot;
/&gt;</code></pre>
            <Countdown :lang="lang" :countdown-to="dateToStop" :stop-end="true" :hide-seconds="true" id="countDown5_2" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown
  :lang=&quot;lang&quot;
  :countdown-to=&quot;dateToStop&quot;
  :stop-end=&quot;true&quot;
  :auto-remove=&quot;false&quot;
  :hide-minutes=&quot;true&quot;
  :hide-seconds=&quot;true&quot;
  id=&quot;countDown6_2&quot;
/&gt;</code></pre>
            <Countdown
              :lang="lang"
              :countdown-to="dateToStop"
              :stop-end="true"
              :auto-remove="false"
              :hide-minutes="true"
              :hide-seconds="true"
              id="countDown6_2"
            />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown
  :lang=&quot;lang&quot;
  :countdown-to=&quot;dateToStop&quot;
  :stop-end=&quot;true&quot;
  :auto-remove=&quot;false&quot;
  :hide-days=&quot;true&quot;
  :hide-minutes=&quot;true&quot;
  id=&quot;countDown7_2&quot;
/&gt;</code></pre>
            <Countdown
              :lang="lang"
              :countdown-to="dateToStop"
              :stop-end="true"
              :auto-remove="false"
              :hide-days="true"
              :hide-minutes="true"
              id="countDown7_2"
            />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div style="border-radius: 5px; border: 1px solid black; margin: 0 0 20px; padding: 0 10px 10px">
            <pre><code class="language-html">&lt;Countdown
  :lang=&quot;lang&quot;
  :countdown-to=&quot;dateToStop&quot;
  :stop-end=&quot;true&quot;
  :auto-remove=&quot;false&quot;
  :hide-weeks=&quot;true&quot;
  :hide-hours=&quot;true&quot;
  id=&quot;countDown8_2&quot;
/&gt;</code></pre>
            <Countdown
              :lang="lang"
              :countdown-to="dateToStop"
              :stop-end="true"
              :auto-remove="false"
              :hide-weeks="true"
              :hide-hours="true"
              id="countDown8_2"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
