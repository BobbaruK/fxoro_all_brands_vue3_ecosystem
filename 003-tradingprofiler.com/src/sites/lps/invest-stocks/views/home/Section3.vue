<script setup>
import demoSection3Transl from "../../composables/translations/pages/home/demoSection3Transl";

const props = defineProps({
  lang: String,
});
</script>

<template>
  <section id="section3" class="benefits">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 v-html="demoSection3Transl().title[lang]"/>
        </div>
      </div>
      <div class="row">
        <div class="col-12 benefitsInner">
          <picture>
            <source srcset="../../assets/imgs/facebook.avif" type="image/avif" />
            <source srcset="../../assets/imgs/facebook.webp" type="image/webp" />
            <img src="../../assets/imgs/facebook.png" class="phone" alt="AMAZON" width="128" height="124" loading="lazy" decoding="async" />
          </picture>
          <div v-html="demoSection3Transl().paras[lang]"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section3.benefits {
  // background-image: url(https://fxoro.com/wp-content/themes/CSSecoStarterThemeV2-master/imgs/invest-stocks/section3/bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // color: var(--clr-white);
  padding: 0 0 2rem;
  @include mxns.mediamin(md) {
    padding: 0 0 3rem;
  }
  @include mxns.mediamin(lg) {
    padding: 0 0 4rem;
  }
  h2 {
    box-shadow: 0 0 0 100vmax var(--clr-brandPrimaryColor);
    clip-path: inset(0 -100vmax);
    background-color: var(--clr-brandPrimaryColor);
    color: var(--clr-brandSecondaryColor);
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    @include mxns.mediamin(sm) {
      font-size: 20px;
      padding: 0.5rem 0;
    }
    @include mxns.mediamin(md) {
      font-size: 28px;
      margin-bottom: 2rem;
    }
    @include mxns.mediamin(lg) {
      font-size: 36px;
      padding: 1rem 0;
    }
    @include mxns.mediamin(xl) {
      font-size: 40px;
    }
    span {
      color: var(--clr-white);
    }
    i.textLogo {
      color: var(--clr-white);
    }
  }

  .benefitsInner {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    gap: 1rem;
    justify-content: flex-start;
    align-items: center;
    @include mxns.mediamin(sm) {
      // flex-direction: row;
    }
    @include mxns.mediamin(md) {
      font-size: 20px;
    }
  }
}
</style>
