import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import useUserTask from '../../../hooks/useUserTask';
import toast from 'react-hot-toast';
import { updateStatus } from '../../../api/task';
import LoaderSpinner from '../../../components/LoaderSpinner/LoaderSpinner';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaTrashAlt } from 'react-icons/fa';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';
import { FaEdit } from 'react-icons/fa';
import UpdateTask from '../../../components/UpdateTask/UpdateTask';
import { useState } from 'react';
import EmptyTask from './EmptyTask';
import ViewTask from './ViewTask';

const Tasks = ({ task, index, draggableId, refetch }) => {
	const axios = useAxios();
	const handleDelete = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: 'Your Task will be Deleted',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then(async (result) => {
			if (result.isConfirmed) {
				try {
					await axios.delete(`/allTasks/${id}`);
					Swal.fire({
						title: 'Deleted!',
						text: 'Task Deleted Successfully.',
						icon: 'success',
					});
					refetch();
				} catch (error) {
					toast.error(error);
				}
			}
		});
	};
	const [tasks, setTasks] = useState({});

	// For View Modal
	let [isView, setIsView] = useState(false);

	function closeViewModal() {
		setIsView(false);
	}

	function openViewModal() {
		setTasks(task);
		setIsView(true);
	}

	// For Update Modal
	let [isOpen, setIsOpen] = useState(false);
	function closeModal() {
		setIsOpen(false);
	}
	function openModal(task) {
		setTasks(task);
		setIsOpen(true);
	}

	return (
		<>
			<Draggable draggableId={draggableId} index={index}>
				{(provided) => (
					<div
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}>
						<div className="bg-gray-600 flex flex-col justify-center pl-5 gap-6 w-full h-40 font-['Gelion'] items-start rounded-lg">
							<div className='flex flex-col gap-4 w-11/12 items-start'>
								<div className='flex flex-row justify-between ml-1 w-full items-start'>
									<div className='text-sm font-semibold tracking-[-0.28] text-white mt-1'>
										T-{index + 1}
									</div>
									<div
										id='Component'
										className={`
                              ${task?.priority === 'Low' && 'bg-green-600 text-white'} 
                              ${task?.priority === 'Moderate' && 'bg-yellow-600 text-white'} 
                              ${task?.priority === 'High' && 'bg-red-600 text-white'} 
                              text-center text-xs font-medium tracking-[-0.12] flex flex-row items-center justify-center pt-0 w-16 h-6 rounded-lg`}>
										{task?.priority}
									</div>
								</div>
								<div className='font-medium tracking-[-0.32] leading-[22px] text-white text-xl w-full'>
									{task?.taskTitle}
								</div>
							</div>
							<div className='flex justify-between w-full'>
								<button
									onClick={() => openViewModal(task)}
									className='flex flex-row ml-px gap-3 w-24 items-start'>
									<div className='text-center text-sm font-semibold tracking-[-0.28] text-white'>
										View Task
									</div>
									<HiArrowNarrowRight />
								</button>
								<div className='mr-5 flex items-center gap-4'>
									<button
										onClick={() => openModal(task)}
										className='pr-1 pl-2 pt-[6px] text-xl pb-2 bg-black rounded hover:bg-yellow-500 hover:text-black'>
										<FaEdit />
									</button>
									<button
										onClick={() => handleDelete(task?._id)}
										className='p-2 bg-black hover:bg-red-500  rounded'>
										<FaTrashAlt />
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</Draggable>
			<UpdateTask isOpen={isOpen} closeModal={closeModal} refetch={refetch} task={tasks} />
			<ViewTask isOpen={isView} closeModal={closeViewModal} task={tasks} />
		</>
	);
};

const TasksList = ({ title, tasks, refetch }) => {
	return (
		<Droppable droppableId={title} direction='vertical'>
			{(provided) => (
				<div ref={provided.innerRef} {...provided.droppableProps} className='task-list'>
					<div className='w-full p-2'>
						<h2 className='text-white text-3xl pb-5'>{title}</h2>
						<div className='p-3 bg-gray-600 border-b-4 border-blue-400 min-h-40 space-y-3 dark:bg-gray-900 rounded-b-xl '>
							{tasks?.map((task, index) => (
								<Tasks
									key={task._id}
									task={task}
									index={index}
									draggableId={task._id}
									refetch={refetch}
								/>
							))}
						</div>
					</div>

					{provided.placeholder}
				</div>
			)}
		</Droppable>
	);
};

const TaskDashboard = () => {
	const { data: tasks, refetch, isLoading } = useUserTask();

	const handleDragEnd = async (result) => {
		if (!result.destination) return;

		const movedTask = tasks[result.source.index];
		const newTasks = [...tasks];
		newTasks.splice(result.source.index, 1);
		newTasks.splice(result.destination.index, 0, movedTask);

		try {
			const response = await updateStatus({
				id: result?.draggableId,
				status: result.destination.droppableId,
			});

			if (response.error) {
				toast.error(response.error);
				return;
			}

			const destinationStatus = result.destination.droppableId;

			if (destinationStatus === 'Ongoing' || destinationStatus === 'Complete') {
				toast.success(`Task is set as ${destinationStatus}!`);
			}

			refetch();
		} catch (error) {
			toast.error(error.message || 'An error occurred');
		}
	};

	if (isLoading) {
		return <LoaderSpinner />;
	}

	return (
		<>
			{tasks?.length === 0 ? (
				<EmptyTask refetch={refetch} />
			) : (
				<>
					<DragDropContext onDragEnd={handleDragEnd}>
						<div className='dashboard text-white grid grid-cols-1 md:grid-cols-3'>
							<TasksList
								title='Todo'
								tasks={tasks?.filter((task) => task?.status === 'Todo')}
								refetch={refetch}
							/>
							<TasksList
								title='Ongoing'
								tasks={tasks?.filter((task) => task?.status === 'Ongoing')}
								refetch={refetch}
							/>
							<TasksList
								title='Complete'
								tasks={tasks?.filter((task) => task?.status === 'Complete')}
								refetch={refetch}
							/>
						</div>
					</DragDropContext>
				</>
			)}
		</>
	);
};

export default TaskDashboard;
