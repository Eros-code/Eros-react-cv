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
          <strong>Junior Technology Consultant</strong>{" "}
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
            microservices across three environments using Python, Docker, Helm,
            Jenkins and Bash scripting, providing a secure and reproducible
            internal analytics platform for the data team.
          </li>
          <li>
            Integrated Keycloak authentication, S3-backed persistence for
            JupyterHub, and secure database access to team-owned datasets,
            enabling consistent and governed analytics workflows.
          </li>
          <li>
            Extracted and transformed data from multiple OLTP databases with
            30-day purge cycles using SQL and pandas, generating Excel-based
            reports that enabled business analysts, product managers, and
            delivery leads to analyse passport application bottlenecks and lead
            times.
          </li>
        </ul>
        <p className="p-row">
          <p> </p>
          <span className="experience-title">
            London, UK <br /> Aug 23 - Aug 24
          </span>
        </p>
        <p>Sigma Labs XYZ / HMRC</p>
        <ul className="experience_bullets">
          <li>
            Re-engineered Splunk SPL dashboards and 70+ queries for use in
            Apache Superset with Trino SQL, improving efficiency and providing
            performance analysts with reusable, self-service query patterns for
            fraud and risk investigations.
          </li>
          <li>
            Delivered CI/CD improvements for an internal HMRC service-support
            web page used by data-product customers, greatly simplifying
            communication and request management between product owners,
            technical support teams, and users. Reduced support-request lead
            times from ~1 day to ~1 hour.
          </li>
          <li>
            Supported performance analysts and stakeholders with ad hoc
            technical assistance, automating metric extraction with Python
            scripts and collaborating with Tier 1 and Tier 3 teams to resolve
            issues efficiently.
          </li>
        </ul>
      </div>
      <div className="row">
        <p className="p-row">
          <strong>Trainee Software & Data Engineer</strong>{" "}
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
      <h1 className="section-heading" id="internship-heading">Internship</h1>
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
            Developed a driver in python which enabled communication between a
            waveform generator and a computer by referencing API documentation.
          </li>
          <li>
            Researched and interpreted PHD theses to learn about quantum
            computation via doppler cooling on Ytterbium ions.
          </li>
          <li>
            simulated waveforms by producing python functions that outputted
            .csv files and performed fourier transformations on these waveforms.
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
