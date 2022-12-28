<script>
import livetradingsignalsSection2Transl from "../../composables/translations/pages/home/livetradingsignalsSection2Transl";

import Form from "../../../../../../../001-super_global_files/components/Form/Form.vue";

export default {
  name: "LP~LiveTradingSignals~Home~Section2",
  components: { Form },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { bullets, formTitle } = livetradingsignalsSection2Transl();

    const formDetails = {
      formID: "livetradingsignals-section1",
      layout: 1,
      button: { en: "Open an account now" },
    };

    return { bullets, formTitle, formDetails };
  },
};
</script>

<template>
  <section id="section2" class="formAndBullets">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 order-2 order-lg-1">
          <ul>
            <li v-for="(bullet, index) in bullets" :key="index">
              <div class="percent">{{ bullet.percent }}</div>
              <div class="content">
                <h2>{{ bullet.title[lang] }}</h2>
                <p>{{ bullet.content[lang] }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-6 order-1 order-lg-2">
          <div class="formWrapper">
            <h3>{{ formTitle[lang] }}</h3>
            <Form :lang="lang" :formDetails="formDetails" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section2.formAndBullets {
  ul {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    @include mxns.mediamin(md) {
      align-items: flex-start;
    }
    li {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      gap: 1rem;
      @include mxns.mediamin(md) {
        align-items: center;
        flex-direction: row;
        justify-content: flex-start;
        text-align: start;
      }
      .percent {
        align-content: center;
        align-items: center;
        border-radius: 50%;
        box-shadow: 0px 2px 10px 0px #323232;
        color: var(--clr-white);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        font-size: 24px;
        font-weight: bold;
        height: 110px;
        justify-content: center;
        max-width: 110px;
        position: relative;
        width: 100%;
        &::before {
          background: var(--clr-brandPrimaryColor);
          border-radius: 50%;
          box-shadow: inset 0px 2px 10px 0px #eee;
          content: "";
          height: 80%;
          position: absolute;
          width: 80%;
          z-index: -1;
        }
      }
    }
  }
  h2 {
    color: var(--clr-brandPrimaryColor);
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    @include mxns.mediamin(lg) {
      font-size: 24px;
    }
  }
  h3 {
    background: linear-gradient(to bottom, #fff 0%, #cfcfd0 100%);
    border-radius: 7px;
    font-size: 20px;
    margin: 0 0 15px;
    padding: 10px 0;
    text-align: center;
    @include mxns.mediamin(sm) {
      font-size: 24px;
    }
    @include mxns.mediamin(md) {
      padding: 15px 0;
    }
    @include mxns.mediamin(lg) {
      margin: 0 0 40px;
    }
    @include mxns.mediamin(xl) {
      font-size: 26px;
      padding: 20px 0;
    }
  }
  p {
    font-size: 14px;
    margin: 0;
    @include mxns.mediamin(lg) {
      font-size: 16px;
    }
  }

  .formWrapper {
    box-shadow: 0px 0px 14px 5px rgb(50 50 50 / 27%);
    margin: 20px 0 40px;
    padding: 0 20px 20px;
    position: relative;
    @include mxns.mediamin(md) {
      padding: 0 30px 30px;
    }
    @include mxns.mediamin(lg) {
      background: var(--clr-white);
      margin: -150px 0 0 0;
    }
    @include mxns.mediamin(xl) {
      margin: -160px 0 0 -30px;
    }

    form#livetradingsignals-section1-form {
      $borderRadius: 5px;

      .form-control {
      }

      label {
        font-size: 1rem;
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
        background-position: 10px center;
        background-repeat: no-repeat;
        background-color: #d6d6d7;
        border-radius: $borderRadius;
        border: 1px solid var(--clr-white);
        color: var(--clr-gray-700);
        display: block;
        font-size: 14px;
        font-weight: bold;
        line-height: normal;
        margin: 0;
        padding: 10px;
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
          border-radius: $borderRadius 0 0 $borderRadius;
          border-right: 1px solid var(--clr-gray-100);
          padding-left: 0;
          padding-right: 0;
          text-align: center;
        }
        [type="tel"] {
          border-radius: 0 $borderRadius $borderRadius 0;
        }
      }

      input[type="checkbox"] {
        margin-right: 0.5rem;
      }

      .error {
        color: var(--clr-danger);
        font-size: 80%;
      }

      button[type="submit"] {
        background: var(--clr-brandPrimaryColor);
        border-color: #195e5b;
        border-radius: $borderRadius;
        border-style: solid;
        border-width: 0 2px 2px 0;
        color: #fff;
        display: block;
        float: none;
        max-width: 230px;
        margin: 0 auto;
        padding: 7px 25px;
        &:hover {
          background-color: var(--clr-brandSecondaryColor-600);
        }
      }
    }
  }
}
</style>
