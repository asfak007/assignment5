import React from "react";
import Master from "../../components/layout/master.jsx";
import AllFoodComponent from "../../components/PageComponent/AllFoodComponent.jsx";


const data = [
  { image: "images/img_rectangle_4.png" },
  { image: "images/img_rectangle_4_121x250.png" },
  { image: "images/img_rectangle_4_1.png" },
  { image: "images/img_rectangle_4_2.png" },
  { image: "images/img_rectangle_4_3.png" },
  { image: "images/img_rectangle_4_4.png" },
  { image: "images/img_rectangle_4_5.png" },
  { image: "images/img_rectangle_4_6.png" },
];

export default function AllFoodPage() {
  const [collapsed, setCollapsed] = React.useState(false);


  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
      <Master>
        <AllFoodComponent/>
      </Master>
    </>
  );
}
