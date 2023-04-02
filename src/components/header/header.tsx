import classNames from "classnames";
import ISO6391 from 'iso-639-1';

import BreadCrumbs from "../breadcrumbs/breadcrumbs";
import styles from "./header.module.scss";

export default function Header({ }: HeaderProps) {
	return (
		<header class={classNames({
			[styles["header"]]: true,
		})}>
			<span>TypeScript Website Translator</span>
			<BreadCrumbs />
			<span>English (en)</span>
			<span>→</span>
			<select>
				{
					ISO6391
						.getAllCodes()
						.filter(code => code !== "en")
						.map(code => [code, ISO6391.getName(code)])
						.map(([code, name]) => <option value={code}>{name} ({code})</option>)

				}
			</select>
			<button class="">View Source</button>
		</header>
	);
}

interface HeaderProps {

}
