import { Dialog, Transition } from '@headlessui/react'
import { Fragment, } from 'react'

function ViewTask({ isOpen, closeModal, task }) {
   const formattedDate = (dateString) => {
      const date = new Date(dateString);

      const formattedDate = [
         date.getDate(),
         date.getMonth() + 1,
         date.getFullYear().toString().slice(-2),
      ].join('-');

      return formattedDate;
   };

   const formattedDeadline = formattedDate(task?.deadline);
   const formattedCreateTask = formattedDate(task?.taskCreatedAt);

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
                        <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-4 text-left  shadow-xl transition-all">
                           <div
                              id="TaskcardRoot"
                              className="bg-white flex flex-row justify-between gap-5 w-full font-['Gelion'] items-start pt-8  rounded-lg"
                           >
                              <div className="flex flex-col mb-8 gap-10 w-5/6 items-start">
                                 <div className="flex flex-col gap-5 w-full items-start">
                                    <div className="flex flex-col gap-4 w-full items-start">
                                       <div className="text-2xl font-medium tracking-[-0.48] w-full">
                                          {task?.taskTitle}
                                       </div>
                                       <div
                                          id="Component"
                                          className="text-center text-xs font-medium border tracking-[-0.12] text-[#df9a00] bg-[#fffdf5] flex flex-row justify-center  pt-0 w-16 h-6 items-center rounded-lg"
                                       >
                                          {task?.priority}
                                       </div>
                                    </div>
                                    <div className="tracking-[-0.32] leading-[24px] text-[#808080] w-full">
                                       {task?.taskDescription}
                                    </div>
                                 </div>
                                 <div className="flex flex-row gap-2 justify-between w-5/6 md:w-3/5 items-start">
                                    <button id="Button2"
                                       className="text-center font-semibold text-white shadow-[0px_12px_25px_0px_rgba(22,_36,_104,_0.06)] bg-[#3754db] flex flex-row justify-center mt-px pt-4 w-72 h-12 cursor-pointer items-start rounded-lg"
                                    >
                                       Work on it Now
                                    </button>
                                    <div className="bg-[#fff0f0] cursor-pointer flex flex-row justify-center pt-3 w-12 h-12 items-start rounded-lg">
                                       <img
                                          src="https://file.rendit.io/n/ScyffAaEApaP7RXTcMVY.svg"
                                          alt="Delete1"
                                          id="Delete1"
                                          className="w-6"
                                       />
                                    </div>
                                    <div className="bg-[#f6f8fd] cursor-pointer flex flex-row justify-center mt-px pt-3 w-12 h-12 items-start rounded-lg">
                                       <img
                                          src="https://file.rendit.io/n/ulS5tE5ceM3l0unYo3lb.svg"
                                          alt="EditSquare"
                                          id="EditSquare"
                                          className="w-6"
                                       />
                                    </div>
                                 </div>
                              </div>
                              <div className="flex flex-row gap-3 w-1/6 items-start">
                                 <div className="flex flex-col justify-between w-20 h-[180px] items-start">
                                    <div className="relative flex flex-row ml-1 w-16 items-start">
                                       <div className="text-xs tracking-[-0.24] text-[#999999] absolute top-0 left-0 h-4 w-16">
                                          Task Created
                                       </div>
                                       <div className="text-sm font-bold tracking-[-0.42] text-[#16171d] relative mt-3">
                                          {formattedCreateTask}
                                       </div>
                                    </div>
                                    <div className="relative flex flex-row w-16 items-start">
                                       <div className="text-xs text-[#999999] absolute top-0 left-0 h-4 w-12">
                                          Due Date
                                       </div>
                                       <div className="text-sm font-bold tracking-[-0.42] text-[#16171d] relative mt-3">
                                          {formattedDeadline}
                                       </div>
                                    </div>
                                 </div>
                                 <img
                                    src="https://file.rendit.io/n/uyjEzRIanfAfEOs9ypWr.svg"
                                    alt="Group"
                                    className="w-[26px]"
                                 />
                              </div>
                           </div>


                           <div className="flex justify-end">
                              <button type="button"
                                 className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                 onClick={closeModal}
                              >
                                 Close
                              </button>
                           </div>
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      </>
   )
}


export default ViewTask;