import styles from './translation-progress.module.scss';

export default function TranslationProgress({ translated, reviewed }: TranslationProgressProps) {

	const reviewedPercentage = Math.floor(reviewed * 100);
	const translatedPercentage = Math.floor(translated * 100);
	const untranslatedPercentage = 100 - translatedPercentage;

	const reviewedPercentageDiff = reviewedPercentage;
	const translatedPercentageDiff = translatedPercentage - reviewedPercentageDiff;
	const untranslatedPercentageDiff = 100 - untranslatedPercentage - translatedPercentageDiff;

	return (
		<div class={styles.meter}>
			<div
				class={styles.reviewed}
				style={{ flexBasis: `${reviewedPercentageDiff}%` }}
				title="Translated + Reviewed">
				{!!reviewedPercentage && reviewedPercentage + "%"}
			</div>
			<div
				class={styles.translated}
				style={{ flexBasis: `${translatedPercentageDiff}%` }}
				title="Translated">
				{!!translatedPercentage && translatedPercentage + "%"}
			</div>
			<div
				class={styles.untranslated}
				title="Untranslated">
				{!!untranslatedPercentage && untranslatedPercentage + "%"}
			</div>
		</div>
	);
}

interface TranslationProgressProps {
	translated: number;
	reviewed: number;
}
