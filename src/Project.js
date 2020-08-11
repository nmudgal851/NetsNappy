import React from "react";
import "./Project.css";

function Project() {
  return (
    <div className='project'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 220'>
        <path
          fill='#f0ff12'
          fill-opacity='1'
          d='M0,64L34.3,101.3C68.6,139,137,213,206,208C274.3,203,343,117,411,85.3C480,53,549,75,617,112C685.7,149,754,203,823,197.3C891.4,192,960,128,1029,133.3C1097.1,139,1166,213,1234,213.3C1302.9,213,1371,139,1406,101.3L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z'
        ></path>
      </svg>
      <div className='project__container'>
        <div className='project__info'>
          <h1
            style={{
              fontWeight: "400",
              fontSize: "40px",
              color: "white",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Notable Projects
          </h1>
          <h2 className='project__title'>Webyugg E-commerce website</h2>
          <h3 className='project__description'>
            It is a E-commerce website development project based on Wordpress
            <br />
            we did all the basic to dynamic work from designing to uploading
            products
            <br />
            on it. It took us about 1 month to complete the entire project.
            <br />
            <br />
            Link of the website :-{" "}
            <a href='https://www.zuspaa.com/'>www.zuspa.com</a>
          </h3>
        </div>

        <div className='project__image'>
          <img
            style={{ width: "500px", borderRadius: "20px" }}
            src={require("./img1.png")}
          />
        </div>
      </div>

      <div className='project__container'>
        <div className='project__image'>
          <img
            style={{ width: "500px", borderRadius: "20px" }}
            src={require("./img2.png")}
          />
        </div>

        <div className='project__info'>
          <h1
            style={{
              fontWeight: "400",
              fontSize: "40px",
              color: "white",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Project 1
          </h1>
          <h2 className='project__title'>Webyugg E-commerce website</h2>
          <h3 className='project__description'>
            It is a E-commerce website development project based on Wordpress
            <br />
            You can browse across many products,add to cart and purchase them.
            <br />
            Due to its plethora of functionalities, It took us about 1 month to
            complete the entire project.
            <br />
            <br />
            Link of the website :-{" "}
            <a href='https://www.zuspaa.com/'>www.zuspa.com</a>
          </h3>
        </div>
      </div>

      <div className='project__container'>
        <div className='project__info'>
          <h1
            style={{
              fontWeight: "400",
              fontSize: "40px",
              color: "white",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Project 2
          </h1>
          <h2 className='project__title'>SoloEarth</h2>
          <h3 className='project__description'>
            It is a E-commerce website development project based on Wordpress
            <br />
            we did all the basic to dynamic work from designing to uploading
            products
            <br />
            on it. It took us about 1 month to complete the entire project.
            <br />
            <br />
            Link of the website :-
          </h3>
        </div>

        <div className='project__image'>
          <img
            style={{ width: "500px", borderRadius: "20px" }}
            src='https://www.seasiainfotech.com/blog/wp-content/uploads/2019/09/web-design-hero-banner-cover-.jpg'
          />
        </div>
      </div>

      <div className='header__page'>
        <h3 className='header__pageline'>|</h3>
        <h2>PAGE 04</h2>
      </div>
    </div>
  );
}

export default Project;
