import classNames from "classnames";
import { Component } from "preact";
import { useEffect } from "preact/hooks";

import Tab, { TabProps } from "./tab";
import styles from "./tabs.module.scss";

export default function TabPanel({ children: tabs, activeTab }: TabPanelProps) {

	useEffect(() => {

	}, [tabs, activeTab]);

	return (
		<div class={classNames({
			[styles["tab-panel"]]: true,
		})}>
			{
				tabs
					.map(tab => tab as unknown as Component<TabProps, {}>)
					.find(tab => activeTab === null || tab.props.name === activeTab)!
			}
		</div>
	);
}

interface TabPanelProps {
	children: [ReturnType<typeof Tab>, ...ReturnType<typeof Tab>[]];
	activeTab: TabProps["name"];
}
