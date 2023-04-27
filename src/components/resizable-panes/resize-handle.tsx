import classnames from "classnames";
import { useEffect, useRef } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";

import styles from "./resizable-panes.module.scss";

export default function ResizeHandle({ direction, ...props }: ResizeHandleProps) {
	const ref = useRef<HTMLDivElement>(null);

	let previous: HTMLElement | null;
	let next: HTMLElement | null;

	const dimension = direction === "row" ? "width" : "height";
	const dimension2 = direction === "row" ? "screenX" : "screenY";
	let isMouseDown = false;
	let startPosition = 0;
	let startSize = 0;

	const onDragStart = (e: MouseEvent) => {
		if(isMouseDown) return;
		if(!ref.current) return;
		if(!previous || !next) return;

		isMouseDown = true;
		startPosition = e[dimension2];
		startSize = previous.getBoundingClientRect()[dimension];
	};

	const onDrag = (e: MouseEvent) => {
		if(!isMouseDown) return;
		if(!previous || !next) return;

		const diff = e[dimension2] - startPosition;
		// previous.style[dimension] = `${startSize + diff - 10}px`;
		previous.style.flexBasis = `${startSize + diff - 10}px`;
		// next.style[dimension] = `${startSize - diff - 10}px`;
	};

	const onDragEnd = (e: MouseEvent) => {
		if(isMouseDown) isMouseDown = false;
	};

	useEffect(() => {
		const dragStartEventName: keyof HTMLElementEventMap = "mousedown";
		const dragEventName: keyof HTMLElementEventMap = "mousemove";
		const dragEndEventName: keyof HTMLElementEventMap = "mouseup";

		ref.current?.addEventListener(dragStartEventName, onDragStart);
		document?.addEventListener(dragEventName, onDrag);
		document?.addEventListener(dragEndEventName, onDragEnd);

		previous = (ref.current?.previousElementSibling ?? null) as HTMLElement | null;
		next = (ref.current?.nextElementSibling ?? null) as HTMLElement | null;

		return () => {
			ref.current?.removeEventListener(dragStartEventName, onDragStart);
			document?.removeEventListener(dragEventName, onDrag);
			document?.removeEventListener(dragEndEventName, onDragEnd);
		};
	}, [direction]);

	return (
		<div class={classnames(styles.handle, {
			[styles.verticalHandle]: direction === "row",
			[styles.horizontalHandle]: direction === "column",
		})} {...props} ref={ref} />
	);
}

interface ResizeHandleProps extends JSX.HTMLAttributes<HTMLDivElement> {
	direction: "row" | "column";
}
