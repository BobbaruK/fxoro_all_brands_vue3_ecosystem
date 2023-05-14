const agreementTypePropValidation = () => {
  const values = ["wBrandName", "woBrandName"];
  const def = "wBrandName";

  return {
    default: def,
    validator(value) {
      // The value must match one of these strings
      return values.includes(value);
    },
  };
};

export default agreementTypePropValidation;
