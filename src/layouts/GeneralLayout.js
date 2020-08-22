import React from "react";
import {Navigation} from "../components/Navigation";

const GeneralLayout = ({children}) => {
  return (
    <div className="general">
      <Navigation/>
      {children}
    </div>
  )
};

export default GeneralLayout;
