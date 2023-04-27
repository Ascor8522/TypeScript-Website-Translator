export class TranslationService {
	private static instance: TranslationService | null = null;

	public static getInstance(): TranslationService {
		if(TranslationService.instance === null) TranslationService.instance = new TranslationService();
		return TranslationService.instance;
	}

	private constructor() { }

}
