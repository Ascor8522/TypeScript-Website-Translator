import classNames from "classnames";

import style from './translation-progress.module.scss';

export default function TranslationProgress({ translated, reviewed }: TranslationProgressProps) {

	const reviewedPercentage = Math.floor(reviewed * 100);
	const translatedPercentage = Math.floor(translated * 100);
	const untranslatedPercentage = 100 - translatedPercentage;

	const reviewedPercentageDiff = reviewedPercentage;
	const translatedPercentageDiff = translatedPercentage - reviewedPercentageDiff;
	const untranslatedPercentageDiff = 100 - untranslatedPercentage - translatedPercentageDiff;

	return (
		<div class={classNames({
			[style["meter"]]: true,
		})}>
			<div class={classNames({
				[style["reviewed"]]: true,
			})} style={{ flexBasis: `${reviewedPercentageDiff}%` }} title="Translated + Reviewed">{!!reviewedPercentage && reviewedPercentage + "%"}</div>
			<div class={classNames({
				[style["translated"]]: true,
			})} style={{ flexBasis: `${translatedPercentageDiff}%` }} title="Translated">{!!translatedPercentage && translatedPercentage + "%"}</div>
			<div class={classNames({
				[style["untranslated"]]: true,
			})} title="Untranslated">{!!untranslatedPercentage && untranslatedPercentage + "%"}</div>
		</div>
	);
}

interface TranslationProgressProps {
	translated: number;
	reviewed: number;
}
