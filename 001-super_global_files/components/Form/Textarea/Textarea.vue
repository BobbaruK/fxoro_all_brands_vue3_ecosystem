<script>
export default {
  name: "Textarea",
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
    cols: {
      type: Number,
      required: false,
      default: 20,
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
    maxlength: {
      type: Number,
      required: false,
      default: -1,
    },
    minlength: {
      type: Number,
      required: false,
      default: -1,
    },
    name: {
      type: String,
      default: "",
      required: false,
    },
    placeholder: {
      type: String,
      default: "",
      required: false,
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false,
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    rows: {
      type: Number,
      required: false,
      default: 2,
    },
    spellcheck: {
      type: [Boolean, String],
      required: false,
      default: false,
      validator(value) {
        return [true, false, "default"].includes(value);
      },
    },
    value: {
      type: [Number, String],
      required: false,
      default: "",
    },
    wrap: {
      type: String,
      required: false,
      default: "soft",
      validator(value) {
        return ["hard", "soft", "off"].includes(value);
      },
    },
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <textarea
    :autocomplete="autocomplete"
    :autofocus="autofocus"
    :cols="cols"
    :disabled="disabled"
    :form="form"
    :maxlength="maxlength"
    :minlength="minlength"
    :name="name"
    :placeholder="placeholder"
    :readonly="readonly"
    :required="required"
    :rows="rows"
    :spellcheck="spellcheck"
    :wrap="wrap"
  >{{ value }}</textarea>
</template>

<style lang="scss"></style>
