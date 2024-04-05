import axios from "axios";
import React, { useEffect, useState } from "react";

import AppOne from "./ecoomerce-product/AppOne"
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";

function App() {
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState('')
  const [filteredUsers, setFilteredProducts] = useState([])
  const [sortToggleBtn, setSortToggleBtn] = useState(false)
  const [modal, setModal] = useState(false)
  const [details, setDetails] = useState({})
  const navigate = useNavigate()
  // axios

  const fetchData = async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    try {
      console.log(response, "response");
      setProducts(response.data.categories);
      setFilteredProducts(response.data.categories);
    } catch (error) {}
  };

  
  useEffect(()=>{
      fetchData();

  },[])

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    const filteredItems = products.filter((product) =>
    product.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filteredItems);
  }

  return (
    <>


      <div className="flex justify-center items-center h-[100px]">
    <div onClick={()=>setSortToggleBtn(!sortToggleBtn)} className="w-32 bg-slate-50 shadow-xl rounded-lg py-3 px-3 border">
      Sorting...
    </div>

    {
      sortToggleBtn && 
      <div className="mt-20 bg-yellow-50 px-3 py-3">
        <p className="mt-1">A TO Z</p>
        <p className="mt-1">z TO A</p>
      </div>
    }

        <input
        value={searchItem}
        onChange={handleInputChange}
          type="text"
          placeholder="Search..."
          className="shadow-xl w-[400px] h-[60px] px-3 py-2 outline-none"
        />

    <div className="flex flex-col gap-2 w-[600px] absolute top-20 h-[300px] overflow-x-scroll ">

        { searchItem.length > 0 &&
          products.map((item,index)=>{
            return(<div className="flex gap-3 rounded px-2 py-2 bg-white shadow-md" key={index}>
              <img src={item.strCategoryThumb} alt="" className="w-12 h-12 rounded-full object-cover" />
              <p className="">{item.strCategory}</p>
            </div>)
          })
        }
    </div>

      </div>
    <div className=" grid grid-cols-5 my-20 mx-20">
      {
        filteredUsers.map((item) => {
          return (
            <>
            {/* <Link to={'/product'}  state={item}> */}
              <div className="hover:shadow-2xl hover:scale-105 p-3 hover:border hover:border-blue-300 max-w-[200px] h-[200px] bg-white ">
                <img
                onClick={()=>navigate('/product')}
                  src={item.strCategoryThumb}
                  alt="loadin"
                  className="object-contain"
                  />
                <h1 onClick={()=>navigate('/product' ,{state:item } )} className="">{item.strCategory}</h1>
                <h1 onClick={()=>navigate('/product',{state:item })} className="">{item.strCategory}</h1>
                <button onClick={()=>{
                  setModal(true)
                  setDetails(item)
                }} className="py-2 px-3 bg-green-500 rounded-lg text-white text-center m-auto w-fit">View</button>
              </div>
            {/* </Link> */}
                  </>
          );
        })
      }
    </div>


     { modal && <div className="absolute flex justify-center items-center h-screen w-full top-0 ">
      <Modal details={details}  setModal={setModal} />
     </div>}

    <AppOne/>
    </>
  );
}

export default App;
