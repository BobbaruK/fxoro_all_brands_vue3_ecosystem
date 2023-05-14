<script>
import Form from "../../../../../../001-super_global_files/components/Form/Form.vue";

export default {
  name: "Brand~Home~Section4",
  components: { Form },
  emits: ["showForm"],
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const formButton = {
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

    return { formButton };
  },
};
</script>

<template>
  <section id="section4" class="">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Form :agreementType="'wBrandName'" :buttonText="formButton[lang]" :lang="lang" :layout="3" :test="false" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss"></style>
