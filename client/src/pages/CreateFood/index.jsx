import React from "react";

import Master from "../../components/layout/master.jsx";
import CreateFood from "../../components/PageComponent/CreateFood.jsx";

export default function CreateFoodPage() {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
      <>
        <Master>
          <CreateFood/>
        </Master>
      </>

  );
}
