import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../assets/Screenshot_2-removebg-preview.png';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const { user } = useAuth();

	const navlinks = (
		<>
			<NavLink
				to='/'
				className={({ isActive, isPending }) =>
					isPending
						? 'pending'
						: isActive
						? 'active hover:border-b-2 border-b-blue-600  text-black text-lg md:text-xl mx-3 rounded-none font-semibold border-b-2'
						: 'hover:border-b-2 border-b-blue-600  text-black  text-lg md:text-xl mx-3 rounded-none'
				}>
				Home
			</NavLink>
			<NavLink
				to='/about'
				className={({ isActive, isPending }) =>
					isPending
						? 'pending'
						: isActive
						? 'active hover:border-b-2 border-b-blue-600  text-black text-lg md:text-xl  mx-3 rounded-none font-semibold border-b-2'
						: 'hover:border-b-2 border-b-blue-600  text-black  text-lg md:text-xl  mx-3 rounded-none'
				}>
				About Us
			</NavLink>
			<NavLink
				to='/feature'
				className={({ isActive, isPending }) =>
					isPending
						? 'pending'
						: isActive
						? 'active hover:border-b-2 border-b-blue-600  text-black text-lg md:text-xl mx-3  rounded-none font-semibold border-b-2'
						: 'hover:border-b-2 border-b-blue-600  text-black  text-lg md:text-xl mx-3 rounded-none '
				}>
				Features
			</NavLink>
			<NavLink
				to='/contact'
				className={({ isActive, isPending }) =>
					isPending
						? 'pending'
						: isActive
						? 'active hover:border-b-2 border-b-blue-600  text-black text-lg md:text-xl mx-3  rounded-none font-semibold border-b-2'
						: 'hover:border-b-2 border-b-blue-600  text-black  text-lg md:text-xl mx-3 rounded-none '
				}>
				Contact Us
			</NavLink>
			{user?.email && (
				<NavLink
					to='/dashboard'
					className={({ isActive, isPending }) =>
						isPending
							? 'pending'
							: isActive
							? 'active hover:border-b-2 border-b-blue-600  text-black text-lg md:text-xl mx-3  rounded-none font-semibold border-b-2'
							: 'hover:border-b-2 border-b-blue-600  text-black  text-lg md:text-xl mx-3 rounded-none '
					}>
					Dashboard
				</NavLink>
			)}
		</>
	);
	return (
		<>
			<div className='shadow-lg font-poppins '>
				<div className='max-w-7xl px-4 mx-auto'>
					<nav className='flex items-center justify-between py-4'>
						<img
							src={logo}
							alt=''
							className='text-2xl font-bold text-gray-700 w-[30%] lg:w-[10%]'
						/>
						<div className='flex justify-between lg:space-x-9'>
							<div className='lg:hidden'>
								<button
									onClick={() => setOpen(true)}
									className='flex items-center px-3 py-2 text-blue-600 border border-blue-200 rounded  navbar-burger hover:text-blue-800 hover:border-blue-300 lg:hidden'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='18'
										height='18'
										fill='currentColor'
										className='bi bi-list'
										viewBox='0 0 16 16'>
										<path
											fillRule='evenodd'
											d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
										/>
									</svg>
								</button>
							</div>
							<ul className={`hidden lg:w-auto lg:space-x-9 lg:items-center lg:flex `}>
								{navlinks}
								{/* <li>
                           {
                              user?.email ? <button onClick={handleLogout}>Logout</button> : <Link to="/login">Login</Link>
                           }
                        </li> */}
							</ul>
						</div>
					</nav>

					{open && (
						<div
							className={`absolute inset-0 z-50 h-screen p-3 text-gray-400 duration-500 transform bg-blue-50  w-80  $  {!open ? "lg:hidden" : ""} lg:transform-none lg:relative`}>
							<div className='flex justify-between lg:'>
								<img
									src={logo}
									alt=''
									className='p-2 text-2xl font-bold text-gray-700 w-[45%]'
								/>

								<button
									onClick={() => setOpen(false)}
									className='p-2 text-gray-700 rounded-md  hover:text-blue-300 lg:hidden '>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										fill='currentColor'
										className='bi bi-x-circle'
										viewBox='0 0 16 16'>
										<path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
										<path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
									</svg>
								</button>
							</div>
							<hr className='text-black border-b-2 border-black' />
							<ul className='px-4 text-left mt-7 flex flex-col'>{navlinks}</ul>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
