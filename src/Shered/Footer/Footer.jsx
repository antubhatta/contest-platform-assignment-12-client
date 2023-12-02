import logo from "../../assets/logoipsum-249.svg";
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="EatsHub Logo" className="w-10 h-10" />
            <Link to="/" className="text-2xl font-bold">
              <span className="text-indigo-400">EatsHub</span>
            </Link>
          </div>
          <p className="text-sm md:text-base mt-2 max-w-[250px]">In the new era of technology, we look into the future with certainty and pride for our company.</p>
          <div className="flex justify-start mt-8">
            <div className="flex gap-4">
              <a href="https://www.facebook.com/hd.antu.1" className="text-4xl"><FaFacebook /></a>
              <a href="#" className="text-4xl"><FaInstagram /></a>
              <a href="https://github.com/topics/login" className="text-4xl"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg lg:text-2xl font-semibold mb-2">Pages</h3>
          <ul>
            <li><NavLink to="/" className="hover:text-indigo-400">Home</NavLink></li>
            <li><NavLink to="/foods" className="hover:text-indigo-400">Food</NavLink></li>
            <li><NavLink to="/blog" className="hover:text-indigo-400">Blog</NavLink></li>
            <li><NavLink to="/login" className="hover:text-indigo-400">Login</NavLink></li>
            <li><NavLink to="/register" className="hover:text-indigo-400">Register</NavLink></li>
            <li><NavLink to="/orders" className="hover:text-indigo-400">Orders</NavLink></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg lg:text-2xl font-semibold mb-2">Utility Pages</h3>
          <ul>
            <li><NavLink to="/" className="hover:text-indigo-400">Start Here</NavLink></li>
            <li><NavLink to="/" className="hover:text-indigo-400">Styleguide</NavLink></li>
            <li><NavLink to="/" className="hover:text-indigo-400">Password Protected</NavLink></li>
            <li><NavLink to="/" className="hover:text-indigo-400">404 Not Found</NavLink></li>
            <li><NavLink to="/" className="hover:text-indigo-400">Licenses</NavLink></li>
            <li><NavLink to="/" className="hover:text-indigo-400">View More</NavLink></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg lg:text-2xl font-semibold mb-2">Contact Information</h3>
          <p>Email: antubhatta09@gmail.com</p>
          <p>Phone: 01830833895</p>
          <p>Address: 1137 Nurerchala, Vatara, Gulshan 1212</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-base"> EatsHub &copy; {new Date().getFullYear()} Antu Bhatta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
