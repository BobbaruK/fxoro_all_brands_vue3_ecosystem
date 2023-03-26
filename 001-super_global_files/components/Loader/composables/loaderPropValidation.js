const loaderPropValidation = () => {
  return {
    default: "rings",
    validator(value) {
      // The value must match one of these strings
      return [
        "audio",
        "ball-triangle",
        "bars",
        "circles",
        "grid",
        "hearts",
        "oval",
        "puff",
        "rings",
        "spinning-circles",
        "tail-spin",
        "three-dots",
      ].includes(value);
    },
  };
};

export default loaderPropValidation;
