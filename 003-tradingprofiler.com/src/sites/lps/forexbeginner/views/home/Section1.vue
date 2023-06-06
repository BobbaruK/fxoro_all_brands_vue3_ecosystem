<script>
import demoSection1Transl from "../../composables/translations/pages/home/demoSection1Transl";
import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";

import Form from "../../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

export default {
  name: "LP~ForexBeginner~Home~Section1",
  components: { Form },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, paras, list, formTitle } = demoSection1Transl();

    return { title, paras, list, formTitle, translationsGlossary };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-8">
          <h1>{{ title[lang] }}</h1>
          <div class="fl">
            <div class="paras">
              <p
                v-for="(para, index) in paras"
                :key="index"
                v-html="para[lang]"
              />
            </div>
            <div class="pictureWrapper">
              <p>
                <span>360</span>
                <span>Trading</span>
              </p>
              <picture>
                <source
                  srcset="../../assets/imgs/book.avif"
                  type="image/avif"
                />
                <source
                  srcset="../../assets/imgs/book.webp"
                  type="image/webp"
                />
                <img
                  src="../../assets/imgs/book.png"
                  alt="Phone"
                  width="285"
                  height="388"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
          <p class="lead" v-html="list.title[lang]" />
          <ul>
            <li v-for="li in list.list" :key="li" v-html="li[lang]" />
          </ul>
          <div class="pictureWrapper last">
            <p>
              <span>360</span>
              <span>Trading</span>
            </p>
            <picture>
              <source srcset="../../assets/imgs/book.avif" type="image/avif" />
              <source srcset="../../assets/imgs/book.webp" type="image/webp" />
              <img
                src="../../assets/imgs/book.png"
                alt="Phone"
                width="285"
                height="388"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="formWrapper">
            <span class="h3" v-html="formTitle[lang]" />
            <Form
              :agreementType="'wBrandName'"
              :buttonText="translationsGlossary.j.join[lang]"
              :lang="lang"
              :registerType="'clasic'"
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
  background-image: url(../../assets/imgs/section1bg.png);
  background-image: image-set(
    url("../../assets/imgs/section1bg.avif") type("image/avif"),
    url("../../assets/imgs/section1bg.webp") type("image/webp"),
    url("../../assets/imgs/section1bg.png") type("image/png")
  );
  background-size: auto 100%;
  background-position: right top;
  background-repeat: no-repeat;

  h1 {
    font-weight: 700;
    color: var(--clr-brandSecondaryColor);
  }

  p {
    font-size: clamp(14px, 1.4vw, 1rem);
    margin-bottom: clamp(22px, 2.7vw, 2rem);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-position: inside;
    li {
      margin-bottom: clamp(13px, 1.5vw, 1.125rem);
    }
  }

  .pictureWrapper {
    max-width: 285px;
    max-height: 388px;
    width: 100%;
    position: relative;
    &.last {
      margin: 0 auto 2rem;
      @include mxns.mediamin(sm) {
        display: none;
      }
    }
    p {
      inset: 17% 0 0 58%;
      margin: 0;
      padding: 0;
      position: absolute;
      rotate: -2deg;
      transform-origin: center;
      transform: translateX(-50%);
      font-size: 151%;
      line-height: 1.1;
      @include mxns.mediamin(md) {
        font-size: 180%;
      }
      span {
        display: block;
        text-align: center;
        color: var(--clr-white);
      }
    }
  }

  .fl {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .paras {
    }
    .pictureWrapper {
      flex-basis: 1300px;
      width: 100%;
      @include mxns.mediamax(sm) {
        display: none;
      }
    }
  }

  .formWrapper {
    max-width: 311px;
    max-width: clamp(311px, 34.5vw, 21.375rem);
    margin: 0 auto;

    border: 1px solid var(--clr-black);
    padding: 2.6875rem 0 1.6875rem 0;

    .h3 {
      text-align: center;
      font-size: 15px;
      span {
        font-size: 19px;
        display: block;
        font-weight: 700;
        border-color: var(--clr-black);
        border-style: solid;
        border-width: 1px 0;
        padding: 0.5rem;
      }
    }

    form {
      padding: 0 0.5rem;
      margin-top: 1.6875rem;

      .form-control {
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
          width: 100%;
          height: 40px;
          background: #fff;
          border: solid 1px #707070;
          font-size: 14px;
          color: #000;
          border-radius: 0px;

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
          border: medium none;
          width: 100%;
          padding: 1rem 2rem;
          font-weight: bold;
          &:hover {
          background: var(--clr-brandSecondaryColor-600);
          }
        }
      }
    }
  }
}
</style>
