import { TranslationLanguage } from "./TranslationLanguage";
import { TranslationProgress } from "./TranslationProgress";
import { TranslationStringKey } from "./TranslationStringKey";
import { TranslationTranslatedString } from "./TranslationTranslatedString";

/**
 * Holds translations for some string keys in some languages.
 */
export class TranslationObject {
	private translations: Map<TranslationStringKey, Map<TranslationLanguage, TranslationTranslatedString>> = new Map();

	private constructor() { }

	public upsert(key: TranslationStringKey, language: TranslationLanguage, translation: TranslationTranslatedString): TranslationObject {
		if(!this.translations.get(key)) this.translations.set(key, new Map());
		this.translations.get(key)!.set(language, translation);
		return this;
	}

	public get(key: TranslationStringKey, language: TranslationLanguage): TranslationTranslatedString | null {
		if(!this.translations.get(key)) throw new Error(`No translation found for key ${key}`);
		return this.translations.get(key)!.get(language) ?? null;
	}

	public getProgress(language: TranslationLanguage, key: TranslationTranslatedString | "" = ""): TranslationProgress {
		throw new Error("Not implemented");
	}
}
