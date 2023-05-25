<script setup>
import { ref } from "@vue/reactivity";

import sendSmsCodeTranslations from "./composables/translation/sendSmsCodeTranslations";

const props = defineProps({
  lang: {
    type: String,
    default: "en",
    required: true,
  },
});

const { inputLabel } = sendSmsCodeTranslations();

const smsCodeValue = ref(null); // FirstName

const buttonText = {
  en: "Join",
  it: "Giuntura",
  tr: "Katılmak",
  ro: "Alătură-te",
  hu: "Csatlakozik",
  ar: "انضم",
  de: "Beitreten",
  es: "Entrar",
  sv: "Ansluta sig",
  pt: "Juntar",
  fi: "Liittyä seuraan",
  pl: "Dołączyć",
  th: "เข้าร่วม",
  ms: "Sertai",
};

const validateSmsForm = () => {
  console.log("me");
};
</script>

<template>
  <form
    ref="sendSmsCodeForm"
    @submit.prevent="validateSmsForm"
    novalidate
    class="sendSmsCodeForm"
  >
    <div class="form-control firstNameWrapper">
      <div class="field">
        <label ref="refLabelFName" for="smsCodeValue">{{
          inputLabel[lang]
        }}</label>
        <input
          id="smsCodeValue"
          ref="smsCode"
          v-model="smsCodeValue"
          type="text"
          :placeholder="inputLabel[lang]"
        />
      </div>
      <!-- <div v-if="firstNameError[lang]" class="error">
        {{ firstNameError[lang] }}
      </div> -->
    </div>

    <div class="form-control submitButtonWrapper">
      <button class="scssecoBtn" type="submit">
        {{ buttonText[lang] }}
      </button>
    </div>
  </form>
</template>

<style lang="scss">
:where(form.sendSmsCodeForm) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  label {
    display: none;
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
