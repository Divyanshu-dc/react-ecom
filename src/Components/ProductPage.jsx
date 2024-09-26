import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomHook from "./CustomHook";
import Comment from "./Comment";
import { useDispatch } from "react-redux";
import { addCart } from "../Store/CartSlice";
import { Theme } from "./ContextAPI";
import ProductImages from "./ProductImages";

const ProductPage = () => {
  const { theme, setTheme } = useContext(Theme);
  let dispatch = useDispatch();
  const { id } = useParams();
  const data = CustomHook(id);
  const [OpenIdx, setOpenIdx] = useState(null);

  if (data == null) {
    return <h1>loading</h1>;
  }

  let {
    thumbnail,
    title,
    reviews,
    description,
    price,
    shippingInformation,
    images,
  } = data;
  console.log(data);

  let darkTheme = "card w-12/12 h-1/2  lg:card-side bg-base-900 shadow-xl";
  let lightTheme =
    "card w-12/12 h-1/2  lg:card-side bg-white text-black shadow-xl";

  return (
    <div className={theme == "light" ? "bg-slate-50" : "bg-gray-800"}>
      <div className="flex justify-between">
        <ProductImages img={images}></ProductImages>
        <div className="flex justify-center items-center">
        <div className={theme == "light" ? lightTheme : darkTheme}>
          <figure>
            <img src={thumbnail} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-4xl font-bold">{title}</h2>
            <p>Price : {price}</p>
            {/* <p>{description}</p>
            <p>{shippingInformation}</p> */}
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => dispatch(addCart(data))}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        </div>
        <div></div>
      </div>
      <div>
        <h1 className="text-center text-5xl font-semibold">
          Comment Section !!
        </h1>
        {/* <div className="w-9/12 m-auto justify-center p-8">
        {reviews.map((review, index) => {
          return (
            <Comment
              review={review}
              key={index}
              setOpenIndex={setOpenIndex}
              openIndex={openIndex}
              index={index}
            ></Comment>
          );
        })}
      </div> */}
        <div
          className={
            theme == "light"
              ? "bg-slate-400 hw-full p-10 h-1/2 mt-5 text-black"
              : "bg-black  hw-full p-10 h-1/2 mt-5 text-white"
          }
        >
          <h4 className="text-3xl font-bold text-center mt-4 mb-3">
            Comment & Review Section
          </h4>
          <hr />
          {reviews.map((review, idx) => {
            return (
              <Comment
              key={idx}
                reviews={review}
                OpenIdx={OpenIdx}
                setOpenIdx={setOpenIdx}
                idx={idx}
              ></Comment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
