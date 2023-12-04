import { FaTrophy, FaUsers, FaClock, FaCogs } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 mt-10 lg:mt-20 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Why Choose Us</h2>

        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"> {/* Updated line */}
              <FaTrophy className="text-3xl text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Diverse Contest Categories</h3>
              <p className="text-gray-600">Explore a wide range of contest categories to suit every interest and this coding passion.</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"> {/* Updated line */}
              <FaUsers className="text-3xl text-green-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Engage a Thriving Community</h3>
              <p className="text-gray-600">Join a vibrant community of creators and participants, sharing their creativity and passion.</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"> {/* Updated line */}
              <FaClock className="text-3xl text-purple-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quick and Easy Setup</h3>
              <p className="text-gray-600">Effortlessly create and launch contests with our user-friendly and intuitive to the platform.</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"> {/* Updated line */}
              <FaCogs className="text-3xl text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Flexible Contest Settings</h3>
              <p className="text-gray-600">Customize your contests with flexible settings to meet your unique requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
