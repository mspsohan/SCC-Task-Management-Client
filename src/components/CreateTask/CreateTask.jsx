import { Dialog, Transition } from '@headlessui/react'

import { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IoMdClose } from 'react-icons/io';
import useAuth from '../../hooks/useAuth';
import { saveTask } from '../../api/task';
export default function CreateTask({ isOpen, closeModal, refetch }) {
   const { user } = useAuth()

   const { register, handleSubmit, reset } = useForm();
   const onSubmit = async (data) => {

      const taskData = {
         ...data,
         email: user?.email,
      };

      try {
         await saveTask(taskData);
         toast.success('Task Created Successfully');
         closeModal()
         reset()
         refetch()
      } catch (error) {
         toast.error(error.message || 'An error occurred');
      }
   };

   return (
      <>
         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <div className="fixed inset-0 bg-black/25" />
               </Transition.Child>

               <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                     <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                     >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                           <div className="absolute right-5">
                              <button type="button" onClick={closeModal}
                                 className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                                 <IoMdClose />
                              </button>
                           </div>
                           <Dialog.Title as="h3" className="text-2xl my-5 font-medium leading-6 text-gray-900">
                              Create Task
                           </Dialog.Title>

                           <form onSubmit={handleSubmit(onSubmit)}>
                              <div className='border bg-gray-100 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-5 p-2'>
                                 <div className='col-span-2'>
                                    <label>Task Name</label>
                                    <input type="text" placeholder="Task Name" {...register("taskTitle", {})} className='w-full p-2' />
                                 </div>
                                 <div className='col-span-1'>
                                    <label>Priority</label>
                                    <select {...register("priority")} className='w-full p-2'>
                                       <option value="Low">Low</option>
                                       <option value="Moderate">Moderate</option>
                                       <option value="High">High</option>
                                    </select>
                                 </div>
                                 <div className='col-span-1'>
                                    <label>Deadline</label>
                                    <input type="datetime-local" placeholder="Deadline" {...register("deadline", {})} className='w-full p-2' />
                                 </div>
                                 <div className='col-span-2'>
                                    <label>Task Description</label>
                                    <textarea {...register("taskDescription", {})} className='w-full p-2' />
                                 </div>
                                 <div className='col-span-2'>
                                    <input type="submit" className='w-full p-2 bg-gray-700 hover:bg-blue-600 cursor-pointer text-white text-xl font-semibold rounded' />
                                 </div>
                              </div>

                           </form>

                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      </>
   )
}