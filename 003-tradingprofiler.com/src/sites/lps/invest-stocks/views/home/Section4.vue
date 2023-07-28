<script setup>
import demoSection4Transl from "../../composables/translations/pages/home/demoSection4Transl";

const props = defineProps({
  lang: String,
});
</script>

<template>
  <section id="section4" class="pricing">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 v-html="demoSection4Transl().title[lang]"/>
        </div>
      </div>
      <div class="row">
        <div class="col-12 pricingInner">
          <picture>
            <source srcset="../../assets/imgs/google.avif" type="image/avif" />
            <source srcset="../../assets/imgs/google.webp" type="image/webp" />
            <img src="../../assets/imgs/google.png" class="phone" alt="AMAZON" width="128" height="124" loading="lazy" decoding="async" />
          </picture>
          <div v-html="demoSection4Transl().paras[lang]"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section4.pricing {
  padding: 0 0 2rem;
  @include mxns.mediamin(md) {
    padding: 0 0 3rem;
  }
  @include mxns.mediamin(lg) {
    padding: 0 0 4rem;
  }
  h2 {
    box-shadow: 0 0 0 100vmax var(--clr-brandSecondaryColor);
    clip-path: inset(0 -100vmax);
    background-color: var(--clr-brandSecondaryColor);
    color: var(--clr-brandPrimaryColor);
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    @include mxns.mediamin(md) {
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

  .pricingInner {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    gap: 1rem;
    justify-content: flex-start;
    align-items: center;
    @include mxns.mediamin(md) {
      // flex-direction: row;
    }
    @include mxns.mediamin(md) {
      font-size: 20px;
    }
  }
}
</style>
