<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

import Modal from "../../../../../../../001-super_global_files/components/Modal/Modal.vue";
import Form from "../../../../../../../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm.vue";

import demoV1HomeSection3Transl from "../../composables/translations/pages/home/demoV1HomeSection3Transl";
import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";

export default {
  name: "LP~NewRealShare2~Home~Section3",
  components: { Modal, Form },
  props: {
    lang: String,
  },
  setup() {
    const showModalForm = ref(false);
    const modalDetailsForm = {
      modalID: "brand-home-modal-form",
    };

    const formBtn = {
      en: "Start trading shares",
    };
    return { showModalForm, modalDetailsForm, formBtn, demoV1HomeSection3Transl };
  },
};
</script>

<template>
  <section id="section3" class="leBtn">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="btnWrapper">
            <button class="myBtn scssecoBtn" v-html="demoV1HomeSection3Transl().btn[lang]" @click="showModalForm = !showModalForm" />
            <p v-html="demoV1HomeSection3Transl().btnDisclaimer[lang]" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <div class="row">
          <div class="col-12 imgsWrapper">
            <picture>
              <source srcset="../../assets/imgs/brand1.avif" type="image/avif" />
              <source srcset="../../assets/imgs/brand1.webp" type="image/webp" />
              <img src="../../assets/imgs/brand1.png" alt="brand1" width="48" height="30" loading="lazy" decoding="async" />
            </picture>
            <picture>
              <source srcset="../../assets/imgs/brand2.avif" type="image/avif" />
              <source srcset="../../assets/imgs/brand2.webp" type="image/webp" />
              <img src="../../assets/imgs/brand2.png" alt="brand2" width="175" height="30" loading="lazy" decoding="async" />
            </picture>
            <picture>
              <source srcset="../../assets/imgs/brand3.avif" type="image/avif" />
              <source srcset="../../assets/imgs/brand3.webp" type="image/webp" />
              <img src="../../assets/imgs/brand3.png" alt="brand3" width="140" height="30" loading="lazy" decoding="async" />
            </picture>
            <picture>
              <source srcset="../../assets/imgs/brand4.avif" type="image/avif" />
              <source srcset="../../assets/imgs/brand4.webp" type="image/webp" />
              <img src="../../assets/imgs/brand4.png" alt="brand4" width="115" height="30" loading="lazy" decoding="async" />
            </picture>
            <picture>
              <source srcset="../../assets/imgs/brand5.avif" type="image/avif" />
              <source srcset="../../assets/imgs/brand5.webp" type="image/webp" />
              <img src="../../assets/imgs/brand5.png" alt="brand5" width="90" height="30" loading="lazy" decoding="async" />
            </picture>
            <picture>
              <source srcset="../../assets/imgs/brand6.avif" type="image/avif" />
              <source srcset="../../assets/imgs/brand6.webp" type="image/webp" />
              <img src="../../assets/imgs/brand6.png" alt="brand6" width="97" height="30" loading="lazy" decoding="async" />
            </picture>
            <picture>
              <source srcset="../../assets/imgs/brand7.avif" type="image/avif" />
              <source srcset="../../assets/imgs/brand7.webp" type="image/webp" />
              <img src="../../assets/imgs/brand7.png" alt="brand7" width="103" height="30" loading="lazy" decoding="async" />
            </picture>
          </div>
        </div>
      </div>
    </div>

    <Modal :lang="lang" :modalDetails="modalDetailsForm" v-model="showModalForm" @closeModal="showModalForm = false">
      <Form :agreementType="'wBrandName'" :buttonText="formBtn[lang]" :lang="lang" :test="false" />
    </Modal>
  </section>
</template>

<style lang="scss">
section#section3.leBtn {
  .scssecoBtn {
    background-color: var(--clr-brandSecondaryColor);
    color: var(--clr-brandPrimaryColor);
    &:hover {
      background-color: var(--clr-brandPrimaryColor);
      color: var(--clr-brandSecondaryColor);
    }
  }
  .bottom {
    margin-top: 4rem;
  }
  .imgsWrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    img {
      height: 30px;
      width: auto;
    }
  }
}
</style>
