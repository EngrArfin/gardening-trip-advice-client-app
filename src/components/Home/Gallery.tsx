"use client";

import Image from "next/image";
import photo1 from "../../UI/image/gallery1.jpg";
import photo2 from "../../UI/image/gallery2.jpg";
import photo3 from "../../UI/image/gallery3.jpg";
import photo4 from "../../UI/image/gallery4.jpg";

const Gallery = () => {
  const images = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo1,
    photo2,
    photo3,
    photo4,
    photo1,
    photo2,
    photo3,
    photo4,
    photo1,
    photo2,
    photo3,
    photo4,
    photo1,
    photo2,
    photo3,
    photo4,
    photo1,
    photo2,
    photo3,
    photo4,
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-center text-green-600 mb-6">
        Gardening Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((photo, index) => (
          <div
            key={index}
            className="transform transition-transform duration-300 hover:-translate-y-2 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={photo}
                alt="Product feature image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
