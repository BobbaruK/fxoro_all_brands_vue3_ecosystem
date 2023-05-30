<script setup>
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import { onMounted } from "@vue/runtime-core";
// import { defineAsyncComponent } from "vue";
import { isValidNumberForRegion, AsYouType } from "libphonenumber-js";
import {
  // VueReCaptcha,
  useReCaptcha,
} from "vue-recaptcha-v3";
import { useFormIDStore } from "../../stores/FormIDStore";

import dataSite from "../../../../dataSite.json";

import countryList from "./composables/validation/countryList";
import getCountry from "./composables/validation/getCountry";
import formErrors from "./composables/translations/formErrors";
import formTranslations from "./composables/translations/formTranslations";
import agreementTypePropValidation from "./composables/validation/props/agreementTypePropValidation";
import registerTypePropValidation from "./composables/validation/props/registerTypePropValidation";

import Loader from "../../../Loader/Loader.vue";
import SendSMSCodeForm from "./sendSmsForm/SendSMSCodeForm.vue";
import Modal from "../../../Modal/Modal3.vue";

// const SendSMSCodeForm = defineAsyncComponent({
//   loader: () => import("./sendSmsForm/SendSMSCodeForm.vue"),
// });

const props = defineProps({
  agreementType: {
    type: String,
    required: false,
    ...agreementTypePropValidation(),
  },
  buttonText: {
    type: String,
    default: "Form Button",
    required: true,
  },
  lang: {
    type: String,
    default: "en",
    required: true,
  },
  registerType: {
    type: String,
    required: false,
    ...registerTypePropValidation(),
  },
  test: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits(["submitForm"]);

//  Get the HTML ref elements
const registerForm = ref(null);
const formClass = "registerForm";
const formID = useFormIDStore();
const refLabelFName = ref(null);
const refFName = ref(null);
const refLabelLName = ref(null);
const refLName = ref(null);
const refLabelEmail = ref(null);
const refEmail = ref(null);
const refLabelCountry = ref(null);
const refCountry = ref(null);
const refLabelPhone = ref(null);
const refPhone = ref(null);
const refLabelAgreement = ref(null);
const refAgreement = ref(null);

const errorModal = ref(null);
const showErrorModal = ref(false);

const sendSmsCodeModal = ref(null);
const showSendSmsCodeModal = ref(false);

const userDetails = ref({});

onMounted(() => {
  // Set the classes and ids
  const forms = Array.from(document.querySelectorAll(`.${formClass}`));
  formID.addIDs(forms);

  const fNameID = `firstName-${registerForm.value.id}`;
  refLabelFName.value.htmlFor = fNameID;
  refFName.value.id = fNameID;

  const lNameID = `lastName-${registerForm.value.id}`;
  refLabelLName.value.htmlFor = lNameID;
  refLName.value.id = lNameID;

  const emailID = `email-${registerForm.value.id}`;
  refLabelEmail.value.htmlFor = emailID;
  refEmail.value.id = emailID;

  const countryID = `country-${registerForm.value.id}`;
  refLabelCountry.value.htmlFor = countryID;
  refCountry.value.id = countryID;

  const phoneID = `phone-${registerForm.value.id}`;
  refLabelPhone.value.htmlFor = phoneID;
  refPhone.value.id = phoneID;

  const agreementID = `agreement-${registerForm.value.id}`;
  refLabelAgreement.value.htmlFor = agreementID;
  refAgreement.value.id = agreementID;
});

// translate form
const { firstName, lastName, email, country, phone, agreement } =
  formTranslations();

// Values and errors refs
const firstNameValue = ref(null); // FirstName
const firstNameError = ref({}); // First Name Error
const lastNameValue = ref(null); // LastName
const lastNameError = ref({}); // Last Name Error
const emailValue = ref(null); // EMail
const emailError = ref({}); // Email Error
const prefixValue = ref(null); // PhoneCountryCode
const phoneValue = ref(null); // PhoneNumber
const phoneError = ref({}); // Phone number Error
const { countries } = countryList(); // Countries
const countryValue = ref(null); // Country
const countryName = ref(null); // IPCountry
const countryCode = ref(null); // Country
const countryError = ref({}); // Country Error
const agreementValue = ref(true); // AcceptTermsAndConditions
const agreementError = ref({}); // Agreement Error
const captchaError = ref({}); // Captcha error
const smsError = ref("");

const IPAddress = ref(null);

const validate = ref(true);

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

// Errors
const {
  firstNameErr,
  lastNameErr,
  emailEmptyErr,
  invalidEmailErr,
  phoneEmptyErr,
  invalidPhoneErr,
  countryErr,
  agreementErr,
  captchaErr,
} = formErrors();

getCountry(countryValue, IPAddress, countryName, validate);

// Update prefix when country select
watchEffect(() => {
  countries.forEach((country) => {
    if (country.code === countryValue.value) {
      prefixValue.value = country.dial_code;
      countryCode.value = country.code;
    }
  });
  phoneValue.value = phoneValue.value
    ? new AsYouType(countryValue.value).input(phoneValue.value)
    : "";
});

// Submit validation
const validateForm = (e) => {
  firstNameError.value = {};
  lastNameError.value = {};
  emailError.value = {};
  phoneError.value = {};
  countryError.value = {};
  agreementError.value = {};
  captchaError.value = {};

  // First name empty
  if (firstNameValue.value == null || firstNameValue.value.length == 0) {
    firstNameError.value = firstNameErr;
  }

  // Last name empty
  if (lastNameValue.value == null || lastNameValue.value.length == 0) {
    lastNameError.value = lastNameErr;
  }

  // Email empty
  if (emailValue.value == null || emailValue.value.length == 0) {
    emailError.value = emailEmptyErr;
  }

  // Invalid email
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Email Pattern
  const emailPatternBool = emailPattern.test(emailValue.value);
  if (
    emailPatternBool == false &&
    emailValue.value != null &&
    emailValue.value.length != 0
  ) {
    emailError.value = invalidEmailErr;
  }

  // Phone empty
  if (phoneValue.value == null || phoneValue.value.length == 0) {
    phoneError.value = phoneEmptyErr;
  } else if (
    !isValidNumberForRegion(phoneValue.value, countryCode.value.toUpperCase())
  ) {
    // Invalid phone

    phoneError.value = invalidPhoneErr;
  }

  // Country select
  if (countryValue.value == null) {
    countryError.value = countryErr;
  }

  // Agreement check
  if (agreementValue.value === false) {
    agreementError.value = agreementErr;
  }

  // If a field is empty return
  if (
    firstNameValue.value == null ||
    firstNameValue.value.length == 0 ||
    lastNameValue.value == null ||
    lastNameValue.value.length == 0 ||
    emailValue.value == null ||
    emailValue.value.length == 0 ||
    emailPatternBool == false ||
    phoneValue.value == null ||
    phoneValue.value.length == 0 ||
    !isValidNumberForRegion(
      phoneValue.value,
      countryCode.value.toUpperCase()
    ) ||
    countryValue.value == null ||
    agreementValue.value === false
  ) {
    return;
  }

  validate.value = true;

  // Send to CRM
  const sendToCRM = async () => {
    const logs = process.env.VUE_APP_LOG_ERRORS;
    const logStylesAPI = ["font-size: 14px", "font-weight: bold"].join(";");

    if (process.env.VUE_APP_SEND_TO_CRM != "true") {
      console.log(
        `process.env.VUE_APP_SEND_TO_CRM is ${process.env.VUE_APP_SEND_TO_CRM}`
      );
      return;
    }

    try {
      let data = "";
      const myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("DNT", "1");
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      const urlencoded = new URLSearchParams();
      urlencoded.append("FirstName", firstNameValue.value);
      urlencoded.append("LastName", lastNameValue.value);
      urlencoded.append("EMail", emailValue.value);
      urlencoded.append("Country", countryValue.value);
      urlencoded.append("PhoneCountryCode", prefixValue.value);
      urlencoded.append("PhoneNumber", phoneValue.value);
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
          firstNameValue.value
        }&refLName=${lastNameValue.value}&email=${
          emailValue.value
        }&phone=${phoneValue.value.replace(/\s/g, "")}&country=${
          countryValue.value
        }`
      );
      urlencoded.append("CustomField", "");
      urlencoded.append("AcceptTermsAndConditions", agreementValue.value);
      urlencoded.append("ApproveReceiveCommercial", true);
      urlencoded.append("IPAddress", IPAddress.value);
      urlencoded.append("IPCountry", countryName.value);
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };
      const loadDataFXAPI = await fetch(
        dataSite.fxoro.registerUser,
        requestOptions
      );

      if (!loadDataFXAPI.ok) {
        throw Error();
      }

      // data = await loadDataFXAPI.json();

      validate.value = false;

      // router.push({ name: "ThankYou", params: { lang: route.params.lang } }); // go to thank you page
      // window.location.href = `/${route.params.lang}/thank-you`; // go to thank you page
      window.location.href = `/${props.lang}/thank-you?fname=${
        firstNameValue.value
      }&refLName=${lastNameValue.value}&email=${
        emailValue.value
      }&phone=${phoneValue.value.replace(/\s/g, "")}&country=${
        countryValue.value
      }`; // go to thank you page
    } catch (err) {
      if (logs === "true") {
        console.log(
          `%cLooks like there was a problem with the register API(s):`,
          logStylesAPI,
          err
        );
      }
    }
  };

  const registerType = async (
    lang,
    firstNameValue,
    lastNameValue,
    emailValue,
    countryValue,
    prefixValue,
    phoneValue,
    agreementValue,
    IPAddress,
    countryName
  ) => {
    if (props.registerType === "clasic") {
      sendToCRM();
      return;
    }

    if (props.registerType === "sms") {
      try {
        const myHeaders = new Headers();
        // myHeaders.append("Accept", "application/json");
        // myHeaders.append("DNT", "1");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        // myHeaders.append("Content-Type", "application/json");

        const urlencoded = new URLSearchParams();
        urlencoded.append("FirstName", firstNameValue);
        urlencoded.append("LastName", lastNameValue);
        urlencoded.append("EMail", emailValue);
        urlencoded.append("Country", countryValue);
        urlencoded.append("PhoneCountryCode", prefixValue);
        urlencoded.append("PhoneNumber", phoneValue);
        urlencoded.append("Language", lang.toUpperCase());
        urlencoded.append(
          "CampaignName",
          `${process.env.VUE_APP_BRAND_TITLE} - ${lang.toUpperCase()}`
        );
        urlencoded.append("Advertiser", "");
        urlencoded.append(
          "Referrer",
          document.referrer === "" ? window.location.href : document.referrer
        );
        urlencoded.append(
          "Cookie",
          `${window.location.origin}/${lang}/thank-you?fname=${
            firstNameValue.value
          }&refLName=${lastNameValue}&email=${emailValue}&phone=${phoneValue.replace(
            /\s/g,
            ""
          )}&country=${countryValue}`
        );
        urlencoded.append("CustomField", "");
        urlencoded.append("AcceptTermsAndConditions", agreementValue);
        urlencoded.append("ApproveReceiveCommercial", true);
        urlencoded.append("IPAddress", IPAddress);
        urlencoded.append("IPCountry", countryName);
        // SMS stuff
        urlencoded.append("License", 2);
        // urlencoded.append("SmsCode", null);
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

        let data = (await loadData_FXORO_SMS_API.text()).toLowerCase();
        /**
         * not sure if processingsamelead response comes
         * if loadData_FXORO_SMS_API status is ok or not
         */
        if (data.indexOf("processingsamelead") != -1) {
          throw new Error("Your request is processing");
        }

        // let data = await loadData_FXORO_SMS_API.json();

        userDetails.value = {
          FirstName: firstNameValue,
          LastName: lastNameValue,
          EMail: emailValue,
          Country: countryValue,
          PhoneCountryCode: prefixValue,
          PhoneNumber: phoneValue,
          Language: lang.toUpperCase(),
          CampaignName: `${
            process.env.VUE_APP_BRAND_TITLE
          } - ${lang.toUpperCase()}`,
          Advertiser: "",
          Referrer:
            document.referrer === "" ? window.location.href : document.referrer,
          Cookie: `${
            window.location.origin
          }/${lang}/thank-you?fname=${firstNameValue}&refLName=${lastNameValue}&email=${emailValue}&phone=${phoneValue.replace(
            /\s/g,
            ""
          )}&country=${countryValue}`,
          CustomField: "",
          AcceptTermsAndConditions: agreementValue,
          ApproveReceiveCommercial: true,
          IPAddress: IPAddress,
          IPCountry: countryName,
          // SMS stuff
          License: 2,
          SmsCode: null,
          Broker: "FXORO",
          Company: "OroFintech",
        };

        // Lead is processing

        if (data.indexOf("ok") != -1) {
          emit("submitForm"); // emit close modal event (if form in modal)
          showSendSmsCodeModal.value = true; // show modal with SendSMSCodeForm
        }

        // Sms code form

        // aici tre sa pri
      } catch (err) {
        smsError.value = err.message;

        emit("submitForm"); // emit close modal event (if form in modal)
        showErrorModal.value = true; // show modal with error

        console.log(err.message);
      }

      return;
    }
  };

  // Recaptcha
  const recaptcha = async () => {
    const goodScore = 0.6;

    await recaptchaLoaded();

    const token = await executeRecaptcha("submit");

    let captchaData = new FormData();
    captchaData.append("token", token);
    captchaData.append("domain", window.location.hostname);

    try {
      let data = "";

      const checkCaptcha = await fetch(dataSite.fxoro.recaptchaVerify, {
        method: "POST",
        body: captchaData, // Send the form data
      });

      if (!checkCaptcha.ok) {
        throw Error();
      }

      data = await checkCaptcha.json();

      if (data.success === true && data.score > goodScore) {
        if (!props.test) {
          registerType(
            props.lang,
            firstNameValue.value,
            lastNameValue.value,
            emailValue.value,
            countryValue.value,
            prefixValue.value,
            phoneValue.value,
            agreementValue.value,
            IPAddress.value,
            countryName.value
          );
          return;
        }

        console.log(`score: ${data.score}; test: ${props.test}`);
        console.log("fire sendToCRM()");
      } else {
        validate.value = false;
        captchaError.value = captchaErr;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Validate
  if (!props.test) {
    recaptcha();
  } else {
    registerType(
      props.lang,
      firstNameValue.value,
      lastNameValue.value,
      emailValue.value,
      countryValue.value,
      prefixValue.value,
      phoneValue.value,
      agreementValue.value,
      IPAddress.value,
      countryName.value
    );

    return;
    console.log(`FirstName: ${firstNameValue.value}`);
    console.log(`LastName: ${lastNameValue.value}`);
    console.log(`EMail: ${emailValue.value}`);
    console.log(`Country: ${countryValue.value}`);
    console.log(`PhoneCountryCode: ${prefixValue.value}`);
    console.log(`PhoneNumber: ${phoneValue.value}`);
    console.log(`Language: ${props.lang.toUpperCase()}`);
    console.log(
      `CampaignName: ${
        process.env.VUE_APP_BRAND_TITLE
      } - ${props.lang.toUpperCase()}`
    );
    console.log(`Advertiser: `);
    console.log(
      `Referrer: ${
        document.referrer === "" ? window.location.href : document.referrer
      }`
    );
    console.log(
      `Cookie: ${window.location.origin}/${props.lang}/thank-you?fname=${
        firstNameValue.value
      }&refLName=${lastNameValue.value}&email=${
        emailValue.value
      }&phone=${phoneValue.value.replace(/\s/g, "")}&country=${
        countryValue.value
      }`
    );
    console.log(`CustomField: `);
    console.log(`AcceptTermsAndConditions: ${agreementValue.value}`);
    console.log(`ApproveReceiveCommercial: ${true}`);
    console.log(`IPAddress: ${IPAddress.value}`);
    console.log(`IPCountry: ${countryName.value}`);

    // router.push({ name: "ThankYou", params: { lang: route.params.lang } });
    setTimeout(() => {
      validate.value = false;
      window.location.href = `/${props.lang}/thank-you?fname=${
        firstNameValue.value
      }&refLName=${lastNameValue.value}&email=${
        emailValue.value
      }&phone=${phoneValue.value.replace(/\s/g, "")}&country=${
        countryValue.value
      }`; // go to thank you page
      // window.location.href = `/${route.params.lang}/thank-you`; // go to thank you page
    }, 7000);
  }
};

// test stuff
const processingsameleadAction = () => {
  showErrorModal.value = !showErrorModal.value;

  emit("submitForm"); // emit close modal event (if form in modal)
};

const sendSmsCodeModalAction = () => {
  showSendSmsCodeModal.value = !showSendSmsCodeModal.value;

  emit("submitForm"); // emit close modal event (if form in modal)
};
</script>

<template>
  <form
    ref="registerForm"
    @submit.prevent="validateForm"
    novalidate
    :class="formClass"
  >
    <button class="scssecoBtn" @click="processingsameleadAction">
      processingsamelead
    </button>
    <button class="scssecoBtn" @click="sendSmsCodeModalAction">
      sendSmsCodeModal
    </button>
    <Modal
      ref="errorModal"
      :lang="lang"
      :modalID="'errorModal'"
      v-model="showErrorModal"
      @closeModal="showErrorModal = false"
    >
      <div v-html="smsError" />
    </Modal>
    <Modal
      ref="sendSmsCodeModal"
      :lang="lang"
      :modalID="'sendSmsCodeModal'"
      v-model="showSendSmsCodeModal"
      @closeModal="showSendSmsCodeModal = false"
    >
      <SendSMSCodeForm
        :lang="lang"
        :userDetails="userDetails"
        @submitSMSForm="showSendSmsCodeModal = false"
      />
    </Modal>
    <div v-if="test" class="devOpts">
      <p>
        agreementType: <strong>{{ agreementType }}</strong>
      </p>
      <p>
        buttonText: <strong>{{ buttonText }}</strong>
      </p>
      <p>
        lang: <strong>{{ lang }}</strong>
      </p>
      <p>
        registerType: <strong>{{ registerType }}</strong>
      </p>
      <p>
        test: <strong>{{ test }}</strong>
      </p>
    </div>

    <div class="registerFormInner">
      <div class="form-control firstNameWrapper">
        <div class="field">
          <label ref="refLabelFName">{{ firstName[lang] }}</label>
          <input
            ref="refFName"
            v-model="firstNameValue"
            type="text"
            :placeholder="firstName[lang]"
          />
        </div>
        <div v-if="firstNameError[lang]" class="error">
          {{ firstNameError[lang] }}
        </div>
      </div>

      <div class="form-control lastNameWrapper">
        <div class="field">
          <label ref="refLabelLName">{{ lastName[lang] }}</label>
          <input
            ref="refLName"
            v-model="lastNameValue"
            type="text"
            :placeholder="lastName[lang]"
          />
        </div>
        <div v-if="lastNameError[lang]" class="error">
          {{ lastNameError[lang] }}
        </div>
      </div>

      <div class="form-control emailWrapper">
        <div class="field">
          <label ref="refLabelEmail">{{ email[lang] }}</label>
          <input
            ref="refEmail"
            v-model="emailValue"
            type="email"
            :placeholder="email[lang]"
          />
        </div>
        <div v-if="emailError[lang]" class="error">
          {{ emailError[lang] }}
        </div>
      </div>

      <div class="form-control countryWrapper">
        <div class="field">
          <label ref="refLabelCountry">{{ country[lang] }}</label>
          <select ref="refCountry" v-model="countryValue">
            <option
              v-for="(country, index) in countries"
              :key="index"
              :value="country.code"
              :data-dial-code="country.dial_code"
            >
              {{ country.name }} ({{ country.code }})
            </option>
          </select>
        </div>
        <div v-if="countryError[lang]" class="error">
          {{ countryError[lang] }}
        </div>
      </div>

      <div class="form-control phoneNumberWrapper">
        <div class="field">
          <label ref="refLabelPhone">{{ phone[lang] }}</label>
          <div class="phone">
            <input
              v-model="prefixValue"
              type="text"
              placeholder="prefix"
              tabindex="0"
              disabled
            />
            <input
              ref="refPhone"
              v-model="phoneValue"
              type="tel"
              :placeholder="phone[lang]"
            />
          </div>
        </div>
        <div v-if="phoneError[lang]" class="error">
          {{ phoneError[lang] }}
        </div>
      </div>

      <div class="form-control agreementWrapper">
        <div class="field">
          <input ref="refAgreement" v-model="agreementValue" type="checkbox" />
          <label ref="refLabelAgreement" class="agreement">
            {{ agreement[agreementType][lang] }}
          </label>
        </div>
        <div v-if="agreementError[lang]" class="error">
          {{ agreementError[lang] }}
        </div>
      </div>

      <div class="form-control submitButtonWrapper">
        <button class="scssecoBtn" type="submit">
          {{ buttonText }}
        </button>
        <div v-if="captchaError[lang]" class="error">
          {{ captchaError[lang] }}
        </div>
      </div>

      <div class="form-loader" v-if="validate">
        <Loader />
      </div>
    </div>
  </form>
</template>

<style lang="scss">
@use "../../../../assets/scss/abstracts/mixins" as mxns;

.devOpts {
  align-items: stretch;
  border-radius: 10px 10px 0 0;
  border: 2px solid var(--clr-brandPrimaryColor);
  direction: ltr;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  padding: 1rem;
  p {
    margin: 0;
  }
}

:where(form.registerForm) {
  --formGap: 1rem;
  --containerWidthSM: 420px;

  container-type: inline-size; // https://www.youtube.com/watch?v=3_-Je5XpbqY&t=351s
  position: relative;

  // grid
  .registerFormInner {
    display: grid;
    gap: var(--formGap);
    > .form-control {
      flex: 0 0 100%;
      max-width: 100%;
      &.firstNameWrapper {
        order: 1;
      }
      &.lastNameWrapper {
        order: 2;
      }
      &.emailWrapper {
        order: 3;
      }
      &.countryWrapper {
        order: 4;
      }
      &.phoneNumberWrapper {
        order: 5;
      }
      &.agreementWrapper {
        order: 6;
      }
      &.submitButtonWrapper {
        order: 7;
      }
    }
  }
  &.layout1 {
    .registerFormInner {
      grid-template-columns: 1fr 1fr;
      > .form-control {
        grid-column-start: 1;
        grid-column-end: 3;
        &.firstNameWrapper {
          @container (min-width: 430px) {
            grid-column-start: 1;
            grid-column-end: 2;
          }
        }
        &.lastNameWrapper {
          @container (min-width: 430px) {
            grid-column-start: 2;
            grid-column-end: 3;
          }
        }
      }
    }
  }
  &.layout2 {
    .registerFormInner {
      grid-template-columns: 1fr 1fr;
      @container (min-width: 750px) {
        grid-template-columns: 1fr 1fr 1fr;
      }
      > .form-control {
        grid-column-start: 1;
        grid-column-end: 3;
        @container (min-width: 750px) {
          grid-column-start: 1;
          grid-column-end: 3;
        }
        &.firstNameWrapper {
          @container (min-width: 430px) {
            grid-column-start: 1;
            grid-column-end: 2;
          }
        }
        &.lastNameWrapper {
          @container (min-width: 430px) {
            grid-column-start: 2;
            grid-column-end: 3;
          }
        }
        &.emailWrapper {
          @container (min-width: 750px) {
            grid-column-start: 3;
            grid-column-end: 4;
          }
        }
        &.countryWrapper {
          @container (min-width: 750px) {
            grid-column-start: 1;
            grid-column-end: 2;
          }
        }
        &.phoneNumberWrapper {
          @container (min-width: 750px) {
            grid-column-start: 2;
            grid-column-end: 3;
          }
        }
        &.agreementWrapper {
          @container (min-width: 750px) {
            grid-column-start: 1;
            grid-column-end: 4;
          }
        }
        &.submitButtonWrapper {
          @container (min-width: 750px) {
            grid-column-start: 3;
            grid-column-end: 4;
          }
        }
      }
    }
  }

  .error {
    color: var(--clr-danger);
    font-size: 80%;
    // padding-bottom: 3px;
    padding-top: 1px;
  }

  label {
    cursor: pointer;
  }

  .form-control {
    // padding-top: 1rem;
    position: relative;
    label {
      font-size: 1rem;
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    select {
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
      direction: ltr;
      display: flex;
      [type="text"] {
        max-width: 80px;
        border-right: 1px solid var(--clr-gray-100);
      }
      [type="tel"] {
      }
    }
    input[type="checkbox"] {
      margin-right: 0.5rem;
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

  .form-loader {
    color: var(--clr-brandSecondaryColor);
    inset: 0;
    margin: 0;
    position: absolute;
    .loader {
      background: rgb(0 0 0 / 0.7);
      inset: 0;
      margin: 0;
      padding: 0;
      position: absolute;
    }
  }
}

html[dir="rtl"] {
  form.registerForm {
    .form-control {
      .phone {
        [type="tel"] {
          &::placeholder {
            text-align: end;
          }
        }
      }
      input[type="checkbox"] {
        margin-inline-end: 0.5rem;
      }
    }
  }
}
</style>
