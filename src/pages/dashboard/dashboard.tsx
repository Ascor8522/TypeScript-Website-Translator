import MenuBar from '../../components/dashboard/menubar/menubar';
import { Page } from "../page";

export default function Dashboard({ }: DashboardProps) {
	return (
		<>
			<MenuBar />
		</>
	);
}

interface DashboardProps extends Page { }
