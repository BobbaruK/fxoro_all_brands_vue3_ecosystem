<script>
import { onUpdated } from "@vue/runtime-core";

import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";

import Section1 from "./Section1.vue";

export default {
  name: "LP~DemoV1~Home",
  components: { Section1 },
  props: {
    lang: String,
  },
  setup(props) {
    /**
     * metatags
     */
    const documentTitleTransl = {
      en: "Demo1",
      it: "Demo1",
      tr: "Demo1",
      ro: "Demo1",
      hu: "Demo1",
      ar: "Demo1",
      de: "Demo1",
      es: "Demo1",
      sv: "Demo1",
      pt: "Demo1",
      fi: "Demo1",
      pl: "Demo1",
      th: "Demo1",
      ms: "Demo1",
    };

    const metaDescription = {
      en: "Demo1 - Home(en) - When writing a meta description, keep it between 140 and 160 characters so Google can display your entire message. Don’t forget to include your keyword!",
      it: "Demo1 - Home(it) - Quando scrivi una meta descrizione, mantienila compresa tra 140 e 160 caratteri in modo che Google possa visualizzare l'intero messaggio. Non dimenticare di includere la tua parola chiave!",
      tr: "Demo1 - Home(tr) - Bir meta açıklama yazarken, Google'ın tüm mesajınızı gösterebilmesi için 140 ila 160 karakter arasında tutun. Anahtar kelimenizi eklemeyi unutmayın!",
      ro: "Demo1 - Home(ro) - Când scrieți o meta-descriere, păstrați-o între 140 și 160 de caractere, astfel încât Google să vă poată afișa întregul mesaj. Nu uitați să includeți cuvântul cheie!",
      hu: "Demo1 - Home(hu) - Ha metaleírást ír, tartsa 140 és 160 karakter között, hogy a Google megjeleníthesse a teljes üzenetet. Ne felejtse el megadni a kulcsszót!",
      ar: "Demo1 - Home(ar) - عند كتابة وصف تعريفي ، احتفظ به بين 140 و 160 حرفًا حتى يتمكن Google من عرض رسالتك بالكامل. لا تنس تضمين كلمتك الرئيسية!",
      de: "Demo1 - Home(de) - Halten Sie beim Schreiben einer Meta-Beschreibung zwischen 140 und 160 Zeichen, damit Google Ihre gesamte Nachricht anzeigen kann. Vergessen Sie nicht, Ihr Keyword anzugeben!",
      es: "Demo1 - Home(es) - Cuando escriba una meta descripción, manténgala entre 140 y 160 caracteres para que Google pueda mostrar su mensaje completo. ¡No olvides incluir tu palabra clave!",
      sv: "Demo1 - Home(sv) - När du skriver en metabeskrivning, behåll den mellan 140 och 160 tecken så att Google kan visa hela ditt meddelande. Glöm inte att inkludera ditt sökord!",
      pt: "Demo1 - Home(pt) - Ao escrever uma meta descrição, mantenha-a entre 140 e 160 caracteres para que o Google possa exibir sua mensagem inteira. Não se esqueça de incluir sua palavra-chave!",
      fi: "Demo1 - Home(fi) - Kun kirjoitat metakuvausta, pidä se 140–160 merkin pituisena, jotta Google voi näyttää koko viestisi. Muista lisätä avainsanasi!",
      pl: "Demo1 - Home(pl) - Pisząc metaopis, zachowaj długość od 140 do 160 znaków, aby Google mogło wyświetlić całą wiadomość. Nie zapomnij podać słowa kluczowego!",
      th: "Demo1 - Home(th) - เมื่อเขียนคำอธิบายเมตา ให้มีความยาวระหว่าง 140 ถึง 160 อักขระ เพื่อให้ Google สามารถแสดงข้อความทั้งหมดของคุณได้ อย่าลืมใส่คีย์เวิร์ดของคุณ!",
      ms: "Demo1 - Home(ms) - Apabila menulis perihalan meta, simpan antara 140 dan 160 aksara supaya Google boleh memaparkan keseluruhan mesej anda. Jangan lupa sertakan kata kunci anda!",
    };

    checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#571F4E");
    onUpdated(() => {
      checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#571F4E");
    });

    return {};
  },
};
</script>

<template>
  <Section1 :lang="lang" />
</template>

<style lang="scss">
form.registerForm {
  .form-control {
    label {
      &:not(.agreement):not(.gdpr) {
        bottom: 5px;
        display: none;
        left: 0;
        padding: 5px;
        // pointer-events: none;
        // position: absolute;
      }
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    select {
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#41220b+0,41220b+44,c36522+100 */
      background: var(--clr-brandPrimaryColor-dark); /* Old browsers */
      background: -moz-linear-gradient(
        top,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        top,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to bottom,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

      border-radius: var(--borderRadius);
      border: 1px solid var(--clr-brandPrimaryColor-dark);
      color: var(--clr-white);
      height: 40px;
    }
    .phone {
      [type="text"] {
        border-radius: var(--borderRadius) 0 0 var(--borderRadius);
      }
      [type="tel"] {
        border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
      }
    }
    button[type="submit"] {
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#41220b+0,41220b+44,c36522+100 */
      background: var(--clr-brandPrimaryColor-dark); /* Old browsers */
      background: -moz-linear-gradient(
        top,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        top,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to bottom,
        var(--clr-brandPrimaryColor-dark) 0%,
        var(--clr-brandPrimaryColor-dark) 65%,
        var(--clr-brandPrimaryColor-light) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      border-radius: var(--borderRadius);
      border: 2px solid var(--clr-brandPrimaryColor-light);
      color: var(--clr-brandPrimaryColor-light);
      height: 40px;
      &:hover {
        border: 2px solid var(--clr-brandPrimaryColor);
      }
    }
  }
}
</style>