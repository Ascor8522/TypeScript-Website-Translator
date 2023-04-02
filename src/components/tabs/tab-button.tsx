import classNames from "classnames";
import { useEffect } from 'preact/hooks';

import Tab, { TabProps } from "./tab";
import styles from "./tabs.module.scss";

export default function TabButton({ children: tab, activeTab, setActiveTab }: TabButtonProps) {

	useEffect(() => {

	}, [tab, activeTab]);

	return (
		<div class={classNames({
			[styles["tab-button"]]: true,
			[styles["active"]]: activeTab === tab.props.name,
		})} key={tab.props.name} onClick={() => setActiveTab(tab.props.name)}>
			{
				"title" in tab.props && <big>{tab.props.title}</big>
			}
			{
				"subtitle" in tab.props && tab.props.subtitle && <small>{tab.props.subtitle}</small>
			}
			{
				"label" in tab.props && <span>
					{tab.props.label}
					{
						"badge" in tab.props && tab.props.badge && <span class={classNames({
							[styles["badge"]]: true,
						})}>{tab.props.badge}</span>
					}
				</span>
			}
		</div>
	);
}

interface TabButtonProps {
	children: ReturnType<typeof Tab>;
	activeTab: TabProps["name"];
	setActiveTab: (name: TabProps["name"]) => void;
}
