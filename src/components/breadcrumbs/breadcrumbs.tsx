import styles from "./breadcrumbs.module.scss";

export default function BreadCrumbs({ path, disabled = false }: BreadCrumbsProps) {
	return (
		<div class={styles.path}>
			{
				path
					.split("/")
					.map((part, i, a) => [
						!!i && <span>/</span>,
						<span class={styles.segment}>{part}</span>,
					])
			}
		</div>
	);
}

interface BreadCrumbsProps {
	path: string;
	disabled?: boolean;
}
