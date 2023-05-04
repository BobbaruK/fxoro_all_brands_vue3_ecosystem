<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

import Select from "./composables/select2";

export default {
  name: "Select",
  props: {
    autocomplete: {
      type: Boolean,
      required: false,
      default: false,
    },
    autofocus: {
      type: Boolean,
      required: false,
      default: false,
    },
    custom: {
      type: Boolean,
      required: false,
      default: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    form: {
      type: String,
      default: "",
      required: false,
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false,
    },
    name: {
      type: String,
      default: "",
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  setup(props) {
    const HTMLSelect = ref();

    onMounted(() => {
      if (props.custom) {
        const select = new Select(HTMLSelect.value);

        // console.log(select);
      }
    });

    return { HTMLSelect };
  },
};
</script>

<template>
  <select
    ref="HTMLSelect"
    :autocomplete="autocomplete"
    :autofocus="autofocus"
    :disabled="disabled"
    :form="form"
    :multiple="multiple"
    :name="name"
    :required="required"
    :size="size"
  >
    <slot></slot>
  </select>
</template>

<style lang="scss">
.custom-select-container {
  display: inline-block;
  position: relative;
}

.custom-select-value {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  border: 1px solid black;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  user-select: none;
}

.custom-select-container:focus > .custom-select-value {
  border-width: 2px;
  outline: none;
}

.custom-select-value::after {
  content: "";
  display: inline-block;
  border: 4px solid transparent;
  border-top-color: black;
  margin-left: 12px;
  margin-top: 4px;
}

.custom-select-options {
  background-color: var(--clr-brandPrimaryColor);
  color: var(--clr-brandSecondaryColor);
  display: none;
  position: absolute;
  padding: 0;
  margin: 0;
  border: 2px solid black;
  width: 100%;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
}

.custom-select-options.show {
  display: block;
}

.custom-select-option {
  padding: 0.25rem 0.5rem;
  cursor: pointer;
}

.custom-select-option:hover {
  background-color: var(--clr-brandSecondaryColor-500);
  color: var(--clr-black);
}

.custom-select-option.selected {
  background-color: var(--clr-brandSecondaryColor-800);
}
</style>
