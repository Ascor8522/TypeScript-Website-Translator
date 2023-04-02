import { ComponentChildren, VNode } from "preact";

type BrandedTab = VNode<any> & { _type: "tab"; };

export default function Tab({ children }: TabProps) {
	return <>{children}</>;
}

interface TabWitTitleProps {
	title: string;
	subtitle?: string;
}

interface TabWithLabelProps {
	label: string;
	badge?: string;
}

export type TabProps = {
	name: string;
	children: ComponentChildren;
} & (TabWitTitleProps | TabWithLabelProps);
