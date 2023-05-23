<script>
import { ref } from "@vue/reactivity";

import demoSection1Transl from "../../composables/translations/pages/home/demoSection1Transl";
import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";

import Modal from "../../../../../../../001-super_global_files/components/Modal/Modal3.vue";
import Form from "../../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

export default {
  name: "LP~Demo3~Home~Section1",
  components: { Modal, Form },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, content, formBtn } = demoSection1Transl();

    // Modal with form
    const showModalForm = ref(false);

    return {
      title,
      content,
      formBtn,
      showModalForm,
      translationsGlossary,
    };
  },
};
</script>

<template>
  <section id="section1" class="subHeader">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ title[lang] }}</h1>
        </div>
        <div class="col-12" v-html="content[lang]"></div>
        <div class="col-12">
          {{ showModalForm }}
          <button class="scssecoBtn" @click="showModalForm = !showModalForm">{{ formBtn[lang] }}</button>
          <Modal :lang="lang" :modalID="'brand-home-modal-form'" :delay="1500" v-model="showModalForm" @closeModal="showModalForm = false">
            <h1>Lorem, ipsum dolor.</h1>
            <Form :agreementType="'wBrandName'" :buttonText="translationsGlossary.j.join[lang]" :lang="lang" :test="false" />
          </Modal>
        </div>
        <div class="col-12">
          <Form :agreementType="'wBrandName'" :buttonText="translationsGlossary.j.join[lang]" :lang="lang" :registerType="'sms'" :test="true" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss"></style>
