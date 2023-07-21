<script>
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

import demoSection3Transl from "../../composables/translations/pages/home/demoSection3Transl";
import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";

export default {
  name: "LP~ARealSharesOffer~Home~Section3",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    // Translations
    const { buttonLabel, buttonDisclaimer } = demoSection3Transl();

    const bttFunct = () => {
      gsap.to(window, { scrollTo: "#registerForm-1" });
    };

    return { buttonLabel, buttonDisclaimer, translationsGlossary, bttFunct };
  },
};
</script>

<template>
  <section id="section3" class="leBtn">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="btnWrapper">
            <a class="scssecoBtn scsseco_scrollTo" href="#start-trading" v-html="buttonLabel[lang]" @click.prevent="bttFunct" />
            <p v-html="buttonDisclaimer[lang]" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <div class="row">
          <div class="col-12 imgsWrapper">
            <img src="../../assets/imgs/brand1.png" alt="brand1" />
            <img src="../../assets/imgs/brand2.png" alt="brand2" />
            <img src="../../assets/imgs/brand3.png" alt="brand3" />
            <img src="../../assets/imgs/brand4.png" alt="brand4" />
            <img src="../../assets/imgs/brand5.png" alt="brand5" />
            <img src="../../assets/imgs/brand6.png" alt="brand6" />
            <img src="../../assets/imgs/brand7.png" alt="brand7" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section3.leBtn {
  .btnWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    a.scssecoBtn {
      background-color: var(--clr-brandSecondaryColor);
      color: var(--clr-brandPrimaryColor);
      &:hover {
        background-color: var(--clr-brandPrimaryColor);
        color: var(--clr-brandSecondaryColor);
      }
    }
    p {
      font-size: 12px;
      max-width: 30ch;
      text-align: center;
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
