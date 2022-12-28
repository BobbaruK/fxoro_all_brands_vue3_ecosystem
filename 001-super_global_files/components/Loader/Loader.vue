<script>
export default {
  name: "Loader",
};
</script>

<template>
  <div class="col-12 loader">
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss">
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader {
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  .lds-ring {
    display: inline-block;
    position: relative;
    max-width: 80px;
    max-height: 80px;
    width: 100%;
    height: 100%;
    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border: 8px solid var(--clr-brandPrimaryColor);
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: var(--clr-brandPrimaryColor) transparent transparent transparent;
    }
  }
  .lds-ring .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
}
</style>
