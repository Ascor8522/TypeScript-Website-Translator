/**
 * Represents a source string, a string in English.
 */
export type SourceString = string & { readonly _brand: unique symbol; };

/**
 * Represents a translation string, a string in a language other than English.
 */
export type TranslationString = string & { readonly _brand: unique symbol; };
