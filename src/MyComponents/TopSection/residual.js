// import React from "react";
// import "./SlideShow.css";

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

// const slideShow = () => {
//   return (
//     <div className="pic">
//       {/* <!-- Slideshow container --> */}
//       <div className="slideshow-container">
//         {/* <!-- Full-width images with number and caption text --> */}
//         <div className="mySlides fade">
//           <div className="numbertext">1 / 3</div>
//           <img src={require("../Images/chef-cooking.jpg")} style="width:100%" />
//           {/* <!-- <div className="text">Caption Text</div> --> */}
//         </div>

//         <div className="mySlides fade">
//           <div className="numbertext">2 / 3</div>
//           <img
//             className="def1"
//             src={require("../Images/interior2.jpg")}
//             style="width:100%"
//           />
//           {/* <!-- <div className="text">Caption Two</div> --> */}
//         </div>

//         <div className="mySlides fade">
//           <div className="numbertext">3 / 3</div>
//           <img
//             className="def2"
//             src={require("../Images/restaurant-interior.jpg")}
//             style="width:100%"
//           />
//           {/* <!-- <div className="text">Caption Three</div> --> */}
//         </div>

//         {/* <!-- Next and previous buttons --> */}
//         <a className="prev" onclick="plusSlides(-1)">
//           &#10094;
//         </a>
//         <a className="next" onclick="plusSlides(1)">
//           &#10095;
//         </a>
//       </div>
//       <br />

//       {/* <!-- The dots/circles --> */}
//       <div className="pic-rest" style="text-align:center">
//         <span className="dot" onclick="currentSlide(1)"></span>
//         <span className="dot" onclick="currentSlide(2)"></span>
//         <span className="dot" onclick="currentSlide(3)"></span>
//       </div>
//       {/* <!-- <img id="int_pic" src={require("../Images/restaurant-interior.jpg")} alt="image"> --> */}
//     </div>
//   );
// };

// export default SlideShow;
