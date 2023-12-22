import Banner from '../../components/Banner/Banner';
import WhoGetBenefit from '../../components/WhoGetBenefit/WhoGetBenefit';

const Home = () => {
	return (
		<>
			<div className='max-w-7xl mx-auto overflow-hidden'>
				<Banner />
				<WhoGetBenefit />
			</div>
		</>
	);
};

export default Home;
