<script>
export default {
  name: "LP~ForexBeginner~Home~Section2",
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
  <section id="section2" class="brands">
    <div class="container">
      <div class="row">
        <div class="col-12 brandsWrapper">
          <picture>
            <source
              srcset="../../assets/imgs/01-netteler.avif"
              type="image/avif"
            />
            <source
              srcset="../../assets/imgs/01-netteler.webp"
              type="image/webp"
            />
            <img
              src="../../assets/imgs/01-netteler.png"
              alt="Phone"
              loading="lazy"
              decoding="async"
              width="128"
              height="48"
            />
          </picture>

          <picture>
            <source
              srcset="../../assets/imgs/02-skrill.avif"
              type="image/avif"
            />
            <source
              srcset="../../assets/imgs/02-skrill.webp"
              type="image/webp"
            />
            <img
              src="../../assets/imgs/02-skrill.png"
              alt="Phone"
              loading="lazy"
              decoding="async"
              width="99"
              height="48"
            />
          </picture>

          <picture>
            <source
              srcset="../../assets/imgs/03-bank_transfer.avif"
              type="image/avif"
            />
            <source
              srcset="../../assets/imgs/03-bank_transfer.webp"
              type="image/webp"
            />
            <img
              src="../../assets/imgs/03-bank_transfer.png"
              alt="Phone"
              loading="lazy"
              decoding="async"
              width="112"
              height="48"
            />
          </picture>

          <picture>
            <source
              srcset="../../assets/imgs/04-mastercard.avif"
              type="image/avif"
            />
            <source
              srcset="../../assets/imgs/04-mastercard.webp"
              type="image/webp"
            />
            <img
              src="../../assets/imgs/04-mastercard.png"
              alt="Phone"
              loading="lazy"
              decoding="async"
              width="86"
              height="48"
            />
          </picture>

          <picture>
            <source
              srcset="../../assets/imgs/05-postpay.avif"
              type="image/avif"
            />
            <source
              srcset="../../assets/imgs/05-postpay.webp"
              type="image/webp"
            />
            <img
              src="../../assets/imgs/05-postpay.png"
              alt="Phone"
              loading="lazy"
              decoding="async"
              width="130"
              height="31"
            />
          </picture>

          <picture>
            <source
              srcset="../../assets/imgs/06-ssl_secured.avif"
              type="image/avif"
            />
            <source
              srcset="../../assets/imgs/06-ssl_secured.webp"
              type="image/webp"
            />
            <img
              src="../../assets/imgs/06-ssl_secured.png"
              alt="Phone"
              loading="lazy"
              decoding="async"
              width="140"
              height="44"
            />
          </picture>

          <picture>
            <source srcset="../../assets/imgs/07-visa.avif" type="image/avif" />
            <source srcset="../../assets/imgs/07-visa.webp" type="image/webp" />
            <img
              src="../../assets/imgs/07-visa.png"
              alt="Phone"
              loading="lazy"
              decoding="async"
              width="99"
              height="36"
            />
          </picture>

          <picture>
            <source
              srcset="../../assets/imgs/08-webmoney.avif"
              type="image/avif"
            />
            <source
              srcset="../../assets/imgs/08-webmoney.webp"
              type="image/webp"
            />
            <img
              src="../../assets/imgs/08-webmoney.png"
              alt="Phone"
              loading="lazy"
              decoding="async"
              width="180"
              height="48"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

section#section2.brands {
  border-top: 1px solid var(--clr-gray-700);
  border-bottom: 1px solid var(--clr-gray-700);
  padding: 1rem 0;
  margin-bottom: 2rem;
  .brandsWrapper {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.8rem;
    justify-content: center;
  }
}
</style>
