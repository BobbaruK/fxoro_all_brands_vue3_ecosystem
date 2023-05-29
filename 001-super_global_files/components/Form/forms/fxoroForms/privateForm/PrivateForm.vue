<script setup>
import { ref } from "@vue/reactivity";

import dataSite from "../../../../../dataSite.json";

import privateFormTranslations from "./composables/translation/privateFormTranslations";

const props = defineProps({
  lang: {
    type: String,
    default: "en",
    required: true,
  },
  privateDetails: {
    type: Object,
    required: true,
  },
});

// const privateUserName = ref(props.privateDetails.username);
// const privatePassword = ref(props.privateDetails.password);
// const privateMetaUserName = ref(props.privateDetails.metaUsername);
// const privateMetaPassword = ref(props.privateDetails.metaPassword);
const privateUserName = ref(props.privateDetails.username);
const privatePassword = ref(props.privateDetails.password);
const privateMetaUserName = ref(props.privateDetails.metaUsername);
const privateMetaPassword = ref(props.privateDetails.metaPassword);

const { para, privateArea, metaTrader, userName, password } = privateFormTranslations();

const smsCodeValue = ref(null); // FirstName

const buttonText = {
  en: "Continue",
  it: "Continue",
  tr: "Continue",
  ro: "Continue",
  hu: "Continue",
  ar: "Continue",
  de: "Continue",
  es: "Continue",
  sv: "Continue",
  pt: "Continue",
  fi: "Continue",
  pl: "Continue",
  th: "Continue",
  ms: "Continue",
};

</script>
<template>
  {{ privateUserName }}
  <p v-html="para[lang]" />
  <form class="privateForm" action="https://my.global.fxoro.com/login" method="post" enctype="multipart/form-data">
    <div class="private">
      <p v-html="privateArea[lang]" />
      <div class="form-control firstNameWrapper">
        <div class="field">
          <label for="username">{{ userName[lang] }}</label>
          <input id="username" name="username" type="text" v-model="privateUserName" :placeholder="userName[lang]" />
        </div>
      </div>

      <div class="form-control firstNameWrapper">
        <div class="field">
          <label for="password">{{ password[lang] }}</label>
          <input id="password" name="password" type="text" v-model="privatePassword" :placeholder="password[lang]" />
          <input name="ufprt" type="hidden" value="65F7FB295112B526C9CC5D67697C8B68DB88A031D0B1D748769D9B3F3410F1C8429F2556B785989F5560BD6AF5FFDEA1604E536E5E155DB93BAF9CEB19A15A19603BBD2583C3EA71F230F9B7C2D5B3D678693525FED197AEEF7272E35B64E2DBB0B288B519BDC8803708F7392673A1ABD34C66DFB2EDB8C904D2C1186BE0BF61739CB5054C9A07BF7884798642F9FB79" />
        </div>
      </div>
    </div>
    <div class="metatrader">
      <p v-html="metaTrader[lang]" />
      <div class="form-control firstNameWrapper">
        <div class="field">
          <label for="metaUserName">{{ userName[lang] }}</label>
          <input id="metaUserName" type="text" v-model="privateMetaUserName" :placeholder="userName[lang]" />
        </div>
      </div>

      <div class="form-control firstNameWrapper">
        <div class="field">
          <label for="metaPassword">{{ password[lang] }}</label>
          <input id="metaPassword" type="text" v-model="privateMetaPassword" :placeholder="password[lang]" />
        </div>
      </div>
    </div>

    <div class="form-control submitButtonWrapper">
      <button class="scssecoBtn" type="submit">
        {{ buttonText[lang] }}
      </button>
    </div>
  </form>
</template>

<style lang="scss">
:where(form.privateForm) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;
  .private,
  .metatrader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 1rem;
    p {
      margin: 0;
      font-weight: bold;
    }
  }
  .private {
  }
  .metatrader {
  }
  .field {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    gap: 0.2rem;
  }

  label {
    // display: none;
  }
  .error {
    color: var(--clr-danger);
    font-size: 80%;
    // padding-bottom: 3px;
    padding-top: 1px;
  }

  .form-control {
    // padding-top: 1rem;
    position: relative;
    label {
      font-size: 1rem;
    }
    input[type="text"] {
      max-width: 100%;
      padding: 5px 15px;
      transition: 350ms;
      width: 100%;
      &:hover {
      }
      &:focus {
        outline: none;
        border-bottom: 1px solid var(--clr-brandSecondaryColor);
      }
      &::placeholder {
        color: var(--clr-black);
      }
    }
    button[type="submit"] {
      cursor: pointer;
      font-weight: bold;
      padding: 10px 15px;
      transition: 350ms;
      width: 100%;
      &:hover {
        background: var(--clr-brandPrimaryColor-light); /* Old browsers */
        color: var(--clr-brandPrimaryColor-dark);
      }
    }
  }
}
</style>
