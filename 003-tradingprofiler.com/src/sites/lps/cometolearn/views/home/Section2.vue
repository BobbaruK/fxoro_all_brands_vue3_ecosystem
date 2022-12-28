<script>
import comeToLearnSection2Transl from "../../composables/translations/pages/home/comeToLearnSection2Transl";

export default {
  name: "LP~ComeToLearn-Home-Section2",
  props: {
    lang: String,
  },
  setup(_, ctx) {
    // Translations
    const { title, list } = comeToLearnSection2Transl();

    return { title, list };
  },
};
</script>

<template>
  <section id="section2" class="bulletsWrapper">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="bulletsInner">
            <h2 v-html="title[lang]"></h2>
            <ul>
              <li v-for="(bullet, index) in list[lang]" :key="index">
                <img :src="bullet.imgSrc" :alt="bullet.title" height="70" width="75" />
                <p v-html="bullet.title"></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/variables" as vars;
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section2.bulletsWrapper {
  padding-bottom: 30px;
  .bulletsInner {
    h2 {
      color: var(--clr-brandSecondaryColor);
      font-size: 18px;
      font-weight: 900;
      margin: 30px 0 40px 0;
      text-transform: uppercase;
      @include mxns.mediamin(sm) {
        font-size: 20px;
      }
      @include mxns.mediamin(lg) {
        font-size: 22px;
        max-width: 30ch;
      }
    }
    ul {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-around;
      list-style: none;
      margin: 0;
      padding: 0;
      @include mxns.mediamin(sm) {
        flex-direction: row;
      }
      @include mxns.mediamax(lg) {
        gap: 2rem;
      }
      li {
        align-content: center;
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: flex-start;
        img {
          height: auto;
          max-width: 90px;
          width: 100%;
          @include mxns.mediamin(lg) {
            max-height: 100px;
            max-width: 100px;
            object-fit: contain;
            object-position: bottom;
          }
        }
        p {
          margin: 0;
        }
      }
    }
  }
}
</style>
