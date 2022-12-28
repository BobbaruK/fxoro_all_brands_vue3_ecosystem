<script>
import { useRouter } from "vue-router";
import { computed, onMounted, onUpdated, ref } from "@vue/runtime-core";

import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";
import languages from "../../../composables/languages";
import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";
import { useWebStoreBrand } from "@/stores/WebStoreBrand"; // web store

import Loader from "../../../../../../../001-super_global_files/components/Loader/Loader.vue";

export default {
  name: "Brand~Store",
  components: { Loader },
  props: {
    lang: String,
  },
  setup(props) {
    /**
     * Meta stuff
     */
    const documentTitleTransl = translationsGlossary.s.store;

    const metaDescription = {
      en: `Brand - ${translationsGlossary.s.store.en} - When writing a meta description, keep it between 140 and 160 characters so Google can display your entire message. Don’t forget to include your keyword!`,
      it: `Brand - ${translationsGlossary.s.store.it} - Quando scrivi una meta descrizione, mantienila compresa tra 140 e 160 caratteri in modo che Google possa visualizzare l'intero messaggio. Non dimenticare di includere la tua parola chiave!`,
      tr: `Brand - ${translationsGlossary.s.store.tr} - Bir meta açıklama yazarken, Google'ın tüm mesajınızı gösterebilmesi için 140 ila 160 karakter arasında tutun. Anahtar kelimenizi eklemeyi unutmayın!`,
      ro: `Brand - ${translationsGlossary.s.store.ro} - Când scrieți o meta-descriere, păstrați-o între 140 și 160 de caractere, astfel încât Google să vă poată afișa întregul mesaj. Nu uitați să includeți cuvântul cheie!`,
      hu: `Brand - ${translationsGlossary.s.store.hu} - Ha metaleírást ír, tartsa 140 és 160 karakter között, hogy a Google megjeleníthesse a teljes üzenetet. Ne felejtse el megadni a kulcsszót!`,
      ar: `Brand - ${translationsGlossary.s.store.ar} - عند كتابة وصف تعريفي ، احتفظ به بين 140 و 160 حرفًا حتى يتمكن Google من عرض رسالتك بالكامل. لا تنس تضمين كلمتك الرئيسية!`,
      de: `Brand - ${translationsGlossary.s.store.de} - Halten Sie beim Schreiben einer Meta-Beschreibung zwischen 140 und 160 Zeichen, damit Google Ihre gesamte Nachricht anzeigen kann. Vergessen Sie nicht, Ihr Keyword anzugeben!`,
      es: `Brand - ${translationsGlossary.s.store.es} - Cuando escriba una meta descripción, manténgala entre 140 y 160 caracteres para que Google pueda mostrar su mensaje completo. ¡No olvides incluir tu palabra clave!`,
      sv: `Brand - ${translationsGlossary.s.store.sv} - När du skriver en metabeskrivning, behåll den mellan 140 och 160 tecken så att Google kan visa hela ditt meddelande. Glöm inte att inkludera ditt sökord!`,
      pt: `Brand - ${translationsGlossary.s.store.pt} - Ao escrever uma meta descrição, mantenha-a entre 140 e 160 caracteres para que o Google possa exibir sua mensagem inteira. Não se esqueça de incluir sua palavra-chave!`,
      fi: `Brand - ${translationsGlossary.s.store.fi} - Kun kirjoitat metakuvausta, pidä se 140–160 merkin pituisena, jotta Google voi näyttää koko viestisi. Muista lisätä avainsanasi!`,
      pl: `Brand - ${translationsGlossary.s.store.pl} - Pisząc metaopis, zachowaj długość od 140 do 160 znaków, aby Google mogło wyświetlić całą wiadomość. Nie zapomnij podać słowa kluczowego!`,
      th: `Brand - ${translationsGlossary.s.store.th} - เมื่อเขียนคำอธิบายเมตา ให้มีความยาวระหว่าง 140 ถึง 160 อักขระ เพื่อให้ Google สามารถแสดงข้อความทั้งหมดของคุณได้ อย่าลืมใส่คีย์เวิร์ดของคุณ!`,
      ms: `Brand - ${translationsGlossary.s.store.ms} - Apabila menulis perihalan meta, simpan antara 140 dan 160 aksara supaya Google boleh memaparkan keseluruhan mesej anda. Jangan lupa sertakan kata kunci anda!`,
    };

    const { lpLangs } = languages();
    checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescription, "#FFA900");
    onUpdated(() => {
      checkLangAndMeta(props.lang, lpLangs, documentTitleTransl, metaDescription, "#FFA900");
    });

    /**
     * Store stuff
     */
    const router = useRouter();
    const webStore = useWebStoreBrand(); // web store

    webStore.cartFetch();

    const filterStore = (e) => {
      let values = [];
      Array.from(e.target.querySelectorAll("input[type=checkbox]:checked")).forEach((target) => {
        values.push(target.value);
      });

      webStore.filterProductsBrand(values);
    };

    const changeCheckbox = (e) => {
      webStore.filterProducts(e);
    };

    return { webStore, router, filterStore, changeCheckbox, translationsGlossary };
  },
};
</script>

