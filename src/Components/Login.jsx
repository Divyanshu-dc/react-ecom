
import { useState } from "react";
import { useFormik } from "formik";
import { SignUpSchema, LoginSchema } from "../utils/Validation";
import { BASE_URL, SIGNUP_URL, LOGIN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false); 

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validationSchema: isSignUp ? SignUpSchema : LoginSchema,
    onSubmit: async (values, action) => {
      try {
        setIsLoading(true);
        setError("");
        const { userName, email, password } = values;
        let apiCallResult = await axios.post(
          isSignUp ? BASE_URL + SIGNUP_URL : BASE_URL + LOGIN_URL,
          { userName, email, password },
          { withCredentials: true }
        );
        const apiResult = apiCallResult.data;

        if (apiResult.result === true) {
          // Show success popup
          setShowPopup(true);

          // Hide popup after 3 seconds and navigate to homepage
          setTimeout(() => {
            setShowPopup(false);
            navigate("/"); // Navigate to the homepage
          }, 3000);
        } else {
          setError(apiResult.message);
        }
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }

      action.resetForm();
    },
  });

  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-3/5"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1629317422263-9317e911014a?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-7xl mb-64 ml-80 font-bold text-white shadow-xl">
                  WELCUM !!
                </h2>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-3/6">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex justify-center mx-auto">
                  <img
                    className="w-auto h-7 sm:h-8"
                    src="https://merakiui.com/images/logo.svg"
                    alt="Logo"
                  />
                </div>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  {isSignUp
                    ? "Register your account"
                    : "Login to access your account"}
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={formik.handleSubmit}>
                  {isSignUp && (
                    <div className="mb-6">
                      <label
                        htmlFor="userName"
                        className="text-sm text-gray-600 dark:text-gray-200"
                      >
                        UserName
                      </label>
                      <input
                        type="text"
                        name="userName"
                        id="userName"
                        onChange={formik.handleChange}
                        value={formik.values.userName}
                        onBlur={formik.handleBlur}
                        placeholder="Your User_Name Here"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none"
                      />
                      {formik.touched.userName && formik.errors.userName ? (
                        <p className="text-red-500">{formik.errors.userName}</p>
                      ) : null}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                      placeholder="example@example.com"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <p className="text-red-500">{formik.errors.email}</p>
                    ) : null}
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                      placeholder="Your Password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none"
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <p className="text-red-500">{formik.errors.password}</p>
                    ) : null}
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      {isLoading ? (
                        <span className="loading loading-bars loading-md"></span>
                      ) : isSignUp ? (
                        "Sign Up"
                      ) : (
                        "Login"
                      )}
                    </button>
                    {error && (
                      <p className="text-xl mt-1 text-red-700 font-bold">
                        {error}
                      </p>
                    )}
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">
                  {isSignUp
                    ? "Already have an account?"
                    : "Don't have an account yet?"}{" "}
                  <span
                    className="text-blue-500 focus:outline-none focus:underline hover:underline cursor-pointer"
                    onClick={() => {
                      setIsSignUp(!isSignUp);
                      setError("");
                    }}
                  >
                    {isSignUp ? "Login" : "Signup"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup for Success Message */}
      {showPopup && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-600 text-white p-9 px-14 text-4xl  rounded shadow-lg z-50">
        {isSignUp ? "Signup Successful!" : "Login Successful!"}
      </div>
      )}
    </div>
  );
}

export default Login;
