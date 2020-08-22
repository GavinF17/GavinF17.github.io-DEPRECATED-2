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

        <h1 className="mb-3">Skills</h1>

        <div className="mb-2">
          <h2>Languages</h2>
          <h3><strong>Recent</strong>: Java (Spring, Spring Boot, Hibernate, JUnit), Python, JavaScript (React, Node,
            Jest),
            SQL</h3>
          <h4><strong>Other</strong>: C / C++, C#, Go, MATLAB, Angular 1</h4>
        </div>

        <div className="mb-3">
          <h2>Tools/Platforms</h2>
          <h3><strong>Recent</strong>: AWS, GCP, Jenkins, Vault, Terraform, Ansible, Docker, Git (Bitbucket, Github),
            PostgreSQL, Flyway, JetBrains (IntelliJ, WebStorm, PyCharm, DataGrip), Nexus</h3>
          <h4><strong>Other</strong>: Azure, InfluxDB (TICK stack), Prometheus, RabbitMQ, Grafana, SVN, SQL Server,
            ELK
            Stack</h4>
        </div>

        <div className="mb-3">
          <h2>Operating Systems</h2>
          <h3>Kali, Ubuntu, Centos, Windows (up to 10), Windows Server</h3>
        </div>

        <hr className="mt-5 mb-5"/>

        <h1 className="mb-3">Experience</h1>

        <div className="mb-3">
          <h3>Contrast Security - 08.2020 +</h3>
          <h2>Software Engineer</h2>
        </div>

        <div className="mb-3">
          <h3>Uleska - 06.2018 to 07.2020</h3>
          <h2>Senior Software Engineer</h2>
        </div>

        <div className="mb-3">
          <h3>Intelligent Environments & Queen's University Belfast - 10.2016 to 05.2018</h3>
          <h2>Software Engineer</h2>
        </div>

        <hr className="mt-5 mb-5"/>

        <h1 className="mb-3">Education</h1>

        <div className="mb-3">
          <h3>Queen's University Belfast - 2016</h3>
          <h2>MEng Computer Science, 2:1 with Degree Plus</h2>
        </div>

        <div className="mb-3">
          <h3>Belfast Metropolitan College - 2012</h3>
          <h2>Higher National Diploma in Computing</h2>
        </div>

      </Container>
    </div>
  );
}

export default Homepage;
