// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import useAllUser from '../../hooks/useAllUser';
// ... (import statements)

export default function WebsiteUsed() {
	const { data: allUsers } = useAllUser();

	return (
		<div className='bg-gray-200 px-5 py-10'>
			<div className='max-w-xl mx-auto'>
				<h1 className='mb-4 text-4xl font-bold text-center '>Peoples Used This Application</h1>
				<p className='mb-16 text-base text-center text-gray-500'>
					Explore how our app caters to the needs of various professionals.
				</p>
			</div>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				freeMode={true}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, FreeMode, Pagination]}
				className='mySwiper'>
				{allUsers?.map((user) => (
					<SwiperSlide key={user?._id}>
						<div className='w-full bg-white flex flex-col items-center py-10 justify-center rounded-md'>
							<q className='text-xl font-semibold font-serif text-blue-800'>
								{user?.profession ? user?.profession : 'Front End Developer'}
							</q>
							<div className='w-24 h-24 my-3 rounded-full border-4 border-yellow-500'>
								<img src={user?.image} alt='' className='w-20 h-20 rounded-full' />
							</div>
							<h2 className='font-sans text-xl font-semibold uppercase'>{user?.name}</h2>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
