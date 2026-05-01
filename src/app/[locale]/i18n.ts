import "server-only";

export const dictionaries = {
  "en-US": () => import("@/i18n/en-US.json").then((module) => module.default),
  "pt-BR": () => import("@/i18n/pt-BR.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

const isLocale = (locale: string): locale is Locale => locale in dictionaries;

export const getTranslation = async (locale: string) =>
  dictionaries[isLocale(locale) ? locale : "en-US"]();
