<script>
import tradingSignals3Section2Transl from "../../composables/translations/pages/home/tradingSignals3Section2Transl";

import Form from "../../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

export default {
  name: "LP~TradingSignals3~Home~Section2",
  components: { Form },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { bullets, formTitle } = tradingSignals3Section2Transl();

    const formBtn = {
      en: "Register",
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

    return { bullets, formTitle, formBtn };
  },
};
</script>

<template>
  <section id="section2" class="bullform">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 order-lg-2 col-12">
          <div class="formWrapper">
            <h3 v-html="formTitle[lang]" />
            <Form
              :agreementType="'wBrandName'"
              :buttonText="formBtn[lang]"
              :lang="lang"
              
              :test="false"
            />
          </div>
        </div>
        <div class="col-12 col-lg-6 order-lg-1 textWrapper">
          <ul>
            <li v-for="(bullet, index) in bullets" :key="bullet.title[lang]">
              <div class="percent">{{ bullet.percent }}%</div>
              <div class="text">
                <h4 v-html="bullet.title[lang]" />
                <p v-html="bullet.para[lang]" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section2.bullform {
  @include mxns.mediamin(lg) {
    margin-top: 100px;
    padding-top: 0;
    border-top: 5px solid var(--clr-gray-400);
  }

  .textWrapper {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 3rem;
    height: 100%;
    @include mxns.mediamin(md) {
      align-items: flex-start;
    }
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      @include mxns.mediamin(md) {
        display: grid;
        grid-template-columns: 130px 1fr;
        width: 100%;
      }
      .percent {
        background-color: var(--clr-brandSecondaryColor);
        border: 5px solid var(--clr-white);
        border-radius: 50%;
        width: 130px;
        height: 130px;
        flex-basis: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 42px;
        font-weight: 500;
        color: var(--clr-white);
        text-shadow: 1px 1px 1px var(--clr-black);
        box-shadow: inset 4px 4px 15px 0px rgba(0, 0, 0, 0.54),
          0px 0px 7px 0px var(--clr-black);
      }
    }
  }

  h4,
  p {
    text-align: center;
    @include mxns.mediamin(md) {
      text-align: start;
    }
  }
  h4 {
    color: var(--clr-brandPrimaryColor);
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 0.3rem;
  }
}

.formWrapper {
  background: var(--clr-white);
  border: 1px solid var(--clr-gray-200);
  border-radius: 20px;
  box-shadow: 0 0 18px 0 var(--clr-gray-200);
  margin: 20px 0;
  padding: 0 20px 10px;

  @include mxns.mediamin(lg) {
    margin-top: -75px;
  }

  h3 {
    background: #fcfcfc;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0, #fcfcfc),
      to(#d4d4d4)
    );
    background: linear-gradient(to bottom, #fcfcfc 0, #d4d4d4 100%);
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    -webkit-box-shadow: 0 0 1px 0 #000;
    box-shadow: 0 0 1px 0 #000;
    font-size: 25px;
    margin-bottom: 22px;
    padding: 25px;
    text-align: center;
    @include mxns.mediamin(xl) {
      margin-bottom: 80px;
    }
  }
}
</style>
