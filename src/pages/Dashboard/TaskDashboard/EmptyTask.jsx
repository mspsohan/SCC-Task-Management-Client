import { useState } from "react";
import img from "../../../assets/Group_41-removebg-preview.png"
import CreateTask from "../../../components/CreateTask/CreateTask";
const EmptyTask = ({ refetch }) => {
   let [isOpen, setIsOpen] = useState(false)

   function closeModal() {
      setIsOpen(false)
   }

   function openModal() {
      setIsOpen(true)
   }

   return (
      <>
         <div className="text-white h-full">
            <div>
               <h2 className="text-4xl">Tasks </h2>
               <p>Your tasks in your space.</p>
            </div>
            <div className="flex flex-col justify-center mt-40 items-center h-full">
               <img src={img} alt="" className="w-[10%] mb-5" />
               <p>You have no task created in your workspace yet. </p>
               <p>Get productive. Create a Task Now.</p>
               <button onClick={openModal} className="btn btn-primary text-white mt-6 hover:bg-blue-500 hover:text-white">Create a Task</button>
            </div>
         </div>
         <CreateTask isOpen={isOpen} closeModal={closeModal} refetch={refetch} />
      </>
   );
};

export default EmptyTask;