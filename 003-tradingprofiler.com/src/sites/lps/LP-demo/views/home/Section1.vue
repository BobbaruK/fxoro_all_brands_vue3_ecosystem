<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

import demoV1HomeSection1Transl from "../../composables/translations/pages/home/demoV1HomeSection1Transl";
import demoV3HomeSection1Transl from "../../composables/translations/pages/home/demoV3HomeSection1Transl";
import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";

import Modal from "../../../../../../../001-super_global_files/components/Modal/Modal.vue";
import Form from "../../../../../../../001-super_global_files/components/Form/Form.vue";

export default {
  name: "LP~DemoV1~Home~Section1",
  components: { Modal, Form },
  props: {
    lang: String,
  },
  setup() {
    const router = useRouter();
    const lpName = router.currentRoute.value.matched[1].name;
    // Translations
    const title = ref({});
    const content = ref({});
    const formBtn = ref({});

    if (lpName === "Demo" || lpName === "DemoV2") {
      title.value = demoV1HomeSection1Transl().title;
      content.value = demoV1HomeSection1Transl().content;
      formBtn.value = demoV1HomeSection1Transl().formBtn;
    }

    if (lpName === "DemoV3") {
      title.value = demoV3HomeSection1Transl().title;
      content.value = demoV3HomeSection1Transl().content;
      formBtn.value = demoV3HomeSection1Transl().formBtn;
    }

    // Modal with form
    const showModalForm = ref(false);
    const modalDetailsForm = {
      modalID: "brand-home-modal-form",
      delay: 3500,
    };

    return { title, content, formBtn, showModalForm, modalDetailsForm, translationsGlossary };
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
        </div>
      </div>
    </div>
  </section>
  <Modal :lang="lang" :modalDetails="modalDetailsForm" v-model="showModalForm" @closeModal="showModalForm = false">
    <h1>Lorem, ipsum dolor.</h1>
    <Form
      :agreementType="'wBrandName'"
      :buttonText="translationsGlossary.j.join[lang]"
      :lang="lang"
      :layout="1"
      :test="false"
    />
  </Modal>
</template>

<style lang="scss"></style>
