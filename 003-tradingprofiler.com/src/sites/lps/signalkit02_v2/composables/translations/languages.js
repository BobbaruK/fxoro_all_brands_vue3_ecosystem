import flags from "../../../../../../../001-super_global_files/composables/flags";

const languages = () => {
  const lpLangs = [
    "en",
    // "th",
    // "hu",
    "ar",
    // ""
  ];
  const defaultLang = "en";
  const { flagPath } = flags();

  return { lpLangs, defaultLang, flagPath };
};

export default languages;
