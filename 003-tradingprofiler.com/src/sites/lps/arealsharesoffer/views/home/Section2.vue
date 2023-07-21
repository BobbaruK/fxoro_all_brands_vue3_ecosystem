<script>
import demoSection2Transl from "../../composables/translations/pages/home/demoSection2Transl";
import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";

export default {
  name: "LP~ARealSharesOffer~Home~Section2",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { bullets } = demoSection2Transl();

    return { bullets, translationsGlossary };
  },
};
</script>

<template>
  <section id="section2" class="bullets">
    <div class="container">
      <div class="row">
        <div v-for="(bullet, index) in bullets" :key="index" class="col-12 col-sm-6 col-md-4 bullet">
          <img :src="bullet.img.src" alt="TRUST" class="img trust" :width="bullet.img.width" :height="bullet.img.height" />
          <p v-html="bullet.para[lang]" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section2.bullets {
  background-image: url(../../assets/imgs/s3-mobile.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @include mxns.mediamin(sm) {
    background-image: url(../../assets/imgs/s3-desktop.jpg);
  }
  .bullet {
    color: var(--clr-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
  }
  img {
    color: var(--clr-white);
    width: 70px;
    height: auto;
    @include mxns.mediamin(sm) {
      width: auto;
      height: 70px;
    }
  }
  p {
    margin: 0;
    text-align: center;
    strong {
      color: var(--clr-brandSecondaryColor);
      font-weight: 900;
    }
  }
}
</style>
