import banner from '../../../assets/restaurant_banner.avif'

const Banner = () => {
    return (
        <div>
            <div className="relative md:h-[90vh]">
      <img className="h-full object-cover w-full " src={banner} alt="" />
      <div className="md:absolute top-0 left-0 w-full h-full">
        <div className=" absolute inset-0 bg-black h-full opacity-50"></div>
        <div className="flex absolute z-10 inset-0 flex-col items-center justify-center ">
          <h3 className="text-xl w-[400px] lg:w-[500px] text-center lg:text-4xl mt-3 text-white font-medium">
            
          Order Delicious Food Online
          </h3>
          <p className="text-sm flex px-3 md:px-0 text-center lg:text-xl w-auto lg:w-[700px] mx-auto text-white md:p-6 lg:p-0 md:mt-0 lg:mt-4 font-medium">
          Craving something tasty? Explore a vast array of delicious cuisines and have them delivered straight to your doorstep. From savory delights to sweet treats, there are is something for every craving.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl py-2 md:mt-3 lg:mt-6 px-4 rounded-full shadow-md transition duration-300 ease-in-out">
      Menu Page
    </button>
          
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;