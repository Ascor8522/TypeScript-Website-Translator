import ISO6391 from "iso-639-1";

/**
 * Represents a language.
 */
export type TranslationLanguage = string & { readonly _brand: unique symbol; };

export function assertValidLanguage(translationLanguage: string): asserts translationLanguage is TranslationLanguage {
	if(!ISO6391.validate(translationLanguage)) throw new Error(`Invalid language: ${translationLanguage}`);
}
