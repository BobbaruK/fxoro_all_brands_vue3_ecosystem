<script>
export default {
  name: "Accordion",
  setup(props) {
    return {};
  },
};
</script>
<template>
  <div class="scssecoAccordion">
    <slot />
  </div>
</template>

<style lang="scss">
.scssecoAccordion {
  border: 1px solid var(--clr-gray-200);
  border-radius: 5px;
}
</style>
