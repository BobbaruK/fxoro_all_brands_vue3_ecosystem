<script>
export default {
  name: "LP~ForexSignals~Home~Section3",
  components: {},
  props: {
    lang: String,
  },
  setup() {
    // Translations

    return {};
  },
};
</script>

<template>
  <section id="section3" class="bullets">
    <div class="container">
      <div class="row">
        <div class="col-6 col-lg-3">
          <div class="box">
            <div class="img_wrap">
              <img
                src="../../assets/imgs/section3/mt4.jpg"
                alt="Candles"
                class="candles"
                width="219"
                height="179"
              />
            </div>
            <p>
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M21 16H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h7v2H8v2h8v-2h-2v-2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"
                />
              </svg>
              MetaTrader 4
            </p>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="box">
            <div class="img_wrap">
              <img
                src="../../assets/imgs/section3/mobiletrader.jpg"
                alt="Candles"
                class="candles"
                width="219"
                height="179"
              />
            </div>
            <p>
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                />
              </svg>
              Mobile Trader
            </p>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="box">
            <div class="img_wrap">
              <img
                src="../../assets/imgs/section3/tradingcopycat.jpg"
                alt="Candles"
                class="candles"
                width="219"
                height="179"
              />
            </div>
            <p>
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"
                />
              </svg>
              Trading CopyKat
            </p>
          </div>
        </div>
        <div class="col-6 col-lg-3">
          <div class="box">
            <div class="img_wrap">
              <img
                src="../../assets/imgs/section3/webtrader.jpg"
                alt="Candles"
                class="candles"
                width="219"
                height="179"
              />
            </div>
            <p>
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M21 16H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h7v2H8v2h8v-2h-2v-2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"
                />
              </svg>
              Web Trader
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section3.bullets {
  border-top: 1px solid #e2e2e2;
  background: url(../../assets/imgs/section3/bg.png);
  padding: 35px 0px 30px;
  .box {
    background: var(--clr-white);
    border: 1px solid #dcdcdc;
    margin: 0 auto 30px;
    max-width: 214px;
    padding: 10px 0 15px;
    .img_wrap {
      position: relative;
      img {
        margin: 0 auto 20px;
      }
    }
    p {
      align-content: center;
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      font-size: 1.25rem;
      gap: 0.5rem;
      justify-content: center;
      margin: 0px;
      padding-bottom: 16px;
      text-align: center;
    }
  }
}
</style>
