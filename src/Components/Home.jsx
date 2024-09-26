import { useEffect, useState, useContext } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Theme } from "./ContextAPI";
import AddedToCart from "./AddedToCart";
import { useSelector } from "react-redux";

const Home = () => {
  let { theme} = useContext(Theme);
  let AddedCart = AddedToCart(Card);
  let cartItems = useSelector((store)=> store.cart.cart);

  let [AllproductsData, set] = useState(null);
  let [productsData, setProducts] = useState(null);
  let [query, setQuery] = useState("");

  let topRatedProduct = () => {
    let filter = AllproductsData.filter((obj) => {
      return obj.rating > 4;
    });
    setProducts(filter);
  };
  let handleCategory = (category) => {
    let filter = AllproductsData.filter((obj) => {
      return obj.category == category;
    });
    setProducts(filter);
  };
  let handleSearch = () => {
    let filter = AllproductsData.filter((obj) => {
      return obj.title.toLowerCase().includes(query.toLowerCase().trim());
    });
    setProducts(filter);
    setQuery("");
  };
  let getData = async () => {
    let data = await fetch("https://dummyjson.com/products?limit=40");
    let productsData = await data.json();
    let products = productsData.products;
    setProducts(products);
    set(products);
  };

  useEffect(() => {
    getData();
  }, []);

  let darkTheme = "bg-black text-white text-primary-content";
  let lightTheme = "bg-white text-black";
   
  let inCart=(id)=>{
   let index = cartItems.findIndex((cartObj)=> cartObj.data.id == id)
   if(index == -1){
    return false;
   }else{
    return true;
   }
  }

  return (
    <>
      <div className={theme == "light" ? lightTheme : darkTheme}>
      <div>
          <img className="h-[60vh] w-full" src="/image2.jpg" />
        </div>
        <div className="flex justify-around items-center mt-2 w-full h-16">
          <button
            onClick={topRatedProduct}
            className="btn btn-active btn-primary"
          >
            Top Rated
          </button>
          <button
            onClick={() => {
              handleCategory("furniture");
            }}
            className="btn btn-active btn-primary"
          >
            Furniture
          </button>
          <div className="Search flex">
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              type="text"
              className="input input-bordered bg-transparent w-full max-w-xs"
              placeholder="Text Here"
            ></input>
            <button className="btn btn-outline btn-primary ml-2" onClick={handleSearch}>
              {" "}
              Search
            </button>
          </div>
          <button
            onClick={() => {
              handleCategory("groceries");
            }}
            className="btn btn-active btn-primary"
          >
            Grocery
          </button>
          <button
            onClick={() => {
              handleCategory("beauty");
            }}
            className="btn btn-active btn-primary"
          >
            Beauty
          </button>
        </div>
        
        <div className="flex justify-around flex-wrap">
          {productsData == null ? (
            <Shimmer></Shimmer>
          ) : (
            productsData.map((obj) => {
              return inCart(obj.id) == true ? <AddedCart key={obj.id} productObj={obj}></AddedCart> :
              <Card key={obj.id} productObj={obj}></Card>;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
