<script>
import Header from "../../components/Header.vue";
import Form from "../../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

import comeToLearnSection1Transl from "../../composables/translations/pages/home/comeToLearnSection1Transl";

export default {
  name: "LP~ComeToLearn-Home-Section1",
  components: {
    Header,
    Form,
  },
  components: { Header, Form },
  props: {
    lang: String,
  },
  setup(_, ctx) {
    // Translations
    const { title, subTitle, para, formTitle } = comeToLearnSection1Transl();

    const formButton = {
      en: "Get the guide",
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

    return { title, subTitle, para, formTitle, formButton };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 content">
          <Header :lang="lang" />
          <h1 v-html="title[lang]"></h1>
          <p v-html="subTitle[lang]" class="subtitle"></p>
          <p v-html="para[lang]"></p>
        </div>
        <div class="col-12 col-lg-6 form">
          <div class="formWrapper">
            <h2 v-html="formTitle[lang]"></h2>
            <Form :agreementType="'wBrandName'" :buttonText="formButton[lang]" :lang="lang" :layout="1" :test="false" />
          </div>
        </div>
      </div>
    </div>
    <div class="wave"></div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/variables" as vars;
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section1.subHeader {
  background-image: url(../../assets/imgs/section1/bg.jpg);
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 30px;
  position: relative;
  @include mxns.mediamin(xl) {
  }
  @include mxns.mediamin(xxl) {
    // padding-bottom: 100px;
  }
  .content {
    h1 {
      color: var(--clr-brandSecondaryColor);
      font-size: 20px;
      @include mxns.mediamin(sm) {
        font-size: 22px;
      }
      @include mxns.mediamin(md) {
        font-size: 24px;
      }
      @include mxns.mediamin(lg) {
        font-size: 31px;
        margin-bottom: 30px;
        max-width: 22ch;
      }
      @include mxns.mediamin(xl) {
        font-size: 37px;
      }
      span {
        color: var(--clr-white);
        font-weight: bold;
      }
    }
    p {
      color: #fff;
      line-height: normal;
      @include mxns.mediamin(sm) {
        font-size: 18px;
      }
      @include mxns.mediamin(md) {
        font-size: 19px;
      }
      @include mxns.mediamin(lg) {
        font-size: 20px;
        max-width: 40ch;
      }
      &.subtitle {
        color: var(--clr-brandSecondaryColor);
        @include mxns.mediamin(lg) {
          width: 20ch;
        }
        span {
          color: var(--clr-white);
          font-weight: bold;
        }
      }
    }
  }
  .form {
    align-items: center;
    display: flex;
    justify-content: center;
    .formWrapper {
      background: var(--clr-white);
      box-shadow: 2px 2px 5px 0px rgb(50 50 50 / 15%);
      color: var(--clr-black);
      padding: 20px 15px;
      position: relative;
      text-align: start;
      z-index: 1;
      @include mxns.mediamin(lg) {
        margin-top: 20px;
        max-width: 75%;
      }
      h2 {
        font-size: 14px;
        text-align: center;
        @include mxns.mediamin(sm) {
          font-size: 18px;
        }
        @include mxns.mediamin(md) {
          font-size: 19px;
        }
        @include mxns.mediamin(lg) {
          font-size: 16px;
          margin: 20px 0 20px;
        }
        @include mxns.mediamin(xl) {
          font-size: 20px;
        }
        span {
          display: block;
          font-weight: bold;
        }
      }
      form.registerForm {
        $borderRadius: 10px;

        @include mxns.mediamin(sm) {
        }
        @include mxns.mediamin(lg) {
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
            border: 1px solid #eee;
            box-shadow: 2px 2px 5px 0px rgb(50 50 50 / 15%);
            line-height: 1.5;
            max-width: 100%;
            padding: 5px 10px;
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
              width: 100%;
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
          background: var(--clr-brandSecondaryColor);
          border: 1px solid var(--clr-brandSecondaryColor);
          color: var(--clr-black);
          cursor: pointer;
          font-weight: 800;
          font-size: 18px;
          padding: 5px 20px;
          width: 100%;
          &:hover {
            background: var(--clr-black);
            color: var(--clr-brandSecondaryColor);
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
  }
  .wave {
    background: var(--clr-white);
    bottom: -1px;
    height: 200px;
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: auto;
    width: 101%;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  }
}
</style>
