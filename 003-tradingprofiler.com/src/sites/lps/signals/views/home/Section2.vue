<script>
import signalsSection2Transl from "../../composables/translations/pages/home/signalsSection2Transl";

import Form from "../../../../../../../001-super_global_files/components/Form/Form.vue";

export default {
  name: "LP~Signals~Home~Section2",
  components: { Form },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { paras, formTitle } = signalsSection2Transl();

    const formBtn = {
      en: "Start Now",
      it: "",
      tr: "",
      ro: "",
      hu: "",
      ar: "",
      de: "",
      es: "",
      sv: "",
      pt: "",
      fi: "",
      pl: "",
      th: "",
      ms: "",
    };

    return { paras, formTitle, formBtn };
  },
};
</script>

<template>
  <section id="section2" class="subHeader">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 parasWrapper" v-html="paras[lang]" />
        <div class="col-12 col-md-6 col-lg-5 offset-lg-1">
          <h2 v-html="formTitle[lang]" />
          <Form
            :agreementType="'wBrandName'"
            :buttonText="formBtn[lang]"
            :lang="lang"
            :layout="2"
            :test="false"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

h2 {
  span {
    color: var(--clr-black);
    display: block;
    position: relative;
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 2rem;
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
        var(--clr-black) 0%,
        var(--clr-black) 81%,
        var(--clr-black) 82%,
        rgba(0, 0, 0, 0) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        left,
        var(--clr-black) 0%,
        var(--clr-black) 81%,
        var(--clr-black) 82%,
        rgba(0, 0, 0, 0) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to right,
        var(--clr-black) 0%,
        var(--clr-black) 81%,
        var(--clr-black) 82%,
        rgba(0, 0, 0, 0) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00e79e', endColorstr='#007db9e8',GradientType=1 ); /* IE6-9 */

      @include mxns.mediamin(md) {
        left: 0;
        transform: translateX(0);
      }
    }
  }
  text-align: center;
  font-size: 18px;

  @include mxns.mediamin(md) {
    text-align: start;
  }
}

section#section2.subHeader {
  padding-top: 1rem;
  .parasWrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    @include mxns.mediamax(md) {
      margin-bottom: 3rem;
    }
  }
  p {
    font-size: 18px;
    text-align: center;
    margin: 0;
    @include mxns.mediamin(md) {
      text-align: start;
    }
    &.lead {
      font-size: 19px;
      font-weight: 900;
      text-transform: uppercase;
    }
  }
}
</style>
