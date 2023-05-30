<script setup>
import { ref } from "@vue/reactivity";
import { defineAsyncComponent } from "vue";

import dataSite from "../../../../../dataSite.json";

import sendSmsCodeTranslations from "./composables/translation/sendSmsCodeTranslations";

import Modal from "../../../../Modal/Modal3.vue";
import PrivateForm from "../privateForm/PrivateForm.vue";

// const Modal = defineAsyncComponent({
//   loader: () => import("../../../../Modal/Modal3.vue"),
// });

// const PrivateForm = defineAsyncComponent({
//   loader: () => import("../privateForm/PrivateForm.vue"),
// });

const props = defineProps({
  lang: {
    type: String,
    default: "en",
    required: true,
  },
  userDetails: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["submitSMSForm"]);

const { inputLabel } = sendSmsCodeTranslations();
const smsCode = ref(null);
const errMsg = ref("");

const smsCodeValue = ref(null);
const showPrivateModal = ref(false);

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

const privateDetails = ref({});

const validateSmsForm = async () => {
  if (smsCode.value.value == null || smsCode.value.value.length == 0) {
    errMsg.value = "This field must not be empty";
  }
  try {
    const myHeaders = new Headers();
    // myHeaders.append("Accept", "application/json");
    // myHeaders.append("DNT", "1");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    // myHeaders.append("Content-Type", "application/json");

    const urlencoded = new URLSearchParams();
    urlencoded.append("FirstName", props.userDetails.FirstName);
    urlencoded.append("LastName", props.userDetails.LastName);
    urlencoded.append("EMail", props.userDetails.EMail);
    urlencoded.append("Country", props.userDetails.Country);
    urlencoded.append("PhoneCountryCode", props.userDetails.PhoneCountryCode);
    urlencoded.append("PhoneNumber", props.userDetails.PhoneNumber);
    urlencoded.append("Language", props.lang.toUpperCase());
    urlencoded.append(
      "CampaignName",
      `${process.env.VUE_APP_BRAND_TITLE} - ${props.lang.toUpperCase()}`
    );
    urlencoded.append("Advertiser", "");
    urlencoded.append(
      "Referrer",
      document.referrer === "" ? window.location.href : document.referrer
    );
    urlencoded.append(
      "Cookie",
      `${window.location.origin}/${props.lang}/thank-you?fname=${
        props.userDetails.FirstName
      }&refLName=${props.userDetails.LastName}&email=${
        props.userDetails.EMail
      }&phone=${props.userDetails.PhoneNumber.replace(/\s/g, "")}&country=${
        props.userDetails.Country
      }`
    );
    urlencoded.append("CustomField", "");
    urlencoded.append("AcceptTermsAndConditions", true);
    urlencoded.append("ApproveReceiveCommercial", true);
    urlencoded.append("IPAddress", props.userDetails.IPAddress);
    urlencoded.append("IPCountry", props.userDetails.IPCountry);
    // SMS stuff
    urlencoded.append("License", 2);
    urlencoded.append("SmsCode", smsCodeValue.value);
    urlencoded.append("Broker", "FXORO");
    urlencoded.append("Company", "OroFintech");

    const requestOptions = {
      method: "POST",
      mode: "cors",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    const loadData_FXORO_SMS_API = await fetch(
      dataSite.fxoro.smsregister,
      requestOptions
    );

    if (!loadData_FXORO_SMS_API.ok) {
      const resp = await loadData_FXORO_SMS_API.json();

      if (resp.Message === "1000") {
        throw new Error("Incorrect code");
      }

      if (resp.Message === "1001") {
        throw new Error("Please enter your valid number");
      }

      if (resp.Message === "1002" || resp.Message === "1003") {
        throw new Error("User already exist");
      }

      if (resp.Message === "1004") {
        throw new Error("Lead already exist");
      }

      // throw new Error({ name: "dsadsa", message: resp });
      throw new Error(
        // "Looks like there was a problem with the SMS Register API(s)"
        "We are sorry, there was an error. Please try again later."
      );
    }

    let data = await loadData_FXORO_SMS_API.json();

    data = JSON.parse(data);

    privateDetails.value = {
      username: data.username,
      password: data.password,
      metaUsername: data.metaUsername,
      metaPassword: data.metaPassword,
    };

    emit("submitSMSForm"); // emit close modal event (if form in modal)
    showPrivateModal.value = true; // show private form in modal

    // Sms code form

    // aici tre sa pri
  } catch (err) {
    errMsg.value = err.message;
    // console.log(err.message);
  }
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
      <div v-if="errMsg" class="error">
        {{ errMsg }}
      </div>
    </div>

    <div class="form-control submitButtonWrapper">
      <button class="scssecoBtn" type="submit">
        {{ buttonText[lang] }}
      </button>
    </div>
  </form>

  <Modal
    ref="privateModal"
    v-if="showPrivateModal"
    :lang="lang"
    :modalID="'privateModal'"
    v-model="showPrivateModal"
    @closeModal="showPrivateModal = false"
  >
    <PrivateForm :lang="lang" :privateDetails="privateDetails" />
  </Modal>
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
