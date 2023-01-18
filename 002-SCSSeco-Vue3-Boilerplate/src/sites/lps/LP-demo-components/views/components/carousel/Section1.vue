<script>
import { onMounted, ref } from "@vue/runtime-core";

import translationsGlossary from "../../../../../../../../001-super_global_files/composables/translationsGlossary";

import Carousel from "../../../../../../../../001-super_global_files/components/Carousel/Carousel.vue";
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
    const carouselTransition = ref(11);
    const carouselResponsive = ref(true);
    const carouselDirection = ref("ltr");
    const carouselDev = ref(true);

    const slideNumber = ref(null);
    const interv = ref(null);
    const animDur = ref(null);

    const intervFunct = () => {
      carouselInterval.value = interv.value.value;
      componentKey.value++;
    };

    const animDurFunct = () => {
      carouselAnimDuration.value = animDur.value.value;
      componentKey.value++;
    };

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
    const carouselTransitionNumber = () => {
      if (carouselTransition.value === null || carouselTransition.value === undefined) return;
      const sldNr = Number(slideNumber.value.value);
      carouselTransition.value = sldNr;
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
      // Real Time Settings
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
      intervFunct,
      animDurFunct,
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
      carouselTransitionNumber,
      carouselResponsiveTrue,
      carouselResponsiveFalse,
      carouselDirectionLTR,
      carouselDirectionRTL,
      carouselDirectionTTB,
      carouselDirectionBTT,
      carouselDevTrue,
      carouselDevFalse,
      translationsGlossary,
      interv,
      animDur,
      slideNumber,
      // Basic usage
      // Real Life Examples
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
            <p><a href="#realTimeSettings">Real Time Settings</a></p>
            <p><a href="#basicUsage">Basic usage</a></p>
            <p><a href="#realLifeExamples">Real Life Examples</a></p>
          </div>
        </div>
      </section>
      <section>
        <div class="row">
          <div class="col-12">
            <h2 id="realTimeSettings">Real Time Settings</h2>
            <div class="settings">
              <p>
                carouselInterval
                <input
                  ref="interv"
                  :value="carouselInterval"
                  type="number"
                  style="
                    display: inline-block;
                    width: 10ch;
                    border-color: var(--clr-brandSecondaryColor);
                    background-color: var(--clr-brandSecondaryColor);
                  "
                />
                <button @click="intervFunct">go</button>
              </p>
              <p>
                carouselAnimDuration
                <input
                  ref="animDur"
                  :value="carouselAnimDuration"
                  type="number"
                  style="
                    display: inline-block;
                    width: 10ch;
                    border-color: var(--clr-brandSecondaryColor);
                    background-color: var(--clr-brandSecondaryColor);
                  "
                />
                <button @click="animDurFunct">go</button>
              </p>
              <p>
                carouselAutoplay:
                <button :class="{ active: carouselAutoplay }" @click="carouselAutoplayTrue">true</button>
                <button :class="{ active: !carouselAutoplay }" @click="carouselAutoplayFalse">false</button>
              </p>
              <p>
                carouselHoverPause:
                <button :class="{ active: carouselHoverPause }" @click="carouselHoverPauseTrue">true</button>
                <button :class="{ active: !carouselHoverPause }" @click="carouselHoverPauseFalse">false</button>
              </p>
              <p>
                carouselControls:
                <button :class="{ active: carouselControls === 'all' }" @click="carouselControlsAll">all</button>
                <button :class="{ active: carouselControls === 'dots' }" @click="carouselControlsDots">dots</button>
                <button :class="{ active: carouselControls === 'arrows' }" @click="carouselControlsArrows">
                  arrows
                </button>
                <button :class="{ active: carouselControls === 'none' }" @click="carouselControlsNone">none</button>
              </p>
              <p>
                carouselArrows:
                <button :class="{ active: carouselArrows === 'text' }" @click="carouselArrowsText">text</button>
                <button :class="{ active: carouselArrows === 'arrows' }" @click="carouselArrowsArrows">arrows</button>
              </p>
              <p>
                carouselReset:
                <button :class="{ active: carouselReset }" @click="carouselResetTrue">true</button>
                <button :class="{ active: !carouselReset }" @click="carouselResetFalse">false</button>
              </p>
              <p>
                carouselTransition:
                <button :class="{ active: carouselTransition === 'fade' }" @click="carouselTransitionFade">fade</button>
                <button :class="{ active: carouselTransition === 'jump' }" @click="carouselTransitionJump">jump</button>
                <button :class="{ active: carouselTransition === 'rifle' }" @click="carouselTransitionRifle">
                  rifle
                </button>
                <input
                  ref="slideNumber"
                  :value="!isNaN(Number(carouselTransition)) ? Number(carouselTransition) : 1"
                  type="number"
                  style="display: inline-block; width: 5ch"
                  :style="{
                    borderColor: !isNaN(Number(carouselTransition)) ? 'var(--clr-brandSecondaryColor)' : 'black',
                    backgroundColor: !isNaN(Number(carouselTransition)) ? 'var(--clr-brandSecondaryColor)' : 'white',
                  }"
                />
                <button @click="carouselTransitionNumber">go</button>
              </p>
              <p>
                carouselResponsive:
                <button :class="{ active: carouselResponsive }" @click="carouselResponsiveTrue">true</button>
                <button :class="{ active: !carouselResponsive }" @click="carouselResponsiveFalse">false</button>
              </p>
              <p>
                carouselDirection:
                <button :class="{ active: carouselDirection === 'ltr' }" @click="carouselDirectionLTR">ltr</button>
                <button :class="{ active: carouselDirection === 'rtl' }" @click="carouselDirectionRTL">rtl</button>
                <button :class="{ active: carouselDirection === 'ttb' }" @click="carouselDirectionTTB">ttb</button>
                <button :class="{ active: carouselDirection === 'btt' }" @click="carouselDirectionBTT">btt</button>
              </p>
              <p>
                carouselDev:
                <button :class="{ active: carouselDev }" @click="carouselDevTrue">true</button>
                <button :class="{ active: !carouselDev }" @click="carouselDevFalse">false</button>
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12" id="carousel">
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
          <div class="col-12" style="margin-top: 3rem">
            <h2 id="basicUsage">Basic usage</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <pre><code class="language-html">&lt;Carousel
  :key=&quot;componentKey&quot;
  :lang=&quot;lang&quot;
  :carouselDetails=&quot;{
    sliderID: 'scssecoSlider-1',
    carouselInterval: 2500,
    carouselAnimDuration: 2500,
    carouselAutoplay: false,
    carouselHoverPause: true,
    carouselControls: 'all',
    carouselArrows: 'text',
    carouselReset: true,
    carouselTransition: 11,
    carouselResponsive: true,
    carouselDirection: 'ltr',
    carouselDev: true,
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
      <section>
        <div class="row">
          <div class="col-12">
            <h2 id="realLifeExamples">Real Life Examples</h2>
          </div>
        </div>
      </section>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Carousel
            :key="componentKey"
            :lang="lang"
            :carouselDetails="{
              sliderID: 'heroSlider',
              carouselInterval: 2500,
              carouselAnimDuration: 750,
              carouselAutoplay: true,
              carouselHoverPause: true,
              carouselControls: 'all',
              carouselArrows: 'arrows',
              carouselReset: true,
              carouselTransition: 'rifle',
              carouselResponsive: false,
              carouselDirection: 'ltr',
              carouselDev: false,
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
            <Slide>
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
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6" style="padding-top: 1rem; padding-bottom: 1rem">
          <Carousel
            :key="componentKey"
            :lang="lang"
            :carouselDetails="{
              sliderID: 'sliderTabs',
              carouselInterval: 2500,
              carouselAnimDuration: 150,
              carouselAutoplay: false,
              carouselHoverPause: true,
              carouselControls: 'dots',
              carouselArrows: 'arrows',
              carouselReset: true,
              carouselTransition: 'fade',
              carouselResponsive: false,
              carouselDirection: 'ltr',
              carouselDev: false,
            }"
          >
            <Slide data-text="Home">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sit?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur id voluptatum veritatis. Commodi
                laudantium nulla modi ipsa harum distinctio architecto vel labore beatae nemo earum eos itaque odio
                deleniti eveniet quae mollitia voluptatem veniam enim, asperiores at. Mollitia quibusdam atque repellat?
              </p>
              <p>
                Culpa soluta libero odio, dolor, necessitatibus incidunt, quaerat saepe officiis autem a quae ea! Quasi
                eos aut pariatur, soluta praesentium doloribus porro consequuntur velit quis recusandae earum corrupti?
                Quasi reprehenderit aspernatur possimus temporibus accusamus corrupti! Quasi expedita natus esse
                inventore quisquam sed, dolore consectetur atque velit iste neque voluptatibus dolorem nam possimus,
                obcaecati voluptate vero, explicabo quaerat a! Est iusto soluta a expedita, voluptatum fuga. Nesciunt
                repellat, quo in, voluptas doloremque rem vero odit debitis inventore, voluptates aut iste!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, minus nihil. Quos, aspernatur non. At
                quidem ullam culpa explicabo fuga repellat laborum asperiores, itaque non enim facere. Cum soluta harum
                debitis quibusdam eius exercitationem magnam molestias doloribus, cupiditate beatae possimus veniam
                libero architecto nemo. Nulla voluptatem sed suscipit, quia tenetur exercitationem cum. Reiciendis ea
                harum ad suscipit maxime ducimus autem!
              </p>
            </Slide>
            <Slide class="active" data-text="About">
              <h2>Lorem, ipsum dolor.</h2>
              <p>
                <img src="https://picsum.photos/1920/1080?random=3" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum excepturi qui nesciunt temporibus!
                Reprehenderit facilis dicta ullam? Quos recusandae qui commodi voluptatibus deleniti distinctio sequi
                perspiciatis dolorem ullam ratione veniam, inventore magni aliquam exercitationem numquam dicta libero
                quas possimus reiciendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, beatae alias?
                Vero ipsam earum accusantium, exercitationem quae quod odit corporis saepe ad, explicabo repellat
                eveniet nesciunt obcaecati et illum officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cumque quas expedita mollitia, quis voluptate minima dolore cupiditate optio. Earum, laudantium!
              </p>
            </Slide>
            <Slide data-text="Components">
              <div class="slideContent">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sit?</p>
                <p>
                  Culpa soluta libero odio, dolor, necessitatibus incidunt, quaerat saepe officiis autem a quae ea!
                  Quasi eos aut pariatur, soluta praesentium doloribus porro consequuntur velit quis recusandae earum
                  corrupti? Quasi reprehenderit aspernatur possimus temporibus accusamus corrupti! Quasi expedita natus
                  esse inventore quisquam sed, dolore consectetur atque velit iste neque voluptatibus dolorem nam
                  possimus, obcaecati voluptate vero, explicabo quaerat a! Est iusto soluta a expedita, voluptatum fuga.
                  Nesciunt repellat, quo in, voluptas doloremque rem vero odit debitis inventore, voluptates aut iste!
                </p>
              </div>
            </Slide>
            <Slide data-text="Contact">
              <img src="https://picsum.photos/1920/1080?random=4" />
            </Slide>
          </Carousel>
        </div>
        <div class="col-12 col-lg-6" style="padding-top: 1rem; padding-bottom: 1rem">
          <Carousel
            :key="componentKey"
            :lang="lang"
            :carouselDetails="{
              sliderID: 'sliderTabsVertical',
              carouselInterval: 2500,
              carouselAnimDuration: 750,
              carouselAutoplay: false,
              carouselHoverPause: true,
              carouselControls: 'dots',
              carouselArrows: 'arrows',
              carouselReset: true,
              carouselTransition: 'rifle',
              carouselResponsive: false,
              carouselDirection: 'btt',
              carouselDev: false,
            }"
          >
            <Slide data-text="Home">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sit?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur id voluptatum veritatis. Commodi
                laudantium nulla modi ipsa harum distinctio architecto vel labore beatae nemo earum eos itaque odio
                deleniti eveniet quae mollitia voluptatem veniam enim, asperiores at. Mollitia quibusdam atque repellat?
              </p>
              <p>
                Culpa soluta libero odio, dolor, necessitatibus incidunt, quaerat saepe officiis autem a quae ea! Quasi
                eos aut pariatur, soluta praesentium doloribus porro consequuntur velit quis recusandae earum corrupti?
                Quasi reprehenderit aspernatur possimus temporibus accusamus corrupti! Quasi expedita natus esse
                inventore quisquam sed, dolore consectetur atque velit iste neque voluptatibus dolorem nam possimus,
                obcaecati voluptate vero, explicabo quaerat a! Est iusto soluta a expedita, voluptatum fuga. Nesciunt
                repellat, quo in, voluptas doloremque rem vero odit debitis inventore, voluptates aut iste!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, minus nihil. Quos, aspernatur non. At
                quidem ullam culpa explicabo fuga repellat laborum asperiores, itaque non enim facere. Cum soluta harum
                debitis quibusdam eius exercitationem magnam molestias doloribus, cupiditate beatae possimus veniam
                libero architecto nemo. Nulla voluptatem sed suscipit, quia tenetur exercitationem cum. Reiciendis ea
                harum ad suscipit maxime ducimus autem!
              </p>
            </Slide>
            <Slide class="active" data-text="About">
              <h2>Lorem, ipsum dolor.</h2>
              <p>
                <img src="https://picsum.photos/1920/1080?random=3" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum excepturi qui nesciunt temporibus!
                Reprehenderit facilis dicta ullam? Quos recusandae qui commodi voluptatibus deleniti distinctio sequi
                perspiciatis dolorem ullam ratione veniam, inventore magni aliquam exercitationem numquam dicta libero
                quas possimus reiciendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, beatae alias?
                Vero ipsam earum accusantium, exercitationem quae quod odit corporis saepe ad, explicabo repellat
                eveniet nesciunt obcaecati et illum officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cumque quas expedita mollitia, quis voluptate minima dolore cupiditate optio. Earum, laudantium!
              </p>
            </Slide>
            <Slide data-text="Components">
              <div class="slideContent">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sit?</p>
                <p>
                  Culpa soluta libero odio, dolor, necessitatibus incidunt, quaerat saepe officiis autem a quae ea!
                  Quasi eos aut pariatur, soluta praesentium doloribus porro consequuntur velit quis recusandae earum
                  corrupti? Quasi reprehenderit aspernatur possimus temporibus accusamus corrupti! Quasi expedita natus
                  esse inventore quisquam sed, dolore consectetur atque velit iste neque voluptatibus dolorem nam
                  possimus, obcaecati voluptate vero, explicabo quaerat a! Est iusto soluta a expedita, voluptatum fuga.
                  Nesciunt repellat, quo in, voluptas doloremque rem vero odit debitis inventore, voluptates aut iste!
                </p>
              </div>
            </Slide>
            <Slide data-text="Contact">
              <img src="https://picsum.photos/1920/1080?random=4" />
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Carousel
            :key="componentKey"
            :lang="lang"
            :carouselDetails="{
              sliderID: 'sliderCards',
              carouselInterval: 2500,
              carouselAnimDuration: 750,
              carouselAutoplay: true,
              carouselHoverPause: true,
              carouselControls: 'dots',
              carouselArrows: 'arrows',
              carouselReset: true,
              carouselTransition: 3,
              carouselResponsive: false,
              carouselDirection: 'ltr',
              carouselDev: false,
            }"
          >
            <Slide>
              <div class="card">
                <img src="https://picsum.photos/1920/1080?random=1" style="width: 100%" />
                <div class="container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
            </Slide>
            <Slide>
              <div class="card">
                <img src="https://picsum.photos/1920/1080?random=2" style="width: 100%" />
                <div class="container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
            </Slide>
            <Slide>
              <div class="card">
                <img src="https://picsum.photos/1920/1080?random=3" style="width: 100%" />
                <div class="container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
            </Slide>
            <Slide>
              <div class="card">
                <img src="https://picsum.photos/1920/1080?random=4" style="width: 100%" />
                <div class="container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
            </Slide>
            <Slide>
              <div class="card">
                <img src="https://picsum.photos/1920/1080?random=5" style="width: 100%" />
                <div class="container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
            </Slide>
            <Slide>
              <div class="card">
                <img src="https://picsum.photos/1920/1080?random=6" style="width: 100%" />
                <div class="container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
            </Slide>
            <Slide class="active">
              <div class="card">
                <img src="https://picsum.photos/1920/1080?random=7" style="width: 100%" />
                <div class="container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
            </Slide>
            <Slide>
              <div class="card">
                <img src="https://picsum.photos/1920/1080?random=8" style="width: 100%" />
                <div class="container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
            </Slide>
            <Slide>
              <div class="card">
                <img src="https://picsum.photos/1920/1080?random=9" style="width: 100%" />
                <div class="container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
            </Slide>
            <Slide>
              <div class="card">
                <img src="https://picsum.photos/1920/1080?random=10" style="width: 100%" />
                <div class="container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
            </Slide>
            <Slide>
              <div class="card">
                <img src="https://picsum.photos/1920/1080?random=11" style="width: 100%" />
                <div class="container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
            </Slide>
            <Slide>
              <div class="card">
                <img src="https://picsum.photos/1920/1080?random=12" style="width: 100%" />
                <div class="container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../../assets/scss/abstracts/mixins" as mxns;

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
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
  @include mxns.mediamin(lg) {
    grid-template-columns: repeat(2, 1fr);
  }
  .active {
    background: var(--clr-brandSecondaryColor);
  }
  p {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    gap: 0.3rem;
  }
}

