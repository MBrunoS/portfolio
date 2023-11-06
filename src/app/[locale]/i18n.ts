import "server-only";

export const dictionaries = {
  "en-US": () => import("@/i18n/en-US.json").then((module) => module.default),
  "pt-BR": () => import("@/i18n/pt-BR.json").then((module) => module.default),
};

export const getTranslation = async (locale: keyof typeof dictionaries) =>
  dictionaries[locale]();
