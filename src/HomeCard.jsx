import React from "react";
import CardData from "./Card";

function HomeCard() {
  const data = [
    {
      productName: "Aula F2023 Combo Wired USB Gaming Keyboard",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/computer-acc-combo/y/n/m/f2023-combo-premium-rgb-backlit-gaming-keyboard-mouse-with-6-original-imagr6v59ybqhyvx.jpeg?q=70",
    },
    {
      productName: "HP wireless keyboard & mouse combo Wireless Laptop Keyb..",
      image:
        "https://rukminim2.flixcart.com/image/612/612/l1v1uvk0/keyboard/z/m/d/-original-imagdc3vyvybyewg.jpeg?q=70",
    },
  ];

  return (
    <div className="">
      {data.map((item) => {
        return <CardData
        productName={item.productName}
        image = {item.image}
        />;
      })}
    </div>

    // <div className="" style={{display:"flex"}}>
    //   {
    //     data.map((i)=>{
    //      return(
    //       <CardData
    //       strCategory = {i.str}
    //       strCategoryThumb = {i.strCategoryThumb}
    //       strCategoryDescription = {i.strCategoryDescription}
    //       />
    //      )
    //     })
    //   }
    // </div>
    //   [ map -> array ]
  );
}

export default HomeCard;
