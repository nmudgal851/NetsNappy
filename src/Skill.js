import React from "react";
import "./Skill.css";
import { FaLightbulb, FaPoll, FaCogs, FaCloudversify } from "react-icons/fa";

function Skill() {
  return (
    <div className='skill'>
      <div className='skill__allflex'>
        <div className='skill__skillset'>
          <div className='skill__flex'>
            <div>
              <FaLightbulb
                style={{
                  marginRight: "10px",
                  fontSize: "80px",
                  color: "yellow",
                }}
              />
            </div>

            <div>
              <h3 className='skillset__title'>
                Web Development
                <br />
                (Every type of web
                <br /> development)
              </h3>
            </div>
          </div>

          <div className='skill__flex'>
            <div>
              <FaPoll
                style={{ marginRight: "10px", fontSize: "80px", color: "blue" }}
              />
            </div>

            <div>
              <h3 className='skillset__title'>
                Digital Marketing
                <br />
                (Every type of web
                <br /> marketing)
              </h3>
            </div>
          </div>

          <div className='skill__flex'>
            <div>
              <FaCogs
                style={{
                  marginRight: "10px",
                  fontSize: "80px",
                  color: "lightblue",
                }}
              />
            </div>

            <div>
              <h3 className='skillset__title'>
                Web Designing
                <br />
                (Every type of
                <br /> designing)
              </h3>
            </div>
          </div>

          <div className='skill__flex'>
            <div>
              <FaCloudversify
                style={{
                  marginRight: "10px",
                  fontSize: "80px",
                  color: "lightblue",
                }}
              />
            </div>
            <div>
              <h3 className='skillset__title'>
                SEO,SMO & Much
                <br /> more
              </h3>
            </div>
          </div>
        </div>

        <img
          style={{
            width: "350px",
            marginTop: "40px",
            borderRadius: "30px",
            objectFit: "contain",
          }}
          className
          src='https://images.unsplash.com/photo-1514580426463-fd77dc4d0672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=630&q=80'
        />

        <div className='skill__heading'>
          <h1 className='skill__title'>
            Skills and <br /> abilities.
          </h1>
        </div>
      </div>

      <div className='header__page'>
        <h3 className='header__pageline'>|</h3>
        <h2>PAGE 03</h2>
      </div>
    </div>
  );
}

export default Skill;
