import ISO6391 from 'iso-639-1';

import logo from "../../assets/favicon.png";
import BreadCrumbs from "../breadcrumbs/breadcrumbs";
import githubLogo from "./github-logo.svg";
import styles from "./header.module.scss";

export default function Header({ disabled = false }: HeaderProps) {
	function getLanguageCodes() {
		return ISO6391
			.getAllCodes()
			.filter(code => code !== "en")
			.map(code => [code, ISO6391.getName(code)])
			.sort(([_a, a], [_b, b]) => a.localeCompare(b));
	}

	return (
		<header class={styles.header}>
			<span class={styles.logoName}>
				<img src={logo} class={styles.logo} />
				TypeScript Website Translator
			</span>
			<span>English (en)</span>
			<span>→</span>
			<select disabled={disabled}>
				{
					getLanguageCodes()
						.map(([code, name]) => <option value={code}>{name} ({code})</option>)
				}
			</select>
			<button disabled={disabled} class={styles.viewSources}>
				View Source
				<img src={githubLogo} class={styles.githubLogo} />
			</button>
			<BreadCrumbs
				path="foo/bar-baz/qux"
				disabled={disabled} />
		</header>
	);
}

interface HeaderProps {
	disabled?: boolean;
}
