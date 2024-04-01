import axios from "axios";
import React, { useEffect, useState } from "react";

import AppOne from "./ecoomerce-product/AppOne"

function App() {
  const [products, setProducts] = useState([]);

  // axios

  const fetchData = async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    try {
      console.log(response, "response");
      setProducts(response.data.categories);
    } catch (error) {}
  };

  
  useEffect(()=>{
      fetchData();

  },[])

  const handleChange = (searchQuery)=>{
console.log(searchQuery);
    // if(searchQuery === ''){
    // con/st newArray =  products.filter((item) => {
        // return true
    // })

    // }else{

        const newArray =  products.filter((item) => item.strCategory === searchQuery )
        setProducts(newArray)
    // }


  }

  return (
    <>

      <div className="flex justify-center items-center h-[100px]">
        <input
        onChange={(e)=> handleChange(e.target.value) }
          type="text"
          placeholder="Search..."
          className="shadow-xl w-[400px] h-[60px] px-3 py-2 outline-none"
        />
      </div>
    <div className="grid grid-cols-5 my-20 mx-20">
      {
        //

        // idCategory
        // strCategory

        // strCategoryDescription
        // strCategoryThumb

        products.map((item) => {
          return (
            <>
              <div className="max-w-[200px] h-[200px] bg-white ">
                <img
                  src={item.strCategoryThumb}
                  alt="loadin"
                  className="object-contain"
                />
                <h1 className="">{item.strCategory}</h1>
                <h1 className="">{item.strCategory}</h1>
              </div>
            </>
          );
        })
      }
    </div>

    <AppOne/>
    </>
  );
}

export default App;
