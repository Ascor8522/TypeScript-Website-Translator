import classNames from "classnames";

import styles from "./breadcrumbs.module.scss";

export default function BreadCrumbs({ path }: BreadCrumbsProps) {
	return (
		<div class={classNames({
			[styles["path"]]: true,
		})}>
			{
				path
					.split("/")
					.map((part, i, a) => [!!i && <span>/</span>, <span class={classNames({
						[styles["segment"]]: true,
					})}>{part}</span>])
			}
		</div>
	);
}

interface BreadCrumbsProps {
	path: string;
}
