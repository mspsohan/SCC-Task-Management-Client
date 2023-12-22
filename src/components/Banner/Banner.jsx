import { Link } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
const Banner = () => {
	const { scrollYProgress } = useScroll();
	return (
		<>
			<motion.div style={{ scaleX: scrollYProgress }} />
			<div className='relative overflow-hidden'>
				<div
					className='relative flex items-center justify-center w-full text-center bg-center bg-cover '
					style={{
						backgroundImage:
							'url(https://www.youthemployment.org.uk/dev/wp-content/uploads/2021/04/leon-Oalh2MojUuk-unsplash-600x400.jpg)',
						height: '600px',
					}}>
					<div
						data-aos='fade-zoom-in'
						data-aos-easing='ease-in'
						data-aos-delay='300'
						className='mx-4'>
						<div className='z-10 max-w-3xl p-6 bg-gray-900 md:p-16 opacity-80'>
							<div className='text-center'>
								<h2 className='mb-6 text-4xl font-medium leading-10 tracking-tight text-gray-50 md:text-5xl'>
									Effortless Task Management
								</h2>
								<p className='mb-6 tracking-wide text-gray-300 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5'>
									Streamline your workflow and boost productivity with our intuitive task
									management platform. Stay organized, collaborate seamlessly, and
									accomplish more with ease.
								</p>
								<div className='flex flex-wrap justify-center'>
									<Link
										to='/dashboard'
										className='w-full px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded md:w-auto md:ml-2 hover:bg-blue-700'>
										Let’s Explore
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
