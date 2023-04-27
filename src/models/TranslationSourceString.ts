/**
 * Represents a source string, a string in English.
 */
export type TranslationSourceString = string & { readonly _brand: unique symbol; };
