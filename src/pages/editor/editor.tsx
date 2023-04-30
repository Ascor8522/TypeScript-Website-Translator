import ResizablePanes from "../../components/resizable-panes/resizable-panes";
import Tab from "../../components/tabs/tab";
import Tabs from "../../components/tabs/tabs";
import TranslationProgress from "../../components/translation-progress/translation-progress";
import { Page } from "../page";

export default function Editor({ }: EditorProps) {
	return (
		<>
			<TranslationProgress
				reviewed={0.2}
				translated={0.6} />
			<ResizablePanes direction="row">
				<Tabs defaultTab="all">
					<Tab
						name="all"
						title="16"
						subtitle="All">
						<div>All translations here</div>
					</Tab>
					<Tab
						name="untranslated"
						title="0"
						subtitle="Untranslated">
						<div>All untranslated strings here</div>
					</Tab>
					<Tab
						name="unreviewed"
						title="10"
						subtitle="Unreviewed">
						<div>All unreviewed strings here</div>
					</Tab>
				</Tabs>
				<ResizablePanes direction="column">
					<div>Other pane</div>
					<div>Other pane</div>
					<div>Other pane</div>
				</ResizablePanes>
				<Tabs defaultTab="suggestions">
					<Tab
						name="suggestions"
						label="Suggestions">
						<div>Suggestions here</div>
					</Tab>
					<Tab
						name="history"
						label="History">
						<div>History here</div>
					</Tab>
					<Tab
						name="glossary"
						label="Glossary">
						<div>Glossary here</div>
					</Tab>
					<Tab
						name="comments"
						label="Comments"
						badge="3">
						<div>Comments here</div>
					</Tab>
				</Tabs>
			</ResizablePanes>
		</>
	);
}

interface EditorProps extends Page {

}
