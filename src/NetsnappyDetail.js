import React from "react";
import "./NetsnappyDetail.css";

function NetsnappyDetail() {
  return (
    <div className='detail'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 220'>
        <path
          fill='#f0ff12'
          fill-opacity='1'
          d='M0,64L34.3,101.3C68.6,139,137,213,206,208C274.3,203,343,117,411,85.3C480,53,549,75,617,112C685.7,149,754,203,823,197.3C891.4,192,960,128,1029,133.3C1097.1,139,1166,213,1234,213.3C1302.9,213,1371,139,1406,101.3L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z'
        ></path>
      </svg>

      <div className='detail__container'>
        <div className='detail__image'>
          <img src='https://image.freepik.com/free-photo/close-up-person-typing-laptop-creative-minimal-office-desk_23-2147979158.jpg' />
        </div>

        <div className='detail__info'>
          <div className='detail__infodesc'>
            <h1 className='detail__title'>NetsNappy</h1>
            <h2 className='detail__description'>DESIGNING VISUAL STORIES</h2>
          </div>

          <div className='detail__experience'>
            <div className='detail__exp1'>
              <h2 className='detail__exptitle'>YEARS OF EXPERIENCE</h2>
              <h2 className='detail__expdescription'>
                Newly Established Company in Jaipur
              </h2>
            </div>
            <div className='detail__exp2'>
              <h2 className='detail__exptitle'>
                NOTABLE ACHIEVEMENTS TO SHARE
              </h2>
              <h2 className='detail__expdescription'>
                We worked with Webyugg another php <br />
                based company on variuos projects.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className='detail__page'>
        <h3 className='detail__pageline'>|</h3>
        <h2>PAGE 02</h2>
      </div>
    </div>
  );
}

export default NetsnappyDetail;
