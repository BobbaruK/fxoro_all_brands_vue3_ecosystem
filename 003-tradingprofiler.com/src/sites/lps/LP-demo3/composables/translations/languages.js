import flags from "../../../../../../../001-super_global_files/composables/flags";

const languages = () => {
  const lpLangs = [
    "de",
    "tr",
    "fi",
    "ar",
    // ""
  ];
  const defaultLang = "tr";
  const { flagPath } = flags();

  return { lpLangs, defaultLang, flagPath };
};

export default languages;
