import React from "react";
import Master from "../../components/layout/master.jsx";
import UpdateFood from "../../components/PageComponent/UpdateFood.jsx";

export default function UpdateFoodPage() {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
     <Master>
       <UpdateFood></UpdateFood>
     </Master>
    </>
  );
}
