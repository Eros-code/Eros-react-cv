import React from "react";
import "../src/App.css";

function RelevantModules() {
  return (
    <section className="relevant-modules">
      <h1 className="section-heading" id="modules-heading">Relevant Modules</h1>
      <hr />
      <ul className="modules-list">
        <li>Statistical Data Analysis (94.9%)</li>
        <li>Introduction to Machine learning (91%)</li>
        <li>Introduction to Scientific Computing (86.9%)</li>
      </ul>
      <br />
    </section>
  );
}

function TechSkillsList() {
  return (
    <section>
      <h1 className="section-heading" id="skills-heading">
        Skills
      </h1>
      <hr />
      <ul className="skills-list">
        <li>
          <strong>Programming Languages:</strong>
        </li>
        <li className="skills-bullet">HTML, CSS, JavaScript, Python, Bash, SQL</li>

        <li>
          <strong>Libraries & Frameworks:</strong>
        </li>
        <li className="skills-bullet">
          Flask, Pandas, Psycopg2, SQLite,
          Matplotlib, Boto3, BeautifulSoup, React
        </li>

        <li>
          <strong>Tools & Platforms:</strong>
        </li>
        <li className="skills-bullet">
          AWS, Docker, Docker-compose, Git, Github, Bitbucket,
          PostgreSQL, Visual Studio Code, IntelliJ, Jira, Confluence,
          Jupyter Notebooks, Keycloak, Kubernetes, Jenkins
        </li>
      </ul>
    </section>
  );
}

function Strengths() {
  return (
    <section>
      <h1 className="section-heading" id="strengths-heading">
        Strengths
      </h1>
      <hr />
      <ul className="strengths-list">
        <li>Data analysis</li>
        <li>Problem-solving / Critical thinking</li>
        <li>Team collaboration</li>
        <li>Effective communication</li>
        <li>Curiosity</li>
        <li>Agile methodologies / development</li>
        <li>CI/CD</li>
      </ul>
      <br />
    </section>
  );
}

function RecentProjects() {
  return (
    <section>
      <h1 className="section-heading" id="projects-heading">Recent Projects</h1>
      <hr />
      <ul className="modules-list">
        <li>
          <strong>FMOD dynamic music system UI:</strong>
        </li>
        <li className="skills-bullet">
          A html page connected to an FMOD project that allows user interaction
          to determine the state of a piece of music by adjusting sliders
          corresponding to their respective parameters.
        </li>
        <li>
          <strong>Personal Website:</strong>
        </li>
        <li className="skills-bullet">
          A portfolio site designed and built by myself using Django and hosted
          on a PythonAnywhere server to showcase my skills and past work.
        </li>
        <li>
          <strong>Deloton:</strong>
        </li>
        <li>
          A live dashboard, a REST API and an automated report generator
          containing the last 24 hours worth of data presented in a pdf format
          was built to capture and compare KPIs from data streamed from exercise
          bikes.
        </li>
      </ul>
      <br />
    </section>
  );
}

function Languages() {
  return (
    <section>
      <h1 className="section-heading" id="languages-heading">Languages</h1>
      <hr />
      <ul className="modules-list">
        <li>English (Native proficiency)</li>
        <li>Greek (Intermediate proficiency)</li>
      </ul>
      <br />
    </section>
  );
}

function Interests() {
  return (
    <section>
      <h1 className="section-heading" id="interests-heading">Interests</h1>
      <hr />
      <ul className="interests-list">
        <li>Playing bouzouki</li>
        <li>Watch collecting</li>
        <li>Fitness</li>
        <li>Reading</li>
        <li>Boxing</li>
      </ul>
      <br />
    </section>
  );
}

export default function Skills() {
  return (
    <div className="skills-page-container">
      <RelevantModules />
      <TechSkillsList />
      <Strengths />
      <Interests />
    </div>
  );
}
