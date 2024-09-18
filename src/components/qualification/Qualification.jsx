import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content"></div>
          <div className="qualification__content qualification__content-active">

          <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor of Information Systems</h3>
                <span className="qualification__subtitle">
                Universitas Terbuka 
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> Sept 2024 - Recent
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Quality Control Inspector</h3>
                <span className="qualification__subtitle">
                PT. Kahatex - Full time
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> Apr 2024 - July 2024
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Participant Speaker and Script Writer</h3>
                <span className="qualification__subtitle">
                Institut Teknologi Bandung - Remote
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> Jan 2024 - March 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Junior Mobile Programmer</h3>
                <span className="qualification__subtitle">
                  Digital Talent Scholarship (Kominfo)
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> June 2023 - July 2023
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Junior Android Developer
                </h3>
                <span className="qualification__subtitle">
                  PT. Softindo Computech - Internship
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> Jan 2023 - Apr 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Software Engineering</h3>
                <span className="qualification__subtitle">
                  SMK Negeri 1 Cimahi
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> July 2020 - May 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
