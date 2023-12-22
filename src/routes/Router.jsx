import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import About from '../pages/About/About';
import Features from '../pages/Features/Features';
import Contact from '../pages/Contact/Contact';
import Main from '../layout/MainLayout';
import DashboardLayout from '../layout/DashboardLayout';
import DashboardHome from '../pages/Dashboard/DashboardHome/DashboardHome';
import PrivetRoute from './PrivetRoute';
import AccountSetting from '../pages/Dashboard/AccountSetting/AccountSetting';
import Category from '../pages/Dashboard/Category/Category';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/feature',
				element: <Features />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '/dashboard',
		element: (
			<PrivetRoute>
				<DashboardLayout />
			</PrivetRoute>
		),
		children: [
			{
				index: true,
				element: <DashboardHome />,
			},
			{
				path: 'profile',
				element: <AccountSetting />,
			},
			{
				path: 'category',
				element: <Category />,
			},
		],
	},
]);

export default router;
