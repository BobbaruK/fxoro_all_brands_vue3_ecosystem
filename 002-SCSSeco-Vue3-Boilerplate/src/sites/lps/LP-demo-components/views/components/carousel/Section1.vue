<script>
import { onMounted, ref } from "@vue/runtime-core";

import translationsGlossary from "../../../../../../../../001-super_global_files/composables/translationsGlossary";

import Carousel from "../../../../../../../../001-super_global_files/components/Carousel/Carousel2.vue";
import reloadComponent from "../../../../../../../../001-super_global_files/composables/reloadComponent";
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
    const { componentKey } = reloadComponent();

    const carouselInterval = ref(2500);
    const carouselAnimDuration = ref(2500);
    const carouselAutoplay = ref(false);
    const carouselHoverPause = ref(true);
    const carouselControls = ref("all");
    const carouselArrows = ref("text");
    const carouselReset = ref(true);
    const carouselTransition = ref("rifle");
    const carouselResponsive = ref(true);
    const carouselDirection = ref("ltr");
    const carouselDev = ref(true);

    const carouselAutoplayTrue = () => {
      carouselAutoplay.value = true;
      componentKey.value++;
    };

    const carouselAutoplayFalse = () => {
      carouselAutoplay.value = false;
      componentKey.value++;
    };

    const carouselHoverPauseTrue = () => {
      carouselHoverPause.value = true;
      componentKey.value++;
    };

    const carouselHoverPauseFalse = () => {
      carouselHoverPause.value = false;
      componentKey.value++;
    };

    const carouselControlsAll = () => {
      carouselControls.value = "all";
      componentKey.value++;
    };
    const carouselControlsDots = () => {
      carouselControls.value = "dots";
      componentKey.value++;
    };
    const carouselControlsArrows = () => {
      carouselControls.value = "arrows";
      componentKey.value++;
    };
    const carouselControlsNone = () => {
      carouselControls.value = "none";
      componentKey.value++;
    };

    const carouselArrowsText = () => {
      carouselArrows.value = "text";
      componentKey.value++;
    };
    const carouselArrowsArrows = () => {
      carouselArrows.value = "arrows";
      componentKey.value++;
    };

    const carouselResetTrue = () => {
      carouselReset.value = true;
      componentKey.value++;
    };
    const carouselResetFalse = () => {
      carouselReset.value = false;
      componentKey.value++;
    };

    const carouselTransitionFade = () => {
      carouselTransition.value = "fade";
      componentKey.value++;
    };
    const carouselTransitionJump = () => {
      carouselTransition.value = "jump";
      componentKey.value++;
    };
    const carouselTransitionRifle = () => {
      carouselTransition.value = "rifle";
      componentKey.value++;
    };

    const carouselResponsiveTrue = () => {
      carouselResponsive.value = true;
      componentKey.value++;
    };
    const carouselResponsiveFalse = () => {
      carouselResponsive.value = false;
      componentKey.value++;
    };

    const carouselDirectionLTR = () => {
      carouselDirection.value = "ltr";
      componentKey.value++;
    };
    const carouselDirectionRTL = () => {
      carouselDirection.value = "rtl";
      componentKey.value++;
    };
    const carouselDirectionTTB = () => {
      carouselDirection.value = "ttb";
      componentKey.value++;
    };
    const carouselDirectionBTT = () => {
      carouselDirection.value = "btt";
      componentKey.value++;
    };

    const carouselDevTrue = () => {
      carouselDev.value = true;
      componentKey.value++;
    };
    const carouselDevFalse = () => {
      carouselDev.value = false;
      componentKey.value++;
    };

    onMounted(() => {
      document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el);
      });
    });

    return {
      componentKey,
      carouselInterval,
      carouselAnimDuration,
      carouselAutoplay,
      carouselHoverPause,
      carouselControls,
      carouselArrows,
      carouselReset,
      carouselTransition,
      carouselResponsive,
      carouselDirection,
      carouselDev,
      //
      carouselAutoplayTrue,
      carouselAutoplayFalse,
      carouselHoverPauseTrue,
      carouselHoverPauseFalse,
      carouselControlsAll,
      carouselControlsDots,
      carouselControlsArrows,
      carouselControlsNone,
      carouselArrowsText,
      carouselArrowsArrows,
      carouselResetTrue,
      carouselResetFalse,
      carouselTransitionFade,
      carouselTransitionJump,
      carouselTransitionRifle,
      carouselResponsiveTrue,
      carouselResponsiveFalse,
      carouselDirectionLTR,
      carouselDirectionRTL,
      carouselDirectionTTB,
      carouselDirectionBTT,
      carouselDevTrue,
      carouselDevFalse,
      translationsGlossary,
    };
  },
};
</script>

