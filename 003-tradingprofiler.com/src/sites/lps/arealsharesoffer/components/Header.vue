<script>
import Form from "../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

import languages from "../composables/translations/languages";
import translationsGlossary from "../../../../../../001-super_global_files/composables/translationsGlossary";
import headerTransl from "../composables/translations/header/headerTranslations";

export default {
  components: { Form },
  name: "LP~ARealSharesOffer~Header",
  props: {
    lang: String,
  },
  setup() {
    const { lpLangs, defaultLang, flagPath } = languages();
    const { title, para } = headerTransl();

    return { translationsGlossary, title, para };
  },
};
</script>

<template>
  <header id="header" class="siteHeader">
    <section class="top">
      <div class="container">
        <div class="row">
          <div class="col-12 siteHeaderInner" style="position: static">
            <div class="site-logo">
              <router-link :to="{ name: 'ARealSharesOfferHome', params: { lang: lang } }" class="logo">
                <img src="../../../brand/assets/imgs/logos/TradingProfilerLogo-color-white.svg" alt="Logo" width="220" height="75" class="d-block d-lg-none" />
                <img src="../../../brand/assets/imgs/logos/TradingProfilerLogo-color-black.svg" alt="Logo" width="220" height="75" class="d-none d-lg-block" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="subHeader">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 offset-lg-6 col-xl-5 offset-xl-7 leWrapper">
            <h1 v-html="title[lang]" />
            <p v-html="para[lang]" />
            <Form :agreementType="'wBrandName'" :buttonText="translationsGlossary.j.join[lang]" :lang="lang" :registerType="'clasic'" :test="false" />
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<style lang="scss">
@use "../assets/scss/abstracts/variables" as vars;
@use "../assets/scss/abstracts/mixins" as mxns;

html {
  header#header.siteHeader {
    padding: 0;

    background-image: url(../assets/imgs/topbg-mobile.jpg);
    background-image: image-set(url("../assets/imgs/topbg-mobile.avif") type("image/avif"), url("../assets/imgs/topbg-mobile.webp") type("image/webp"), url("../assets/imgs/topbg-mobile.jpg") type("image/jpg"));
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;

    @include mxns.mediamin(lg) {
      background-image: url(../assets/imgs/topbg-desktop.jpg);
      background-image: image-set(url("../assets/imgs/topbg-desktop.avif") type("image/avif"), url("../assets/imgs/topbg-desktop.webp") type("image/webp"), url("../assets/imgs/topbg-desktop.jpg") type("image/jpg"));
    }

    .top {
      padding-bottom: 1rem;
      .logo {
        img {
          // display: block;
          height: auto;
          width: clamp(110px, 12vw, 220px);
        }
      }
    }
    .subHeader {
      padding-top: 1rem;
      color: var(--clr-white);
      @include mxns.mediamin(lg) {
        color: var(--clr-brandPrimaryColor);
      }
      .leWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: clamp(1rem, 2vw, 3rem);
      }
      h1 {
        text-transform: uppercase;
        text-align: center;
        max-width: 20ch;
        span {
          color: var(--clr-brandSecondaryColor);
        }
      }
      p {
        font-size: 16px;
        margin: 0;
        max-width: 25ch;
        text-align: center;
        @include mxns.mediamin(sm) {
          font-size: 18px;
        }
        @include mxns.mediamin(md) {
          font-size: 20px;
        }
        @include mxns.mediamin(lg) {
          font-size: 22px;
        }
        @include mxns.mediamin(xl) {
          font-size: 25px;
        }
      }
    }

    form.registerForm {
      width: 100%;
      background-color: var(--clr-brandPrimaryColor);
      color: var(--clr-white);
      padding: 1rem;
      max-width: 360px;
      // grid
      .registerFormInner {
      }

      .error {
      }

      label {
      }

      .form-control {
        label {
        }
        input[type="text"],
        input[type="email"],
        input[type="tel"],
        select {
          display: block;
          width: 100%;
          height: calc(1.5em + 0.75rem + 2px);
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #4d4d4d;
          background: #fff;
          background-clip: padding-box;
          border: 1px solid #999;
          border-radius: 0.25rem;
          &:hover {
          }
          &:focus {
          }
          &::placeholder {
            color: #4d4d4d;
          }
        }
        select option {
        }
        .phone {
          [type="text"] {
          }
          [type="tel"] {
          }
        }
        input[type="checkbox"] {
        }
        button[type="submit"] {
          &:hover {
          }
        }

        &.agreementWrapper {
          label {
            font-size: 85%;
          }
        }
      }
    }
  }
}
</style>
