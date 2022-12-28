import React from "react";
const CtaList = () => {
  return (
    <React.Fragment>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mshahez.me@gmail.com">
          <div className="cta-card">
            <i className="fa-solid fa-mail-forward"></i>
            <h2>Email</h2>
          </div>
        </a>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <a
          href="./assets/Mohammad Shahez - CV.pdf"
          target="_blank"
          alt="Resume"
        >
          <div className="cta-card">
            <i className="fa-solid fa-clapperboard"></i>
            <h2>Resume</h2>
          </div>
        </a>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <a href="https://www.linkedin.com/in/mohammad-shahez-b4b000221/">
          <div className="cta-card">
            <i className="fa-solid fa-message"></i>
            <h2>Social</h2>
          </div>
        </a>
      </div>
    </React.Fragment>
  );
};
export default CtaList;
