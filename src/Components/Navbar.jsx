import  { useContext } from "react";
import { Link } from "react-router-dom";
import { Theme } from "./ContextAPI";
import { useSelector } from "react-redux";


const Navbar = () => {
  const { theme, setTheme } = useContext(Theme);

  const cartData = useSelector((store)=> store.cart.cart);

  let darkTheme = "navbar bg-black z-10 sticky top-0  text-white text-primary-content shadow-xl";
  let lightTheme = "navbar bg-white z-10 sticky top-0 text-black shadow-xl";
  let themeChange = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    
    <div className={theme == "light" ? lightTheme : darkTheme}>
      <div className="flex-1 ">
        <Link to={"/"} className="btn btn-ghost text-2xl ">Munthi-Fusri</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-2xl">
        <li>
            <Link to={"/food-delivery"}>Food</Link>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>Avout us</Link>
          </li>
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart <sup>{cartData.length}</sup>
            </Link>
          </li>
          <li>
            <label className="flex cursor-pointer mt-2 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                onClick={themeChange}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
