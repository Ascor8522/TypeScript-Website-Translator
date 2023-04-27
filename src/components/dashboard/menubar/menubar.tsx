import classnames from "classnames";
import { useState } from "preact/hooks";

import styles from "./menubar.module.scss";

export default function MenuBar() {
	const [selectedPage, setSelectedPage] = useState("Dashboard");

	const pages = ["Dashboard", "Teams", "Reports", "Search Strings"];

	return (
		<div class={styles.menuBar}>
			<div class={styles.logo}>
				<span>transifex</span>
			</div>
			{
				pages.map(page => (
					<button
						key={page}
						class={classnames(styles.menuItem, { [styles.active]: selectedPage === page })}
						onClick={() => setSelectedPage(page)}
					>
						{page}
					</button>))
			}
		</div>
	);
}
