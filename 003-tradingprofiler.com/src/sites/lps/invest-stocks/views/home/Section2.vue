<script setup>
import demoSection2Transl from "../../composables/translations/pages/home/demoSection2Transl";
const props = defineProps({
  lang: String,
});
</script>

<template>
  <section id="section2" class="exchanges">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 v-html="demoSection2Transl().title[lang]" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 content" v-html="demoSection2Transl().paras[lang]" />
        <div class="col-12 col-md-6 image">
          <picture>
            <source srcset="../../assets/imgs/phone.avif" type="image/avif" />
            <source srcset="../../assets/imgs/phone.webp" type="image/webp" />
            <img src="../../assets/imgs/phone.png" class="logos" alt="Phone" width="239" height="487" loading="lazy" decoding="async" />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section2.exchanges {
  margin-top: 2rem;
  padding-top: 0;
  padding-bottom: 2rem;
  h2 {
    box-shadow: 0 0 0 100vmax var(--clr-brandSecondaryColor);
    clip-path: inset(0 -100vmax);
    background-color: var(--clr-brandSecondaryColor);
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
  }
  .content,
  .image {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
  }
  p {
    text-align: center;
    @include mxns.mediamin(sm) {
      font-size: 18px;
    }
    @include mxns.mediamin(md) {
      text-align: start;
    }
    @include mxns.mediamin(lg) {
      font-size: 26px;
      line-height: 1.2;
    }
    @include mxns.mediamin(xl) {
      font-size: 35px;
    }
  }
}
</style>
