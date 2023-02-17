<script>
import { onMounted, onUpdated, ref, watchEffect } from "@vue/runtime-core";

import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";
import languages from "../../../composables/languages";
import checkLangAndMeta from "../../../../../../../001-super_global_files/composables/checkLangAndMeta";
import { useWebStoreBrand } from "@/stores/WebStoreBrand"; // web store

import Loader from "../../../../../../../001-super_global_files/components/Loader/Loader.vue";

export default {
  name: "Brand~Product",
  components: { Loader },
  props: {
    lang: String,
    productID: String,
  },
  setup(props) {
    /**
     * Store stuff
     */
    const webStore = useWebStoreBrand(); // web store

    // get product
    const product = ref();
    watchEffect(() => {
      if (!webStore.loading) {
        product.value = webStore.productsShow.filter((product) => {
          if (product.id == props.productID) {
            return product;
          }
        });
      }
    });

    /**
     * Meta stuff
     */
    const documentTitleTransl = translationsGlossary.p.product;

    const metaDescription = {
      en: `Brand - ${translationsGlossary.p.product.en} - When writing a meta description, keep it between 140 and 160 characters so Google can display your entire message. Don’t forget to include your keyword!`,
      it: `Brand - ${translationsGlossary.p.product.it} - Quando scrivi una meta descrizione, mantienila compresa tra 140 e 160 caratteri in modo che Google possa visualizzare l'intero messaggio. Non dimenticare di includere la tua parola chiave!`,
      tr: `Brand - ${translationsGlossary.p.product.tr} - Bir meta açıklama yazarken, Google'ın tüm mesajınızı gösterebilmesi için 140 ila 160 karakter arasında tutun. Anahtar kelimenizi eklemeyi unutmayın!`,
      ro: `Brand - ${translationsGlossary.p.product.ro} - Când scrieți o meta-descriere, păstrați-o între 140 și 160 de caractere, astfel încât Google să vă poată afișa întregul mesaj. Nu uitați să includeți cuvântul cheie!`,
      hu: `Brand - ${translationsGlossary.p.product.hu} - Ha metaleírást ír, tartsa 140 és 160 karakter között, hogy a Google megjeleníthesse a teljes üzenetet. Ne felejtse el megadni a kulcsszót!`,
      ar: `Brand - ${translationsGlossary.p.product.ar} - عند كتابة وصف تعريفي ، احتفظ به بين 140 و 160 حرفًا حتى يتمكن Google من عرض رسالتك بالكامل. لا تنس تضمين كلمتك الرئيسية!`,
      de: `Brand - ${translationsGlossary.p.product.de} - Halten Sie beim Schreiben einer Meta-Beschreibung zwischen 140 und 160 Zeichen, damit Google Ihre gesamte Nachricht anzeigen kann. Vergessen Sie nicht, Ihr Keyword anzugeben!`,
      es: `Brand - ${translationsGlossary.p.product.es} - Cuando escriba una meta descripción, manténgala entre 140 y 160 caracteres para que Google pueda mostrar su mensaje completo. ¡No olvides incluir tu palabra clave!`,
      sv: `Brand - ${translationsGlossary.p.product.sv} - När du skriver en metabeskrivning, behåll den mellan 140 och 160 tecken så att Google kan visa hela ditt meddelande. Glöm inte att inkludera ditt sökord!`,
      pt: `Brand - ${translationsGlossary.p.product.pt} - Ao escrever uma meta descrição, mantenha-a entre 140 e 160 caracteres para que o Google possa exibir sua mensagem inteira. Não se esqueça de incluir sua palavra-chave!`,
      fi: `Brand - ${translationsGlossary.p.product.fi} - Kun kirjoitat metakuvausta, pidä se 140–160 merkin pituisena, jotta Google voi näyttää koko viestisi. Muista lisätä avainsanasi!`,
      pl: `Brand - ${translationsGlossary.p.product.pl} - Pisząc metaopis, zachowaj długość od 140 do 160 znaków, aby Google mogło wyświetlić całą wiadomość. Nie zapomnij podać słowa kluczowego!`,
      th: `Brand - ${translationsGlossary.p.product.th} - เมื่อเขียนคำอธิบายเมตา ให้มีความยาวระหว่าง 140 ถึง 160 อักขระ เพื่อให้ Google สามารถแสดงข้อความทั้งหมดของคุณได้ อย่าลืมใส่คีย์เวิร์ดของคุณ!`,
      ms: `Brand - ${translationsGlossary.p.product.ms} - Apabila menulis perihalan meta, simpan antara 140 dan 160 aksara supaya Google boleh memaparkan keseluruhan mesej anda. Jangan lupa sertakan kata kunci anda!`,
    };

    const { lpLangs } = languages();
    checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#FFA900");
    onUpdated(() => {
      checkLangAndMeta(props.lang, documentTitleTransl, metaDescription, "#FFA900");
    });

    const addToCart = (e, id) => {
      webStore.addToBag(id);
    };

    return { webStore, product, addToCart, translationsGlossary };
  },
};
</script>

