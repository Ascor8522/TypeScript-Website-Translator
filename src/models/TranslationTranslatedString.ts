/**
 * Represents a translation string, a string in a language other than English.
 */
export type TranslationTranslatedString = string & { readonly _brand: unique symbol; };
