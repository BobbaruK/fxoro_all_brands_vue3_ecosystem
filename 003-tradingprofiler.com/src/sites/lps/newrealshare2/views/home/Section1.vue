<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

import demoV1HomeSection1Transl from "../../composables/translations/pages/home/demoV1HomeSection1Transl";
import translationsGlossary from "../../../../../../../001-super_global_files/composables/translationsGlossary";

import Carousel from "../../../../../../../001-super_global_files/components/Carousel/Carousel.vue";
import reloadComponent from "../../../../../../../001-super_global_files/composables/reloadComponent";
import Slide from "../../../../../../../001-super_global_files/components/Carousel/Slide.vue";

export default {
  name: "LP~NewRealShare2~Home~Section1",
  components: { Carousel, Slide },
  props: {
    lang: String,
  },
  setup() {
    const { componentKey } = reloadComponent();

    return { componentKey, demoV1HomeSection1Transl };
  },
};
</script>

<template>
  <section id="section1" class="elSlider">
    <div class="title">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 v-html="demoV1HomeSection1Transl().title[lang]" />
          </div>
        </div>
      </div>
    </div>
    <div class="sliderWrapper">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <Carousel
              :key="componentKey"
              :lang="lang"
              :carouselDetails="{
                sliderID: 'scssecoSlider-1',
                carouselInterval: 5000,
                carouselAnimDuration: 620,
                carouselAutoplay: true,
                carouselHoverPause: true,
                carouselControls: 'arrows',
                carouselArrows: 'arrows',
                carouselReset: true,
                carouselTransition: 3,
                carouselResponsive: true,
                carouselDirection: 'ltr',
                carouselDev: false,
              }"
            >
              <Slide class="active">
                <picture>
                  <source srcset="../../assets/imgs/01-amazon.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/01-amazon.webp" type="image/webp" />
                  <img src="../../assets/imgs/01-amazon.png" alt="brand1" width="101" height="100" loading="lazy" decoding="async" class="img amazon" />
                </picture>
                <p><strong>Amazon (AMZ)</strong> Amazon is an American multinational technology company that specializes in e-commerce, cloud computing, and artificial intelligence.</p>
              </Slide>
              <Slide>
                <picture>
                  <source srcset="../../assets/imgs/02-american_express.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/02-american_express.webp" type="image/webp" />
                  <img src="../../assets/imgs/02-american_express.png" alt="brand1" width="363" height="100" loading="lazy" decoding="async" class="img american_express" />
                </picture>
                <p><strong>American Express (AXP)</strong> Often referred to by the acronym Amex or Amexco, it is an Americancompany that operates in the financial and travel sectors.</p>
              </Slide>
              <Slide>
                <picture>
                  <source srcset="../../assets/imgs/03-apple.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/03-apple.webp" type="image/webp" />
                  <img src="../../assets/imgs/03-apple.png" alt="brand1" width="82" height="100" loading="lazy" decoding="async" class="img apple" />
                </picture>
                <p><strong>Apple (AAPL)</strong> It is one of the world's most valuable businesses overall with a market cap well over three times that of Walmart™ or Amazon®.</p>
              </Slide>
              <Slide>
                <picture>
                  <source srcset="../../assets/imgs/4-visa.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/4-visa.webp" type="image/webp" />
                  <img src="../../assets/imgs/4-visa.png" alt="brand1" width="307" height="100" loading="lazy" decoding="async" class="img visa" />
                </picture>
                <p><strong>Visa: (V)</strong> It is a digital payment technology company whose products and services include Visa credit, debit, and prepaid card offerings to individuals.</p>
              </Slide>
              <Slide>
                <picture>
                  <source srcset="../../assets/imgs/5-tesla.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/5-tesla.webp" type="image/webp" />
                  <img src="../../assets/imgs/5-tesla.png" alt="brand1" width="88" height="100" loading="lazy" decoding="async" class="img tesla" />
                </picture>
                <p><strong>Tesla (TSLA)</strong> The company had the highest worldwide sales of battery-electric vehicles and plug-in electric vehicles in 2021.</p>
              </Slide>
              <Slide>
                <picture>
                  <source srcset="../../assets/imgs/6-walmart.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/6-walmart.webp" type="image/webp" />
                  <img src="../../assets/imgs/6-walmart.png" alt="brand1" width="398" height="98" loading="lazy" decoding="async" class="img walmart" />
                </picture>
                <p><strong>Walmart (WMT)</strong> In May 2022, Fortune magazine ranked Walmart as the world's largest company by revenue—it brought in about $570 billion annually.</p>
              </Slide>
              <Slide>
                <picture>
                  <source srcset="../../assets/imgs/7-IBM.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/7-IBM.webp" type="image/webp" />
                  <img src="../../assets/imgs/7-IBM.png" alt="brand1" width="250" height="100" loading="lazy" decoding="async" class="img ibm" />
                </picture>
                <p><strong>IBM (IBM)</strong> is one of 30 companies included in the Dow Jones Industrial Average, which also includes some unusual and lesser-known companies.</p>
              </Slide>
              <Slide>
                <picture>
                  <source srcset="../../assets/imgs/8-disney.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/8-disney.webp" type="image/webp" />
                  <img src="../../assets/imgs/8-disney.png" alt="brand1" width="243" height="100" loading="lazy" decoding="async" class="img disney" />
                </picture>
                <p><strong>Disney</strong>: In 1991 it became part of the Dow Jones Industrial Average and by 2020 65% of all shares were owned by large financial institutions.</p>
              </Slide>
              <Slide>
                <picture>
                  <source srcset="../../assets/imgs/9-meta.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/9-meta.webp" type="image/webp" />
                  <img src="../../assets/imgs/9-meta.png" alt="brand1" width="398" height="90" loading="lazy" decoding="async" class="img meta" />
                </picture>
                <p><strong>Meta Platforms Inc (META)</strong> The company owns a number of popular products and services, including Facebook, Instagram, and WhatsApp.</p>
              </Slide>
              <Slide>
                <picture>
                  <source srcset="../../assets/imgs/10-exonmobil.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/10-exonmobil.webp" type="image/webp" />
                  <img src="../../assets/imgs/10-exonmobil.png" alt="brand1" width="398" height="76" loading="lazy" decoding="async" class="img exonmobil" />
                </picture>
                <p><strong>ExxonMobil Chemical (XOM)</strong> It is one of the largest chemical companies in the world.</p>
              </Slide>
              <Slide>
                <picture>
                  <source srcset="../../assets/imgs/11-cocacola.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/11-cocacola.webp" type="image/webp" />
                  <img src="../../assets/imgs/11-cocacola.png" alt="brand1" width="310" height="100" loading="lazy" decoding="async" class="img cocacola" />
                </picture>
                <p><strong>Coca Cola (COKE)</strong> In 2013, beverages bearing the trademark "Coca-Cola" or "Coke” accounted for around 55% of its total gallon sales.</p>
              </Slide>
              <Slide>
                <picture>
                  <source srcset="../../assets/imgs/12-citi.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/12-citi.webp" type="image/webp" />
                  <img src="../../assets/imgs/12-citi.png" alt="brand1" width="155" height="100" loading="lazy" decoding="async" class="img citi" />
                </picture>
                <p><strong>Citigroup (C)</strong> By 2020, it was one of the largest securities services providers in the world, holding over $23.6 trillion worth assets under custody.</p>
              </Slide>
              <Slide>
                <picture>
                  <source srcset="../../assets/imgs/13-jpmorgan.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/13-jpmorgan.webp" type="image/webp" />
                  <img src="../../assets/imgs/13-jpmorgan.png" alt="brand1" width="126" height="100" loading="lazy" decoding="async" class="img jpmorgan" />
                </picture>
                <p><strong>JPMorgan Chase (JPM)</strong> JPMorgan Chase has more than 6,500 offices in 70 countries around the world.</p>
              </Slide>
              <Slide>
                <picture>
                  <source srcset="../../assets/imgs/14-mac.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/14-mac.webp" type="image/webp" />
                  <img src="../../assets/imgs/14-mac.png" alt="brand1" width="148" height="100" loading="lazy" decoding="async" class="img mac" />
                </picture>
                <p><strong>McDonald’s (MCD)</strong> As of March 22, 2017 McDonald's brand value was $82.5 billion, making it the world's sixth-most valuable brand (up from 8 in 2016).</p>
              </Slide>
              <Slide>
                <picture>
                  <source srcset="../../assets/imgs/15-microsoft.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/15-microsoft.webp" type="image/webp" />
                  <img src="../../assets/imgs/15-microsoft.png" alt="brand1" width="398" height="85" loading="lazy" decoding="async" class="img microsoft" />
                </picture>
                <p><strong>Microsoft (MSFT)</strong> Microsoft's most well-known products include the Windows operating system and Office suite.</p>
              </Slide>
              <Slide>
                <picture>
                  <source srcset="../../assets/imgs/16-netflix.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/16-netflix.webp" type="image/webp" />
                  <img src="../../assets/imgs/16-netflix.png" alt="brand1" width="102" height="100" loading="lazy" decoding="async" class="img netflix" />
                </picture>
                <p><strong>Netflix (NFLX)</strong> During the 2010s, Netflix was the top-performing stock in the S&P 500 stock market index.</p>
              </Slide>
              <Slide>
                <picture>
                  <source srcset="../../assets/imgs/17-nike.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/17-nike.webp" type="image/webp" />
                  <img src="../../assets/imgs/17-nike.png" alt="brand1" width="167" height="100" loading="lazy" decoding="async" class="img nike" />
                </picture>
                <p><strong>Nike (NKE)</strong> The company manufactures sports equipment and clothing, and runs retail stores under the Niketown name.</p>
              </Slide>
              <Slide>
                <picture>
                  <source srcset="../../assets/imgs/18-pepsi.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/18-pepsi.webp" type="image/webp" />
                  <img src="../../assets/imgs/18-pepsi.png" alt="brand1" width="309" height="100" loading="lazy" decoding="async" class="img pepsi" />
                </picture>
                <p><strong>Pepsi (PEP)</strong>: PepsiCo is the second-largest food and beverage business in the world, with a market capitalization of $120 billion (behind Nestlé).</p>
              </Slide>
              <Slide>
                <picture>
                  <source srcset="../../assets/imgs/19-Q.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/19-Q.webp" type="image/webp" />
                  <img src="../../assets/imgs/19-Q.png" alt="brand1" width="98" height="100" loading="lazy" decoding="async" class="img qualcomm" />
                </picture>
                <p><strong>Qualcomm (QCOM)</strong> It owns patents related to mobile communications standards such as 5G (5th generation), 4G (4th generation) and WCDMA.</p>
              </Slide>
              <Slide>
                <picture>
                  <source srcset="../../assets/imgs/20-starbukz.avif" type="image/avif" />
                  <source srcset="../../assets/imgs/20-starbukz.webp" type="image/webp" />
                  <img src="../../assets/imgs/20-starbukz.png" alt="brand1" width="207" height="100" loading="lazy" decoding="async" class="img starbukz" />
                </picture>
                <p><strong>Starbucks (SBUX)</strong> Starbucks opened its world-record holding roastery in Chicago's Magnificent Mile district in November 2019.</p>
              </Slide>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section1.elSlider {
  padding-top: 0;
  padding-bottom: 2rem;
  .title {
    background-color: var(--clr-brandSecondaryColor);
    color: var(--clr-brandPrimaryColor);
    padding: 0.5rem 0;
  }

  h2 {
    text-align: center;
    text-transform: uppercase;
    margin: 0;
  }

  .sliderWrapper {
    background-color: var(--clr-brandPrimaryColor);
    background-image: url(../../assets/imgs/sliderbg-mobile.jpg);
    background-image: image-set(url("../../assets/imgs/sliderbg-mobile.avif") type("image/avif"), url("../../assets/imgs/sliderbg-mobile.webp") type("image/webp"), url("../../assets/imgs/sliderbg-mobile.jpg") type("image/jpg"));
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 2rem;
    @include mxns.mediamin(md) {
      background-image: url(../../assets/imgs/sliderbg-desktop.jpg);
      background-image: image-set(url("../../assets/imgs/sliderbg-desktop.avif") type("image/avif"), url("../../assets/imgs/sliderbg-desktop.webp") type("image/webp"), url("../../assets/imgs/sliderbg-desktop.jpg") type("image/jpg"));
    }
  }

  .scssecoCarousel {
    color: var(--clr-white);
    border: 0;

    &__stage {
      aspect-ratio: auto;
      min-height: 250px;
    }

    &__slide {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;

      img {
        width: auto;
        height: auto;
        max-width: 100%;
        transition: all 0.32s;
        max-height: 100px;
      }

      p {
        transform: scaleY(0);
        height: 0;
        opacity: 0;
        visibility: hidden;
        margin: 0;
        transition: all 0.32s;
        text-align: center;
        transform-origin: top;
        strong {
          color: var(--clr-brandSecondaryColor);
        }
      }

      &.active {
        img {
          max-height: 50px;
          margin-bottom: 1rem;
        }

        p {
          transform: scaleY(1);
          height: auto;
          opacity: 1;
          visibility: visible;
        }
      }
    }

    &__controls {
      border: 0;
      position: absolute;
      inset: 0;
      pointer-events: none;

      button {
        pointer-events: all;
        position: absolute;
        inset: 0;
        width: 15%;
        display: flex;
        align-items: center;

        background: transparent;
        border: 0;
        color: var(--clr-white);
        &.scssecoCarousel__controls--prev {
          right: auto;
        }
        &.scssecoCarousel__controls--next {
          justify-content: flex-end;
          left: auto;
        }
      }
    }
  }
}
</style>
