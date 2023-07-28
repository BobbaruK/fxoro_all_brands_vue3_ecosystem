<script setup>
import { ref } from "@vue/reactivity";
import { defineAsyncComponent } from "vue";

import demoSection6Transl from "../../composables/translations/pages/home/demoSection6Transl";
import Form from "../../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

const props = defineProps({
  lang: String,
});

const Modal = defineAsyncComponent({
  loader: () => import("../../../../../../../001-super_global_files/components/Modal/Modal3.vue"),
});

const showModalForm = ref(false);
</script>

<template>
  <section id="section6" class="fees">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="btnWarn">
            <button class="myBtn scssecoBtn" @click="showModalForm = !showModalForm" v-html="demoSection6Transl().btn[lang]" />
            <p v-html="demoSection6Transl().btnDisc[lang]" />
          </div>

          <Modal :lang="lang" :modalID="'brand-home-modal-form'" :delay="1500" v-model="showModalForm" @closeModal="showModalForm = false">
            <Form :agreementType="'wBrandName'" :buttonText="demoSection6Transl().btn[lang]" :lang="lang" :test="false" @submitForm="showModalForm = false" />
          </Modal>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section6.fees {
  .btnWarn {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a.cssecoBtn {
      display: block;
      max-width: 150px;
      width: 100%;
    }
    p {
      margin: 0;
      padding: 0.5rem 0 0 0;
    }
  }
}
</style>
