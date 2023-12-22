import { FaUserSecret } from 'react-icons/fa6';
import { FcManager } from 'react-icons/fc';
import { GrUserWorker } from 'react-icons/gr';
import { PiStudentBold } from 'react-icons/pi';
import { SiFreelancer } from 'react-icons/si';
import { FaUserTie } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { motion } from 'framer-motion';

const UsersAndBenefits = () => {
	// const users = [
	// 	{
	// 		title: 'Busy Professionals',
	// 		details: 'Organize your day, prioritize tasks, and meet deadlines with ease.',
	// 	},
	// 	{
	// 		title: 'Project Managers',
	// 		details: 'Track project progress, assign tasks, and collaborate with teams effectively.',
	// 	},
	// 	{
	// 		title: 'Remote Workers',
	// 		details: 'Stay on top of work remotely, manage time zones, and collaborate seamlessly.',
	// 	},
	// 	{
	// 		title: 'Students',
	// 		details: 'Plan assignments, study schedules, and stay organized for academic success.',
	// 	},
	// 	{
	// 		title: 'Freelancers',
	// 		details: 'Manage multiple projects, track billable hours, and meet client deadlines.',
	// 	},
	// 	{
	// 		title: 'Small Business Owners',
	// 		details: 'Delegate tasks, track team productivity, and streamline operations.',
	// 	},
	// ];
	AOS.init();
	return (
		<section className='flex items-center my-12 justify-center bg-gray-100 overflow-hidden'>
			<div className='px-4 py-10 mx-auto lg:py-20 max-w-7xl'>
				<div className='max-w-xl mx-auto'>
					<h1 className='mb-4 text-4xl font-bold text-center '>
						{' '}
						Who Benefits from Our Task Management App?{' '}
					</h1>
					<p className='mb-16 text-base text-center text-gray-500'>
						Explore how our app caters to the needs of various professionals.
					</p>
				</div>
				<div className='grid grid-cols-1 gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3'>
					<motion.div
						whileHover={{ scale: 1.1 }}
						data-aos='fade-right'
						className='w-full p-8 transition-all bg-white rounded shadow hover:shadow-lg'>
						<div className='inline-block p-4 mb-6 bg-blue-400 rounded-full'>
							<FaUserSecret className='text-white text-3xl' />
						</div>
						<h3 className='mb-4 text-2xl font-semibold '> Busy Professionals </h3>
						<p className='text-base text-gray-500 '>
							Organize your day, prioritize tasks, and meet deadlines with ease.
						</p>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.1 }}
						data-aos='fade-up'
						className='w-full p-8 transition-all bg-white rounded shadow hover:shadow-lg'>
						<div className='inline-block p-4 mb-6 bg-blue-400 rounded-full'>
							<FcManager className='text-white text-3xl' />
						</div>
						<h3 className='mb-4 text-2xl font-semibold '> Project Managers </h3>
						<p className='text-base text-gray-500 -400'>
							Track project progress, assign tasks, and collaborate with teams effectively.
						</p>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.1 }}
						data-aos='fade-left'
						className='w-full p-8 transition-all bg-white rounded shadow -700 hover:shadow-lg'>
						<div className='inline-block p-4 mb-6 bg-blue-400 rounded-full'>
							<GrUserWorker className='text-white text-3xl' />
						</div>
						<h3 className='mb-4 text-2xl font-semibold '> Remote Workers </h3>
						<p className='text-base text-gray-500 -400'>
							Stay on top of work remotely, manage time zones, and collaborate seamlessly.
						</p>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.1 }}
						data-aos='fade-right'
						className='w-full p-8 transition-all bg-white rounded shadow -700 hover:shadow-lg'>
						<div className='inline-block p-4 mb-6 bg-blue-400 rounded-full'>
							<PiStudentBold className='text-white text-3xl' />
						</div>
						<h3 className='mb-4 text-2xl font-semibold '> Students </h3>
						<p className='text-base text-gray-500 -400'>
							Plan assignments, study schedules, and stay organized for academic success.
						</p>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.1 }}
						data-aos='fade-up'
						className='w-full p-8 transition-all bg-white rounded shadow -700 hover:shadow-lg'>
						<div className='inline-block p-4 mb-6 bg-blue-400 rounded-full'>
							<SiFreelancer className='text-white text-3xl' />
						</div>
						<h3 className='mb-4 text-2xl font-semibold '> Freelancers </h3>
						<p className='text-base text-gray-500 -400'>
							Manage multiple projects, track billable hours, and meet client deadlines.
						</p>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.1 }}
						data-aos='fade-left'
						className='w-full p-8 transition-all bg-white rounded shadow -700 hover:shadow-lg'>
						<div className='inline-block p-4 mb-6 bg-blue-400 rounded-full'>
							<FaUserTie className='text-white text-3xl' />
						</div>
						<h3 className='mb-4 text-2xl font-semibold '> Small Business Owners </h3>
						<p className='text-base text-gray-500 -400'>
							Delegate tasks, track team productivity, and streamline operations.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default UsersAndBenefits;
