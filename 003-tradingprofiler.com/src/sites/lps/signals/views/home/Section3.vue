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
          <img src="../../assets/imgs/visa.png" alt="Visa" class="visa" />
          <img src="../../assets/imgs/visa_white.png" alt="Visa" class="visa_white" />
          <img src="../../assets/imgs/mastercardoragne.png" alt="Mastercard" class="mastercardoragne" />
          <img src="../../assets/imgs/mastercard.png" alt="Maestro" class="mastercard" />
          <img src="../../assets/imgs/wiretransfer.png" alt="Wiretransfer" class="wiretransfer" />
          <img src="../../assets/imgs/neteller1.png" alt="Neteller" class="neteller" />
          <img src="../../assets/imgs/skrill.png" alt="Skrill" class="skrill" />
          <img src="../../assets/imgs/comodo.png" alt="Comodo" class="comodo" />
          <img src="../../assets/imgs/mt4logo.png" alt="MetaTrader4" class="mt4" />
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
