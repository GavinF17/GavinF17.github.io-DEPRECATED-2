import React, {useEffect} from "react";
import Container from "reactstrap/es/Container";

import react from "../../resources/images/icons/react.svg";
import spring from "../../resources/images/icons/spring.svg";
import docker from "../../resources/images/icons/docker.svg";
import aws from "../../resources/images/icons/aws.svg";
import python from "../../resources/images/icons/python.svg";
import nodejs from "../../resources/images/icons/node-js-logo.svg";
import postgresql from "../../resources/images/icons/postgresql.svg";
import kubernetes from "../../resources/images/icons/kubernetes.svg";
import sass from "../../resources/images/icons/sass.svg";
import ubuntu from "../../resources/images/icons/ubuntu.svg";

const icons = [
  nodejs,
  docker,
  spring,
  postgresql,
  ubuntu,
  react,
  aws,
  kubernetes,
  python,
  sass
];

const setIconPositions = () => {
  const scrollPos = window.scrollY * 2;
  const winHeight = window.innerHeight;

  Array
    .from(document.getElementsByClassName("skill-icon"))
    .forEach((iconElement, i) => {
      const starting = (winHeight * (i % 2 === 0 ? 3 : 2)) - winHeight / (Math.abs(3 - i) + 2);
      const scale = i % 3;

      iconElement.style.top = (starting - scrollPos * scale) + "px"
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

      {icons.map((icon, i) =>
        <div className="skill-icon" id={"skill-icon-" + i}>
          <img src={icon} alt={"skill-icon-" + i}/>
        </div>
      )}

      <div className="homepage-banner">
        <div className="homepage-banner-content">
          <h1>Hi, I'm Gavin</h1>
          <h2>+ I'm a Full-Stack Dev</h2>
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
