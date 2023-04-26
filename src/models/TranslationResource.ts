import { Attributes } from "../utils/types";
import { TranslationLanguage } from "./TranslationLanguage";
import { TranslationProgress } from "./TranslationProgress";

abstract class TranslationEntry {
	public _name: string;

	protected constructor(entry: Attributes<TranslationEntry>) {
		const { name } = entry;
		this._name = name;
	}

	public get name(): string {
		return this._name;
	}

	public abstract getProgress(language: TranslationLanguage): TranslationProgress;
}

export class TranslationFile extends TranslationEntry {

	public constructor(file: Attributes<TranslationFile>) {
		const { ...entry } = file;
		super(entry);
	}

	public getProgress(language: TranslationLanguage): TranslationProgress {
		throw new Error("Not implemented");
	}

}

export class TranslationFolder extends TranslationEntry {
	private _children: TranslationEntry[];

	public constructor(folder: Attributes<TranslationFolder>) {
		const { children, ...entry } = folder;
		super(entry);
		this._children = children;
	}

	public get files(): TranslationFile[] {
		return this._children
			.filter(child => child instanceof TranslationFile) as TranslationFile[];
	}

	public get folders(): TranslationFolder[] {
		return this._children
			.filter(child => child instanceof TranslationFolder) as TranslationFolder[];
	}

	public get children(): TranslationEntry[] {
		return this._children;
	}

	public addChildren(...children: TranslationEntry[]): TranslationFolder {
		this._children.push(...children);
		return this;
	}

	public getProgress(language: TranslationLanguage): TranslationProgress {
		return this._children
			.map(entry => entry.getProgress(language))
			.reduce((previous, current) => {
				const { translated: pT, reviewed: pR, total: pTo } = previous;
				const { translated: cT, reviewed: cR, total: cTo } = current;
				return new TranslationProgress({ translated: pT + cT, reviewed: pR + cR, total: pTo + cTo });
			}, new TranslationProgress({ reviewed: 0, translated: 0, total: 0 }));
	}
}
