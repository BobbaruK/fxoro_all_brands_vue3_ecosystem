const agreementTypePropValidation = () => {
  const values = ["clasic", "sms"];
  const def = "clasic";

  return {
    default: def,
    validator(value) {
      // The value must match one of these strings
      return values.includes(value);
    },
  };
};

export default agreementTypePropValidation;
