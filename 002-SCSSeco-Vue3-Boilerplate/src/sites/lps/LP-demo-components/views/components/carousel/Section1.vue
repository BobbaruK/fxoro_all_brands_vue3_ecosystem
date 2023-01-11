<script>
import { onMounted } from "@vue/runtime-core";

import translationsGlossary from "../../../../../../../../001-super_global_files/composables/translationsGlossary";

import Carousel from "../../../../../../../../001-super_global_files/components/Carousel/Carousel.vue";
import Slide from "../../../../../../../../001-super_global_files/components/Carousel/Slide.vue";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);
import "highlight.js/styles/github-dark.css";

export default {
  name: "LP~DemoComponents~Components~Carousel~Section1",
  components: { Carousel, Slide },
  props: {
    lang: String,
  },
  setup() {
    const title = {
      en: "Carousel",
      it: "Carousel",
      tr: "Carousel",
      ro: "Carousel",
      hu: "Carousel",
      ar: "Carousel",
      de: "Carousel",
      es: "Carousel",
      sv: "Carousel",
      pt: "Carousel",
      fi: "Carousel",
      pl: "Carousel",
      th: "Carousel",
      ms: "Carousel",
    };

    onMounted(() => {
      document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el);
      });
    });

    return { title };
  },
};
</script>

<template>
  <section id="section1" class="section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ title[lang] }}</h1>
        </div>
      </div>
      <section>
        <div class="row">
          <div class="col-12">
            <h2>slideTransition: 'rifle'</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <Carousel
              :lang="lang"
              :carouselDetails="{
                sliderID: 'scssecoSlider-1',
                interval: 1000,
                animDuration: 1500,
                autoplay: true,
                hoverPause: true,
                controls: 'all',
                arrows: 'text',
                reset: true,
                slideTransition: 'rifle',
                dev: true,
              }"
            >
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=1" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=2" />
              </Slide>
              <Slide class="active">
                <img src="https://picsum.photos/1920/1080?random=3" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=4" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=5" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=6" />
              </Slide>
            </Carousel>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <pre><code class="language-html">&lt;Carousel
  :lang=&quot;lang&quot;
  :carouselDetails=&quot;{
    sliderID: 'scssecoSlider-1',
    interval: 1000,
    animDuration: 1500,
    autoplay: true,
    hoverPause: true,
    controls: 'all',
    arrows: 'text',
    reset: true,
    slideTransition: 'rifle',
    dev: true,
  }&quot;
&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=1&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=2&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide class=&quot;active&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=3&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=4&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=5&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=6&quot; /&gt;
  &lt;/Slide&gt;
&lt;/Carousel&gt;</code></pre>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-12">
            <Carousel
              :lang="lang"
              :carouselDetails="{
                sliderID: 'scssecoSlider-2',
                interval: 1000,
                animDuration: 1500,
                autoplay: false,
                hoverPause: true,
                controls: 'all',
                arrows: 'text',
                reset: false,
                slideTransition: 'rifle',
                dev: true,
              }"
            >
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=1" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=2" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=3" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=4" />
              </Slide>
              <Slide class="active">
                <img src="https://picsum.photos/1920/1080?random=5" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=6" />
              </Slide>
            </Carousel>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <pre><code class="language-html">&lt;Carousel
  :lang=&quot;lang&quot;
  :carouselDetails=&quot;{
    sliderID: 'scssecoSlider-2',
    interval: 1000,
    animDuration: 1500,
    autoplay: false,
    hoverPause: true,
    controls: 'all',
    arrows: 'text',
    reset: false,
    slideTransition: 'rifle',
    dev: true,
  }&quot;
&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=1&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=2&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=3&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=4&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide class=&quot;active&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=5&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=6&quot; /&gt;
  &lt;/Slide&gt;
&lt;/Carousel&gt;</code></pre>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-12">
            <h2>slideTransition: 'jump'</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <Carousel
              :lang="lang"
              :carouselDetails="{
                sliderID: 'scssecoSlider-3',
                interval: 1000,
                animDuration: 1500,
                autoplay: true,
                hoverPause: true,
                controls: 'all',
                arrows: 'arrows',
                reset: true,
                slideTransition: 'jump',
                dev: true,
              }"
            >
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=1" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=2" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=3" />
              </Slide>
              <Slide class="active">
                <img src="https://picsum.photos/1920/1080?random=4" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=5" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=6" />
              </Slide>
            </Carousel>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <pre><code class="language-html">&lt;Carousel
  :lang=&quot;lang&quot;
  :carouselDetails=&quot;{
    sliderID: 'scssecoSlider-3',
    interval: 1000,
    animDuration: 1500,
    autoplay: true,
    hoverPause: true,
    controls: 'all',
    arrows: 'arrows',
    reset: true,
    slideTransition: 'jump',
    dev: true,
  }&quot;
