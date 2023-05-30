<script>
import freedomToTradeSection3Transl from "../../composables/translations/pages/home/freedomToTradeSection3Transl";

export default {
  name: "LP~FreedomToTrade~Home~Section3",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, content } = freedomToTradeSection3Transl();

    return { title, content };
  },
};
</script>

<template>
  <section id="section3" class="trade">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h2 v-html="title[lang]" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-7" v-html="content[lang]" />
        <div class="col-12 col-md-5 d-flex justify-content-center align-items-center">
          <!-- <img src="../../assets/imgs/devices.png" alt="Devices" /> -->

          <picture>
            <source srcset="../../assets/imgs/devices.avif" type="image/avif" />
            <source srcset="../../assets/imgs/devices.webp" type="image/webp" />
            <img
              src="../../assets/imgs/devices.png"
              alt="Phone"
              width="285"
              height="320"
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

section#section3.trade {
  background-image: image-set(
    url(../../assets/imgs/s3BG-mobile.webp),
    url(../../assets/imgs/s3BG-mobile.jpg)
  );
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--clr-white);
  text-align: center;
  @include mxns.mediamin(md) {
    background-image: image-set(
      url(../../assets/imgs/s3BG.webp),
      url(../../assets/imgs/s3BG.jpg)
    );
    text-align: start;
  }
  h2 {
    text-align: center;
  }
  h3,
  p {
    span {
      color: #f8bb39;
    }
  }
  img,
  picture {
    max-width: 400px;
    width: 100%;
    @include mxns.mediamin(md) {
      max-width: 100%;
    }
  }
}
</style>
