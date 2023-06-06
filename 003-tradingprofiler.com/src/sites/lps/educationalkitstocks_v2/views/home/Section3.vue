<script>
import SVGMask from "../../../../../../../001-super_global_files/components/SVGMask/SVGMask.vue";

import educationalKitStocksV2Section3Transl from "../../composables/translations/pages/home/educationalKitStocksV2Section3Transl";

export default {
  name: "LP~EducationalKitStocksV2~Home~Section3",
  components: { SVGMask },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, bullets } = educationalKitStocksV2Section3Transl();

    return { title, bullets };
  },
};
</script>

<template>
  <section id="section3" class="bullets">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-7">
          <h3 v-html="title[lang]" />
          <div class="bulletsWrapper">
            <div class="bullet" v-for="(bullet, index) in bullets">
              <SVGMask :svg-encoded="bullet.svg" />
              <h4 v-html="bullet.title[lang]" />
              <p v-html="bullet.para[lang]" />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-5 pctWrapper">
          <picture>
            <source
              srcset="../../assets/imgs/signalskityellowcard.avif"
              type="image/avif"
            />
            <source
              srcset="../../assets/imgs/signalskityellowcard.webp"
              type="image/webp"
            />
            <img
              src="../../assets/imgs/signalskityellowcard.png"
              alt="Phone"
              width="285"
              height="388"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section3.bullets {
  h3 {
    text-transform: uppercase;
  }

  img {
    @include mxns.mediamin(md) {
      width: 100%;
    }
  }

  h4 {
    color: var(--clr-brandSecondaryColor-700);
  }

  .bulletsWrapper {
    --gap: 2rem;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    gap: var(--gap);
    @include mxns.mediamin(md) {
      text-align: start;
    }
    .bullet {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      @include mxns.mediamin(md) {
        align-items: flex-start;
        justify-content: flex-start;
        flex: 0 0 calc(50% - calc(var(--gap) / 2));
        max-width: calc(50% - calc(var(--gap) / 2));
      }
      > * {
        margin: 0;
      }
      .svgEncode {
        font-size: 65px;
      }
    }
  }

  .pctWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include mxns.mediamax(md) {
      padding-top: 4rem;
    }
  }
}
</style>