#heroSlider.scssecoCarousel {
  border: medium none;
  .scssecoCarousel__controls {
    position: static;
    border: medium none;
    .scssecoCarousel__controls--arrows {
      align-items: stretch;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      height: 100%;
      justify-content: space-between;
      padding: 0;
      position: absolute;
      top: 0;
      width: 100%;
      button {
        background: transparent;
        border: medium none;
        align-items: center;
        display: flex;
        width: 20%;
        outline: medium none;
        svg {
          width: 40px;
          height: 40px;
          path {
            fill: var(--clr-white);
          }
        }
        &.scssecoCarousel__controls--prev {
          justify-content: flex-start;
          /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.45+0,0+100 */
          background: -moz-linear-gradient(left, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 100%); /* FF3.6-15 */
          background: -webkit-linear-gradient(
            left,
            rgba(0, 0, 0, 0.45) 0%,
            rgba(0, 0, 0, 0) 100%
          ); /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.45) 0%,
            rgba(0, 0, 0, 0) 100%
          ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=1 ); /* IE6-9 */
          &:hover {
            /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.65+0,0+100 */
            background: -moz-linear-gradient(left, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(
              left,
              rgba(0, 0, 0, 0.65) 0%,
              rgba(0, 0, 0, 0) 100%
            ); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.65) 0%,
              rgba(0, 0, 0, 0) 100%
            ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=1 ); /* IE6-9 */
          }
        }
        &.scssecoCarousel__controls--next {
          justify-content: flex-end;
          /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1e5799+0,000000+100&0+0,0.64+100 */
          background: -moz-linear-gradient(left, rgba(30, 87, 153, 0) 0%, rgba(0, 0, 0, 0.45) 100%); /* FF3.6-15 */
          background: -webkit-linear-gradient(
            left,
            rgba(30, 87, 153, 0) 0%,
            rgba(0, 0, 0, 0.45) 100%
          ); /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(
            to right,
            rgba(30, 87, 153, 0) 0%,
            rgba(0, 0, 0, 0.45) 100%
          ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001e5799', endColorstr='#a3000000',GradientType=1 ); /* IE6-9 */

          &:hover {
            background: -moz-linear-gradient(left, rgba(30, 87, 153, 0) 0%, rgba(0, 0, 0, 0.65) 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(
              left,
              rgba(30, 87, 153, 0) 0%,
              rgba(0, 0, 0, 0.65) 100%
            ); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(
              to right,
              rgba(30, 87, 153, 0) 0%,
              rgba(0, 0, 0, 0.65) 100%
            ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001e5799', endColorstr='#a3000000',GradientType=1 ); /* IE6-9 */
          }
        }
      }
    }
    .scssecoCarousel__controls--dots {
      justify-content: center;
      gap: 0.5rem;

      position: absolute;
      inset: auto 0 0 0;
      button {
        background: var(--clr-brandSecondaryColor);
        border-radius: 50%;
        border: 1px solid var(--clr-brandPrimaryColor);
        width: 15px;
        height: 15px;
        display: block;
        text-indent: 10000px;
        &.active {
          background: var(--clr-brandPrimaryColor);
        }
      }
    }
  }
}

