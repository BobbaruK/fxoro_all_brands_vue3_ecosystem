<script>
import freedomToTradeSection1Transl from "../../composables/translations/pages/home/freedomToTradeSection1Transl";

import Form from "../../../../../../../001-super_global_files/components/Form/Form.vue";

export default {
  name: "LP~FreedomToTrade~Home~Section1",
  components: { Form },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, content } = freedomToTradeSection1Transl();

    const formDetails = {
      formID: "freedomToTrade-section1",
      layout: 1,
      button: {
        en: "Start trading",
      },
    };

    return { title, content, formDetails };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6 col-xl-7 title">
          <h1 v-html="title[lang]" />
          <img src="../../assets/imgs/hand.png" alt="Hand" width="325" height="539" class="d-none d-md-block" />
        </div>
        <div class="col-12 col-md-6 col-xl-5">
          <Form :lang="lang" :formDetails="formDetails" />
          <img src="../../assets/imgs/hand.png" alt="Hand" width="325" height="539" class="d-block d-md-none" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section1.subHeader {
  overflow: hidden;
  @media screen and (max-width: 767px) {
    padding-bottom: 0;
  }
  h1,
  p {
    span {
      color: #f8bb39;
    }
  }
  h1 {
    text-align: center;
    @include mxns.mediamin(md) {
      max-width: 30ch;
      text-align: start;
    }
  }
  p {
    font-size: clamp(16px, 2vw, 25px);
    line-height: clamp(25px, 2vw, 35px);
    text-align: center;
    @include mxns.mediamin(md) {
      max-width: 30ch;
      text-align: start;
    }
  }
  img {
    max-width: 300px;
    height: auto;
    margin: 30px auto 0;
    width: 100%;
    @include mxns.mediamin(md) {
      position: absolute;
      margin: 0;
      right: 0;
      bottom: -50px;
      max-width: 200px;
    }
    @include mxns.mediamin(lg) {
      bottom: -160px;
      max-width: 280px;
    }
    @include mxns.mediamin(xl) {
      bottom: -90px;
      max-width: 250px;
    }
  }
}

#freedomToTrade-section1-form {
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.16);
  color: var(--clr-black);
  background-color: var(--clr-white);
  padding: 1rem;
  @include mxns.mediamin(md) {
    padding: 1.7rem;
    margin: 0;
  }
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
      background: var(--clr-white);
      border: solid 1px var(--clr-gray-500);
      font-size: 14px;
      color: #000;
      border-radius: 0px;
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
      background-color: var(--clr-brandPrimaryColor);
      border-radius: 0;
      padding: 1rem 2rem;
      text-transform: uppercase;
      &:hover {
        background-color: var(--clr-brandSecondaryColor);
        color: var(--clr-white);
      }
    }
  }
}
</style>
