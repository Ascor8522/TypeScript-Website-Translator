import { } from "iso-639-1";

/**
 * Represents a language.
 */
export type Language = string & { readonly _brand: unique symbol; };

export function assertValidLanguage(language: string): asserts language is Language {
	if(!language) throw new Error(`Invalid language: ${language}`);
}
