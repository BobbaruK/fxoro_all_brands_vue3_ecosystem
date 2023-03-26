<script>
import { onMounted, ref } from "@vue/runtime-core";

import Accordion from "../../../../../../../../001-super_global_files/components/Accordion/Accordion.vue";
import AccordionItem from "../../../../../../../../001-super_global_files/components/Accordion/AccordionItem.vue";
import Form from "../../../../../../../../001-super_global_files/components/Form/Form.vue";
import Countdown from "../../../../../../../../001-super_global_files/components/Countdown/Countdown.vue";

import translationsGlossary from "../../../../../../../../001-super_global_files/composables/translationsGlossary";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);
import "highlight.js/styles/github-dark.css";

export default {
  name: "LP~DemoComponents~Components~Accordion~Section1",
  components: { Accordion, AccordionItem, Form, Countdown },
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
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Flush true (default)</h2>
        </div>
        <div class="col-12">
          <Accordion>
            <AccordionItem>
              <template #title>Default One</template>
              <template #content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.</template>
            </AccordionItem>
            <AccordionItem class="active">
              <template #title>Default Two</template>
              <template #content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.</template>
            </AccordionItem>
            <AccordionItem>
              <template #title>Default Three</template>
              <template #content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.</template>
            </AccordionItem>
            <AccordionItem class="active">
              <template #title>Default Four</template>
              <template #content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.</template>
            </AccordionItem>
            <AccordionItem>
              <template #title>Default Five</template>
              <template #content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.</template>
            </AccordionItem>
          </Accordion>
          <pre><code class="language-html">&lt;Accordion&gt;
  &lt;AccordionItem&gt;
    &lt;template #title&gt;Default One&lt;/template&gt;
    &lt;template #content&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.&lt;/template&gt;
  &lt;/AccordionItem&gt;
  &lt;AccordionItem class=&quot;active&quot;&gt;
    &lt;template #title&gt;Default Two&lt;/template&gt;
    &lt;template #content&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.&lt;/template&gt;
  &lt;/AccordionItem&gt;
  &lt;AccordionItem&gt;
    &lt;template #title&gt;Default Three&lt;/template&gt;
    &lt;template #content&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.&lt;/template&gt;
  &lt;/AccordionItem&gt;
  &lt;AccordionItem class=&quot;active&quot;&gt;
    &lt;template #title&gt;Default Four&lt;/template&gt;
    &lt;template #content&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.&lt;/template&gt;
  &lt;/AccordionItem&gt;
  &lt;AccordionItem&gt;
    &lt;template #title&gt;Default Five&lt;/template&gt;
    &lt;template #content&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.&lt;/template&gt;
  &lt;/AccordionItem&gt;
&lt;/Accordion&gt;</code></pre>
        </div>
      </div>
      <br /><br /><br />
      <div class="row">
        <div class="col-12">
          <h2>Flush false</h2>
        </div>
        <div class="col-12">
          <Accordion :flush="false">
            <AccordionItem>
              <template #title>Flush False One</template>
              <template #content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.</template>
            </AccordionItem>
            <AccordionItem class="active">
              <template #title>Flush False Two</template>
              <template #content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.</template>
            </AccordionItem>
            <AccordionItem>
              <template #title>Flush False Three</template>
              <template #content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.</template>
            </AccordionItem>
            <AccordionItem class="active">
              <template #title>Flush False Four</template>
              <template #content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.</template>
            </AccordionItem>
            <AccordionItem>
              <template #title>Flush False Five</template>
              <template #content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.</template>
            </AccordionItem>
          </Accordion>
          <pre><code class="language-html">&lt;Accordion&gt;
  &lt;AccordionItem :flush=&quot;false&quot;&gt;
    &lt;template #title&gt;Lorem, ipsum dolor.&lt;/template&gt;
    &lt;template #content&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.&lt;/template&gt;
  &lt;/AccordionItem&gt;
  &lt;AccordionItem class=&quot;active&quot; :flush=&quot;false&quot;&gt;
    &lt;template #title&gt;Lorem, ipsum dolor.&lt;/template&gt;
    &lt;template #content&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.&lt;/template&gt;
  &lt;/AccordionItem&gt;
  &lt;AccordionItem :flush=&quot;false&quot;&gt;
    &lt;template #title&gt;Lorem, ipsum dolor.&lt;/template&gt;
    &lt;template #content&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.&lt;/template&gt;
  &lt;/AccordionItem&gt;
  &lt;AccordionItem :flush=&quot;false&quot; class=&quot;active&quot;&gt;
    &lt;template #title&gt;Lorem, ipsum dolor.&lt;/template&gt;
    &lt;template #content&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.&lt;/template&gt;
  &lt;/AccordionItem&gt;
  &lt;AccordionItem :flush=&quot;false&quot;&gt;
    &lt;template #title&gt;Lorem, ipsum dolor.&lt;/template&gt;
    &lt;template #content&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.&lt;/template&gt;
  &lt;/AccordionItem&gt;
&lt;/Accordion&gt;</code></pre>
        </div>
      </div>
      <br /><br /><br />
      <div class="row">
        <div class="col-12">
          <h2>Real Life Example</h2>
        </div>
        <div class="col-12">
          <Accordion id="realLifeExampleAccordion">
            <AccordionItem>
              <template #title>1 - Lorem, ipsum dolor.</template>
              <template #content>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore dolore consequuntur, similique quia
                harum hic praesentium earum nostrum ex aliquid impedit vel ullam! Possimus quam minus a reprehenderit,
                nisi enim.
              </template>
            </AccordionItem>
            <AccordionItem class="active">
              <template #title>2 - Lorem, ipsum dolor.</template>
              <template #content>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eum assumenda numquam distinctio ex
                dicta molestiae aperiam dolor tenetur soluta quae, eveniet accusantium dignissimos beatae optio adipisci
                harum mollitia quo ut voluptatibus! Dolores, saepe officia hic aperiam fugit facilis omnis fuga ipsam.
                Consequatur, dignissimos obcaecati odio quidem, porro eum consequuntur molestias, dolorum asperiores non
                nam ab repellat odit? Magnam ipsum consectetur eum libero earum culpa, officia error obcaecati possimus
                accusamus consequuntur tempora, ipsam, quos sint. Excepturi minima cumque ducimus. Molestiae, pariatur
                impedit. Quas quos earum, non pariatur, consequuntur nostrum perspiciatis ratione commodi adipisci at ea
                necessitatibus aspernatur sapiente! Rerum exercitationem velit eveniet consectetur, recusandae natus
                dolore maiores magni. Quae adipisci ducimus exercitationem magni incidunt dolore, harum iusto modi
                possimus nisi.
              </template>
            </AccordionItem>
            <AccordionItem class="scrollable">
              <template #title>3 - Lorem, ipsum dolor.</template>
              <template #content>
                <Form
                  :lang="lang"
                  :formDetails="{ formID: 'accordionForm', layout: 1, button: translationsGlossary.j.join }"
                />
              </template>
            </AccordionItem>
            <AccordionItem class="active">
              <template #title>4 - Lorem, ipsum dolor.</template>
              <template #content>
                <Countdown :lang="lang" :countdownTo="new Date(`December 10 2023 13:00:00`)" id="accordionCountDown" />
              </template>
            </AccordionItem>
            <AccordionItem>
              <template #title>5 - Lorem, ipsum dolor.</template>
              <template #content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sunt.</template>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../../assets/scss/abstracts/mixins" as mxns;

#realLifeExampleAccordion.scssecoAccordion {
  .scssecoAccordion__Item {
    .scssecoAccordion__Header {
      justify-content: flex-end;
      position: relative;
      button {
        background: transparent;
        cursor: pointer;
        border: medium none;
        inset: 0;
        padding: 1rem;
        position: absolute;
        text-align: start;
        transition: 0.45s;
      }
      .caretWrapper {
        pointer-events: none;
      }
    }
    .scssecoAccordion__Content {
      .countdown {
        max-height: 93px;
        .loader {
          max-height: 40px;
          max-width: 40px;
          svg {
            width: 40px;
            height: 40px;
          }
        }
      }
    }
    &.active {
      .scssecoAccordion__Header {
        button {
          background-color: var(--clr-brandSecondaryColor-400);
        }
      }
    }
    &.scrollable {
      .scssecoAccordion__Content {
        overflow-y: auto;
      }
    }
  }
}

