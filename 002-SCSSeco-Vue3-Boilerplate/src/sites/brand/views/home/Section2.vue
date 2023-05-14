<script>
import { ref } from "@vue/reactivity";

import Modal from "../../../../../../001-super_global_files/components/Modal/Modal.vue";
import Form from "../../../../../../001-super_global_files/components/Form/Form.vue";

export default {
  name: "Brand~Home~Section2",
  components: { Modal, Form },
  props: {
    lang: String,
  },
  setup() {
    const showModalForm = ref(false);
    const modalDetailsForm = {
      modalID: "brand-home-section2-modalForm",
      maxWidth: "700px",
      // delay: 500,
    };

    const modalFormButton = {
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

    return {
      showModalForm,
      modalDetailsForm,
      modalFormButton,
    };
  },
};
</script>

<template>
  <section id="section2" class="">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <button class="scssecoBtn" @click="showModalForm = !showModalForm">Modal form</button>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <Form
            :agreementType="'wBrandName'"
            :buttonText="modalFormButton[lang]"
            :lang="lang"
            :layout="1"
            :test="false"
          />
        </div>
      </div>
    </div>
    <Modal :lang="lang" :modalDetails="modalDetailsForm" v-model="showModalForm" @closeModal="showModalForm = false">
      <h1>Lorem, ipsum dolor.</h1>
      <Form :agreementType="'wBrandName'" :buttonText="modalFormButton[lang]" :lang="lang" :layout="2" :test="false" />
    </Modal>
  </section>
</template>

<style lang="scss"></style>
