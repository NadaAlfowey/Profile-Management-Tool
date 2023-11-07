import React from "react";
import "./landingPage.css";
import hero from "./images/hero.jpg";

function LandingPage() {
  return (
    <div className="landing page">
      <div id="image-container">
        <img className="background" src={hero} alt="Hero background" />
      </div>
      <h1 className="landingheader">Profile Management Tool</h1>
      <div className="card-list">
        <div href="#" className="card-item">
          <span className="developer"> Welcome to Your Profile Hub</span>
          <h3 className="card-paragraph">
            Our Profile Management Web App is your one-stop destination to take
            full control of your digital identity. Whether you're a professional
            looking to showcase your skills and experience, a business aiming to
            maintain a polished online presence, or an individual simply wanting
            to manage personal information, our user-friendly platform has you
            covered. With easy-to-use tools, you can update your profile, upload
            new photos, share your latest achievements, and ensure that your
            online image accurately reflects who you are.
          </h3>
          <div className="arrow">
            <i className="fas fa-arrow-right card-icon"></i>
          </div>
        </div>
        <div href="#" className="card-item">
          <span className="developer">Customize and Personalize</span>
          <h3 className="card-paragraph">
            We understand that no two profiles are alike, and that's why we've
            designed our app to be highly customizable. Tailor your profile to
            your specific needs with a variety of customization options. You can
            choose from different themes and layouts, add widgets, and rearrange
            sections to make your profile truly yours. Whether you're promoting
            your brand, networking, or connecting with friends and colleagues,
            our Profile Management Web App provides the flexibility you need to
            stand out and leave a lasting impression.
          </h3>
          <div className="arrow">
            <i className="fas fa-arrow-right card-icon"></i>
          </div>
        </div>
        <div href="#" className="card-item">
          <span className="developer">Privacy and Security at the Core</span>
          <h3 className="card-paragraph">
            Your privacy and security are paramount to us. We employ robust
            encryption and stringent data protection measures to ensure that
            your information remains confidential and safe. You have full
            control over who can view your profile, and you can set different
            access levels for different parts of your profile. We regularly
            update our security protocols to stay ahead of emerging threats,
            giving you peace of mind while managing your digital presence.
            Whether you're an individual or an organization, our Profile
            Management Web App provides a trustworthy and secure platform to
            build, maintain, and showcase your online identity.
          </h3>
          <div className="arrow">
            <i className="fas fa-arrow-right card-icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
