// pages/gardening-advice.tsx

import Image from "next/image";
import React from "react";

const GardeningAdvice: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-green-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Gardening Advice Trip</h1>
        <p className="mt-2">
          Explore the best tips for a fruitful gardening experience!
        </p>
      </header>

      <div className="container mx-auto mt-8">
        <div className="flex justify-center">
          <Image
            src="/user-photo.jpg" // Replace with your user photo path
            alt="User Photo"
            className="rounded-full"
            width={120}
            height={120}
          />
        </div>
        <h2 className="text-center text-2xl font-semibold mt-4">User Name</h2>
        <p className="text-center text-gray-700">Gardening Enthusiast</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
            >
              <h3 className="text-xl font-semibold">{tip.title}</h3>
              <p className="mt-2">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-green-600 text-white text-center p-4 mt-8">
        <p>© 2024 Gardening Tips & Advice. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

const tips = [
  {
    title: "Tip 1: Choose the Right Plants",
    description:
      "Selecting the appropriate plants for your climate and soil type is crucial. Research native plants that thrive in your area.",
  },
  {
    title: "Tip 2: Water Wisely",
    description:
      "Water early in the morning or late in the evening to reduce evaporation. Ensure deep watering to encourage strong root growth.",
  },
  {
    title: "Tip 3: Mulching",
    description:
      "Applying mulch helps retain moisture, suppress weeds, and improve soil health. Organic mulches like straw or bark are excellent choices.",
  },
  {
    title: "Tip 4: Pest Control",
    description:
      "Regularly inspect your plants for pests. Use natural pest control methods such as neem oil or insecticidal soap to protect your garden.",
  },
  {
    title: "Tip 5: Fertilize Appropriately",
    description:
      "Use organic fertilizers to provide essential nutrients without harming the environment. Composting kitchen scraps can also enrich your soil.",
  },
  {
    title: "Tip 6: Plan Your Garden Layout",
    description:
      "A well-planned garden layout maximizes space and sunlight. Consider companion planting to boost growth and deter pests.",
  },
];

export default GardeningAdvice;
