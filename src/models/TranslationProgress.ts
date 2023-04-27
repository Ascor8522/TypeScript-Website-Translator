import { Attributes } from "../utils/types";

export class TranslationProgress {
	private _translated: number;
	private _reviewed: number;
	private _total: number;

	public constructor(progress: Attributes<TranslationProgress>) {
		const { translated, reviewed, total } = progress;
		if(translated > total) throw new Error(`Translated (${translated}) cannot be greater than total (${total})`);
		if(reviewed > total) throw new Error(`Reviewed (${reviewed}) cannot be greater than total (${total})`);

		this._translated = translated;
		this._reviewed = reviewed;
		this._total = total;
	}

	public get translated(): number {
		return this._translated;
	}

	public get reviewed(): number {
		return this._reviewed;
	}

	public get total(): number {
		return this._total;
	}

	public getTranslatedPercentage(): number {
		if(this._total === 0) return 1;
		return this._translated / this._total;
	}

	public getReviewedPercentage(): number {
		if(this._total === 0) return 1;
		return this._reviewed / this._total;
	}
}
