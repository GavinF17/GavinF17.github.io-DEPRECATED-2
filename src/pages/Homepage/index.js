import React, {useEffect} from "react";
import Container from "reactstrap/es/Container";

import {ReactComponent as ReactIcon} from "../../resources/images/icons/react.svg";
import {ReactComponent as SpringIcon} from "../../resources/images/icons/spring.svg";
import {ReactComponent as DockerIcon} from "../../resources/images/icons/docker.svg";
import {ReactComponent as AWSIcon} from "../../resources/images/icons/aws.svg";
import {ReactComponent as PythonIcon} from "../../resources/images/icons/python.svg";
import {ReactComponent as NodeJsIcon} from "../../resources/images/icons/node-js.svg";
import {ReactComponent as PostgreSQLIcon} from "../../resources/images/icons/postgresql.svg";
import {ReactComponent as KubernetesIcon} from "../../resources/images/icons/kubernetes.svg";
import {ReactComponent as SassIcon} from "../../resources/images/icons/sass.svg";
import {ReactComponent as UbuntuIcon} from "../../resources/images/icons/ubuntu.svg";


import {ReactComponent as LinkedInIcon} from "../../resources/images/icons/linkedin.svg";
import {ReactComponent as GitHubIcon} from "../../resources/images/icons/github.svg";
import Experience from "../Experience";

const icons = [
  NodeJsIcon,
  DockerIcon,
  SpringIcon,
  PostgreSQLIcon,
  UbuntuIcon,
  ReactIcon,
  AWSIcon,
  KubernetesIcon,
  PythonIcon,
  SassIcon
];

const setIconPositions = () => {
  const scrollPos = window.scrollY * 2;
  const winHeight = window.innerHeight;

  Array
    .from(document.getElementsByClassName("skill-icon"))
    .forEach((iconElement, i) => {
      const starting = (winHeight * (i % 2 === 0 ? 3 : 2)) - winHeight / (Math.abs(3 - i) + 2);
      iconElement.style.top = (starting - scrollPos * (i % 3)) + "px"
      iconElement.classList.remove("display-none");
    })
};

const Homepage = () => {


  useEffect(() => {
    setIconPositions();
    window.addEventListener("scroll", setIconPositions);
    window.addEventListener("resize", setIconPositions);

    return () => {
      window.removeEventListener("scroll", setIconPositions);
      window.removeEventListener("resize", setIconPositions);
    };
  });

  return (
    <div className="homepage">

      {icons.map((Icon, i) =>
        <div className="skill-icon display-none" key={"skill-icon-" + i} id={"skill-icon-" + i}>
          <Icon/>
        </div>
      )}

      <div className="homepage-banner">
        <div className="homepage-banner-content icon-mono">
          <h1>Hi, I'm Gavin</h1>
          <h2>+ I'm a Full-Stack Dev</h2>

          <div className="float-left icon-mono mt-2">
            <a href="https://github.com/GavinF17" target="_blank" rel="noopener noreferrer">
              <GitHubIcon height={100} className="mr-2"/>
            </a>
            <a href="https://www.linkedin.com/in/thomasgavinfenton/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon height={100}/>
            </a>
          </div>
        </div>
      </div>
      <Container>
        <div>My site is a work in progress, but here's my experience for now...</div>

        <hr className="mt-5 mb-5"/>

        <Experience/>

      </Container>
    </div>
  );
}

export default Homepage;
