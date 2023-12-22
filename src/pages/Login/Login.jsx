import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { TbFidgetSpinner } from 'react-icons/tb'

const Login = () => {
   const [loading, setLoading] = useState(false)
   const { signIn } = useAuth();
   const navigate = useNavigate();
   const location = useLocation()
   const { register, handleSubmit } = useForm();
   const onSubmit = async (data) => {
      const { email, password } = data;
      setLoading(true)
      try {
         signIn(email, password)
         toast.success('Successfully Login');
         navigate(location?.state ? location?.state : '/')
         setLoading(false)
      } catch (error) {
         toast.error(error.message);
         setLoading(false)
         return;
      } finally {
         setLoading(false)
      }
   };
   return (
      <div className="min-w-screen min-h-screen bg-base-100 flex items-center justify-center px-5 py-5">
         <div
            className="bg-gray-100 text-gray-500 rounded-3xl shadow-2xl shadow-blue-500/50 drop-shadow-2xl w-full overflow-hidden"
            style={{ maxWidth: '1000px' }}>
            <div className="md:flex flex-row-reverse w-full">
               <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10 text-white ">
                  <div className="flex flex-col justify-center items-center h-[60vh]">
                     <h1 className="text-4xl font-bold">Hello, Friend!</h1>
                     <p className="text-center w-80 py-10">
                        Enter your personal details and start journey with us
                     </p>
                     <Link to="/register">
                        <button className="btn text-lg capitalize">
                           Register
                        </button>
                     </Link>
                  </div>
               </div>
               <div className="w-full md:w-1/2 py-20 px-5 md:px-10">
                  <div className="text-center mb-6">
                     <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
                     <p>Enter your information to login</p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <div className="flex -mx-3">
                        <div className="w-full px-3 mb-2">
                           <label htmlFor="" className="text-xs font-semibold px-1"> Email </label>
                           <div className="flex">
                              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                 <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                              </div>
                              <input type="email" {...register('email')}
                                 className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                 placeholder="Enter Email" required />
                           </div>
                        </div>
                     </div>
                     <div className="flex -mx-3">
                        <div className="w-full px-3 mb-2">
                           <label htmlFor="password" className="text-xs font-semibold px-1"> Password </label>
                           <div className="flex">
                              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                 <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                              </div>
                              <input type="password" {...register('password')} id="password"
                                 className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                 placeholder="************" required />
                           </div>
                        </div>
                     </div>
                     <div className="h-10">
                        <p></p>
                     </div>
                     <div className="flex -mx-3">
                        <div className="w-full px-3 mb-2">
                           <button type="submit"
                              className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-[20px] px-3 py-3 font-semibold">
                              {
                                 loading ? <TbFidgetSpinner className='animate-spin mx-auto' /> : "LOGIN NOW"
                              }
                           </button>
                        </div>
                     </div>
                  </form>
                  <div>
                     <div className="flex items-center mx-3">
                        <hr className="w-full border-1 border-black" />
                        <p className="mx-5">OR</p>
                        <hr className="w-full border-1 border-black" />
                     </div>
                     <SocialLogin></SocialLogin>
                     <div className="flex justify-center mt-5 md:hidden">
                        <p>
                           Not have an account?{' '}
                           <Link to="/register"
                              className="font-bold border-b pb-[2px] text-blue-600 border-b-black">
                              Register
                           </Link>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;