&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=1&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=2&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=3&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide class=&quot;active&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=4&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=5&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=6&quot; /&gt;
  &lt;/Slide&gt;
&lt;/Carousel&gt;</code></pre>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-12">
            <Carousel
              :lang="lang"
              :carouselDetails="{
                sliderID: 'scssecoSlider-4',
                interval: 1000,
                animDuration: 1500,
                autoplay: false,
                hoverPause: true,
                controls: 'all',
                arrows: 'text',
                reset: false,
                slideTransition: 'jump',
                dev: true,
              }"
            >
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=1" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=2" />
              </Slide>
              <Slide class="active">
                <img src="https://picsum.photos/1920/1080?random=3" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=4" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=5" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=6" />
              </Slide>
            </Carousel>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <pre><code class="language-html">&lt;Carousel
  :lang=&quot;lang&quot;
  :carouselDetails=&quot;{
    sliderID: 'scssecoSlider-4',
    interval: 1000,
    animDuration: 1500,
    autoplay: false,
    hoverPause: true,
    controls: 'all',
    arrows: 'text',
    reset: false,
    slideTransition: 'jump',
    dev: true,
  }&quot;
&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=1&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=2&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide class=&quot;active&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=3&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=4&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=5&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=6&quot; /&gt;
  &lt;/Slide&gt;
&lt;/Carousel&gt;</code></pre>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-12">
            <h2>slideTransition: 'fade'</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <Carousel
              :lang="lang"
              :carouselDetails="{
                sliderID: 'scssecoSlider-5',
                interval: 1000,
                animDuration: 1500,
                autoplay: true,
                hoverPause: true,
                controls: 'all',
                arrows: 'text',
                reset: true,
                slideTransition: 'fade',
                dev: true,
              }"
            >
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=1" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=2" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=3" />
              </Slide>
              <Slide class="active">
                <img src="https://picsum.photos/1920/1080?random=4" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=5" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=6" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=7" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=8" />
              </Slide>
            </Carousel>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <pre><code class="language-html">&lt;Carousel
  :lang=&quot;lang&quot;
  :carouselDetails=&quot;{
    sliderID: 'scssecoSlider-5',
    interval: 1000,
    animDuration: 1500,
    autoplay: true,
    hoverPause: true,
    controls: 'all',
    arrows: 'text',
    reset: true,
    slideTransition: 'fade',
    dev: true,
  }&quot;
&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=1&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=2&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=3&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide class=&quot;active&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=4&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=5&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=6&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=7&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=8&quot; /&gt;
  &lt;/Slide&gt;
&lt;/Carousel&gt;</code></pre>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-12">
            <Carousel
              :lang="lang"
              :carouselDetails="{
                sliderID: 'scssecoSlider-6',
                interval: 1000,
                animDuration: 1500,
                autoplay: false,
                hoverPause: true,
                controls: 'all',
                arrows: 'text',
                reset: false,
                slideTransition: 'fade',
                dev: true,
              }"
            >
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=1" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=2" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=3" />
              </Slide>
              <Slide class="active">
                <img src="https://picsum.photos/1920/1080?random=4" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=5" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=6" />
              </Slide>
            </Carousel>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <pre><code class="language-html">&lt;Carousel
  :lang=&quot;lang&quot;
  :carouselDetails=&quot;{
    sliderID: 'scssecoSlider-6',
    interval: 1000,
    animDuration: 1500,
    autoplay: false,
    hoverPause: true,
    controls: 'all',
    arrows: 'text',
    reset: false,
    slideTransition: 'fade',
    dev: true,
  }&quot;
&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=1&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=2&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=3&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide class=&quot;active&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=4&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=5&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=6&quot; /&gt;
  &lt;/Slide&gt;
&lt;/Carousel&gt;</code></pre>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-12">
            <h2>custom controls</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <Carousel
              :lang="lang"
              :carouselDetails="{
                sliderID: 'scssecoSlider-7',
                interval: 1000,
                animDuration: 1500,
                autoplay: true,
                hoverPause: true,
                controls: 'arrows',
                arrows: 'text',
                reset: true,
                slideTransition: 'jump',
                dev: true,
              }"
            >
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=1" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=2" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=3" />
              </Slide>
              <Slide class="active">
                <img src="https://picsum.photos/1920/1080?random=4" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=5" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=6" />
              </Slide>
            </Carousel>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <pre><code class="language-html">&lt;Carousel
  :lang=&quot;lang&quot;
  :carouselDetails=&quot;{
    sliderID: 'scssecoSlider-7',
    interval: 1000,
    animDuration: 1500,
    autoplay: true,
    hoverPause: true,
    controls: 'arrows',
    arrows: 'text',
    reset: true,
    slideTransition: 'jump',
    dev: true,
  }&quot;
