const caretPropValidation = () => {
  return {
    default: "caret-down",
    validator(value) {
      // The value must match one of these strings
      return ["caret-down", "caret-down-bold"].includes(value);
    },
  };
};

export default caretPropValidation;