<template>
  <section id="section1" class="section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ translationsGlossary.c.carousel[lang] }}</h1>
        </div>
      </div>
      <section>
        <div class="row">
          <div class="col-12">
            <h2>settings</h2>
            <div class="settings">
              <p>
                carouselAutoplay:
                <button :class="{ active: carouselAutoplay }" @click="carouselAutoplayTrue">true</button>&nbsp;
                <button :class="{ active: !carouselAutoplay }" @click="carouselAutoplayFalse">false</button>
              </p>
              <p>
                carouselHoverPause:
                <button :class="{ active: carouselHoverPause }" @click="carouselHoverPauseTrue">true</button>&nbsp;
                <button :class="{ active: !carouselHoverPause }" @click="carouselHoverPauseFalse">false</button>
              </p>
              <p>
                carouselControls:
                <button :class="{ active: carouselControls === 'all' }" @click="carouselControlsAll">all</button>&nbsp;
                <button :class="{ active: carouselControls === 'dots' }" @click="carouselControlsDots">dots</button
                >&nbsp;
                <button :class="{ active: carouselControls === 'arrows' }" @click="carouselControlsArrows">
                  arrows</button
                >&nbsp;
                <button :class="{ active: carouselControls === 'none' }" @click="carouselControlsNone">none</button>
              </p>
              <p>
                carouselArrows:
                <button :class="{ active: carouselArrows === 'text' }" @click="carouselArrowsText">text</button>&nbsp;
                <button :class="{ active: carouselArrows === 'arrows' }" @click="carouselArrowsArrows">arrows</button>
              </p>
              <p>
                carouselReset:
                <button :class="{ active: carouselReset }" @click="carouselResetTrue">true</button>&nbsp;
                <button :class="{ active: !carouselReset }" @click="carouselResetFalse">false</button>
              </p>
              <p>
                carouselTransition:
                <button :class="{ active: carouselTransition === 'fade' }" @click="carouselTransitionFade">fade</button
                >&nbsp;
                <button :class="{ active: carouselTransition === 'jump' }" @click="carouselTransitionJump">jump</button
                >&nbsp;
                <button :class="{ active: carouselTransition === 'rifle' }" @click="carouselTransitionRifle">
                  rifle
                </button>
              </p>
              <p>
                carouselResponsive:
                <button :class="{ active: carouselResponsive }" @click="carouselResponsiveTrue">true</button>&nbsp;
                <button :class="{ active: !carouselResponsive }" @click="carouselResponsiveFalse">false</button>
              </p>
              <p>
                carouselDirection:
                <button :class="{ active: carouselDirection === 'ltr' }" @click="carouselDirectionLTR">ltr</button
                >&nbsp;
                <button :class="{ active: carouselDirection === 'rtl' }" @click="carouselDirectionRTL">rtl</button
                >&nbsp;
                <button :class="{ active: carouselDirection === 'ttb' }" @click="carouselDirectionTTB">ttb</button
                >&nbsp;
                <button :class="{ active: carouselDirection === 'btt' }" @click="carouselDirectionBTT">btt</button>
              </p>
              <p>
                carouselDev:
                <button :class="{ active: carouselDev }" @click="carouselDevTrue">true</button>&nbsp;
                <button :class="{ active: !carouselDev }" @click="carouselDevFalse">false</button>
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <Carousel
              :key="componentKey"
              :lang="lang"
              :carouselDetails="{
                sliderID: 'scssecoSlider-1',
                carouselInterval: carouselInterval,
                carouselAnimDuration: carouselAnimDuration,
                carouselAutoplay: carouselAutoplay,
                carouselHoverPause: carouselHoverPause,
                carouselControls: carouselControls,
                carouselArrows: carouselArrows,
                carouselReset: carouselReset,
                carouselTransition: carouselTransition,
                carouselResponsive: carouselResponsive,
                carouselDirection: carouselDirection,
                carouselDev: carouselDev,
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
              <Slide :data-text="translationsGlossary.a.about[lang]">
                <img src="https://picsum.photos/1920/1080?random=5" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=6" />
              </Slide>
              <Slide class="active">
                <img src="https://picsum.photos/1920/1080?random=7" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=8" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=9" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=10" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=11" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=12" />
              </Slide>
            </Carousel>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <pre><code class="language-html">&lt;Carousel
  :key=&quot;componentKey&quot;
  :lang=&quot;lang&quot;
  :carouselDetails=&quot;{
    sliderID: 'scssecoSlider-1',
    carouselInterval: carouselInterval,
    carouselAnimDuration: carouselAnimDuration,
    carouselAutoplay: carouselAutoplay,
    carouselHoverPause: carouselHoverPause,
    carouselControls: carouselControls,
    carouselArrows: carouselArrows,
    carouselReset: carouselReset,
    carouselTransition: carouselTransition,
    carouselResponsive: carouselResponsive,
    carouselDirection: carouselDirection,
    carouselDev: carouselDev,
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
  &lt;Slide :data-text=&quot;translationsGlossary.a.about[lang]&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=5&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=6&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide class=&quot;active&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=7&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=8&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=9&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=10&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=11&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=12&quot; /&gt;
  &lt;/Slide&gt;
&lt;/Carousel&gt;</code></pre>
          </div>
        </div>
      </section>
      <!-- <section>
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
                arrows: 'arrows',
                reset: false,
                direction: 'ltr',
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
      <section>
        <div class="row">
          <div class="col-12">
            <h2>slideTransition: number</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <Carousel
              :lang="lang"
              :carouselDetails="{
                sliderID: 'scssecoSlider-11',
                interval: 1000,
                animDuration: 1500,
                autoplay: true,
                hoverPause: false,
                controls: 'all',
                arrows: 'text',
                reset: false,
                slideTransition: 8,
                responsive: true,
                dev: true,
              }"
              :key="componentKey"
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
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=5" />
              </Slide>
              <Slide class="active">
                <img src="https://picsum.photos/1920/1080?random=6" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=7" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=8" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=9" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=10" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=11" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=12" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=13" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=14" />
              </Slide>
            </Carousel>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <pre><code class="language-html">&lt;Carousel
  :lang=&quot;lang&quot;
  :carouselDetails=&quot;{
    sliderID: 'scssecoSlider-11',
    interval: 1000,
    animDuration: 1500,
    autoplay: true,
    hoverPause: true,
    controls: 'all',
    arrows: 'text',
    reset: true,
    slideTransition: 6,
    responsive: true,
    dev: true,
  }&quot;
  :key=&quot;componentKey&quot;
