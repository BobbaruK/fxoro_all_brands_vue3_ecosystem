<script>
import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";
import educationalKitStocksV2Section2Transl from "../../composables/translations/pages/home/educationalKitStocksV2Section2Transl";

import Form from "../../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

export default {
  name: "LP~EducationalKitStocksV2~Home~Section2",
  components: { Form },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { formTitle, formBtn } = educationalKitStocksV2Section2Transl();

    return { formTitle, formBtn, translationsGlossary };
  },
};
</script>

<template>
  <section id="section2" class="formWrapper">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 v-html="formTitle[lang]" />
          <Form
            :agreementType="'wBrandName'"
            :buttonText="formBtn[lang]"
            :lang="lang"
            :registerType="'clasic'"
            :test="false"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section2.formWrapper {
  color: var(--clr-white);

  background: repeating-linear-gradient(
    -45deg,
    var(--clr-black),
    var(--clr-black) 1px,
    var(--clr-gray-900) 2px,
    var(--clr-gray-900) 4px
  );
  @include mxns.mediamin(lg) {
    background: rgba(15, 15, 15, 0.5);
    background: hsla(0, 0%, 0%, 0.5);
    margin-top: 100px;
  }
  h2 {
    text-align: center;
    text-transform: uppercase;
  }
}

form.registerForm {
  padding: 0 0.5rem;
  margin-top: 1.6875rem;
  .registerFormInner {
    display: grid;
    @include mxns.mediamin(sm) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
    }
    @include mxns.mediamin(lg) {
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }
    .form-control {
      position: relative;

      &.emailWrapper,
      &.countryWrapper,
      &.phoneNumberWrapper,
      &.agreementWrapper,
      &.submitButtonWrapper {
        @include mxns.mediaminmax(sm, lg) {
          grid-column-start: 1;
          grid-column-end: 3;
        }
      }

      &.emailWrapper {
        @include mxns.mediamin(lg) {
          grid-column-start: 3;
          grid-column-end: 5;
        }
      }
      &.countryWrapper {
        @include mxns.mediamin(lg) {
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 2;
          grid-row-end: 3;
        }
      }
      &.phoneNumberWrapper {
        @include mxns.mediamin(lg) {
          grid-column-start: 3;
          grid-column-end: 5;
          grid-row-start: 2;
          grid-row-end: 3;
        }
      }
      &.agreementWrapper {
        @include mxns.mediamin(lg) {
          grid-column-start: 1;
          grid-column-end: 7;
          grid-row-start: 3;
          grid-row-end: 4;
        }
      }
      &.submitButtonWrapper {
        @include mxns.mediamin(lg) {
          grid-column-start: 5;
          grid-column-end: 7;
          grid-row-start: 1;
          grid-row-end: 3;
        }
      }

      .error {
        position: absolute;
      }

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
        height: 40px;
        width: 100%;

        font-size: 14px;

        background: #fff;
        border-radius: 0px;
        border: solid 1px #707070;
        color: #000;

        &::placeholder {
          color: var(--clr-gray-700);
        }
      }
      .phone {
        [type="text"] {
          // border-radius: var(--borderRadius) 0 0 var(--borderRadius);
        }
        [type="tel"] {
          // border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
        }
      }
      button[type="submit"] {
        background: var(--clr-brandSecondaryColor);
        color: var(--clr-white);
        border-bottom: 6px solid var(--clr-brandSecondaryColor-700);
        width: 100%;
        font-size: 24px;
        height: 100%;
        padding: 1rem 2rem;
        font-weight: bold;
        text-shadow: 3px 3px 3px var(--clr-brandSecondaryColor-700);
        &:hover {
          background: var(--clr-brandSecondaryColor-700);
          border-bottom: 6px solid var(--clr-brandSecondaryColor);
        }
      }
    }
  }
}
</style>
