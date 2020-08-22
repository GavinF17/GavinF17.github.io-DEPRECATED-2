import React from "react";
import {Navigation} from "../components/Navigation";
import Container from "reactstrap/es/Container";

const ContentLayout = ({children}) => {
  return (
    <div className="general">
      <Navigation/>
      <Container>
        {children}
      </Container>
    </div>
  )
};

export default ContentLayout;
