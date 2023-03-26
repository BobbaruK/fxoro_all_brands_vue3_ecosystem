<script>
import { onMounted } from "@vue/runtime-core";

import translationsGlossary from "../../../../../../../../001-super_global_files/composables/translationsGlossary";

import SVGMask from "../../../../../../../../001-super_global_files/components/SVGMask/SVGMask.vue";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);
import "highlight.js/styles/github-dark.css";

export default {
  name: "LP~DemoComponents~Components~SVGMask~Section1",
  components: { SVGMask },
  props: {
    lang: String,
  },
  setup() {
    onMounted(() => {
      document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el);
      });
    });

    const svgPath1 = `url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle stroke-width='12' r='43' cx='50' cy='50' fill='none' stroke='%233A5'/%3E%3Ccircle r='6' cx='59' cy='23' fill='%23000'/%3E%3Cg stroke-linejoin='round' stroke-linecap='round' stroke-width='1' stroke='%23000' fill='none'%3E%3Cpath d='M36,36c5,0,3,2,8-1c1,2,1,3,3,2c3,0-6,7-3,8c-4-2-9,2-14-2c4-3,4-4,5-7c5,0,8,2,12,1'/%3E%3Cpath fill='%23000' d='M34,29h31c2,5,7,10,7,16l-8,1l8,1l-3,31l-5,-18l-11,18l5-34l-3-8z'/%3E%3Cpath stroke-width='2' d='M27,48h23M28,49h21l-3,28h-14l-4,-28h5l3,28h3v-28h5l-2,28m3-4h-13m-1-5h16m0-5h-16m-1-5h18m0-5h-19'/%3E%3C/g%3E%3Cpath stroke='%23F00' stroke-width='1'/%3E%3C/svg%3E%0A")`;

    const svgPath2 = `url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 100'%3E%3Ca xlink:href='http://www.tbray.org/ongoing/When/200x/2004/01/11/PostelPilgrim'%3E%3Cpath d='M10,15c10,10,10,0,40,0c30,0,30,10,40,0q-10,30-40,30q-30,0-40-30' stroke='black' fill='red'/%3E%3Cellipse stroke='black' fill='white' cx='50' cy='40' rx='22' ry='35'/%3E%3Ccircle cx='50' cy='40' r='5' stroke='black' fill='red'/%3E%3Ccircle cx='48' cy='38' r='1' fill='white'/%3E%3Cpath d='M35,45C40,75,60,75,65,45Q50,60,35,45Z' stroke='red' stroke-width='2' stroke-linejoin='round'/%3E%3Ccircle cx='40' cy='30' r='2'/%3E%3Ccircle cx='60' cy='30' r='2'/%3E%3Cpath d='M35,30q5-10,10,0q-5-30-10,0' stroke='black' fill='none'/%3E%3Cpath d='M55,30q5-10,10,0q-5-30-10,0' stroke='black' fill='none'/%3E%3C/a%3E%3C/svg%3E%0A")`;

    const svgPath3 = `url("data:image/svg+xml,%3Csvg width='55' height='80' viewBox='0 0 55 80' xmlns='http://www.w3.org/2000/svg' fill='currentColor'%3E%3Cg transform='matrix(1 0 0 -1 0 80)'%3E%3Crect width='10' height='20' rx='3'%3E%3Canimate attributeName='height' begin='0s' dur='4.3s' values='20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20' calcMode='linear' repeatCount='indefinite' /%3E%3C/rect%3E%3Crect x='15' width='10' height='80' rx='3'%3E%3Canimate attributeName='height' begin='0s' dur='2s' values='80;55;33;5;75;23;73;33;12;14;60;80' calcMode='linear' repeatCount='indefinite' /%3E%3C/rect%3E%3Crect x='30' width='10' height='50' rx='3'%3E%3Canimate attributeName='height' begin='0s' dur='1.4s' values='50;34;78;23;56;23;34;76;80;54;21;50' calcMode='linear' repeatCount='indefinite' /%3E%3C/rect%3E%3Crect x='45' width='10' height='30' rx='3'%3E%3Canimate attributeName='height' begin='0s' dur='2s' values='30;45;13;80;56;72;45;76;34;23;67;30' calcMode='linear' repeatCount='indefinite' /%3E%3C/rect%3E%3C/g%3E%3C/svg%3E")`;

    return { translationsGlossary, svgPath1, svgPath2, svgPath3 };
  },
};
</script>

<template>
  <section id="section1" class="section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>SVGMask</h1>
        </div>
      </div>
    </div>
    <div class="container showCase">
      <div class="row">
        <div class="col-12">
          <pre><code class="language-js">const svgPath1 = `url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle stroke-width='12' r='43' cx='50' cy='50' fill='none' stroke='%233A5'/%3E%3Ccircle r='6' cx='59' cy='23' fill='%23000'/%3E%3Cg stroke-linejoin='round' stroke-linecap='round' stroke-width='1' stroke='%23000' fill='none'%3E%3Cpath d='M36,36c5,0,3,2,8-1c1,2,1,3,3,2c3,0-6,7-3,8c-4-2-9,2-14-2c4-3,4-4,5-7c5,0,8,2,12,1'/%3E%3Cpath fill='%23000' d='M34,29h31c2,5,7,10,7,16l-8,1l8,1l-3,31l-5,-18l-11,18l5-34l-3-8z'/%3E%3Cpath stroke-width='2' d='M27,48h23M28,49h21l-3,28h-14l-4,-28h5l3,28h3v-28h5l-2,28m3-4h-13m-1-5h16m0-5h-16m-1-5h18m0-5h-19'/%3E%3C/g%3E%3Cpath stroke='%23F00' stroke-width='1'/%3E%3C/svg%3E%0A")`;

