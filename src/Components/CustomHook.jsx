import React ,{useState , useEffect}from 'react'

const CustomHook = (id) => {
    const [data , setData] = useState(null);
    let productData = async()=>{
        let data = await fetch(`https://dummyjson.com/products/${id}`);
        let productData = await data.json();
        setData(productData);
    }
    useEffect(()=>{
        productData();
    },[]);
    return data;
}

export default CustomHook