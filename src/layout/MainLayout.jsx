import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { motion, useScroll } from 'framer-motion';
const Main = () => {
	const { scrollYProgress } = useScroll();
	return (
		<>
			<motion.div style={{ scaleX: scrollYProgress }} />
			<Navbar />
			<Outlet></Outlet>
			<Footer />
		</>
	);
};

export default Main;