#siteWrapper {
  form.registerForm {
    $borderRadius: 10px;

    .error {
      color: var(--clr-danger);
      font-size: 80%;
      padding-bottom: 3px;
      padding-top: 1px;
    }
    .form-control {
      label {
        cursor: pointer;
        &:not(.agreement) {
          display: none;
        }
      }
      input[type="text"],
      input[type="email"],
      input[type="tel"],
      select {
        background: var(--clr-white);
        border: 1px solid #eee;
        box-shadow: 2px 2px 5px 0px rgb(50 50 50 / 15%);
        line-height: 1.5;
        max-width: 100%;
        padding: 5px 10px;
        width: 100%;
        &::-webkit-input-placeholder {
          color: var(--clr-gray-400);
          opacity: 1;
        }
        &::-moz-placeholder {
          color: var(--clr-gray-400);
          opacity: 1;
        }
        &::-ms-placeholder {
          color: var(--clr-gray-400);
          opacity: 1;
        }
        &::placeholder {
          color: var(--clr-gray-400);
          opacity: 1;
        }
      }
      select option {
        margin: 40px;
        background: var(--clr-brandPrimaryColor-light);
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
      }
      .phone {
        display: flex;
        [type="text"] {
          max-width: 80px;
          width: 100%;
          // border-radius: $borderRadius 0 0 $borderRadius;
          border-right: 1px solid var(--clr-gray-100);
        }
        [type="tel"] {
          // border-radius: 0 $borderRadius $borderRadius 0;
        }
      }
      input[type="checkbox"] {
      }
    }
    button {
      background: var(--clr-brandSecondaryColor);
      border: 1px solid var(--clr-brandSecondaryColor);
      color: var(--clr-black);
      cursor: pointer;
      font-weight: 800;
      font-size: 18px;
      padding: 5px 20px;
      width: 100%;
      &:hover {
        background: var(--clr-black);
        color: var(--clr-brandSecondaryColor);
      }
      @include mxns.mediamin(lg) {
        font-size: 25px;
      }
    }

    .loader {
      background: rgb(0 0 0 / 0.7);
      inset: 0;
      margin: 0;
      padding: 0;
      position: absolute;
      z-index: 3;
      .lds-ring {
        div {
          border-color: var(--clr-brandSecondaryColor) transparent transparent transparent;
        }
      }
    }
  }
}
</style>
