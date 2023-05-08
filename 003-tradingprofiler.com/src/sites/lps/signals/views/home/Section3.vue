<script>
export default {
  name: "LP~Signals~Home~Section3",
  components: {},
  props: {
    lang: String,
  },
  setup() {},
};
</script>

<template>
  <section id="section3" class="brands">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 brandsWrapper">
          <picture class="visa">
            <source srcset="../../assets/imgs/visa.webp" type="image/webp" />
            <img src="../../assets/imgs/visa.png" alt="Visa" loading="lazy" decoding="async" />
          </picture>
          <picture class="visa_white">
            <source srcset="../../assets/imgs/visa_white.avif" type="image/avif" />
            <source srcset="../../assets/imgs/visa_white.webp" type="image/webp" />
            <img src="../../assets/imgs/visa_white.png" alt="Visa" loading="lazy" decoding="async" />
          </picture>
          <picture class="mastercardoragne">
            <source srcset="../../assets/imgs/mastercardoragne.avif" type="image/avif" />
            <source srcset="../../assets/imgs/mastercardoragne.webp" type="image/webp" />
            <img src="../../assets/imgs/mastercardoragne.png" alt="Mastercard" loading="lazy" decoding="async" />
          </picture>
          <picture class="mastercard">
            <source srcset="../../assets/imgs/mastercard.webp" type="image/webp" />
            <img src="../../assets/imgs/mastercard.png" alt="Maestro" loading="lazy" decoding="async" />
          </picture>
          <picture class="wiretransfer">
            <source srcset="../../assets/imgs/wiretransfer.avif" type="image/avif" />
            <source srcset="../../assets/imgs/wiretransfer.webp" type="image/webp" />
            <img src="../../assets/imgs/wiretransfer.png" alt="Wiretransfer" loading="lazy" decoding="async" />
          </picture>
          <picture class="neteller">
            <source srcset="../../assets/imgs/neteller1.avif" type="image/avif" />
            <source srcset="../../assets/imgs/neteller1.webp" type="image/webp" />
            <img src="../../assets/imgs/neteller1.png" alt="Neteller" loading="lazy" decoding="async" />
          </picture>
          <picture class="skrill">
            <source srcset="../../assets/imgs/skrill.webp" type="image/webp" />
            <img src="../../assets/imgs/skrill.png" alt="Skrill" loading="lazy" decoding="async" />
          </picture>
          <picture class="comodo">
            <source srcset="../../assets/imgs/comodo.avif" type="image/avif" />
            <source srcset="../../assets/imgs/comodo.webp" type="image/webp" />
            <img src="../../assets/imgs/comodo.png" alt="Comodo" loading="lazy" decoding="async" />
          </picture>
          <picture class="mt4">
            <source srcset="../../assets/imgs/mt4logo.avif" type="image/avif" />
            <source srcset="../../assets/imgs/mt4logo.webp" type="image/webp" />
            <img src="../../assets/imgs/mt4logo.png" alt="MetaTrader4" loading="lazy" decoding="async" />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
section#section3.brands {
  .brandsWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    gap: 1.5rem;
  }
}
</style>
