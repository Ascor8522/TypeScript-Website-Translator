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
			<span>English (en)</span>
			<span>→</span>
			<select>
				{
					ISO6391
						.getAllCodes()
						.filter(code => code !== "en")
						.map(code => [code, ISO6391.getName(code)])
						.sort(([_a, a], [_b, b]) => a.localeCompare(b))
						.map(([code, name]) => <option value={code}>{name} ({code})</option>)

				}
			</select>
			<button class="">View Source</button>
			<BreadCrumbs path="foo/bar-baz/qux" />
		</header>
	);
}

interface HeaderProps {

}
