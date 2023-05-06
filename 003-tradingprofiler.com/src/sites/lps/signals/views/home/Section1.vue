<script>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

import signalsSection1Transl from "../../composables/translations/pages/home/signalsSection1Transl";

export default {
  name: "LP~Signals~Home~Section1",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, button } = signalsSection1Transl();

    const goToForm = () => {
      gsap.to(window, { scrollTo: ".registerForm" });
    };

    return { title, button, goToForm };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="container">
      <div class="row">
        <div class="col-12 titleWrapper">
          <h1 v-html="title[lang]" />
          <button class="scssecoBtn" @click="goToForm" v-html="button[lang]" />
          <img src="../../assets/imgs/mobile.png" alt="Mobile" class="mobile" />
          <img src="../../assets/imgs/pencils.png" alt="Pencils" class="pencils" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

.titleWrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 2rem;
  @include mxns.mediamin(md) {
    align-items: flex-start;
  }

  h1 {
    font-size: 33px;
    color: var(--clr-brandPrimaryColor);
    text-transform: uppercase;
    max-width: 20ch;
    text-align: center;
    @include mxns.mediamin(sm) {
      font-size: 41px;
    }
    @include mxns.mediamin(md) {
      text-align: start;
    }
    span {
      font-weight: 900;
      color: var(--clr-white);
      display: block;
      span {
        color: var(--clr-brandSecondaryColor);
        position: relative;
        &::before {
          width: 250px;
          content: "";
          height: 8px;
          position: absolute;
          bottom: -1rem;
          left: 50%;
          transform: translateX(-50%);

          /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#00e79e+0,00e79e+92,7db9e8+100&1+0,1+91,0+100 */
          background: -moz-linear-gradient(
            left,
            var(--clr-brandSecondaryColor) 0%,
            var(--clr-brandSecondaryColor) 81%,
            var(--clr-brandSecondaryColor) 82%,
            rgba(0, 0, 0, 0) 100%
          ); /* FF3.6-15 */
          background: -webkit-linear-gradient(
            left,
            var(--clr-brandSecondaryColor) 0%,
            var(--clr-brandSecondaryColor) 81%,
            var(--clr-brandSecondaryColor) 82%,
            rgba(0, 0, 0, 0) 100%
          ); /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(
            to right,
            var(--clr-brandSecondaryColor) 0%,
            var(--clr-brandSecondaryColor) 81%,
            var(--clr-brandSecondaryColor) 82%,
            rgba(0, 0, 0, 0) 100%
          ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00e79e', endColorstr='#007db9e8',GradientType=1 ); /* IE6-9 */

          @include mxns.mediamin(md) {
            left: 0;
            transform: translateX(0);
          }
        }
      }
    }
  }

  img {
    &.mobile {
      @include mxns.mediamax(md) {
        margin-top: 2rem;
        margin-bottom: -290px;
      }
      @include mxns.mediamin(md) {
        position: absolute;
        width: 260px;
        left: 490px;
        bottom: -50px;
      }
    }

    &.pencils {
      display: none;
      position: absolute;
      right: 90px;
      bottom: -130px;
      z-index: -1;
      @include mxns.mediamin(xl) {
        display: block;
      }
    }
  }
}

#signals-section1-form {
  .form-control {
    label {
      &:not(.agreement):not(.gdpr) {
        bottom: 5px;
        display: none;
        left: 0;
        padding: 5px;
        // pointer-events: none;
        // position: absolute;
      }
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    select {
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#41220b+0,41220b+44,c36522+100 */
      background: var(--clr-brandPrimaryColor-dark); /* Old browsers */
      background: -moz-linear-gradient(
        top,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        top,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to bottom,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

      border-radius: var(--borderRadius);
      border: 1px solid var(--clr-brandPrimaryColor-dark);
      color: var(--clr-white);
      height: 40px;
    }
    .phone {
      [type="text"] {
        border-radius: var(--borderRadius) 0 0 var(--borderRadius);
      }
      [type="tel"] {
        border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
      }
    }
    button[type="submit"] {
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#41220b+0,41220b+44,c36522+100 */
      background: var(--clr-brandPrimaryColor-dark); /* Old browsers */
      background: -moz-linear-gradient(
        top,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        top,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to bottom,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      border-radius: var(--borderRadius);
      border: 2px solid var(--clr-brandPrimaryColor-light);
      color: var(--clr-brandPrimaryColor-light);
      height: 40px;
      &:hover {
        border: 2px solid var(--clr-brandPrimaryColor);
      }
    }
  }
}
</style>