<template>
  <section id="section1" class="products">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ translationsGlossary.s.store[lang] }}</h1>
          <Loader v-if="webStore.loading" />
          <div v-else class="productsWrapper">
            <div class="storeActions">
              <div class="sort">
                <span class="h4">Sort by</span>
                <div>
                  <button @click="webStore.sortByNameAsc">name asc</button>
                  <button @click="webStore.sortByNameDesc">name desc</button>
                  <button @click="webStore.sortByPriceAsc">price asc</button>
                  <button @click="webStore.sortByPriceDesc">price desc</button>
                </div>
              </div>
              <div class="filters">
                <span class="h4">Filters</span>
                <!-- {{ webStore.filters }} -->
                <form @submit.prevent="filterStore" @reset="webStore.filterProductsReset" id="filterForm">
                  <div>
                    <span class="h5">Type:</span>
                    <ul>
                      <template v-for="(filter, index) in webStore.filters" :key="index">
                        <li v-if="filter.type === 'type'">
                          <input
                            @change="changeCheckbox"
                            :id="filter.id.toLowerCase()"
                            :name="filter.label"
                            :value="filter.label"
                            type="checkbox"
                          />
                          <label :for="filter.id.toLowerCase()">{{ filter.label }}</label>
                        </li>
                      </template>
                    </ul>
                  </div>
                  <div>
                    <span class="h5">Brand:</span>

                    <ul>
                      <template v-for="(filter, index) in webStore.filters" :key="index">
                        <li v-if="filter.type === 'brand'">
                          <input
                            @change="changeCheckbox"
                            :id="filter.id.toLowerCase()"
                            :name="filter.label"
                            :value="filter.label"
                            type="checkbox"
                          />
                          <label :for="filter.id.toLowerCase()">{{ filter.label }}</label>
                        </li>
                      </template>
                    </ul>
                  </div>
                  <div class="btns">
                    <!-- <button type="submit" class="scssecoBtn">filter</button> -->
                    <button type="reset" class="scssecoBtn">reset</button>
                  </div>
                </form>
              </div>
              <div class="results">{{ webStore.productsShow.length }} product(s)</div>
            </div>
            <div class="products">
              <div v-for="(product, index) in webStore.productsShow" :key="product.id" class="product">
                <router-link :to="{ name: 'Product', params: { productID: product.id } }" class="routeImgWrapp">
                  <div v-if="product.discountPercentage" class="discount">
                    <svg width="32" height="32" viewBox="0 0 16 16">
                      <path
                        fill="currentColor"
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      />
                    </svg>
                    <span>-{{ product.discountPercentage }}%</span>
                  </div>
                  <img
                    :src="product.thumbnail.link"
                    :alt="product.thumbnail.title"
                    :width="product.thumbnail.width"
                    :height="product.thumbnail.height"
                  />
                </router-link>
                <h2>
                  <router-link :to="{ name: 'Product', params: { productID: product.id } }">{{
                    product.title
                  }}</router-link>
                </h2>
                <p>Category: {{ product.category }}</p>
                <p>Description: {{ product.description }}</p>
                <p>
                  Price:
                  <span v-if="product.discountPercentage">
                    <del>{{ product.price }}</del> <strong>{{ product.discountedPrice }}</strong>
                  </span>
                  <span v-else>{{ product.price }}</span> RON
                </p>
                <p>Stock: {{ product.stock }}</p>
                <div class="btns">
                  <button
                    class="scssecoBtn"
                    @click="router.push({ name: 'Product', params: { productID: product.id } })"
                  >
                    {{ translationsGlossary.d.details[lang] }}
                  </button>
                  <button
                    class="scssecoBtn"
                    :class="{ notOnStock: product.stock == 0 }"
                    @click="webStore.addToBag(product.id)"
                    :disabled="product.cartQuantity > 0 || product.stock == 0"
                  >
                    <span v-if="product.stock == 0">{{ translationsGlossary.o.outOfStock[lang] }}</span>
                    <span v-else-if="product.cartQuantity > 0">{{ translationsGlossary.i.inTheCart[lang] }}</span>
                    <span v-else>{{ translationsGlossary.a.addToCart[lang] }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.productsWrapper {
  align-content: center;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 1rem;
  justify-content: center;
  .storeActions {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    .sort {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      > div {
        align-content: center;
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .filters {
      form#filterForm {
        align-content: flex-start;
        align-items: stretch;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        div.btns {
          align-content: center;
          align-items: center;
          display: flex;
          flex-direction: row;
          gap: 1rem;
          justify-content: flex-start;
        }
      }
    }
    ul {
      align-content: center;
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: flex-start;
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
  .products {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    .product {
      border: 1px solid var(--clr-brandPrimaryColor-dark);
      border-radius: var(--borderRadius);
      box-shadow: 0px 0px 5px 0px var(--clr-brandPrimaryColor-light);
      align-content: center;
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 1rem;
      a.routeImgWrapp {
        align-self: center;
        position: relative;
        .discount {
          position: absolute;
          inset: auto -15px -10px auto;
          rotate: 12deg;
          svg {
            display: block;
            width: 70px;
            height: 70px;
          }
          span {
            color: var(--clr-white);
            font-size: 15px;
            font-weight: bold;
            inset: 50% auto auto 50%;
            line-height: 1;
            position: absolute;
            translate: -50% -50%;
            rotate: -12deg;
          }
        }
        img {
          object-fit: cover;
          height: 220px;
          width: auto;
        }
      }
      .btns {
        margin-top: auto;
        align-self: stretch;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
      }
    }
  }
}
</style>
