const layoutPropValidation = () => {
  const values = [1, 2, 3, 4];
  const def = 1;

  return {
    default: def,
    validator(value) {
      // The value must match one of these strings
      return values.includes(value);
    },
  };
};

export default layoutPropValidation;
