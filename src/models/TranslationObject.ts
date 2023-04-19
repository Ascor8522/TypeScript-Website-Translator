import { Language } from "./Language";
import { TranslationString } from "./String";
import { StringKey } from "./StringKey";
import { TranslationProgress } from "./TranslationProgress";

/**
 * Holds translations for some string keys in some languages.
 */
export class TranslationObject {
	private translations: Map<StringKey, Map<Language, TranslationString>> = new Map();

	private constructor() { }

	public upsert(key: StringKey, language: Language, translation: TranslationString): TranslationObject {
		if(!this.translations.get(key)) this.translations.set(key, new Map());
		this.translations.get(key)!.set(language, translation);
		return this;
	}

	public get(key: StringKey, language: Language): TranslationString | null {
		if(!this.translations.get(key)) throw new Error(`No translation found for key ${key}`);
		return this.translations.get(key)!.get(language) ?? null;
	}

	public getProgress(language: Language, key: TranslationString | "" = ""): TranslationProgress {
		throw new Error("Not implemented");
	}
}
