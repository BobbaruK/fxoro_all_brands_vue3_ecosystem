<script setup>
import demoSection5Transl from "../../composables/translations/pages/home/demoSection5Transl";

const props = defineProps({
  lang: String,
});
</script>

<template>
  <section id="section5" class="invest">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 v-html="demoSection5Transl().title[lang]" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 investInner">
          <picture>
            <source srcset="../../assets/imgs/windows.avif" type="image/avif" />
            <source srcset="../../assets/imgs/windows.webp" type="image/webp" />
            <img src="../../assets/imgs/windows.png" class="phone" alt="windows" width="128" height="124" loading="lazy" decoding="async" />
          </picture>
          <div v-html="demoSection5Transl().paras[lang]" />
        </div>
      </div>
    </div>
  </section>

  <section class="divider"></section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section5.invest {
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
  .investInner {
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

section.divider {
  background-color: #ffb401;
  padding: 1rem;
}
</style>
