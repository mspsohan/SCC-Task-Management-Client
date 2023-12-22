import { motion, useScroll } from 'framer-motion';
import Banner from '../../components/Banner/Banner';
import WhoGetBenefit from '../../components/WhoGetBenefit/WhoGetBenefit';

const Home = () => {
	const { scrollYProgress } = useScroll();
	return (
		<>
			<motion.div style={{ scaleX: scrollYProgress }} className='max-w-7xl mx-auto' />
			<Banner />
			<WhoGetBenefit />
		</>
	);
};

export default Home;
