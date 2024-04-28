import React from "react";
import "../src/App.css";

function ContactInfo() {
  return (
    <ul className="info-list">
      <li id="email">
        <a href="mailto: eros.achillea@outlook.com">
          eros.achillea@outlook.com
        </a>
      </li>
      <li id="phone">
        <a>0749 806 4329</a>
      </li>
      <li id="linkedin">
        <a
          href="https://www.linkedin.com/in/eros-achillea-078b18141/"
          rel="noreferrer"
        >
          linkedin.com/in/eros-achillea-078b18141/
        </a>
      </li>
      <li id="website">
        <a
          href="https://erosachillea.eu.pythonanywhere.com"
          target="_blank"
          rel="noreferrer"
        >
          erosachillea.eu.pythonanywhere.com
        </a>
      </li>
      <li id="github">
        <a href="https://github.com/Eros-code" target="_blank" rel="noreferrer">
          github.com/Eros-code
        </a>
      </li>
    </ul>
  );
}

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
      <h1 className="section-heading" id="skills-heading">Skills</h1>
      <hr />
      <ul className="modules-list">
        <li>
          <strong>Programming Languages:</strong>
        </li>
        <li className="skills-bullet">HTML, CSS, JavaScript, Python, R</li>

        <li>
          <strong>Libraries & Frameworks:</strong>
        </li>
        <li className="skills-bullet">
          Flask, Django, Pandas, Dash, PySpark, Kafka Confluent, SQLite, Plotly,
          Matplotlib, Bootstrap, Boto3, BeautifulSoup, React
        </li>

        <li>
          <strong>Tools & Platforms:</strong>
        </li>
        <li className="skills-bullet">
          AWS EC2, AWS S3, AWS Lambda, AWS ECR, Docker, Git/github, Canva,
          PythonAnywhere, PostgreSQL, Netlify, CLI, Visual Studio Code,
          IntelliJ, JIRA, Confluence, Agile Methodology
        </li>
        <li>
          <strong>Essential Characteristics:</strong>
        </li>
        <li className="skills-bullet">
          Presentation, Verbal and written communication, Teamwork,
          Collaboration, Problem solving, Curiosity, Analytical
        </li>
      </ul>
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
      <ul className="modules-list">
        <li id="guitar">Playing guitar</li>
        <li id="health">Learning about physical & mental health</li>
        <li id="Gym">Gym</li>
        <li id="Reading">Reading</li>
      </ul>
      <br />
    </section>
  );
}

export default function Skills() {
  return (
    <div className="skills-page-container">
      <ContactInfo />
      <RelevantModules />
      <TechSkillsList />
      <RecentProjects />
      <Languages />
      <Interests />
    </div>
  );
}
