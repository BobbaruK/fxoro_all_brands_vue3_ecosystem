<script>
import { onMounted, onUpdated } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { gsap } from "gsap";

import checkLangAndMeta from "../../../../001-super_global_files/composables/checkLangAndMeta";
import languages from "./composables/languages";
import thankYouSection1Transl from "./composables/translations/thankYouSection1Transl";

// import "../../../../001-super_global_files/assets/scss/scsseco_global.scss";
import "./assets/scss/scsseco_thankyou.scss";

export default {
  name: "ThankYou",
  props: {
    lang: String,
  },
  setup(props) {
    // Animations
    onMounted(() => {
      // gsap.from("h1", {
      //   scale: 0,
      //   duration: 0.6,
      // });

      gsap.to(".horn", {
        yPercent: -5,
        ease: "none",
        yoyo: true,
        duration: 1,
        repeat: -1,
      });
      gsap.to(".screamTriangle", {
        scale: 1.2,
        yoyo: true,
        duration: 0.7,
        repeat: -1,
      });
      gsap.to(".arrow", {
        opacity: 0,
        stagger: 0.1,
        duration: 3,
        yoyo: true,
        repeat: -1,
      });
    });

    const { tyTitleTransl, paraLead, para } = thankYouSection1Transl();

    const { lpLangs, defaultLang } = languages();
    checkLangAndMeta(props.lang, tyTitleTransl, {}, "#000000");
    onUpdated(() => {
      checkLangAndMeta(props.lang, tyTitleTransl, {}, "#000000");
    });

    /**
     * Redirect
     */
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      if (lpLangs.indexOf(route.params.lang) == -1) {
        router.replace({ name: "ThankYou", params: { lang: defaultLang } });
      }
    });

    return { tyTitleTransl, paraLead, para };
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 thankYou">
        <div class="thankYouSection">
          <div class="titleContainer">
            <h1>{{ tyTitleTransl[lang] }}</h1>
            <svg
              class="ribbon"
              viewBox="0 0 197 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.660156 77.5698L96.5201 85.9998L73.4102 64.5298L0.660156 77.5698Z"
                fill="var(--clr-brandSecondaryColor-600)"
              />
              <path
                d="M196.46 0.879883L0.660156 35.9699V77.5899L196.46 42.4999V0.879883Z"
                fill="var(--clr-brandSecondaryColor)"
              />
            </svg>
            <svg
              class="horn"
              viewBox="0 0 188 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="screamTriangle"
                d="M0.189941 24.74L35.9299 42.97L3.07994 38.36L0.189941 24.74Z"
                fill="var(--clr-brandPrimaryColor)"
              />
              <path
                class="screamTriangle"
                d="M48.5302 24L27.1802 5.42L36.6302 3.5L48.5302 24Z"
                fill="var(--clr-brandPrimaryColor)"
              />
              <path
                class="screamTriangle"
                d="M12.3402 64.27L40.5702 66.35L6.16016 75.39L12.3402 64.27Z"
                fill="var(--clr-brandPrimaryColor)"
              />
              <path
                d="M177.08 65.74L183.34 67.5C186.73 68.46 188.71 71.98 187.75 75.38L182.36 94.5C181.4 97.89 177.88 99.87 174.48 98.91L168.22 97.15L177.08 65.74Z"
                fill="var(--clr-brandPrimaryColor)"
              />
              <path
                d="M49.6602 100.03C52.4702 100.82 55.3902 99.19 56.1902 96.37L81.2802 7.37C82.0702 4.56 80.4402 1.64 77.6202 0.840001C74.8102 0.0500007 71.8902 1.68 71.0902 4.5L46.0002 93.5C45.2102 96.32 46.8502 99.24 49.6602 100.03Z"
                fill="var(--clr-brandPrimaryColor)"
              />
              <path
                d="M137.48 120.61L141.16 121.65C143.18 122.22 145.34 121.53 146.65 119.9C148.76 117.27 150.33 114.24 151.24 111L154.9 97.9999L143.98 94.9199L140.15 108.51C139.35 111.36 137.97 114.03 136.11 116.34C134.9 117.84 135.62 120.09 137.48 120.61Z"
                fill="var(--clr-brandPrimaryColor)"
              />
              <path
                d="M60.3101 97.56L141.99 89.07L150.56 58.67L85.3301 8.79004L60.3101 97.56ZM138.27 61.53L85.4301 30.94L88.6301 19.58L139.17 58.33L138.27 61.53Z"
                fill="var(--clr-brandPrimaryColor)"
              />
              <path
                d="M149.81 98.2099C156.81 100.18 164.08 96.1099 166.05 89.1099L171.1 71.1899C173.07 64.1899 169 56.9199 162 54.9499C155 52.9799 147.73 57.0499 145.76 64.0499L140.71 81.9699C138.74 88.9699 142.81 96.2399 149.81 98.2099Z"
                fill="var(--clr-brandSecondaryColor)"
              />
            </svg>
            <div class="arrow arrow1">
              <svg
                viewBox="0 0 127 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.310059 11.6699L126.81 96.1899L71.7001 0.689941L0.310059 11.6699Z"
                  fill="var(--clr-brandPrimaryColor)"
                />
              </svg>
            </div>
            <div class="arrow arrow2">
              <svg
                viewBox="0 0 133 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 77.25L132.88 99.8L0 0V77.25Z"
                  fill="var(--clr-brandSecondaryColor)"
                />
              </svg>
            </div>
            <div class="arrow arrow3">
              <svg
                viewBox="0 0 127 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.310059 11.6699L126.81 96.1899L71.7001 0.689941L0.310059 11.6699Z"
                  fill="var(--clr-brandPrimaryColor)"
                />
              </svg>
            </div>
            <div class="arrow arrow4">
              <svg
                viewBox="0 0 133 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 77.25L132.88 99.8L0 0V77.25Z"
                  fill="var(--clr-brandSecondaryColor)"
                />
              </svg>
            </div>
            <div class="arrow arrow5">
              <svg
                viewBox="0 0 127 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.310059 11.6699L126.81 96.1899L71.7001 0.689941L0.310059 11.6699Z"
                  fill="var(--clr-brandPrimaryColor)"
                />
              </svg>
            </div>
            <div class="arrow arrow6">
              <svg
                viewBox="0 0 133 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 77.25L132.88 99.8L0 0V77.25Z"
                  fill="var(--clr-brandSecondaryColor)"
                />
              </svg>
            </div>
            <div class="arrow arrow7">
              <svg
                viewBox="0 0 127 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.310059 11.6699L126.81 96.1899L71.7001 0.689941L0.310059 11.6699Z"
                  fill="var(--clr-brandPrimaryColor)"
                />
              </svg>
            </div>
            <div class="arrow arrow8">
              <svg
                viewBox="0 0 133 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 77.25L132.88 99.8L0 0V77.25Z"
                  fill="var(--clr-brandSecondaryColor)"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="strip">
          <p class="lead" v-html="paraLead[lang]" />
          <p v-html="para[lang]" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "./assets/scss/abstracts/variables" as vars;
