import React from "react";
import "../src/App.css";

function Education() {
  return (
    <section>
      <h1 className="section-heading" id="education-heading">Education</h1>
      <hr />
      <div className="row">
        <p className="education-title p-row">
          <strong>Queen Mary University</strong>
          <span className="experience-title">
            London, UK <br /> 2018 - 2021
          </span>
        </p>
        <p>School of Physics and Astronomy</p>
        <p>Physics Bsc (Hons) - 1st class (86.5%)</p>
      </div>
      <div className="row">
        <p className="education-title p-row">
          <strong>Edmonton County School</strong>
          <span className="experience-title">
            London, UK <br /> 2016 - 2018
          </span>
        </p>
        <p>Sixth Form College</p>
        <p>A levels: Maths - A, Business studies - A, Physics - B</p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section>
      <h1 className="section-heading" id="experience-heading">
        Relevant Experience
      </h1>
      <hr />
      <div className="row">
        <p className="p-row">
          <strong>Technology Consultant</strong>{" "}
          <span className="experience-title">
            London, UK <br /> Aug 24 - Present
          </span>
        </p>
        <p>Sigma Labs XYZ / HMPO</p>
      </div>
      <div className="row">
        <ul className="experience_bullets">
          <li>
            Built and operated Kubernetes-based JupyterHub and Apache Superset
            microservices with integrated Keycloak authentication across three
            environments using Python, Docker, Helm, Jenkins and Bash scripting,
            providing a secure, reproducible analytics platform and improving
            developer experience by centralising tooling, eliminating local setup
            overhead, and lowered barriers for less-technical users, improving
            accessibility and developer experience.
          </li>
          <li>
            Provisioned S3-backed persistence for JupyterHub using Terraform and
            built a Python/Bash file-watcher to sync notebooks, while enabling
            secure Aurora PostgreSQL access with STS tokens (boto3/psycopg2),
            allowing developers to share, edit, and collaboratively run
            notebooks with live database queries in seconds rather than minutes,
            significantly increasing team productivity.
          </li>
          <li>
            Extracted and transformed data from multiple event based OLTP
            databases with 30-day retention using SQL CTEs and Pandas
            dataframes, generating Excel reports that provided transparency into
            passport application examination/investigation workflows, enabling
            business analysts, product managers, and delivery leads to identify
            and review potential bottlenecks.
          </li>
        </ul>
        <p className="p-row">
          <span className="experience-title">Aug 23 - Aug 24</span>
        </p>
        <p>Sigma Labs XYZ / HMRC</p>
        <ul className="experience_bullets">
          <li>
            Re-engineered Splunk SPL dashboards and 70+ queries for use in
            Apache Superset with Trino SQL, improving efficiency and providing
            performance analysts with reusable, self-service query patterns for
            fraud and risk investigations. Significantly reducing the number of
            support requests to the support team and decreasing operational
            overhead by at least 50%.
          </li>
          <li>
            Delivered CI/CD improvements for an internal HMRC service-support
            web page used by data-product customers, greatly simplifying
            communication and request management between product owners,
            technical support teams, and users. Reduced support-request lead
            times from ~1 day to ~1 hour.
          </li>
          <li>
            Automated user account and permission audits for Tier 1 by
            developing reusable Python scripts that extracted metrics from
            Terraform files containing ~500 users, identifying and removing
            {" >"}100 inactive accounts and reducing initialization times by
            30%, lowering operational load on webservers for improved system
            performance.
          </li>
        </ul>
      </div>
      <div className="row">
        <p className="p-row">
          <strong>Sigma Labs Data Engineer Trainee Programme</strong>{" "}
          <span className="experience-title">
            London, UK <br /> Oct 22 - Feb 23
          </span>
        </p>
        <p>Sigma Labs XYZ</p>
      </div>
      <div className="row">
        <ul className="experience_bullets">
          <li>
            Experience delivering four industry-standard technical case studies
            involving ETL, data analysis, machine learning, cloud and data
            visualisation.
          </li>
          <li>
            Professional High Performance Delivery: Problem solving & decision
            making frameworks (incl. Agile), business fundamentals & effective
            communication.
          </li>
          <li>
            Software & Data Engineering Programme: experience coding
            individually and as part of an agile team.
          </li>
        </ul>
      </div>
    </section>
  );
}

function InternshipInfo() {
  return (
    <section>
      <h1 className="section-heading" id="internship-heading">
        Internship
      </h1>
      <hr />
      <div className="row">
        <p className="p-row">
          <strong>Quantum Computing Intern</strong>{" "}
          <span className="experience-title">
            Brighton, UK <br /> Jun 21 - Aug 21
          </span>
        </p>
        <p>Ionic Quantum Technology Group</p>
      </div>
      <div>
        <ul className="experience_bullets">
          <li>
            Developed a Python driver to interface with a waveform generator
            using vendor API documentation, automating hardware control and
            improving the reliability and repeatability of experiments.
          </li>
          <li>
            Researched and interpreted PHD theses to learn about quantum
            computation via doppler cooling on Ytterbium ions. Building domain
            knowledge to support experimental simulation and software
            development.
          </li>
          <li>
            Simulated waveforms by producing python functions that outputted
            .csv files and performed fourier transformations on these waveforms,
            enabling frequency-domain analysis and validation of signals prior
            to experimental use.
          </li>
        </ul>
      </div>
    </section>
  );


}

function AdditionalInfo() {
  return (
    <section>
      <h1 className="section-heading" id="additional-info-heading">Additional Info</h1>
      <hr />
      <p>
        <strong>Societies & Activities</strong>
      </p>
      <div className="row">
        <ul className="experience_bullets">
          <li>
            Peer Assisted Study Support (PASS) mentor - Was accountable for
            quality and delivery of mentoring to fellow first year students.
          </li>
          <li>
            Queen Mary Kung fu committee president - Played the role as an
            acting Liaison between the committee and the University and was
            responsible for organising a coach to carry out training sessions
            consistently over two semesters.
          </li>
          <li>
            Queen Mary Physics Ambassador - On a number of occasions I helped
            the Universities Physics department with functions and other events.
            Also, I visited secondary schools to help students develop a better
            understanding of what Physics is and what studying it at University
            entailed.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default function Main() {
  return (
    <div className="main-page-container">
      <Education />
      <Experience />
      <InternshipInfo />
    </div>
  );
}
