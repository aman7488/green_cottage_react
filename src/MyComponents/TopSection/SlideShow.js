// import React from "react";
// import "./SlideShow.css";

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

// /*slide show*/
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// const SlideShow = () => {
//   return (
//     <div className="pic">
//       {/* <!-- Slideshow container --> */}
//       <div className="slideshow-container">
//         {/* <!-- Full-width images with number and caption text --> */}
//         <div className="mySlides">
//           <div className="numbertext">1 / 3</div>
//           <img src={require("../Images/chef-cooking.jpg")} style="width:100%" />
//           {/* <!-- <div className="text">Caption Text</div> --> */}
//         </div>

//         <div className="mySlides">
//           <div className="numbertext">2 / 3</div>
//           <img
//             className="def1"
//             src={require("../Images/interior2.jpg")}
//             style="width:100%"
//           />
//           {/* <!-- <div className="text">Caption Two</div> --> */}
//         </div>

//         <div className="mySlides">
//           <div className="numbertext">3 / 3</div>
//           <img
//             className="def2"
//             src={require("../Images/restaurant-interior.jpg")}
//             style="width:100%"
//           />
//           {/* <!-- <div className="text">Caption Three</div> --> */}
//         </div>

//         {/* <!-- Next and previous buttons --> */}
//         <a
//           className="prev"
//           onClick={() => {
//             plusSlides(-1);
//           }}
//         >
//           &#10094;
//         </a>
//         <a
//           className="next"
//           onClick={() => {
//             plusSlides(1);
//           }}
//         >
//           &#10095;
//         </a>
//       </div>
//       <br />

//       {/* <!-- The dots/circles --> */}
//       <div className="pic-rest" style="text-align:center">
//         <span
//           className="dot"
//           onClick={() => {
//             currentSlide(1);
//           }}
//         ></span>
//         <span
//           className="dot"
//           onClick={() => {
//             currentSlide(2);
//           }}
//         ></span>
//         <span
//           className="dot"
//           onClick={() => {
//             currentSlide(3);
//           }}
//         ></span>
//       </div>
//       {/* <!-- <img id="int_pic" src={require("../Images/restaurant-interior.jpg")} alt="image"> --> */}
//     </div>
//   );
// };

// export default SlideShow;

//-----------------------------------//

import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./SlideShow.css";

const SlideShow = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="Trying to show some Restaurant Images here!"
                className="image"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default SlideShow;
