import { ComponentChild } from "preact";

import styles from "./breadcrumbs.module.scss";

export default function BreadCrumbs({ path, disabled = false, separator = "/" }: BreadCrumbsProps) {
	return (
		<div class={styles.path}>
			{
				path
					.split("/")
					.map((part, i, a) => [
						!!i && separator,
						<span class={styles.segment} disabled={disabled} tabIndex={disabled ? undefined : 0}>{part}</span>,
					])
					.flat()
			}
		</div>
	);
}

interface BreadCrumbsProps {
	path: string;
	disabled?: boolean;
	separator?: ComponentChild;
}