&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=1&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=2&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=3&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide class=&quot;active&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=4&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=5&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=6&quot; /&gt;
  &lt;/Slide&gt;
&lt;/Carousel&gt;</code></pre>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-12">
            <Carousel
              :lang="lang"
              :carouselDetails="{
                sliderID: 'scssecoSlider-8',
                interval: 1000,
                animDuration: 1500,
                autoplay: false,
                hoverPause: true,
                controls: 'dots',
                arrows: 'text',
                reset: true,
                slideTransition: 'jump',
                dev: true,
              }"
            >
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=1" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=2" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=3" />
              </Slide>
              <Slide class="active">
                <img src="https://picsum.photos/1920/1080?random=4" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=5" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=6" />
              </Slide>
            </Carousel>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <pre><code class="language-html">&lt;Carousel
  :lang=&quot;lang&quot;
  :carouselDetails=&quot;{
    sliderID: 'scssecoSlider-8',
    interval: 1000,
    animDuration: 1500,
    autoplay: false,
    hoverPause: true,
    controls: 'dots',
    arrows: 'text',
    reset: true,
    slideTransition: 'jump',
    dev: true,
  }&quot;
&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=1&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=2&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=3&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide class=&quot;active&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=4&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=5&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=6&quot; /&gt;
  &lt;/Slide&gt;
&lt;/Carousel&gt;</code></pre>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-12">
            <Carousel
              :lang="lang"
              :carouselDetails="{
                sliderID: 'scssecoSlider-9',
                interval: 1000,
                animDuration: 1500,
                autoplay: true,
                hoverPause: true,
                controls: 'none',
                arrows: 'text',
                reset: true,
                dev: true,
              }"
            >
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=1" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=2" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=3" />
              </Slide>
              <Slide class="active">
                <img src="https://picsum.photos/1920/1080?random=4" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=5" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=6" />
              </Slide>
            </Carousel>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <pre><code class="language-html">&lt;Carousel
  :lang=&quot;lang&quot;
  :carouselDetails=&quot;{
    sliderID: 'scssecoSlider-9',
    interval: 1000,
    animDuration: 1500,
    autoplay: true,
    hoverPause: true,
    controls: 'none',
    arrows: 'text',
    reset: true,
    dev: true,
  }&quot;
&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=1&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=2&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=3&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide class=&quot;active&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=4&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=5&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=6&quot; /&gt;
  &lt;/Slide&gt;
&lt;/Carousel&gt;</code></pre>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-12">
            <Carousel
              :lang="lang"
              :carouselDetails="{
                sliderID: 'scssecoSlider-10',
                interval: 1000,
                animDuration: 1500,
                autoplay: true,
                hoverPause: true,
                controls: 'dots',
                arrows: 'text',
                reset: true,
                dev: true,
              }"
            >
              <Slide data-text="one">
                <img src="https://picsum.photos/1920/1080?random=1" />
              </Slide>
              <Slide class="active" data-text="doi">
                <img src="https://picsum.photos/1920/1080?random=2" />
              </Slide>
              <Slide data-text="tres">
                <img src="https://picsum.photos/1920/1080?random=3" />
              </Slide>
              <Slide data-text="parles">
                <img src="https://picsum.photos/1920/1080?random=4" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=5" />
              </Slide>
              <Slide data-text="caterinca">
                <img src="https://picsum.photos/1920/1080?random=6" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=7" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=8" />
              </Slide>
              <Slide data-text="1532">
                <img src="https://picsum.photos/1920/1080?random=9" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=10" />
              </Slide>
            </Carousel>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <pre><code class="language-html">&lt;Carousel
  :lang=&quot;lang&quot;
  :carouselDetails=&quot;{
    sliderID: 'scssecoSlider-10',
    interval: 1000,
    animDuration: 1500,
    autoplay: true,
    hoverPause: true,
    controls: 'dots',
    arrows: 'text',
    reset: true,
    dev: true,
  }&quot;
&gt;
  &lt;Slide data-text=&quot;one&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=1&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide class=&quot;active&quot; data-text=&quot;doi&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=2&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide data-text=&quot;tres&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=3&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide data-text=&quot;parles&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=4&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=5&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide data-text=&quot;caterinca&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=6&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=7&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=8&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide data-text=&quot;1532&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=9&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=10&quot; /&gt;
  &lt;/Slide&gt;
&lt;/Carousel&gt;</code></pre>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style>
#backToTopDemoComponents_Demo {
  position: relative;
  inset: 0;
}
</style>
