import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, googleLogin, gitHubLogin, setLoading } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name,photo,email,password)

    if (password.length < 6) {
      toast("Your Password must be 6 character or above");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast("your password must be one character in uppercase");
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      toast("your password must be one special character");
      return;
    }

    // creating a new user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast("user Register successfully");
        e.target.reset();
        // console.log(photo)

        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("profile updated");
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          });
      })
      .catch((error) => {
        console.log(error);
        toast(error.message);
      });
  };
  // login google
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // login github
  const handleGithubLogin = () => {
    gitHubLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600">
                        <Helmet>
        <title>Registers - EatsHub</title>
      </Helmet>
      <div className="hero-content flex-col md:mb-5 lg:mb-10">
        <div className="text-center ">
          <h1 className="text-xl lg:text-3xl mt-12 text-[#FFF] font-bold mb-4">
            Register your Account
          </h1>
        </div>
        <div className="card flex-shrink-0 w-[300px] md:w-full shadow-2xl bg-base-100 ">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-[#403F3F] font-medium">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="enter your name"
                className="w-auto md:w-[400px] input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-[#403F3F] font-medium">
                  Photo URl
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="w-auto md:w-[400px] input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-[#403F3F] font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                className="w-auto md:w-[400px] input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-[#403F3F] font-medium">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input w-auto md:w-[400px]  input-bordered"
                required
              />
              <label className="label"></label>
            </div>
            <div className="form-control mt-6">
              <button className="py-4 rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-500  w-auto md:w-[400px]">
                Register
              </button>
            </div>
            
          </form>
          <p className="text-sm px-8 text-center mt-2 divider">
              Or with google and github
            </p>
            <div className="flex px-8 justify-between">
              <button
                onClick={handleGoogleLogin}
                className="px-5 py-3 btn-sm text-base flex items-center gap-1 rounded-lg bg-gray-600 text-white"
              >
                <FaGoogle></FaGoogle>
                <p>Google</p>
              </button>
              <button
                onClick={handleGithubLogin}
                className="px-5 py-3 btn-sm text-base flex items-center gap-1 rounded-lg bg-gray-600 text-white"
              >
                <FaGithub></FaGithub>
                <p>Github</p>
              </button>
            </div>
            <p className="text-base text-center font-normal text-[#403F3F]">
              Already have an account?{" "}
              <Link className="font-bold" to="/login">
                <button className="btn btn-link">Login</button>
              </Link>
            </p>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
