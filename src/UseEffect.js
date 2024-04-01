import React, { useEffect, useState } from "react";

function UseEffect() {
  const [categories, setCategories] = useState([]);

  //   const fetchdata = ()=>{
  //     fetch("http://www.themealdb.com/api/json/v1/1/categories.php").then((data)=>{
  //         const result = data.json()

  //         result.then((newData)=>{
  //             console.log(newData);
  //             setCategories(newData.categories)
  //         })
  //     })
  //   }

  const fetchdata = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((result) => {
        setCategories(result.categories);
      });
  };

  useEffect(() => {
    fetchdata();

    console.log("mounting...");
  });

  //   promise,callback,api caaling,async,awit

  //   const [count, setCount] = useState(0);

  return (
    <div>
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        {" "}
        -
      </button>
      {count}
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        {" "}
        Reset
      </button> */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "10px",
        }}
      >
        {categories?.map((item) => {
          return (
            <div
              className=""
              style={{ display: "flex", gridTemplateColumns: "1" }}
            >
              <img
                style={{ width: "100px", height: "50px" }}
                src={item.strCategoryThumb}
                alt={item.idCategory}
              />
              <p>{item.strCategory}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UseEffect;
