<script>
import SVGMask from "../../../../../../../001-super_global_files/components/SVGMask/SVGMask.vue";

import freedomToTradeSection2Transl from "../../composables/translations/pages/home/freedomToTradeSection2Transl";

export default {
  name: "LP~FreedomToTrade~Home~Section3",
  components: { SVGMask },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { titleSection, bullets } = freedomToTradeSection2Transl();

    return { titleSection, bullets };
  },
};
</script>

<template>
  <section id="section2" class="tools">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 titleSection">
          <h2 v-html="titleSection[lang]" />
        </div>
      </div>
      <div class="bullets row">
        <div
          v-for="(bullet, index) in bullets"
          :key="bullet.title[lang]"
          :class="{
            'col-12': true,
            'col-md-6': index < bullets.length - 1,
            bullet: true,
            last: index === bullets.length - 1,
          }"
        >
          <div class="bulletInner">
            <div class="title">
              <h3 v-html="bullet.title[lang]" />
              <SVGMask :svg-encoded="bullet.image" />
            </div>
            <div class="desc">
              <p v-html="bullet.para[lang]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section2.tools {
  .container-fluid {
    max-width: 850px;
  }
  .titleSection {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    text-align: center;
    max-width: 30ch;
  }
  .bullets {
    counter-reset: bullet;
    h3 {
      max-width: 20ch;
      margin: 0;
      &::before {
        counter-increment: bullet;
        content: counter(bullet) ". ";
      }
    }
    p {
      margin: 0;
    }
    .bullet {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: stretch;
      &:not(:first-child):not(:nth-child(2)) {
        margin-top: 1.5rem;
      }
      &:nth-child(2) {
        @include mxns.mediamax(md) {
          margin-top: 1.5rem;
        }
      }
      .bulletInner {
        border: 2px solid var(--clr-black);
        border-radius: 10px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: stretch;
        gap: 1rem;
      }
      &:last-child:not(.last) {
        .bulletInner {
          @include mxns.mediamin(md) {
            text-align: end;
            // align-items: flex-end;
          }
        }
        .title {
          @include mxns.mediamin(md) {
            flex-direction: row-reverse;
          }
        }
      }
      &.last {
        @include mxns.mediamin(md) {
          text-align: center;
        }
        .bulletInner {
          width: 100%;
        }
        .title {
          flex-direction: row;
          @include mxns.mediamin(md) {
            display: flex;
            flex-direction: column-reverse;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
          }
          h3 {
            @include mxns.mediamin(md) {
              max-width: none;
            }
          }
        }
      }
    }
    .title {
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 1rem;
      justify-content: space-between;
      @include mxns.mediamin(md) {
        // justify-content: flex-start;
      }
    }
    .svgEncode {
      color: var(--clr-brandPrimaryColor);
      font-size: 85px;
    }
  }
}
</style>
