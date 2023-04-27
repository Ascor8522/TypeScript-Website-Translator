import classnames from "classnames";
import { JSX } from "preact";

import styles from "./resizable-panes.module.scss";
import ResizeHandle from "./resize-handle";

export default function ResizablePanes({ children, direction = "row", ...props }: ResizablePanesProps) {
	return (
		<div class={classnames(styles.panes, {
			[styles.rowPanes]: direction === "row",
			[styles.columnPanes]: direction === "column",
		})} {...props}>
			{
				children
					.map((child, i, a) => [!!i && <ResizeHandle direction={direction} />, child])
					.flat()
			}
		</div>
	);
}

interface ResizablePanesProps extends JSX.HTMLAttributes<HTMLDivElement> {
	children: JSX.Element[];
	direction?: "row" | "column";
}
