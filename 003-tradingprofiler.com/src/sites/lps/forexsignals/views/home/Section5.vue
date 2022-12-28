<script>
export default {
  name: "LP~ForexSignals~Home~Section5",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <section id="section5" class="payment">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <img
            src="../../assets/imgs/section5/hp_safety_icons.png"
            alt="Candles"
            class="candles"
            width="660"
            height="100"
          />
        </div>
        <div class="col-12 col-lg-6">
          <img
            src="../../assets/imgs/section5/hp_payment_icons.png"
            alt="Candles"
            class="candles"
            width="584"
            height="100"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section5.payment {
	padding: 15px 0px;
	text-align: center;
  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
