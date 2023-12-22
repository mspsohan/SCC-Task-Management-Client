import axiosPublic from ".";

// save user data in database
export const saveTask = async (taskData) => {
   const { data } = await axiosPublic.post(`/create-task`, taskData);
   return data;
};

// update room status after booking in db
export const updateStatus = async ({ id, status }) => {
   const { data } = await axiosPublic.patch(`/tasks/status/${id}`, { status })
   return data
}

export const updateTask = async ({ id, updateData }) => {
   const { data } = await axiosPublic.put(`/tasks/update/${id}`, { updateData })
   return data
}