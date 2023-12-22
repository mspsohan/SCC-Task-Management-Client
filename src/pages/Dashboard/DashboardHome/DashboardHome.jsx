import TaskDashboard from "../TaskDashboard/TaskDashboard";


const DashboardHome = ({ openModal }) => {

   return (
      <>
         <div className="py-8">
            <div className="container px-4 mx-auto">
               <TaskDashboard openModal={openModal} />
            </div>
         </div>
      </>
   );
};

export default DashboardHome;