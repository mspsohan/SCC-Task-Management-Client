import { NavLink } from 'react-router-dom'

const MenuItem = ({ label, address, icon: Icon }) => {
   return (
      <NavLink
         to={address}
         end
         className={({ isActive }) =>
            `flex items-center  px-6 py-4 text-gray-300 dark:text-gray-400 group dark:hover:bg-gray-800 hover:text-white hover:bg-gray-900 ${isActive ? 'bg-gray-800  text-white border-r-4 border-blue-500 rounded-e' : 'text-gray-600'
            }`
         }
      >
         <Icon className='w-5 h-5' />

         <span className='mx-4 font-medium'>{label}</span>
      </NavLink>
   )
}
export default MenuItem