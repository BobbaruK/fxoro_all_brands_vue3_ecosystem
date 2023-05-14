<script>
/**
 * button: 					value							name                                                                                                                                                       formaction, formenctype, formmethod, formnovalidate, formtarget
 * checkbox: 				value,	checked,	name																																																													required
 * color: 					value							name																																																													required
 * date: 						value							name,																																																													required
 * datetime-local: 	value							name,																																																													required
 * email: 					value							name,	list,	maxlength,	minlength,	multiple,	pattern,																																				required
 * file: 						value							name																										accept,	capture,																											required
 * hidden: 					value							name
 * image: 					value							name,																																			alt																									required                     formaction, formenctype, formmethod, formnovalidate, formtarget
 * month: 					value							name,	list,																																		max,	min,	readonly,	step											required
 * number: 					value							name,	list,																																		max,	min,	readonly,	step,	placeholder,				required
 * password: 				value							name,				maxlength,	minlength,						pattern,																										placeholder,	size	required
 * radio: 					value		checked,	name,																																																													required
 * range: 					value							name,																																																													required
 * reset: 					value							name,
 * search: 					value							name,	list,	maxlength,	minlength,						pattern,																										placeholder,	size	required					spellcheck
 * submit: 					value							name,																																																																												formaction, formenctype, formmethod, formnovalidate, formtarget
 * tel: 						value							name,	list,	maxlength,	minlength,						pattern,																										placeholder,	size	required
 * text: 						value							name,	list,	maxlength,	minlength,						pattern,																										placeholder,	size,	required					spellcheck
 * time: 						value							name, list,																																		max, 	min,	readonly,	step											required
 * url: 						value							name,	list,	maxlength,	minlength,						pattern,																										placeholder,	size,	required					spellcheck
 * week: 						value							name,																																					max, 	min,	readonly,	step,											required
 */
