const caretPropValidation = () => {
  const values = ["caret-down", "caret-down-bold"];
  const def = "caret-down";

  return {
    default: def,
    validator(value) {
      // The value must match one of these strings
      return values.includes(value);
    },
  };
};

export default caretPropValidation;
