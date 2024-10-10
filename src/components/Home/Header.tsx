import Image from "next/image";
import React from "react";
import cover1 from "../../UI/image/cover1.jpg";
import cover2 from "../../UI/image/cover2.jpg";
import cover3 from "../../UI/image/cover3.jpg";
import cover4 from "../../UI/image/cover4.jpg";
import cover5 from "../../UI/image/cover5.jpg";

const Header = () => {
  return (
    <div className="carousel w-full h-screen">
      {" "}
      {/* Set to full viewport height */}
      <div id="slide1" className="carousel-item relative w-full h-full">
        {" "}
        {/* Ensure full height */}
        <Image
          src={cover1}
          alt="Header Image"
          layout="fill" /* Allows image to fill the container */
          objectFit="cover" /* Covers the container with the image */
          className="object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-full">
        <Image
          src={cover2}
          alt="Header Image"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-full">
        <Image
          src={cover3}
          alt="Header Image"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-full">
        <Image
          src={cover4}
          alt="Header Image"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-full">
        <Image
          src={cover5}
          alt="Header Image"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
