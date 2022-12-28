<script>
import Form from "../../../../../../../001-super_global_files/components/Form/Form.vue";

export default {
  name: "LP~Education~Home~Section3",
  components: { Form },
  props: {
    lang: String,
  },
  setup(_, ctx) {
    const formDetails = {
      formID: "education-section3",
      layout: 3,
      button: {
        en: "Register Now",
        it: "",
        tr: "",
        ro: "",
        hu: "",
        ar: "سجل الان",
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
    return { formDetails };
  },
};
</script>

<template>
  <section id="section3" class="col-12 order-2 order-md-3 form">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Get your free signals!</h2>
          <Form :lang="lang" :formDetails="formDetails" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/variables" as vars;
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section3.form {
  background: var(--clr-black);
  color: var(--clr-white);
  padding: calc(vars.$spacing * 2) 0 calc(calc(vars.$spacing * 2) - 1rem) 0;
  @include mxns.mediamin(md) {
    margin-top: -60px;
  }
  @include mxns.mediamin(lg) {
    margin-top: -25px;
    padding: calc(vars.$spacing * 3) 0 calc(calc(vars.$spacing * 3) - 1rem) 0;
  }
  @include mxns.mediamin(xl) {
    margin-top: -100px;
  }
  @include mxns.mediamin(xxl) {
    // margin-top: -120px;
  }
  h2 {
    background: var(--clr-brandSecondaryColor-200);
    border: 3px solid var(--clr-brandSecondaryColor);
    color: var(--clr-black);
    font-size: 20px;
    padding: 0px 5px;
    position: absolute;
    top: -45px;
    text-transform: uppercase;
    @include mxns.mediamax(sm) {
      margin: 0 15px;
    }
    @include mxns.mediamin(lg) {
      font-size: 1.75rem;
      top: -70px;
    }
  }
  form#education-section3-form {
    $borderRadius: 10px;

    position: relative;
    text-align: start;
    z-index: 2;
    @include mxns.mediamax(sm) {
      padding: 0 15px;
    }
    &::before,
    &::after {
      background: var(--clr-black);
      display: block;
      height: 100%;
      position: absolute;
      inset: 0;
      width: 1000px;
      @include mxns.mediamax(lg) {
        content: "";
      }
    }
    &::before {
      left: -1000px;
      right: auto;
    }
    &::after {
      left: auto;
      right: -1000px;
    }
    .error {
      color: var(--clr-danger);
      font-size: 80%;
      padding-bottom: 3px;
      padding-top: 1px;
    }
    .form-control {
      label {
        cursor: pointer;
        &:not(.agreement) {
          display: none;
        }
      }
      input[type="text"],
      input[type="email"],
      input[type="tel"],
      select {
        background: var(--clr-white);
        border: none;
        height: 40px;
        max-width: 100%;
        padding: 7px 10px;
        width: 100%;
        &::placeholder {
          color: var(--clr-gray-700);
        }
      }
      select option {
        margin: 40px;
        background: var(--clr-brandPrimaryColor-light);
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
      }
      .phone {
        display: flex;
        [type="text"] {
          max-width: 80px;
          // border-radius: $borderRadius 0 0 $borderRadius;
          border-right: 1px solid var(--clr-gray-100);
        }
        [type="tel"] {
          // border-radius: 0 $borderRadius $borderRadius 0;
        }
      }
      input[type="checkbox"] {
      }
    }
    button {
      background-color: var(--clr-brandSecondaryColor);
      border: medium none;
      border-radius: 0;
      color: var(--clr-black);
      cursor: pointer;
      font-size: 19px;
      font-weight: bold;
      height: 40px;
      max-width: 100%;
      padding: 5px 10px;
      text-align: center;
      text-transform: uppercase;
      width: 100%;
      &:hover {
        background-color: #ffc94c;
      }
      @include mxns.mediamin(lg) {
        font-size: 25px;
      }
    }

    .loader {
      background: rgb(0 0 0 / 0.7);
      inset: 0;
      margin: 0;
      padding: 0;
      position: absolute;
      z-index: 3;
      .lds-ring {
        div {
          border-color: var(--clr-brandSecondaryColor) transparent transparent transparent;
        }
      }
    }
  }
}
</style>
