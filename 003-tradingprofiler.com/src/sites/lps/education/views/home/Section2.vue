<script>
import educationSection2Transl from "../../composables/translations/pages/home/educationSection2Transl";

export default {
  name: "LP~Education~Home~Section2",
  props: {
    lang: String,
  },
  setup(_, ctx) {
    // Translations
    const { para1, para2, list } = educationSection2Transl();

    return { para1, para2, list };
  },
};
</script>

<template>
  <section id="section2" class="col-12 order-3 order-md-2 content">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-8">
          <p v-html="para1[lang]"></p>
          <p v-html="para2[lang]"></p>
          <ul>
            <li v-for="(li, index) in list[lang]" :key="index" v-html="li"></li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-4 imgWrap">
          <img src="../../assets/imgs/section2/mobile.png" alt="mobile" width="443" height="654"  />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/variables" as vars;
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section2.content {
  ul {
    font-size: 17px;
    list-style: none;
    margin: 0;
    padding-left: revert;
    li {
      padding: 4px 0;
      position: relative;
      &::before {
        background-image: url(../../assets/imgs/section2/CharmCircleTick.svg);
        background-size: cover;
        background-position: center;
        content: "";
        height: 28px;
        left: -40px;
        position: absolute;
        width: 32px;
      }
    }
  }
  .imgWrap {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    img {
      pointer-events: none;
      position: relative;
      z-index: 1;
      max-width: 50%;
      @include mxns.mediamin(md) {
        bottom: -50px;
        position: relative;
        max-width: 100%;
      }
      @include mxns.mediamin(lg) {
        bottom: 0;
        margin-bottom: -80px;
      }
      @include mxns.mediamin(xl) {
        margin-bottom: 0;
        max-width: 80%;
      }
    }
  }
}
</style>
