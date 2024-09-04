import React, { useCallback, useContext, useState } from "react";
import { Theme } from "./ContextAPI";

const Comment = ({ review, index, openIndex, setOpenIndex }) => {
  const { rating, comment, reviewerName } = review;
  const {theme , setTheme} = useContext(Theme);

  let  darkTheme = "bg-slate-700 text-white rounded-lg "
  let lightTheme = "bg-slate-300 text-black rounded-lg "

  return (
    <div className={theme == "light" ? lightTheme : darkTheme}>
      <div className=" text-2xl font-medium flex justify-around rounded-lg ">
        <span>{reviewerName}</span>
        <span onClick={() => setOpenIndex(index)} className="cursor-pointer">
          Show
        </span>
      </div>
      {openIndex == index ? (
        <div className=" bg-slate-400 text-xl  text-black flex justify-around rounded-lg  ">
          <span>{comment}</span>
          <span>Rating: {rating} ★</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Comment;
