import Image from "next/image";
import React from "react";
import aboutlogo from "../../UI/image/logo.png"; // Replace with your user image path

import photo1 from "../../UI/image/gallery1.jpg";
import photo2 from "../../UI/image/gallery2.jpg";
import photo3 from "../../UI/image/gallery3.jpg";
import photo4 from "../../UI/image/gallery4.jpg";
import photo5 from "../../UI/image/gallery5.jpg";
import photo6 from "../../UI/image/gallery6.jpg";

const GardeningAdvice: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-green-600 text-white p-8 text-center">
        <h1 className="text-4xl font-bold">Gardening Advice & Tips</h1>
        <p className="mt-2 text-lg">
          Explore top tips to create a thriving garden!
        </p>
      </header>

      <div className="container mx-auto mt-8">
        {/* User Section */}
        <div className="flex flex-col items-center">
          <Image
            src={aboutlogo} // Replace with the user’s profile image path
            alt="User Photo"
            className="rounded-full shadow-lg border-4 border-green-600"
            width={120}
            height={120}
          />
          <h2 className="text-2xl font-semibold mt-4">Jane Doe</h2>
          <p className="text-gray-600">
            Passionate Gardener | Environmental Advocate
          </p>
          <p className="mt-2 text-gray-700 text-center max-w-lg">
            Jane has been gardening for over 15 years, sharing her insights and
            passion for sustainable gardening with enthusiasts around the world.
          </p>
        </div>

        {/* Tips Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 p-4">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-105 overflow-hidden"
            >
              <Image
                src={photo2}
                alt={tip.title}
                width={400}
                height={300}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-700">
                  {tip.title}
                </h3>
                <p className="mt-2 text-gray-600">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Tip data with images for each tip
const tips = [
  {
    title: "Choose the Right Plants",
    description:
      "Select plants suited to your climate and soil type. Native plants often require less maintenance and thrive better.",
    image: { photo1 }, // Replace with the actual image path
  },
  {
    title: "Water Wisely",
    description:
      "Water early in the morning or late in the evening to minimize evaporation. Deep watering encourages stronger roots.",
    image: "/images/water.jpg", // Replace with the actual image path
  },
  {
    title: "Mulching",
    description:
      "Mulching retains moisture, suppresses weeds, and enhances soil health. Organic mulches like bark are excellent choices.",
    image: "/images/mulching.jpg", // Replace with the actual image path
  },
  {
    title: "Pest Control",
    description:
      "Monitor your plants for pests. Use eco-friendly pest control like neem oil to protect your garden naturally.",
    image: "/images/pest-control.jpg", // Replace with the actual image path
  },
  {
    title: "Fertilize Appropriately",
    description:
      "Opt for organic fertilizers to nourish plants without harming the environment. Compost is a great way to enrich soil naturally.",
    image: "/images/fertilize.jpg", // Replace with the actual image path
  },
  {
    title: "Plan Your Garden Layout",
    description:
      "A well-thought-out garden layout maximizes space. Companion planting boosts growth and wards off pests.",
    image: "/images/garden-layout.jpg", // Replace with the actual image path
  },
];

export default GardeningAdvice;
