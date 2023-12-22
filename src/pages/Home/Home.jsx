import Banner from '../../components/Banner/Banner';
import WebsiteUsed from '../../components/WebsiteUsed/WebsiteUsed';
import WhoGetBenefit from '../../components/WhoGetBenefit/WhoGetBenefit';

const Home = () => {
	return (
		<>
			<div className='max-w-7xl mx-auto overflow-hidden'>
				<Banner />
				<WhoGetBenefit />
				<WebsiteUsed />
			</div>
		</>
	);
};

export default Home;
