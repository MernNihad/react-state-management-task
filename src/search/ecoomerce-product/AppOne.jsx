import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AppOne() {

  const [products, setProducts] = useState([]);

  // axios

  const fetchData = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products"
    );
    try {
      console.log(response, "response");
      setProducts(response.data);
    } catch (error) {}
  };

  
  useEffect(()=>{
      fetchData();

  },[])

  return (
    <div>
       <div className="grid grid-cols-5 gap-3 my-20 mx-20">
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
                  src={item.image}
                  alt="loadin"
                  className="object-contain"
                />
                <h1 className="">{item.category}</h1>
                <h1 className="">{item.price}</h1>
              </div>
            </>
          );
        })
      }
    </div>
    </div>
  )
}

export default AppOne