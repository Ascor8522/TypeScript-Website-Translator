import classNames from "classnames";
import { JSX } from "preact";
import { useState } from "preact/hooks";

import Tab, { TabProps } from "./tab";
import TabButton from "./tab-button";
import TabPanel from "./tab-panel";
import styles from "./tabs.module.scss";

export default function Tabs({ defaultTab, children: tabs, ...props }: TabsProps) {
	const [activeTab, setActiveTab] = useState(defaultTab ?? tabs[0].props.name);

	return (
		<div class={classNames({
			[styles["tabs"]]: true,
		})} {...props}>
			<div class={classNames({
				[styles["tab-list"]]: true,
			})}>
				{
					tabs
						.map(tab => <TabButton activeTab={activeTab} setActiveTab={setActiveTab}>{tab}</TabButton>)
				}
			</div>
			<TabPanel activeTab={activeTab}>{tabs}</TabPanel>
		</div>
	);
}

interface TabsProps extends JSX.HTMLAttributes<HTMLDivElement> {
	defaultTab?: TabProps["name"];
	children: [ReturnType<typeof Tab>, ...ReturnType<typeof Tab>[]];
}
