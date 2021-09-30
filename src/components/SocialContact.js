import React from "react";
import { SocialData } from "../components/data/SocialData";
import "./SocialContact.css";

function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link} className="link-icon">
            <div className="social-icon-div">
              <img src={item.icon} alt="images icons" className="social-icon" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