#sliderTabs.scssecoCarousel {
  border: medium none;
  flex-direction: column-reverse;
  .scssecoCarousel__stage {
    border: 1px solid black;
    border-radius: 10px;
    .scssecoCarousel__slide {
      &[data-slide="1"],
      &[data-slide="2"],
      &[data-slide="3"] {
        padding: 0.5rem;
        max-height: 100%;
        overflow-y: auto;
      }
      &[data-slide="2"] {
        img {
          max-width: 300px;
          float: right;
        }
      }
    }
  }
  .scssecoCarousel__controls {
    border: medium none;
    padding: 0;
    button {
      background: transparent;
      border-width: 1px;
      border-style: solid;
      border-color: var(--clr-black);
      border-radius: 5px 5px 0 0;
      padding: 1rem;
      position: relative;
      outline: none;
      bottom: -1px;
      &.active {
        border-color: var(--clr-black) var(--clr-black) var(--clr-brandSecondaryColor-100) var(--clr-black);
      }
    }
    .scssecoCarousel__controls--dots {
      padding: 0;
    }
  }
}

#sliderTabsVertical.scssecoCarousel {
  height: 100%;
  border: medium none;
  flex-direction: row-reverse;
  .scssecoCarousel__stage {
    border: 1px solid black;
    border-radius: 10px;
    .scssecoCarousel__slide {
      &[data-slide="1"],
      &[data-slide="2"],
      &[data-slide="3"] {
        padding: 0.5rem;
        max-height: 100%;
        overflow-y: auto;
      }
      &[data-slide="2"] {
        img {
          max-width: 300px;
          float: right;
        }
      }
    }
  }
  .scssecoCarousel__controls {
    display: flex;
    border: medium none;
    padding: 0;
    button {
      background: transparent;
      border-width: 1px;
      border-style: solid;
      border-color: var(--clr-black);
      border-radius: 5px 0 0 5px;
      padding: 1rem;
      position: relative;
      outline: none;
      right: -1px;
      &.active {
        border-color: var(--clr-black) var(--clr-brandSecondaryColor-100) var(--clr-black) var(--clr-black);
      }
    }
    .scssecoCarousel__controls--dots {
      display: flex;
      padding: 0;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: stretch;
    }
  }
}

