import axiosPublic from ".";

// get all user Data
export const getAllUser = async () => {
   const { data } = axiosPublic.get('/users')
   return data
}

// save user data in database
export const saveUser = async (user, name, image, profession) => {
   const currentUser = {
      name: user?.displayName || name,
      email: user?.email,
      image: user?.photoURL || image,
      profession: profession || "Front End Developer",
      role: 'user',
      status: 'Verified',

   };
   const { data } = await axiosPublic.post(`/users/${user?.email}`, currentUser);
   return data;
};