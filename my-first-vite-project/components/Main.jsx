import React from "react";
import "../src/App.css";

function Education() {
  return (
    <section>
      <h1 className="section-heading">Education</h1>
      <hr />
      <div className="row">
        <p className="education-title">
          <strong>Queen Mary University</strong>
        </p>
        <p>School of Physics and Astronomy</p>
        <p>Physics Bsc (Hons) - 1st class (86.5%)</p>
      </div>
      <div className="row">
        <p className="education-title">
          <strong>Edmonton County School</strong>
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
      <h1 className="section-heading">Relevant Experience</h1>
      <hr />
      <div className="row">
        <p>
          <span className="experience-title">
            <strong>Trainee Software & Data Engineer</strong>
          </span>{" "}
          1999
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
      <div className="row">
        <p>
          <strong>Quantum Computing Intern</strong>
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
      <h1 className="section-heading">Additional Info</h1>
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
      <header className="main-header">
        <h1 className="name">
          <span className="eros-name">Erodokridos</span>
          <strong> Achillea</strong>
        </h1>
        <h4 className="header-desc">
          <span className="eros-name">
            I'm a motivated, Junior Software & Data Engineer looking for my next
            role. I have a clear, logical mind with a practical approach to
            problem-solving and a drive to see things through to completion.
          </span>
        </h4>
      </header>
      <Education />
      <Experience />
      <AdditionalInfo />
    </div>
  );
}
