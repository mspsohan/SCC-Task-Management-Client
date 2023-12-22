import { Link, useNavigate } from 'react-router-dom';
import './register.css';
import SocialLogin from '../Login/SocialLogin';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { TbFidgetSpinner } from 'react-icons/tb'
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import { imageUpload } from '../../api/utilities';
import { saveUser } from '../../api/auth';

const Register = () => {
   const [loading, setLoading] = useState(false)
   const { createUser, updateUserProfile } = useAuth();
   const navigate = useNavigate();
   const [passwordError, setPasswordError] = useState('');
   const { register, handleSubmit } = useForm();

   const onSubmit = async (data) => {
      const image = data.image[0]
      const { name, email, password } = data;

      const lengthError = /^.{6,}$/;
      const spError = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;
      const capitalError = /^[^A-Z]*$/;

      if (!lengthError.test(password)) {
         setPasswordError('Password is less than 6 characters.');
         return;
      } else if (capitalError.test(password)) {
         setPasswordError('Password has no Capital Letter.');
         return;
      } else if (!spError.test(password)) {
         setPasswordError('Password has no special characters.');
         return;
      }
      setLoading(true)
      try {
         // Upload image
         const imageData = await imageUpload(image)
         // User Registration
         const result = await createUser(email, password)

         await updateUserProfile(name, imageData?.data?.display_url)

         //  save user Data in database
         await saveUser(result?.user, name, imageData?.data?.display_url)

         navigate('/')
         toast.success('Sign up Successfull')
         setLoading(false)
      } catch (error) {
         if (error.message) {
            toast.error('Email Already in Use.');
            setLoading(false)
         }
      }
   };

   return (
      <div className="min-w-screen min-h-screen bg-base-100 flex items-center justify-center px-3 py-5">
         <div
            className="bg-gray-100 text-gray-500 rounded-3xl drop-shadow-2xl shadow-2xl w-full overflow-hidden"
            style={{ maxWidth: '1000px' }}>
            <div className="md:flex w-full">
               <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10 text-white ">
                  <div className="flex flex-col justify-center items-center h-[60vh]">
                     <h1 className="text-4xl font-bold">Welcome Back!</h1>
                     <p className="text-center w-80 py-10">
                        To keep connected with us please login with your
                        personal info
                     </p>
                     <Link to="/login">
                        <button className="btn text-lg capitalize">
                           Sign In
                        </button>
                     </Link>
                  </div>
               </div>
               <div className="w-full md:w-1/2 py-5 px-5 md:px-10">
                  <div className="text-center mb-6">
                     <h1 className="font-bold text-3xl text-gray-900">
                        REGISTER
                     </h1>
                     <p>Enter your information to register</p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <div className="-mx-3">
                        <div className="w-full px-3 mb-2">
                           <label htmlFor="" className="text-xs font-semibold px-1"> Full Name </label>
                           <div className="flex">
                              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                 <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                              </div>
                              <input type="text" {...register('name')}
                                 className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                 placeholder="Enter Full Name" required />
                           </div>
                        </div>
                        <div className="w-full px-3 mb-2">
                           <label htmlFor="" className="text-xs font-semibold px-1"> Profile Picture </label>
                           <div className="flex">
                              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                 <i className="mdi mdi-image-outline text-gray-400 text-lg"></i>
                              </div>
                              <input type="file" {...register('image')}
                                 className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                 placeholder="Enter Image Url" required />
                           </div>
                        </div>
                     </div>
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
                           <label htmlFor="" className="text-xs font-semibold px-1"> Password </label>
                           <div className="flex">
                              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                 <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                              </div>
                              <input type="password" {...register('password')}
                                 className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                 placeholder="************" required />
                           </div>
                        </div>
                     </div>
                     <div className="h-10">
                        <p className="text-red-500">{passwordError}</p>
                     </div>
                     <div className="flex -mx-3">
                        <div className="w-full px-3 mb-2">
                           <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-[20px] px-3 py-3 font-semibold">
                              {loading ? <TbFidgetSpinner className='animate-spin mx-auto' /> : "REGISTER NOW"}
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
                           Already have an account?{' '}
                           <Link
                              to="/login"
                              className="font-bold border-b pb-[2px] text-blue-600 border-b-black">
                              Login
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

export default Register;