export default {
  name: "Input",
  props: {
    type: {
      type: String, // For all types
      default: "text",
      validator(value) {
        // The value must match one of these strings
        return [
          "button", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button
          "checkbox", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
          "color", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color
          "date", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
          "datetime-local", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local
          "email", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
          "file", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
          "hidden", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden
          "image", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/image
          "month", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month
          "number", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number
          "password", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password
          "radio", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
          "range", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
          "reset", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/reset
          "search", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search
          "submit", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit
          "tel", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel
          "text", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
          "time", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time
          "url", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url
          "week", // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/week
        ].includes(value);
      },
    },
    value: {
      type: [String, Number], // For all types
      default: "",
      required: false,
    },
    checked: {
      type: Boolean, // For "checkbox" and "radio"
      default: false,
      required: false,
    },
    name: {
      type: String, // For all types
      default: "",
      required: false,
    },
    list: {
      type: String, // For "email", "month", "number", "search", "tel", "text", "time", "url"
      default: "",
      required: false,
    },
    maxlength: {
      type: Number, // For "email", "password", "search", "search", "tel", "text", "url"
      default: -1,
      required: false,
    },
    minlength: {
      type: Number, // For "email", "password", "search", "search", "tel", "text", "url"
      default: -1,
      required: false,
    },
    multiple: {
      type: Boolean, // For "email"
      default: false,
      required: false,
    },
    pattern: {
      type: RegExp, // For "email", "password", "search", "search", "tel", "text", "url"
      default: / /i,
      required: false,
    },
    accept: {
      type: String, // For "file"
      default: "",
      required: false,
    },
    capture: {
      type: String, // For "file"
      default: "",
      required: false,
    },
    alt: {
      type: String, // For "image"
      default: "",
      required: false,
    },
    height: {
      type: Number, // For "image"
      default: 0,
      required: false,
    },
    width: {
      type: Number, // For "image"
      default: 0,
      required: false,
    },
    src: {
      type: String, // For "image"
      default: "",
      required: false,
    },
    max: {
      type: [String, Number], // For "month", "number", "range", "time", "week"
      default: "",
      required: false,
    },
    min: {
      type: [String, Number], // For "month", "number", "range", "time", "week"
      default: "",
      required: false,
    },
    readonly: {
      type: Boolean, // For "month", "number", "time", "week"
      default: false,
      required: false,
    },
    step: {
      type: Number, // For "month", "number", "range", "time", "week"
      default: -1,
      required: false,
    },
    placeholder: {
      type: String, // For "number", "password", "search", "tel", "text", "url"
      default: "",
      required: false,
    },
    size: {
      type: Number, // For "password", "search", "tel", "text", "url"
      default: -1,
      required: false,
    },
    required: {
      type: Boolean, // For all types except: "hidden", "reset", "submit"
      default: false,
      required: false,
    },
    spellcheck: {
      type: [Boolean, String], // For "search", "text", "url"
      default: "",
      required: false,
    },
    formaction: {
      type: String, // For "submit", "button", "image"
      default: "",
      required: false,
    },
    formenctype: {
      type: String, // For "submit", "button", "image"
      default: "application/x-www-form-urlencoded",
      required: false,
      validator(value) {
        return ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"].includes(value);
      },
    },
    formmethod: {
      type: String, // For "submit", "button", "image"
      default: "get",
      required: false,
      validator(value) {
        // The value must match one of these strings
        return ["get", "post", "dialog"].includes(value);
      },
    },
    formnovalidate: {
      type: Boolean, // For "submit", "button", "image"
      default: false,
      required: false,
    },
    formtarget: {
      type: String, // For "submit", "button", "image"
      required: false,
      default: "_self",
      validator(value) {
        // The value must match one of these strings
        return ["_self", "_blank", "_blank", "_top"].includes(value);
      },
    },

    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <div>
    <input
      v-if="type === 'button'"
      type="button"
      :value="value"
      :name="name"
      :formaction="formaction"
      :formenctype="formenctype"
      :formmethod="formmethod"
      :formnovalidate="formnovalidate"
      :formtarget="formtarget"
      :disabled="disabled"
    />
    <input
      v-if="type === 'checkbox'"
      type="checkbox"
      :value="value"
      :name="name"
      :checked="checked"
      :disabled="disabled"
      :required="required"
    />
    <input v-if="type === 'color'" type="color" :value="value" :name="name" :disabled="disabled" :required="required" />
    <input
      v-if="type === 'date'"
      type="date"
      :value="value"
      :name="name"
      :min="min"
      :max="max"
      :disabled="disabled"
      :required="required"
    />
    <input
      v-if="type === 'datetime-local'"
      type="datetime-local"
      :value="value"
      :name="name"
      :min="min"
      :max="max"
      :disabled="disabled"
      :required="required"
    />
    <input
      v-if="type === 'email'"
      type="email"
      :value="value"
      :name="name"
      :list="list"
      :maxlength="maxlength"
      :minlength="minlength"
      :multiple="multiple"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :size="size"
      :disabled="disabled"
      :required="required"
    />
    <input v-if="type === 'file'" type="file" :name="name" :accept="accept" :capture="capture" />
    <input v-if="type === 'hidden'" type="hidden" :name="name" :value="value" />
    <input
      v-if="type === 'image'"
      type="image"
      :name="name"
      :alt="alt"
      :height="height"
      :width="width"
      :src="src"
      :formaction="formaction"
      :formenctype="formenctype"
      :formmethod="formmethod"
      :formnovalidate="formnovalidate"
      :formtarget="formtarget"
      :disabled="disabled"
      :required="required"
    />
    <input
      v-if="type === 'month'"
      type="month"
      :name="name"
      :list="list"
      :max="max"
      :min="min"
      :readonly="readonly"
      :value="value"
      :disabled="disabled"
      :required="required"
    />
    <input
      v-if="type === 'password'"
      type="password"
      :value="value"
      :name="name"
      :minlength="minlength"
      :maxlength="maxlength"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :size="size"
      :disabled="disabled"
      :required="required"
    />
    <input
      v-if="type === 'radio'"
      type="radio"
      :name="name"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      :required="required"
    />
    <input
      v-if="type === 'range'"
      type="range"
      :value="value"
      :name="name"
      :min="min"
      :max="max"
      :step="step"
      :list="list"
      :disabled="disabled"
      :required="required"
    />
    <input v-if="type === 'reset'" type="reset" :name="name" :value="value" :disabled="disabled" />
    <input
      v-if="type === 'search'"
      type="search"
      :name="name"
      :value="value"
      :list="list"
      :maxlength="maxlength"
      :minlength="minlength"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :size="size"
      :spellcheck="spellcheck"
      :disabled="disabled"
      :required="required"
    />
    <input
      v-if="type === 'submit'"
      type="submit"
      :value="value"
      :name="name"
      :formaction="formaction"
      :formenctype="formenctype"
      :formmethod="formmethod"
      :formnovalidate="formnovalidate"
      :formtarget="formtarget"
      :disabled="disabled"
    />
    <input
      v-if="type === 'tel'"
      type="tel"
      :name="name"
      :value="value"
      :list="list"
      :maxlength="maxlength"
      :minlength="minlength"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :size="size"
      :disabled="disabled"
      :required="required"
    />
    <input
      v-if="type === 'text'"
      type="text"
      :name="name"
      :value="value"
      :list="list"
      :maxlength="maxlength"
      :minlength="minlength"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :size="size"
      :spellcheck="spellcheck"
      :disabled="disabled"
      :required="required"
    />
    <input
      v-if="type === 'time'"
      type="time"
      :name="name"
      :value="value"
      :list="list"
      :max="max"
      :min="min"
      :readonly="readonly"
      :step="step"
      :disabled="disabled"
      :required="required"
    />
    <input
      v-if="type === 'url'"
      type="url"
      :name="name"
      :value="value"
      :list="list"
      :maxlength="maxlength"
      :minlength="minlength"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :size="size"
      :spellcheck="spellcheck"
      :disabled="disabled"
      :required="required"
    />
    <input
      v-if="type === 'week'"
      type="week"
      :value="value"
      :name="name"
      :max="max"
      :min="min"
      :readonly="readonly"
      :step="step"
      :disabled="disabled"
      :required="required"
    />
  </div>
</template>

<style lang="scss"></style>