const svgPath2 = `url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 100'%3E%3Ca xlink:href='http://www.tbray.org/ongoing/When/200x/2004/01/11/PostelPilgrim'%3E%3Cpath d='M10,15c10,10,10,0,40,0c30,0,30,10,40,0q-10,30-40,30q-30,0-40-30' stroke='black' fill='red'/%3E%3Cellipse stroke='black' fill='white' cx='50' cy='40' rx='22' ry='35'/%3E%3Ccircle cx='50' cy='40' r='5' stroke='black' fill='red'/%3E%3Ccircle cx='48' cy='38' r='1' fill='white'/%3E%3Cpath d='M35,45C40,75,60,75,65,45Q50,60,35,45Z' stroke='red' stroke-width='2' stroke-linejoin='round'/%3E%3Ccircle cx='40' cy='30' r='2'/%3E%3Ccircle cx='60' cy='30' r='2'/%3E%3Cpath d='M35,30q5-10,10,0q-5-30-10,0' stroke='black' fill='none'/%3E%3Cpath d='M55,30q5-10,10,0q-5-30-10,0' stroke='black' fill='none'/%3E%3C/a%3E%3C/svg%3E%0A")`;

const svgPath3 = `url("data:image/svg+xml,%3Csvg width='55' height='80' viewBox='0 0 55 80' xmlns='http://www.w3.org/2000/svg' fill='currentColor'%3E%3Cg transform='matrix(1 0 0 -1 0 80)'%3E%3Crect width='10' height='20' rx='3'%3E%3Canimate attributeName='height' begin='0s' dur='4.3s' values='20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20' calcMode='linear' repeatCount='indefinite' /%3E%3C/rect%3E%3Crect x='15' width='10' height='80' rx='3'%3E%3Canimate attributeName='height' begin='0s' dur='2s' values='80;55;33;5;75;23;73;33;12;14;60;80' calcMode='linear' repeatCount='indefinite' /%3E%3C/rect%3E%3Crect x='30' width='10' height='50' rx='3'%3E%3Canimate attributeName='height' begin='0s' dur='1.4s' values='50;34;78;23;56;23;34;76;80;54;21;50' calcMode='linear' repeatCount='indefinite' /%3E%3C/rect%3E%3Crect x='45' width='10' height='30' rx='3'%3E%3Canimate attributeName='height' begin='0s' dur='2s' values='30;45;13;80;56;72;45;76;34;23;67;30' calcMode='linear' repeatCount='indefinite' /%3E%3C/rect%3E%3C/g%3E%3C/svg%3E")`;</code></pre>
        </div>
      </div>
      <div class="row">
        <div class="col-1 dfc">
          <SVGMask :svg-encoded="svgPath1" class="svgMask" />
        </div>
        <div class="col-11">
          <pre><code class="language-html">&lt;SVGMask :svg-encoded=&quot;svgPath1&quot; class=&quot;svgMask&quot; /&gt;</code></pre>
        </div>
      </div>
      <div class="row">
        <div class="col-1 dfc">
          <SVGMask :svg-encoded="svgPath2" class="svgMask" />
        </div>
        <div class="col-11">
          <pre><code class="language-html">&lt;SVGMask :svg-encoded=&quot;svgPath2&quot; class=&quot;svgMask&quot; /&gt;</code></pre>
        </div>
        <div class="col-12">
          <h2>Recommended for simple svg's</h2>
          <div class="row">
            <div class="col-1 dfc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 100 100"
                width="100"
              >
                <a xlink:href="http://www.tbray.org/ongoing/When/200x/2004/01/11/PostelPilgrim">
                  <path d="M10,15c10,10,10,0,40,0c30,0,30,10,40,0q-10,30-40,30q-30,0-40-30" stroke="black" fill="red" />
                  <ellipse stroke="black" fill="white" cx="50" cy="40" rx="22" ry="35" />
                  <circle cx="50" cy="40" r="5" stroke="black" fill="red" />
                  <circle cx="48" cy="38" r="1" fill="white" />
                  <path
                    d="M35,45C40,75,60,75,65,45Q50,60,35,45Z"
                    stroke="red"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <circle cx="40" cy="30" r="2" />
                  <circle cx="60" cy="30" r="2" />
                  <path d="M35,30q5-10,10,0q-5-30-10,0" stroke="black" fill="none" />
                  <path d="M55,30q5-10,10,0q-5-30-10,0" stroke="black" fill="none" />
                </a>
              </svg>
            </div>
            <div class="col-11" style="display: flex; flex-direction: row; align-items: center">original svg</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h2>Good for animated svg's</h2>
          <div class="row">
            <div class="col-1 dfc">
              <SVGMask :svg-encoded="svgPath3" class="svgMask" />
            </div>
            <div class="col-11">
              <pre><code class="language-html">&lt;SVGMask :svg-encoded=&quot;svgPath3&quot; class=&quot;svgMask&quot; /&gt;</code></pre>
            </div>
          </div>
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
    .svgMask {
      font-size: 50px;
    }
  }
}
</style>
