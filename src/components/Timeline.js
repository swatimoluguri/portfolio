import React, { useEffect } from "react";
import Headings from "./Headings";

const Timeline = () => {
  useEffect(() => {
    const targets = document.querySelectorAll(".timeline ol li");
    const threshold = 0.2;
    const ANIMATED_CLASS = "in-view";

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        const elem = entry.target;
        if (entry.intersectionRatio >= threshold) {
          elem.classList.add(ANIMATED_CLASS);
          observer.unobserve(elem);
        } else {
          elem.classList.remove(ANIMATED_CLASS);
        }
      });
    };

    const observer = new IntersectionObserver(callback, { threshold });
    targets.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <Headings
        bg="white"
        transparent="Timeline"
        heading="My"
        highlight="Timeline"
      />
      <section className="timeline">
        <ol>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>Dec, 23 - Now</time>
              </div>
              <hr />
              <div className="timeline-details">
                <h3>Projects</h3>
                <p>
                  I dedicated myself to personal and professional development
                  and worked on projects to enhance my skills and knowledge.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>Aug, 21 - Nov,23</time>
              </div>
              <hr />
              <div className="timeline-details">
                <h3>Assistant Manager, IT - APGV Bank</h3>
                <p>
                  <ul>
                    <li>
                      Single-handedly designed, developed, and maintained
                      <b>over 20 tech-finance initiatives</b>
                      spanning Android and web applications. Major Projects
                      include:
                      <ul>
                        <li>
                          Gold Loan Process Optimization across 771 branches:
                          Reduced documentation time to under
                          <b>10 seconds</b>, driving a<b>34.38% increase</b>
                          in gold loan advances in FY2022-23. Streamlined
                          control returns submission for audit compliance at
                          regional and head offices.
                        </li>
                        <li>
                          DEA Funds Remittance and Claims Management:
                          Implemented streamlined process for gathering and
                          approving eligible unclaimed accounts, transferring
                          <b>over 4 Crores</b>
                          to RBI's DEA funds. Ensured seamless processing of
                          claims for DEA funds accounts.
                        </li>
                        <li>
                          Single-handedly
                          <b>ignited in-house Android development</b>, launched
                          apps for pensioners, MIS, HRMS, and streamlined Bank
                          Mithra audits and customer NPA visits.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Led and collaborated with cross-functional teams on key
                      initiatives like
                      <b>NSDL PAN Validation API</b>
                      for customer validation and
                      <b>Equifax API-based credit reports</b>
                      to enhance credit risk assessment.
                    </li>
                    <li>
                      Crafted creative content,
                      <b>managed social media</b>
                      channels, and drove digital marketing efforts for the
                      bank.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>Mar, 2016 - Jun, 2021</time>
              </div>
              <br />
              <hr />
              <div className="timeline-details">
                <h3>Co-Founder, Director - Freshneeds.in</h3>
                <p>
                  <ul>
                    <li>
                      Co-founded the company from scratch and expanded its reach
                      to
                      <b>three major cities</b>
                      in Telangana.
                    </li>
                    <li>
                      Successfully
                      <b>secured seed funding</b>
                      to facilitate operations in multiple cities.
                    </li>
                    <li>
                      Implemented and optimized processes for increased
                      efficiency.
                    </li>
                    <li>
                      <b>Crafted and executed strategies</b>
                      and content for enhanced brand visibility, customer
                      acquisition, and retention.
                    </li>
                    <li>
                      Managed the development and maintenance of
                      <b>E-Commerce website and Android application.</b>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>Dec, 2014 - Jan, 2015</time>
              </div>
              <hr />
              <div className="timeline-details">
                <h3>Campus Ambassador, Scrapehere</h3>
                <p>
                  Internship in Marketing. Conducted strategic and engaging
                  campaigns on the college campus to improve brand visibility
                  and collected valuable student feedback, providing insights
                  for more targeted and effective campaigns.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="item-inner">
              <div className="time-wrapper">
                <time>Jul, 2013 - Jun, 2016</time>
              </div>
              <hr />
              <div className="timeline-details">
                <h3>Master of Computer Applications, NIT Trichy</h3>
                <p>
                  Secured All India Rank 14, earning admission to NIT Trichy,
                  and completed my post-graduation with a 7.7 CGPA.
                </p>
              </div>
            </div>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Timeline;
