import { Link } from 'react-router-dom';
import logo from '../../assets/Screenshot_2-removebg-preview.png';
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<>
			<div className='flex flex-col mt-12 lg:justify-end font-poppins'>
				<div className='w-full bg-blue-900 pt-11  '>
					<div className='justify-center flex-1 max-w-7xl py-4 mx-auto lg:py-0'>
						<div className='flex flex-wrap items-center justify-between pb-4 border-b border-gray-500  lg:justify-between'>
							<h2 className='mb-4 text-2xl font-semibold tracking-wider text-gray-300 lg:mb-0 '>
								Subscribe to the latest Newsletters
							</h2>
							<div className='flex flex-wrap'>
								<div className='w-full py-1 mb-2 lg:flex-1 lg:py-0 lg:mr-3 lg:mb-0'>
									<input
										type='email '
										className='inline-block w-full h-12 px-3 text-gray-700 placeholder-gray-500 border rounded-md    '
										placeholder='Your email'
									/>
								</div>
								<div className='w-full py-1 lg:w-auto lg:py-0'>
									<a
										href='#'
										className='inline-block w-full px-5 py-4 font-medium leading-4 text-center bg-blue-200 rounded-md hover:bg-blue-300'>
										Subscribe
									</a>
								</div>
							</div>
						</div>
						<div className='flex flex-wrap py-10 -mx-3'>
							<div className='w-full px-4 mb-11 md:w-1/2 lg:w-4/12 lg:mb-0'>
								<Link to='/' className='inline-block mb-4 text-xl font-bold text-gray-200 '>
									<img src={logo} alt='' className='w-[30%] border rounded' />
								</Link>
								<p className='text-base font-normal leading-6 text-gray-300 lg:w-64 '>
									Empowering productivity through intuitive task management solutions.
								</p>
								<div className='flex justify-start mt-4 '>
									<a
										href='#'
										type='button'
										className='m-1 leading-normal text-gray-300 uppercase transition duration-150 ease-in-out border-2 border-gray-300 rounded-full  hover:border-blue-700 hover:bg-blue-700 w-9 h-9'>
										<FaFacebook className='w-4 h-full mx-auto text-gray-300 bi bi-facebook' />
									</a>
									<a
										href='#'
										type='button'
										className='m-1 leading-normal text-gray-300 uppercase transition duration-150 ease-in-out border-2 border-gray-300 rounded-full   -800 hover:border-blue-500 hover:bg-blue-500 w-9 h-9'>
										<FaTwitter className='w-4 h-full mx-auto text-gray-300  bi bi-twitter' />
									</a>
									<a
										href='#'
										type='button'
										className='m-1 leading-normal text-gray-300 uppercase transition duration-150 ease-in-out border-2 border-gray-300 rounded-full   -800 hover:border-red-700 text-text-gray-50 hover:bg-red-700 w-9 h-9'>
										<FaGoogle className='w-4 h-full mx-auto text-gray-100  bi bi-google' />
									</a>
									<a
										href='#'
										type='button'
										className='m-1 leading-normal text-gray-400 uppercase transition duration-150 ease-in-out border-2 border-gray-300 rounded-full   -800 hover:border-blue-600 hover:bg-blue-600 w-9 h-9'>
										<FaLinkedin className='w-4 h-full mx-auto text-gray-300  bi bi-linkedin' />
									</a>
								</div>
							</div>
							<div className='w-full px-4 md:w-1/4 lg:w-2/12 mb-11 lg:mb-0'>
								<h2 className='mb-4 text-xl font-bold text-gray-200 '>Services </h2>
								<ul>
									<li onClick={scrollToTop} className='flex items-center mb-4 '>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											fill='currentColor'
											className='w-3 h-3 mr-1 text-white  bi bi-chevron-right'
											viewBox='0 0 16 16'>
											<path
												fillRule='evenodd'
												d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path>
										</svg>
										<Link
											to='/'
											className='inline-block text-base font-normal text-gray-300 '>
											Home
										</Link>
									</li>
									<li onClick={scrollToTop} className='flex items-center mb-4 '>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											fill='currentColor'
											className='w-3 h-3 mr-1 text-white  bi bi-chevron-right'
											viewBox='0 0 16 16'>
											<path
												fillRule='evenodd'
												d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path>
										</svg>
										<Link
											to='about'
											className='inline-block text-base font-normal text-gray-300 '>
											About Us
										</Link>
									</li>
									<li onClick={scrollToTop} className='flex items-center mb-4 '>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											fill='currentColor'
											className='w-3 h-3 mr-1 text-white  bi bi-chevron-right'
											viewBox='0 0 16 16'>
											<path
												fillRule='evenodd'
												d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path>
										</svg>
										<Link
											to='feature'
											className='inline-block text-base font-normal text-gray-300 '>
											Features
										</Link>
									</li>
									<li onClick={scrollToTop} className='flex items-center mb-4 '>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											fill='currentColor'
											className='w-3 h-3 mr-1 text-white  bi bi-chevron-right'
											viewBox='0 0 16 16'>
											<path
												fillRule='evenodd'
												d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path>
										</svg>
										<Link
											to='contact'
											className='inline-block text-base font-normal text-gray-300 '>
											Contact Us
										</Link>
									</li>
								</ul>
							</div>

							<div className='w-full px-4 md:w-1/4 lg:w-2/12 mb-11 lg:mb-0'>
								<h2 className='mb-4 text-xl font-bold text-gray-200 '>Quick Links</h2>
								<ul>
									<li className='flex items-center mb-4 '>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											fill='currentColor'
											className='w-3 h-3 mr-1 text-white  bi bi-chevron-right'
											viewBox='0 0 16 16'>
											<path
												fillRule='evenodd'
												d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path>
										</svg>
										<a
											href='#'
											className='inline-block text-base font-normal text-gray-300 '>
											Home
										</a>
									</li>
									<li className='flex items-center mb-4 '>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											fill='currentColor'
											className='w-3 h-3 mr-1 text-white  bi bi-chevron-right'
											viewBox='0 0 16 16'>
											<path
												fillRule='evenodd'
												d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path>
										</svg>
										<a
											href='/about'
											className='inline-block text-base font-normal text-gray-300 '>
											About Us
										</a>
									</li>
									<li className='flex items-center mb-4 '>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											fill='currentColor'
											className='w-3 h-3 mr-1 text-white  bi bi-chevron-right'
											viewBox='0 0 16 16'>
											<path
												fillRule='evenodd'
												d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'></path>
										</svg>
										<a
											href='#'
											className='inline-block text-base font-normal text-gray-300 '>
											Services
										</a>
									</li>
								</ul>
							</div>
							<div className='w-full px-4 mb-2 lg:mb-0 md:w-1/3 lg:w-4/12'>
								<h2 className='mb-4 text-lg font-bold text-gray-200 '>Contact Info</h2>
								<p className='flex items-center mb-4'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										className='w-4 h-4 mr-1 text-gray-300  bi bi-geo-alt '
										viewBox='0 0 16 16'>
										<path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z'></path>
										<path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'></path>
									</svg>
									<span className='text-gray-300 '>Dhaka, Bangladesh</span>
								</p>
								<p className='flex items-center mb-4 '>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										className='w-4 h-4 mr-2 text-gray-300  bi bi-envelope'
										viewBox='0 0 16 16'>
										<path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z'></path>
									</svg>
									<span className='text-gray-300 '>info@gmail.com</span>
								</p>
								<p className='flex items-center mb-4'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='currentColor'
										className='w-4 h-4 mr-2 text-gray-300  bi bi-telephone'
										viewBox='0 0 16 16'>
										<path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'></path>
									</svg>
									<span className='text-gray-300 '>+880-1234567890</span>
								</p>
							</div>
						</div>
					</div>
					<div className='py-5 text-center text-gray-200 bg-blue-800 '>
						<span>© Copyright 2023 . All Rights Reserved</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