&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=1&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide class=&quot;active&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=2&quot; /&gt;
  &lt;/Slide&gt;
  [...]
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=14&quot; /&gt;
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
                sliderID: 'scssecoSlider-12',
                interval: 1000,
                animDuration: 1500,
                autoplay: true,
                hoverPause: true,
                controls: 'all',
                arrows: 'text',
                reset: true,
                slideTransition: 12,
                responsive: true,
                dev: true,
              }"
              :key="componentKey"
            >
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=1" />
              </Slide>
              <Slide class="active">
                <img src="https://picsum.photos/1920/1080?random=2" />
              </Slide>
              <Slide>
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
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=7" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=8" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=9" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=10" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=11" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=12" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=13" />
              </Slide>
            </Carousel>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <pre><code class="language-html">&lt;Carousel
  :lang=&quot;lang&quot;
  :carouselDetails=&quot;{
    sliderID: 'scssecoSlider-12',
    interval: 1000,
    animDuration: 1500,
    autoplay: true,
    hoverPause: true,
    controls: 'all',
    arrows: 'text',
    reset: true,
    slideTransition: 12,
    responsive: true,
    dev: true,
  }&quot;
  :key=&quot;componentKey&quot;
&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=1&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide class=&quot;active&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=2&quot; /&gt;
  &lt;/Slide&gt;
  [...]
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=13&quot; /&gt;
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
                sliderID: 'scssecoSlider-13',
                interval: 1000,
                animDuration: 1500,
                autoplay: true,
                hoverPause: true,
                controls: 'all',
                arrows: 'text',
                reset: true,
                slideTransition: 3,
                responsive: false,
                dev: true,
              }"
              :key="componentKey"
            >
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=1" />
              </Slide>
              <Slide class="active">
                <img src="https://picsum.photos/1920/1080?random=2" />
              </Slide>
              <Slide>
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
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=7" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=8" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=9" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=10" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=11" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=12" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=13" />
              </Slide>
            </Carousel>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <pre><code class="language-html">&lt;Carousel
  :lang=&quot;lang&quot;
  :carouselDetails=&quot;{
    sliderID: 'scssecoSlider-13',
    interval: 1000,
    animDuration: 1500,
    autoplay: true,
    hoverPause: true,
    controls: 'all',
    arrows: 'text',
    reset: true,
    slideTransition: 3,
    responsive: false,
    dev: true,
  }&quot;
  :key=&quot;componentKey&quot;