<template>
  <section id="section1" class="productPage">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Loader v-if="webStore.loading" />
          <div v-else class="product">
            <div class="content">
              <div class="featuredImage">
                <div v-if="product[0].discountPercentage" class="discount">
                  <svg width="32" height="32" viewBox="0 0 16 16">
                    <path
                      fill="currentColor"
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                  <span>-{{ product[0].discountPercentage }}%</span>
                </div>
                <img
                  :src="product[0].thumbnail.link"
                  :alt="product[0].thumbnail.title"
                  :width="product[0].thumbnail.width"
                  :height="product[0].thumbnail.height"
                  class="feturedImage"
                />
              </div>
              <div>
                <h1>{{ product[0].title }}</h1>
                <p>
                  Price:
                  <span v-if="product[0].discountPercentage">
                    <del>{{ product[0].price }}</del> <strong>{{ product[0].discountedPrice }}</strong>
                  </span>
                  <span v-else>{{ product[0].price }}</span> RON
                </p>
                <p v-if="product[0].brand">Brand: {{ product[0].brand }}</p>
                <p v-if="product[0].stock">Stock: {{ product[0].stock }}</p>

                <div v-if="product[0].type == 'videoCards'">
                  <p v-if="product[0].interface">Interface: {{ product[0].interface }}</p>
                  <p v-if="product[0].maximumResolution">Maximum Resolution: {{ product[0].maximumResolution }}</p>
                  <p v-if="product[0].model">Model: {{ product[0].model }}</p>
                  <p v-if="product[0].editionCooling">Edition Cooling: {{ product[0].editionCooling }}</p>
                  <p v-if="product[0].recommendedForGaming">
                    Recommended For Gaming: {{ product[0].recommendedForGaming }}
                  </p>
                  <p v-if="product[0].chipsetManufacturer">
                    Chipset Manufacturer: {{ product[0].chipsetManufacturer }}
                  </p>
                  <p v-if="product[0].series">Series: {{ product[0].series }}</p>
                  <p v-if="product[0].manufacturingTechnology">
                    Manufacturing Technology: {{ product[0].manufacturingTechnology }}
                  </p>
                  <p v-if="product[0].graphicsProcessor">Graphics Processor: {{ product[0].graphicsProcessor }}</p>
                  <p v-if="product[0].memoryType">Memory Type: {{ product[0].memoryType }}</p>
                  <p v-if="product[0].memorySize">Memory Size: {{ product[0].memorySize }}</p>
                  <p v-if="product[0].memoryBus">Memory Bus: {{ product[0].memoryBus }}</p>
                  <p v-if="product[0].hdmiPorts">HDMI Ports: {{ product[0].hdmiPorts }}</p>
                  <p v-if="product[0].dpPorts">Dsiplay Ports: {{ product[0].dpPorts }}</p>
                  <p v-if="product[0].separatePowerSupply">
                    Separate Power Supply: {{ product[0].separatePowerSupply }}
                  </p>
                  <p v-if="product[0].size">Size: {{ product[0].size }}</p>
                  <p v-if="product[0].backplate">Backplate: {{ product[0].backplate }}</p>
                </div>

                <div v-else-if="product[0].type == 'processors'">
                  <p v-if="product[0].recommendedForGaming">
                    Recommended For Gaming: {{ product[0].recommendedForGaming }}
                  </p>
                  <p v-if="product[0].socket">Socket: {{ product[0].socket }}</p>
                  <p v-if="product[0].series">Series: {{ product[0].series }}</p>
                  <p v-if="product[0].core">Core: {{ product[0].core }}</p>
                  <p v-if="product[0].numberOfCores">Number Of Cores: {{ product[0].numberOfCores }}</p>
                  <p v-if="product[0].numberOfThreads">Number Of Threads: {{ product[0].numberOfThreads }}</p>
                  <p v-if="product[0].turboFrequency">Turbo Frequency: {{ product[0].turboFrequency }}</p>
                  <p v-if="product[0].smartCache">Smart Cache: {{ product[0].smartCache }}</p>
                  <p v-if="product[0].cacheLevel1">Cache Level 1: {{ product[0].cacheLevel1 }}</p>
                  <p v-if="product[0].cacheLevel2">Cache Level 2: {{ product[0].cacheLevel2 }}</p>
                  <p v-if="product[0].cacheLevel3">Cache Level 3: {{ product[0].cacheLevel3 }}</p>
                  <p v-if="product[0].manufacturingTechnology">
                    Manufacturing Technology: {{ product[0].manufacturingTechnology }}
                  </p>
                  <p v-if="product[0].totalPowerDissipated">
                    Total Power Dissipated: {{ product[0].totalPowerDissipated }}
                  </p>
                  <p v-if="product[0].stockCoolerIncluded">
                    Stock Cooler Included: {{ product[0].stockCoolerIncluded }}
                  </p>
                  <p v-if="product[0].unlocked">Unlocked: {{ product[0].unlocked }}</p>
                  <p v-if="product[0].graphicsModel">Graphics Model: {{ product[0].graphicsModel }}</p>
                  <p v-if="product[0].graphicFrequency">Graphic Frequency: {{ product[0].graphicFrequency }}</p>
                  <p v-if="product[0].dynamicGraphicFrequency">
                    Dynamic Graphic Frequency: {{ product[0].dynamicGraphicFrequency }}
                  </p>
                  <p v-if="product[0].maximumVideoMemory">Maximum Video Memory: {{ product[0].maximumVideoMemory }}</p>
                  <p v-if="product[0].memoryType">Memory Type: {{ product[0].memoryType }}</p>
                  <p v-if="product[0].maximumMemory">Maximum Memory: {{ product[0].maximumMemory }}</p>
                  <p v-if="product[0].memoryFrequency">Memory Frequency: {{ product[0].memoryFrequency }}</p>
                  <p v-if="product[0].memorySupport">Memory Support: {{ product[0].memorySupport }}</p>
                </div>

                <div v-else-if="product[0].type == 'motherboards'">
                  <p v-if="product[0].recommendedForGaming">
                    Recommended For Gaming: {{ product[0].recommendedForGaming }}
                  </p>
                  <p v-if="product[0].format">Format: {{ product[0].format }}</p>
                  <p v-if="product[0].processorSocket">Processor Socket: {{ product[0].processorSocket }}</p>
                  <p v-if="product[0].chipsetManufacturer">
                    Chipset Manufacturer: {{ product[0].chipsetManufacturer }}
                  </p>
                  <p v-if="product[0].chipsetModel">Chipset Model: {{ product[0].chipsetModel }}</p>
                  <p v-if="product[0].supportedProcessors">
                    Supported Processors: {{ product[0].supportedProcessors }}
                  </p>
                  <p v-if="product[0].graphicInterface">Graphic Interface: {{ product[0].graphicInterface }}</p>
                  <p v-if="product[0].raid">RAID: {{ product[0].raid }}</p>
                  <p v-if="product[0].integratedVideoCard">
                    Integrated Video Card: {{ product[0].integratedVideoCard }}
                  </p>
                  <p v-if="product[0].integratedAudioCard">
                    Integrated Audio Card: {{ product[0].integratedAudioCard }}
                  </p>
                  <p v-if="product[0].audioChipset">Audio Chipset: {{ product[0].audioChipset }}</p>
                  <p v-if="product[0].integratedNetworkCard">
                    Integrated Network Card: {{ product[0].integratedNetworkCard }}
                  </p>
                  <p v-if="product[0].sataIii">SATA III: {{ product[0].sataIii }}</p>
                  <p v-if="product[0].m2">M.2: {{ product[0].m2 }}</p>
                  <p v-if="product[0].memoryType">Memory Type: {{ product[0].memoryType }}</p>
                  <p v-if="product[0].maximumMemory">Maximum Memory: {{ product[0].maximumMemory }}</p>
                  <p v-if="product[0].numberOfSlots">Number Of Slots: {{ product[0].numberOfSlots }}</p>
                  <p v-if="product[0].technology">Technology: {{ product[0].technology }}</p>
                  <p v-if="product[0].supportedFrequencies">
                    Supported Frequencies: {{ product[0].supportedFrequencies }}
                  </p>
                  <p v-if="product[0].pciExpress40X16">PCI Express 4.0 x16 : {{ product[0].pciExpress40X16 }}</p>
                  <p v-if="product[0].pciExpressX1">PCI Express x1 : {{ product[0].pciExpressX1 }}</p>
                  <p v-if="product[0].multiGpuSli">Multi-GPU SLI : {{ product[0].multiGpuSli }}</p>
                  <p v-if="product[0].multiGpuCrossfireX">Multi-GPU CrossfireX : {{ product[0].multiGpuCrossfireX }}</p>
                  <p v-if="product[0].ps2MouseKeyboard">PS/2 Mouse-Tastatura : {{ product[0].ps2MouseKeyboard }}</p>
                  <p v-if="product[0].opticalSpdifOut">Optical S/PDIF out : {{ product[0].opticalSpdifOut }}</p>
                  <p v-if="product[0].usb20">USB 2.0 : {{ product[0].usb20 }}</p>
                  <p v-if="product[0].usb31TipA">USB 3.1 type A : {{ product[0].usb31TipA }}</p>
                  <p v-if="product[0].usb31TipC">USB 3.1 type C : {{ product[0].usb31TipC }}</p>
                  <p v-if="product[0].rj45Lan">RJ-45 LAN : {{ product[0].rj45Lan }}</p>
                  <p v-if="product[0].audioSupport">Audio Support: {{ product[0].audioSupport }}</p>
                  <p v-if="product[0].bluetooth">Bluetooth: {{ product[0].bluetooth }}</p>
                  <p v-if="product[0].wireless">Wireless: {{ product[0].wireless }}</p>
                  <p v-if="product[0].specialConnectors">Special Connectors: {{ product[0].specialConnectors }}</p>
                  <p v-if="product[0].biosFlashback">BIOS Flashback: {{ product[0].biosFlashback }}</p>
                </div>

                <button
                  class="scssecoBtn"
                  :class="{ notOnStock: product[0].stock == 0 }"
                  @click="addToCart($event, product[0].id)"
                  :disabled="product[0].cartQuantity > 0 || product[0].stock == 0"
                >
                  <span v-if="product[0].stock == 0">{{ translationsGlossary.o.outOfStock[lang] }}</span>
                  <span v-else-if="product[0].cartQuantity > 0">{{ translationsGlossary.i.inTheCart[lang] }}</span>
                  <span v-else>{{ translationsGlossary.a.addToCart[lang] }}</span>
                </button>
              </div>
            </div>
            <div class="productImgs">
              <img
                v-for="(image, index) in product[0].images"
                :key="index"
                :src="image.link"
                :alt="image.title"
                :width="image.width"
                :height="image.height"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../../../../../../001-super_global_files/assets/scss/abstracts/mixins" as mxns;

.product {
  .content {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    @include mxns.mediamin(md) {
      flex-wrap: nowrap;
    }
    .featuredImage {
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
    }
  }
  .productImgs {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: flex-start;
    margin-top: 2rem;
    img {
      object-fit: cover;
      height: 100px;
      max-width: 150px;
      width: auto;
    }
  }
  img.feturedImage {
  }
}
</style>
