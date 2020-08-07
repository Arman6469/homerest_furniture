import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer flex-column">
      <div className="footer_icons">
        <FontAwesomeIcon
          icon={faInstagram}
          style={{ fontSize: "3vw" }}
          className="footer_icon"
        />
        <FontAwesomeIcon
          icon={faFacebookF}
          style={{
            fontSize: "2.7vw",
          }}
          className="footer_icon"
        />
      </div>
      <div className="width-100 height-100 flex">
        <div className="footer_contact">
          
        </div>
        <div className="footer_map">
          <a
            href="https://goo.gl/maps/bJmUVN7tUrEn51X58"
            className="footer_get_location"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faMapMarkedAlt} />{" "}
            <span style={{ marginLeft: "0.2vw" }}>Get Location</span>
          </a>
          <p className="font-white font-small footer_location_text">
            Armenia City Ejmiatsin Village Ptxunk Street Tamanyan 11
          </p>
        </div>
      </div>
    </div>
  );
}
