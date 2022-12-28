<script>
import forexsignalsSection2Transl from "../../composables/translations/pages/home/forexsignalsSection2Transl";

import Form from "../../../../../../../001-super_global_files/components/Form/Form.vue";

export default {
  name: "LP~ForexSignals~Home~Section2",
  components: { Form },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { contentSections, formTitle, imgCaption } = forexsignalsSection2Transl();

    const formDetails = {
      formID: "forexsignals-section2",
      layout: 2,
      button: {
        en: "Start Trading",
      },
    };

    return { contentSections, formTitle, imgCaption, formDetails };
  },
};
</script>

<template>
  <section id="section2" class="content">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 col-xl-7">
          <div v-for="(section, index) in contentSections" :key="index">
            <h2 v-html="section.title[lang]"></h2>
            <div v-html="section.paras[lang]"></div>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xl-5 sidebar">
          <div class="formWrapper">
            <h3>{{ formTitle[lang] }}</h3>
            <Form :lang="lang" :formDetails="formDetails" />
          </div>

          <img
            src="../../assets/imgs/section2/233.jpg"
            alt="Candles"
            class="candles"
            width="451"
            height="374"
          />
          <p v-html="imgCaption[lang]"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section2.content {
  padding: 35px 0px 30px;
  @include mxns.mediamin(lg) {
    padding: 55px 0;
  }

  h2 {
    color: var(--clr-brandPrimaryColor);
    font-size: 1.75rem;
    font-weight: 400;
  }

  .sidebar {
    .formWrapper {
      $borderRadius: 3px;

      background: rgba(0, 0, 0, 0.75);
      color: var(--clr-white);
      padding: 10px;
      position: relative;
      @include mxns.mediamin(sm) {
        padding: 10px 30px;
      }

      h3 {
        text-align: center;
      }

      form#forexsignals-section2-form {
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
          background-color: #818181;
          border-radius: $borderRadius;
          border: 1px solid var(--clr-white);
          color: var(--clr-white);
          display: block;
          font-size: 14px;
          font-weight: bold;
          line-height: normal;
          margin: 0;
          padding: 10px 0 10px 40px;
          width: 100%;
          &::placeholder {
            color: var(--clr-white);
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

        #forexsignals-section2-firstName,
        #forexsignals-section2-lastName {
          background-image: url(../../assets/imgs/section2/user.png);
        }
        #forexsignals-section2-email {
          background-image: url(../../assets/imgs/section2/mail.png);
        }
        #forexsignals-section2-country {
          background-image: url(../../assets/imgs/section2/country.png);
        }
        #forexsignals-section2-phone {
          background-image: url(../../assets/imgs/section2/phone.png);
        }

        .error {
          color: var(--clr-danger);
          font-size: 80%;
        }

        button[type="submit"] {
          background-color: var(--clr-brandSecondaryColor);
          border: medium none;
          color: var(--clr-white);
          cursor: pointer;
          font-size: 28px;
          font-weight: bold;
          line-height: inherit;
          max-width: 100%;
          padding: 5px 10px;
          text-align: center;
          text-transform: uppercase;
          width: 100%;
          &:hover {
            background-color: var(--clr-brandSecondaryColor-600);
          }
        }
      }
    }

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 3rem;
      max-width: 100%;
      height: auto;
    }
  }
}

.loader {
  background: rgb(0 0 0 / 0.7);
  inset: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  .lds-ring {
    div {
      border-color: var(--clr-brandSecondaryColor) transparent transparent transparent;
    }
  }
}
</style>
