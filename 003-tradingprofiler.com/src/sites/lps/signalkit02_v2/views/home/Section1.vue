<script>
import signalKit02V2Section1Transl from "../../composables/translations/pages/home/signalKit02V2Section1Transl";

import Form from "../../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

export default {
  name: "LP~SignalKit02V2~Home~Section1",
  components: { Form },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, para, formTitle } = signalKit02V2Section1Transl();

    const formBtn = {
      en: "Register Today!",
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

    return { title, para, formTitle, formBtn };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 offset-md-4 contentWrapper">
          <div class="title">
            <h1 v-html="title[lang]" />
            <div v-html="para[lang]" />
          </div>
          <div class="formWrapper">
            <h2 v-html="formTitle[lang]" />
            <Form
              class="layout2"
              :agreementType="'wBrandName'"
              :buttonText="formBtn[lang]"
              :lang="lang"
              
              :test="false"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section1.subHeader {
  $dot-size: 2px;
  $dot-space: 10px;

  .contentWrapper {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
  }

  .title,
  .formWrapper {
    padding: 20px;
    position: relative;
    @include mxns.mediamin(lg) {
      padding: 2.5rem;
    }
  }

  .title {
    $bg-color: var(--clr-brandSecondaryColor);
    $dot-color: var(--clr-brandSecondaryColor-600);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;

    @include mxns.mediamin(sm) {
      align-items: flex-start;
      text-align: start;
    }

    > * {
      position: relative;
      z-index: 1;
    }

    &::before {
      background: linear-gradient(
            90deg,
            $bg-color ($dot-space - $dot-size),
            transparent 1%
          )
          center,
        linear-gradient($bg-color ($dot-space - $dot-size), transparent 1%)
          center,
        $dot-color;
      background-size: $dot-space $dot-space;

      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      opacity: 0.9;
      z-index: 0;
    }
  }

  .formWrapper {
    $bg-color: var(--clr-brandPrimaryColor-800);
    $dot-color: var(--clr-brandPrimaryColor-700);

    display: flex;
    flex-direction: column;
    gap: 1rem;

    > * {
      position: relative;
      z-index: 1;
    }

    &::before {
      background: linear-gradient(
            90deg,
            $bg-color ($dot-space - $dot-size),
            transparent 1%
          )
          center,
        linear-gradient($bg-color ($dot-space - $dot-size), transparent 1%)
          center,
        $dot-color;
      background-size: $dot-space $dot-space;

      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      opacity: 0.9;
      z-index: 0;
    }
  }

  h1,
  p {
    color: var(--clr-white);
    margin: 0;
  }

  h1 {
    text-transform: uppercase;
    max-width: 20ch;
    span {
      display: block;
      color: var(--clr-brandSecondaryColor-800);
      font-weight: 800;
    }
  }

  h2 {
    color: var(--clr-brandSecondaryColor);
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    @include mxns.mediamin(sm) {
      text-align: start;
    }
  }

  p {
    @include mxns.mediamin(sm) {
      font-size: 20px;
    }
  }
}
</style>