&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=1&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide class=&quot;active&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=2&quot; /&gt;
  &lt;/Slide&gt;
  [...]
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=13&quot; /&gt;
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
                sliderID: 'scssecoSlider-14',
                interval: 1000,
                animDuration: 1500,
                autoplay: true,
                hoverPause: true,
                controls: 'all',
                arrows: 'text',
                reset: false,
                slideTransition: 2,
                responsive: false,
                dev: true,
              }"
              :key="componentKey"
            >
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=1" />
              </Slide>
              <Slide class="active">
                <img src="https://picsum.photos/1920/1080?random=2" />
              </Slide>
              <Slide>
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
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=7" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=8" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=9" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=10" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=11" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=12" />
              </Slide>
              <Slide>
                <img src="https://picsum.photos/1920/1080?random=13" />
              </Slide>
            </Carousel>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <pre><code class="language-html">&lt;Carousel
  :lang=&quot;lang&quot;
  :carouselDetails=&quot;{
    sliderID: 'scssecoSlider-14',
    interval: 1000,
    animDuration: 1500,
    autoplay: true,
    hoverPause: true,
    controls: 'all',
    arrows: 'text',
    reset: false,
    slideTransition: 2,
    responsive: false,
    dev: true,
  }&quot;
  :key=&quot;componentKey&quot;
&gt;
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=1&quot; /&gt;
  &lt;/Slide&gt;
  &lt;Slide class=&quot;active&quot;&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=2&quot; /&gt;
  &lt;/Slide&gt;
  [...]
  &lt;Slide&gt;
    &lt;img src=&quot;https://picsum.photos/1920/1080?random=13&quot; /&gt;
  &lt;/Slide&gt;
&lt;/Carousel&gt;</code></pre>
          </div>
        </div>
      </section> -->
    </div>
  </section>
</template>

<style lang="scss">
#backToTopDemoComponents_Demo {
  position: relative;
  inset: 0;
}

.scssecoCarousel__controls {
  position: relative;
  /* z-index: 5; */
}
.settings {
  // display: flex;
  // flex-direction: row;
  // flex-wrap: wrap;
  // column-gap: 4rem;
  // row-gap: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  .active {
    background: yellowgreen;
  }
}
</style>
