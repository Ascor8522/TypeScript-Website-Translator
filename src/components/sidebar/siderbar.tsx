import { ComponentChild } from "preact";

export default function Sidebar({ children }: SidebarProps) {
	return (
		<aside>

		</aside>
	);
}

interface SidebarProps {
	children: ComponentChild[];
}
