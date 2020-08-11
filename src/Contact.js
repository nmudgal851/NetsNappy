import React from "react";
import "./Contact.css";
import {
  FaLightbulb,
  FaPoll,
  FaCogs,
  FaCloudversify,
  FaEnvelope,
  FaMobileAlt,
  FaHome,
} from "react-icons/fa";

function Contact() {
  return (
    <div className='contact'>
      <div className='contact__allflex'>
        <div className='contact__skillset'>
          <div className='contact__flex'>
            <div>
              <FaEnvelope
                style={{
                  marginRight: "10px",
                  fontSize: "80px",
                  color: "#ff3446",
                }}
              />
            </div>

            <div>
              <h3 className='contacthead__title'>
                EMAIL
                <br />
                (netsnappy@netsnappy.com)
              </h3>
            </div>
          </div>

          <div className='contact__flex'>
            <div>
              <FaMobileAlt
                style={{
                  marginRight: "10px",
                  fontSize: "80px",
                  color: "#23ff48",
                }}
              />
            </div>

            <div>
              <h3 className='contacthead__title'>
                MOBILE
                <br />
                (+91-7665331127, 7062587421)
              </h3>
            </div>
          </div>

          <div className='contact__flex'>
            <div>
              <FaHome
                style={{
                  marginRight: "10px",
                  fontSize: "80px",
                  color: "lightblue",
                }}
              />
            </div>

            <div>
              <h3 className='contacthead__title'>
                MAIL ADDRESS
                <br />
                (202, Barkat Nagar,Tonk
                <br /> Phatak,Jaipur,Rajasthan, 302015)
              </h3>
            </div>
          </div>
        </div>

        <img
          style={{ width: "350px", marginTop: "40px", borderRadius: "30px" }}
          className
          src='https://www.vwfs.co.in/content/dam/bluelabel/valid/www-vwfs-co-in/images/Contact%20us-%202-1%20-%203000%20px%20X%201500px.jpg.xxl.jpg'
        />

        <div className='contact__heading'>
          <h1 className='contact__title'>
            LETS WORK
            <br /> TOGETHER.
          </h1>
        </div>
      </div>

      <div className='header__page'>
        <h3 className='header__pageline'>|</h3>
        <h2>PAGE 05</h2>
      </div>
    </div>
  );
}

export default Contact;
