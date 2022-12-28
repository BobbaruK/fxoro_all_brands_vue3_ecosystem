import flags from "../../../../../../../001-super_global_files/composables/flags";

const languages = () => {
  const lpLangs = [
    "en",
    // "it",
    // "ms",
    "ar",
    // ""
  ];
  const defaultLang = "ms";
  const { flagPath } = flags();

  return { lpLangs, defaultLang, flagPath };
};

export default languages;
