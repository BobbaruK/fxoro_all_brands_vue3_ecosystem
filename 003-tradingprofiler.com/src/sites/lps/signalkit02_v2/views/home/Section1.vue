<script>
import signalKit02V2Section1Transl from "../../composables/translations/pages/home/signalKit02V2Section1Transl";

import Form from "../../../../../../../001-super_global_files/components/Form/Form.vue";

export default {
  name: "LP~SignalKit02V2~Home~Section1",
  components: { Form },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, formTitle, para } = signalKit02V2Section1Transl();

    const formDetails = {
      formID: "signalKit02V2-section1",
      layout: 4,
      button: {
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
      },
    };

    return { title, formTitle, para, formDetails };
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
            <Form :lang="lang" :formDetails="formDetails" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

#signalKit02V2-section1-form {
  padding: 0;

  .firstNameWrapper {
    @include mxns.mediamin(sm) {
      padding-inline-end: 0;
    }
  }

  .lastNameWrapper {
    @include mxns.mediamin(sm) {
      padding-inline-start: 0;
    }
  }

  .emailWrapper,
  .phoneWrapper {
    @include mxns.mediamin(md) {
      padding-inline-start: 0;
    }
  }

  .agreementWrapper {
    @include mxns.mediamin(lg) {
      padding-inline-start: 0;
    }
  }

  .agreementWrapper,
  .submitWrapper {
    @include mxns.mediamax(lg) {
      max-width: 100%;
      flex: 0 0 100%;
    }
  }

  .form-control {
    label {
      color: var(--clr-white);
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
      background-color: var(--clr-white);
      border: 1px solid var(--clr-black);
      border-radius: 0;
      color: #484848;
      font-size: 1rem;
      padding: 0.625rem 0.875rem;
      &::placeholder {
        color: var(--clr-gray-500);
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
      background-color: transparent;
      border: 2px solid var(--clr-white);
      border-radius: 0;
      color: var(--clr-white);
      font-size: 1.5rem;
      padding: 0.75rem 1.125rem;
      width: 100%;
      line-height: 0.99;
      &:hover {
        border-color: var(--clr-brandSecondaryColor);
        background-color: var(--clr-brandSecondaryColor);
      }
    }
  }
}

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
      background: linear-gradient(90deg, $bg-color ($dot-space - $dot-size), transparent 1%) center,
        linear-gradient($bg-color ($dot-space - $dot-size), transparent 1%) center, $dot-color;
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

    > * {
      position: relative;
      z-index: 1;
    }

    &::before {
      background: linear-gradient(90deg, $bg-color ($dot-space - $dot-size), transparent 1%) center,
        linear-gradient($bg-color ($dot-space - $dot-size), transparent 1%) center, $dot-color;
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