@use "./assets/scss/abstracts/mixins" as mxns;

#siteWrapper {
  // background-image: url("./assets/imgs/bg.jpg");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--clr-white);
}
.thankYou {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  gap: clamp(6rem, 18vw, 10rem);
  justify-content: center;
  min-height: 100vh;
  padding: 0;
  h1 {
    font-weight: 900;
    margin: 0;
    font-size: clamp(2.5rem, 7vw, 4rem);
    text-transform: uppercase;
    @include mxns.mediamin(sm) {
      // font-size: 4rem;
    }
  }

  .thankYouSection {
    padding-top: 6rem;
    .titleContainer {
      max-width: 400px;
      max-width: clamp(400px, 65vw, 550px);
      position: relative;
      margin-inline: auto;
      @include mxns.mediamin(sm) {
        // max-width: 550px;
      }
      h1 {
        position: absolute;
        inset: auto;
        transform-origin: center;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%) rotate(-10deg);
        text-align: center;
        margin-top: -10px;
      }
      .ribbon {
      }
      .horn {
        position: absolute;
        inset: auto;
        width: 40%;
        bottom: -45%;
        right: 5%;
      }
      .arrow {
        position: absolute;
        inset: auto;
        max-width: 25px;
        max-width: clamp(25px, 7vw, 50px);
        transform-origin: center;
        &.arrow1 {
          left: -15%;
          top: 62%;
          transform: rotate(-20deg);
        }
        &.arrow2 {
          left: -4%;
          top: 0%;
          transform: rotate(30deg);
        }
        &.arrow3 {
          left: 19%;
          top: -5%;
          transform: rotate(20deg);
        }
        &.arrow4 {
          left: 41%;
          top: -22%;
          transform: rotate(60deg);
        }
        &.arrow5 {
          left: 58%;
          top: -26%;
          transform: rotate(51deg);
        }
        &.arrow6 {
          left: 82%;
          top: -23%;
          transform: rotate(101deg);
        }
        &.arrow7 {
          left: auto;
          right: -12%;
          top: -19%;
          transform: rotate(97deg);
        }
        &.arrow8 {
          left: auto;
          right: -14%;
          top: 30%;
          transform: rotate(149deg);
        }

        svg {
          width: 100%;
          height: auto;
        }
      }
    }
  }

  .strip {
    align-items: center;
    background-color: var(--clr-brandSecondaryColor-400);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    padding: 1rem;
    padding: clamp(1rem, 3vw, 3rem);
    p {
      margin: 0;
      font-size: clamp(16px, 2vw, 30px);
      &.lead {
        font-size: clamp(18px, 3vw, 36px);
        font-weight: 900;
      }
    }
  }
}
</style>