#sliderCards.scssecoCarousel {
  border: medium none;
  .card {
    border: 1px solid black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 98%;
    text-align: center;
    border-radius: 5px;
    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    .container {
      padding: 2px 16px;
    }
  }
  .scssecoCarousel__stage {
    aspect-ratio: auto;
    height: 330px;
    .scssecoCarousel__slide {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      img {
        height: auto;
        max-height: 200px;
      }
      &.active {
        .card {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.6);
          scale: 1.05;
        }
      }
    }
  }
  .scssecoCarousel__controls {
    position: static;
    border: medium none;
    .scssecoCarousel__controls--arrows {
      align-items: stretch;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      height: 100%;
      justify-content: space-between;
      padding: 0;
      position: absolute;
      top: 0;
      width: 100%;
      button {
        background: transparent;
        border: medium none;
        align-items: center;
        display: flex;
        width: 20%;
        outline: medium none;
        svg {
          width: 40px;
          height: 40px;
          path {
            fill: var(--clr-white);
          }
        }
        &.scssecoCarousel__controls--prev {
          justify-content: flex-start;
          /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.45+0,0+100 */
          background: -moz-linear-gradient(left, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 100%); /* FF3.6-15 */
          background: -webkit-linear-gradient(
            left,
            rgba(0, 0, 0, 0.45) 0%,
            rgba(0, 0, 0, 0) 100%
          ); /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.45) 0%,
            rgba(0, 0, 0, 0) 100%
          ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=1 ); /* IE6-9 */
          &:hover {
            /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.65+0,0+100 */
            background: -moz-linear-gradient(left, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(
              left,
              rgba(0, 0, 0, 0.65) 0%,
              rgba(0, 0, 0, 0) 100%
            ); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.65) 0%,
              rgba(0, 0, 0, 0) 100%
            ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=1 ); /* IE6-9 */
          }
        }
        &.scssecoCarousel__controls--next {
          justify-content: flex-end;
          /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1e5799+0,000000+100&0+0,0.64+100 */
          background: -moz-linear-gradient(left, rgba(30, 87, 153, 0) 0%, rgba(0, 0, 0, 0.45) 100%); /* FF3.6-15 */
          background: -webkit-linear-gradient(
            left,
            rgba(30, 87, 153, 0) 0%,
            rgba(0, 0, 0, 0.45) 100%
          ); /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(
            to right,
            rgba(30, 87, 153, 0) 0%,
            rgba(0, 0, 0, 0.45) 100%
          ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001e5799', endColorstr='#a3000000',GradientType=1 ); /* IE6-9 */

          &:hover {
            background: -moz-linear-gradient(left, rgba(30, 87, 153, 0) 0%, rgba(0, 0, 0, 0.65) 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(
              left,
              rgba(30, 87, 153, 0) 0%,
              rgba(0, 0, 0, 0.65) 100%
            ); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(
              to right,
              rgba(30, 87, 153, 0) 0%,
              rgba(0, 0, 0, 0.65) 100%
            ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001e5799', endColorstr='#a3000000',GradientType=1 ); /* IE6-9 */
          }
        }
      }
    }
    .scssecoCarousel__controls--dots {
      justify-content: center;
      gap: 0.5rem;
      inset: auto 0 0 0;
      button {
        background: var(--clr-brandSecondaryColor);
        border-radius: 5px;
        border: 1px solid var(--clr-brandPrimaryColor);
        width: 25px;
        height: 12px;
        display: block;
        text-indent: 10000px;
        &.active {
          background: var(--clr-brandPrimaryColor);
        }
      }
    }
  }
}
</style>
