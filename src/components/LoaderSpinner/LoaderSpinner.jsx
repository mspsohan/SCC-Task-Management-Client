import { RotatingLines } from 'react-loader-spinner';
const LoaderSpinner = () => {
   return (
      <div className="w-full h-screen flex justify-center items-center dark:bg-gray-800">
         <div className="">
            <RotatingLines
               strokeColor="grey"
               strokeWidth="5"
               animationDuration="0.75"
               width="96"
               visible={true} />
         </div>
      </div>
   );
};

export default LoaderSpinner;