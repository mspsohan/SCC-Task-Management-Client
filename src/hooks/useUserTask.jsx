import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useUserTask = () => {
   const { user } = useAuth()
   const axios = useAxios()
   const { data, isLoading, refetch } = useQuery({
      queryKey: ["userTask", user?.email],
      queryFn: async () => {
         const { data } = await axios.get(`/allTask?email=${user?.email}`)
         return data
      }
   })
   return { data, isLoading, refetch }
};

export default useUserTask;