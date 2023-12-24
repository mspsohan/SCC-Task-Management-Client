import { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { IoIosArrowDown, IoIosSearch, IoMdMenu, IoMdNotificationsOutline } from 'react-icons/io';
import { MdHomeFilled, MdOutlineMessage } from 'react-icons/md';
import toast from 'react-hot-toast';
import MenuItem from '../components/MenuItem/MenuItem';
import CreateTask from '../components/CreateTask/CreateTask';
import useUserTask from '../hooks/useUserTask';
import logo from '../assets/Screenshot_2-removebg-preview.png';
import { BiCategory } from 'react-icons/bi';
const DashboardLayout = () => {
	const [sidebar, setSidebar] = useState(true);
	const [profileOpen, setProfileOpen] = useState(false);
	const { refetch } = useUserTask();
	const { user, logOut } = useAuth();
	const navigate = useNavigate();

	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
		setSidebar(false);
	}

	const openCreateModal = () => {
		setIsOpen(true);
	};

	const handleLogout = async () => {
		try {
			await logOut();
			toast.success('Logout Successfully');
			navigate('/');
		} catch (error) {
			toast.error(error);
		}
	};

	return (
		<>
			<div className='bg-[#f1f5fb] dark:bg-gray-800 min-h-screen'>
				<div className='body-content'>
					{/* nav item */}
					<div className='relative lg:block navbar-menu'>
						<nav
							className={`fixed ${
								!sidebar ? 'hidden lg:fixed' : 'lg:fixed'
							} top-0 transition-all lg:mt-0 mt-16 left-0 bottom-0 flex flex-col dark:bg-gray-900 w-[280px] bg-gray-800 overflow-hidden z-50`}
							id='sidenav'>
							<div className='flex items-center justify-center w-full border-b border-gray-600 bg-white'>
								<img src={logo} alt='' className='w-[50%]' />
							</div>
							<div className='pb-6 mt-4 overflow-x-hidden overflow-y-auto'>
								<div className='hidden'>
									<button
										type='button'
										onClick={openModal}
										className='w-full flex items-center justify-center rounded border border-yellow-500 text-xl px-6 py-4 text-gray-300 dark:text-gray-100  dark:hover:bg-gray-500 hover:text-white hover:bg-gray-900'>
										Create Task
									</button>
								</div>
								<p className='px-6 py-4 text-lg text-gray-300'>Dashboard</p>
								<ul className='mb-8 text-sm'>
									<li>
										<MenuItem
											address='/dashboard'
											icon={MdHomeFilled}
											label='Home'></MenuItem>
									</li>
									{/* <li >
                              <a href="#"
                                 className="flex items-center px-6 py-4 text-gray-300 dark:hover:bg-gray-800 dark:text-gray-400 group hover:text-white hover:bg-gray-900">
                                 <span className="inline-block mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                       fill="currentColor" className="w-5 h-5 dark:group-hover:text-gray-400"
                                       viewBox="0 0 16 16">
                                       <path
                                          d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z">
                                       </path>
                                    </svg>
                                 </span>
                                 <span> Profile </span>
                                 <span className="inline-block ml-auto sidenav-arrow">
                                    <svg className="w-3 h-3 dark:group-hover:text-gray-400" viewBox="0 0 10 6"
                                       fill="none" xmlns="http://www.w3.org/2000/svg"
                                       data-config-id="auto-svg-3-1">
                                       <path
                                          d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                                          fill="currentColor"></path>
                                    </svg>
                                 </span>
                              </a>

                              <div className="pl-3 ml-3 transition border-gray-500 dropdown-section nested-menu">
                                 <ul className="text-sm font-medium">
                                    <li>
                                       <a href="#"
                                          className="flex items-center py-3 pl-3 pr-4 text-white rounded dark:hover:bg-gray-800 dark:text-gray-400 wtxt hover:bg-gray-900 ">
                                          <span className="text-white dark:text-gray-400 ">Profile</span>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#"
                                          className="flex items-center py-3 pl-3 pr-4 text-white rounded dark:hover:bg-gray-800 dark:text-gray-400 wtxt hover:bg-gray-900 ">
                                          <span className="text-white dark:text-gray-400 ">Leave</span>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#"
                                          className="flex items-center py-3 pl-3 pr-4 text-white rounded dark:hover:bg-gray-800 dark:text-gray-400 wtxt hover:bg-gray-900 ">
                                          <span className="text-white dark:text-gray-400">Assets</span>
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </li> */}
									<li>
										<MenuItem
											address='/dashboard/category'
											icon={BiCategory}
											label='Category'></MenuItem>
									</li>
									<li></li>
								</ul>
								<p className='px-6 py-4 text-lg text-gray-300'>Main Website</p>
								<ul className='mb-8 text-sm'>
									<li>
										<Link
											to='/'
											className='flex items-center px-6 py-4 text-gray-300 dark:hover:bg-gray-800 dark:text-gray-400 group hover:text-white hover:bg-gray-900'>
											<span className='inline-block mr-3'>
												<FaHome className='text-2xl dark:group-hover:text-gray-400' />
											</span>
											<span> Home </span>
										</Link>
									</li>

									{/* <li>
                              <a href="#"
                                 className="flex items-center px-6 py-4 text-gray-300 dark:hover:bg-gray-800 dark:text-gray-400 group hover:text-white hover:bg-gray-900">
                                 <span className="inline-block mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                       fill="currentColor" className="w-5 h-5 dark:group-hover:text-gray-400"
                                       viewBox="0 0 16 16">
                                       <path
                                          d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                                       <path
                                          d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                                    </svg>
                                 </span>
                                 <span> Messages </span>
                              </a>
                           </li> */}

									{/* <li>
                              <a href="#"
                                 className="flex items-center px-6 py-4 text-gray-300 dark:hover:bg-gray-800 dark:text-gray-400 group hover:text-white hover:bg-gray-900">
                                 <span className="inline-block mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                       fill="currentColor" className="w-5 h-5 dark:group-hover:text-gray-400"
                                       viewBox="0 0 16 16">
                                       <path
                                          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                                       <path
                                          d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                                    </svg>
                                 </span>
                                 <span> Calendar </span>
                              </a>
                           </li> */}

									{/* <li>
                              <a href="#"
                                 className="flex items-center px-6 py-4 text-gray-300 dark:hover:bg-gray-800 dark:text-gray-400 group hover:text-white hover:bg-gray-900">
                                 <span className="inline-block mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                       fill="currentColor" className="w-5 h-5 dark:group-hover:text-gray-400"
                                       viewBox="0 0 16 16">
                                       <path
                                          d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                       <path fillRule="evenodd"
                                          d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                 </span>
                                 <span> Team </span>
                              </a>
                           </li> */}
								</ul>
							</div>
						</nav>
					</div>

					<div
						className={`mx-auto transition-all ${
							sidebar ? 'lg:ml-[280px]' : ''
						} content-wrapper`}
						id='dash'>
						{/* navbar */}
						<div className='sticky top-0 z-40 px-3 py-3 bg-white shadow dark:bg-gray-900 lg:px-5'>
							<nav className='relative'>
								<div className='flex items-center justify-between'>
									<div className='items-center mr-auto lg:flex'>
										<button
											onClick={() => setSidebar(!sidebar)}
											className={` px-2 py-2 text-blue-500 bg-blue-100 rounded dark:bg-gray-800 dark:text-gray-400`}>
											<IoMdMenu className='text-[22px]' />
										</button>
									</div>
									<div className='flex items-center'>
										<div className='relative mr-4 '>
											<span className='cursor-pointer'>
												<MdOutlineMessage className='text-gray-400 text-2xl' />
											</span>
										</div>
										<div className='mr-4 cursor-pointer'>
											<IoIosSearch className='text-gray-400 text-2xl' />
										</div>
										<div className='relative mr-4 cursor-pointer'>
											<span>
												{/* <div className="absolute top-0 right-0 w-2 h-2 bg-red-400 rounded-full">
                                    </div> */}
												<IoMdNotificationsOutline className='text-gray-400 text-2xl' />
											</span>
										</div>

										{/* Profile Name and icon */}
										<div className='relative text-left lg:inline-block'>
											<div className='lg:block'>
												<button
													onClick={() => setProfileOpen(!profileOpen)}
													className='flex items-center'>
													<div className='hidden mr-3 text-right md:block'>
														<p className='text-sm font-bold text-black dark:text-white'>
															{' '}
															{user?.displayName}{' '}
														</p>
													</div>
													<div className='mr-2'>
														<img
															src={user?.photoURL}
															className='object-cover object-right w-10 h-10 rounded-full'
															alt='person'
														/>
													</div>
													<span>
														<IoIosArrowDown className='text-gray-400' />
													</span>
												</button>
											</div>

											{/* dropdown_profile */}
											<div
												id='dropdown_profile'
												className={`${
													!profileOpen ? 'hidden' : ''
												} absolute right-0 w-48 mt-3 origin-top-right bg-white rounded shadow dark:bg-gray-700`}>
												<div className='py-1'>
													{/* Account Setting */}
													<Link
														to='/dashboard/profile'
														className='flex px-4 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100'>
														<svg
															className='mr-2'
															xmlns='http://www.w3.org/2000/svg'
															width='18'
															height='18'
															viewBox='0 0 24 24'
															fill='none'
															stroke='currentColor'
															strokeWidth='2'
															strokeLinecap='round'
															strokeLinejoin='round'>
															<circle cx='12' cy='12' r='3'></circle>
															<path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'></path>
														</svg>
														Account
													</Link>

													{/* Logout Button */}
													<button
														onClick={handleLogout}
														className='w-full flex px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-800 dark:text-gray-400 hover:bg-gray-100'>
														<svg
															className='mr-2'
															xmlns='http://www.w3.org/2000/svg'
															width='18'
															height='18'
															viewBox='0 0 24 24'
															fill='none'
															stroke='currentColor'
															strokeWidth='2'
															strokeLinecap='round'
															strokeLinejoin='round'>
															<path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'></path>
															<polyline points='16 17 21 12 16 7'></polyline>
															<line x1='21' y1='12' x2='9' y2='12'></line>
														</svg>
														Logout
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</nav>
						</div>
						{/* Outlet */}
						<div
							onClick={() => {
								setProfileOpen(false);
							}}>
							<Outlet context={openCreateModal} />
						</div>
					</div>
				</div>
			</div>
			<CreateTask isOpen={isOpen} closeModal={closeModal} refetch={refetch} />
		</>
	);
};

export default DashboardLayout;
