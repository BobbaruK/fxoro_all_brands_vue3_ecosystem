import flags from "../../../../../001-super_global_files/composables/flags";

const languages = () => {
  const lpLangs = [
    "en",
    // "it",
    // "tr",
    // "ro",
    // "hu",
    "ar",
    // "de",
    // "es",
    // "sv",
    // "pt",
    // "fi",
    // "pl",
    // "th",
    // "ms",
    // ""
  ];
  const defaultLang = "ar";
  const { flagPath } = flags();

  return { lpLangs, defaultLang, flagPath };
};

export default languages;
