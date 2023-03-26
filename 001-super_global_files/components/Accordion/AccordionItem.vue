<script>
import Caret from "../Caret/Caret.vue";

export default {
  name: "AccordionItem",
  components: { Caret },
  props: {},
  setup(props) {
    return {};
  },
};
</script>

<template>
  <div class="scssecoAccordion__Item">
    <div class="scssecoAccordion__Header">
      <button class="title">
        <slot name="title">Title</slot>
      </button>
      <Caret />
    </div>
    <div class="scssecoAccordion__Content">
      <div class="scssecoAccordion__ContentInner">
        <slot name="content">Content</slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.scssecoAccordion__Item {
  &:not(:last-child) {
    border-bottom: 1px solid var(--clr-gray-200);
  }
  &.active {
    .scssecoAccordion__Header {
      border-bottom: 1px solid var(--clr-gray-200);
    }
  }
  .scssecoAccordion__Header {
    align-items: center;
    background-color: var(--clr-brandSecondaryColor-200);
    border-bottom: 1px solid transparent;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 1rem;
    button {
      display: block;
    }
    .caretWrapper {
    }
  }
  .scssecoAccordion__Content {
    overflow: hidden;
    .scssecoAccordion__ContentInner {
      padding: 1rem;
    }
  }
}
</style>
