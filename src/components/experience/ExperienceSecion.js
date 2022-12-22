import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const ExperienceSection = () => {
  return (
    <React.Fragment>
      <section className="experience-section">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021-Present"
            iconStyle={{ background: "rgb(0, 128, 128)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Freelancer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <p>Graphic Designer And Web Developer</p>
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017-2021"
            iconStyle={{ background: "rgb(0, 128, 128)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor Of Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Mechanical</h4>
            <p>PA COllege Of Engineering, Mangalore</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2017"
            iconStyle={{ background: "rgb(0, 128, 128)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Pre University</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Computer Science
            </h4>
            <p>ST.Aloysius Pu College</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: "rgb(0, 128, 128)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">High School</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>Infant Jesus Joyland, Mangalore</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </React.Fragment>
  );
};
export default ExperienceSection;
