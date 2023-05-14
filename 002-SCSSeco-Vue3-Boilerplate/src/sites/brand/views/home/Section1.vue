<script>
import { ref } from "@vue/reactivity";

import homeSection1Transl from "../../composables/pages/home/homeSection1Transl";

import Modal from "../../../../../../001-super_global_files/components/Modal/Modal.vue";
import Form from "../../../../../../001-super_global_files/components/Form/Form.vue";

export default {
  name: "Brand~Home~Section1",
  components: { Modal, Form },
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { title, content, formBtn } = homeSection1Transl();

    // Modal with form
    const showModalForm = ref(false);
    const modalDetailsForm = {
      modalID: "brand-home-section1-modalForm",
      maxWidth: "300px",
      delay: 2500,
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

    // Modal other
    const showModalOther = ref(false);
    const modalDetailsOther = {
      modalID: "brand-home-section1-modalOther",
    };

    return {
      title,
      content,
      formBtn,
      showModalForm,
      modalDetailsForm,
      modalFormButton,
      modalDetailsOther,
      showModalOther,
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
          <button class="scssecoBtn" @click="showModalForm = !showModalForm">{{ formBtn[lang] }}</button>
          &nbsp;
          <button class="scssecoBtn" @click="showModalOther = !showModalOther">Other Modal</button>
        </div>
      </div>
    </div>
  </section>
  <Modal :lang="lang" :modalDetails="modalDetailsForm" v-model="showModalForm" @closeModal="showModalForm = false">
    <h1>Lorem, ipsum dolor.</h1>
    <Form :agreementType="'wBrandName'" :buttonText="modalFormButton[lang]" :lang="lang" :layout="2" :test="false" />
  </Modal>
  <Modal :lang="lang" :modalDetails="modalDetailsOther" v-model="showModalOther" @closeModal="showModalOther = false">
    <h1>Lorem, ipsum dolor.</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate asperiores culpa fuga corporis excepturi?
      Molestias quam minima assumenda numquam error.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et culpa perspiciatis similique eum hic earum adipisci
      quod nobis reiciendis, consectetur provident rerum exercitationem impedit quia incidunt dicta nesciunt. Nesciunt,
      similique.
    </p>
    <hr />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, ducimus.</p>
  </Modal>
</template>

<style lang="scss">
</style>
