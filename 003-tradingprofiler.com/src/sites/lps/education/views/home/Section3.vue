<script>
import Form from "../../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

export default {
  name: "LP~Education~Home~Section3",
  components: { Form },
  props: {
    lang: String,
  },
  setup(_, ctx) {
    const formBtn = {
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
    };
    return { formBtn };
  },
};
</script>

<template>
  <section id="section3" class="col-12 order-2 order-md-3 form">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Get your free signals!</h2>
          <Form
            class="layout2"
            :agreementType="'wBrandName'"
            :buttonText="formBtn[lang]"
            :lang="lang"
            :registerType="'sms'"
            :test="false"
          />
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
}
</style>
