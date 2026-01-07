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

export default function Intro() {
  return (
    <div className="main-page-container">
      <header className="main-header">
        <h1 className="name">
          <span className="eros-name">Erodokridos</span>
          <strong> Achillea</strong>
        </h1>
        <h1 className="header-desc" id="job-title">
          <strong>Junior Technology Consultant</strong>
        </h1>
        <hr />
        <ContactInfo />
        <hr />
        <h1 className="section-heading" id="professional-summary-heading">
          Professional Summary
        </h1>
        <h4 className="header-desc" id="intro-description">
          <span className="eros-name">
            Results-driven Junior Technology Consultant and Data Engineer with
            hands-on experience in data migration, SQL query optimization,
            dashboard development, and building internal analytics platforms.
            Proficient in Python, pandas, ETL, cloud technologies, and
            containerized environments (Docker, Kubernetes, Helm). Skilled in
            Agile methodologies and collaborating with stakeholders to deliver
            actionable insights, streamline processes, and enable data-driven
            decision-making. Strong problem-solving and communication skills,
            with a proven track record of delivering high-quality technical
            solutions. Passionate about continuous learning and leveraging
            technology to drive business impact.
          </span>
        </h4>
      </header>
    </div>
  );
}
