import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Theme } from "./ContextAPI";
import { addCart } from "../Store/CartSlice";
import { useDispatch } from "react-redux";

const Card = (props) => {
  let dispatch = useDispatch();
  let data = props.productObj;
  let { title, thumbnail, category, price, rating, id } = data;

  let navigate = useNavigate();

  let handlePropagation = () => {
    navigate(`/product/${id}`);
  };

  let handleAddCart = (event) => {
    dispatch(addCart(data));
    event.stopPropagation();
    
  };
  let { theme } = useContext(Theme);
  let lightTheme = "m-4 card  bg-slate-200 w-[42vh] shadow-xl";
  let darkTheme = " m-4 card  bg-slate-600 w-[42vh] shadow-xl";

  let imgLight = " m-3 bg-slate-400 rounded-2xl ";
  let imgDark = " m-3 bg-slate-700 rounded-2xl ";

  return (
    <div
      className={theme == "light" ? lightTheme : darkTheme}
      onClick={handlePropagation}
    >
      <figure>
        <img
          className={theme == "light" ? imgLight : imgDark}
          src={thumbnail}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{category}</p>
        <p>Price $ {price}</p>
        <p>Rating : {rating}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleAddCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
