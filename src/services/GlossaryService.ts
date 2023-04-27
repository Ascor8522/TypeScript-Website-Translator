export class GlossaryService {
	private static instance: GlossaryService | null = null;

	public static getInstance(): GlossaryService {
		if(GlossaryService.instance === null) GlossaryService.instance = new GlossaryService();
		return GlossaryService.instance;
	}

	private constructor() { }

}
