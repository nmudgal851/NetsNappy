import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__info'>
          <h1 className='header__title'>NetsNappy</h1>
          <h3 className='header__description'>
            DESIGNING VISUAL STORIES <br />
            LETS MAKE YOUR IDEAS A <br />
            REALITY.
          </h3>
        </div>

        <div className='header__imgpage'>
          <div className='header__image'>
            <img src='https://images.unsplash.com/photo-1423768164017-3f27c066407f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
          </div>

          <div className='header__page'>
            <h3 className='header__pageline'>|</h3>
            <h2>PAGE 01</h2>
          </div>
        </div>
      </div>

      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#f0ff12'
          fill-opacity='1'
          d='M0,64L34.3,101.3C68.6,139,137,213,206,208C274.3,203,343,117,411,85.3C480,53,549,75,617,112C685.7,149,754,203,823,197.3C891.4,192,960,128,1029,133.3C1097.1,139,1166,213,1234,213.3C1302.9,213,1371,139,1406,101.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'
        ></path>
      </svg>
    </div>
  );
}

export default Header;
