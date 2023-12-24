import { useOutletContext } from 'react-router-dom';
import TaskDashboard from '../TaskDashboard/TaskDashboard';

const DashboardHome = () => {
	const openModal = useOutletContext();
	return (
		<>
			<div className='py-8'>
				<div className='container px-4 mx-auto'>
					<TaskDashboard openModal={openModal} />
				</div>
			</div>
		</>
	);
};

export default DashboardHome;
