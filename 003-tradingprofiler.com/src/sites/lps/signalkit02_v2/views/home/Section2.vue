<script>
import signalKit02V2Section2Transl from "../../composables/translations/pages/home/signalKit02V2Section2Transl";

import SVGMask from "../../../../../../../001-super_global_files/components/SVGMask/SVGMask.vue";

export default {
  name: "LP~SignalKit02V2~Home~Section2",
  components: { SVGMask },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, bullets } = signalKit02V2Section2Transl();

    return { title, bullets };
  },
};
</script>

<template>
  <section id="section2" class="bullets">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 v-html="title[lang]" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-3 bullet" v-for="(bullet, index) in bullets" :key="bullet.title[lang]">
          <SVGMask :svg-encoded="bullet.svg" />
          <h3 v-html="bullet.title[lang]" />
          <p v-html="bullet.para[lang]" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section2.bullets {
  color: var(--clr-brandPrimaryColor);
  h2 {
    text-transform: uppercase;
  }

  .bullet {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    margin-top: 2rem;
    @include mxns.mediamin(lg) {
      margin-top: 3.5rem;
    }

    > * {
      margin: 0;
    }

    span.svgEncode {
      font-size: 60px;
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 500;
    }

    p {
      color: var(--clr-gray-500);
    }
  }
}
</style>
