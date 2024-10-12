import Image from "next/image";
import React from "react";
import cover1 from "../../UI/image/gallery1.jpg"; // Ensure this import is correct
import cover2 from "../../UI/image/gallery2.jpg"; // Ensure this import is correct

const AboutUs: React.FC = () => {
  /*  const router = useRouter();

  const handleJoinUsClick = () => {
    router.push("/login"); 
  }; */

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${cover1.src})` }} // Use cover1 as the background image
    >
      <header className="bg-green-600 text-white p-8 text-center bg-opacity-70">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-2 text-lg">
          Your trusted partner in gardening advice and adventures!
        </p>
      </header>
      <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg bg-opacity-90">
        <h2 className="text-3xl font-semibold text-center">Our Mission</h2>
        <p className="mt-4 text-gray-700 text-lg text-center px-4">
          At Gardening Advice & Trip, we believe that every garden tells a
          story. Our mission is to cultivate a community that thrives on sharing
          knowledge, experiences, and inspiration in gardening. Whether you are
          a novice with a single potted plant or a seasoned gardener with a
          sprawling garden, we are here to support you every step of the way!
        </p>

        <h2 className="text-3xl font-semibold text-center mt-10">Who We Are</h2>
        <div className="flex flex-col items-center mt-4">
          <div
            className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-green-600"
            style={{ backgroundImage: `url(${cover2.src})` }}
          >
            {/* The Image component is not necessary here as we are using a background image */}
          </div>
          <p className="text-gray-700 text-lg text-center">
            We are a passionate team of gardening enthusiasts and professionals
            dedicated to inspiring others. Our backgrounds span horticulture,
            landscape design, and environmental education, all unified by a love
            for nature and gardening.
          </p>
        </div>

        {/* Garden Photo Section */}
        <div className="mt-10">
          <Image
            src="/garden-photo.jpg" // Replace with your garden photo path
            alt="Beautiful Garden"
            className="rounded-lg shadow-md w-full h-64 object-cover"
            width={800}
            height={400}
          />
        </div>

        <h2 className="text-3xl font-semibold text-center mt-10">
          What We Offer
        </h2>
        <ul className="list-disc list-inside mt-4 text-gray-700 text-lg">
          <li className="mt-2">
            🌱 Expert gardening advice tailored to your unique needs.
          </li>
          <li className="mt-2">
            🌼 Exciting trips to breathtaking gardens and nature reserves.
          </li>
          <li className="mt-2">
            🌍 A community of like-minded individuals sharing their gardening
            journeys.
          </li>
          <li className="mt-2">
            🌿 Workshops and resources for all skill levels, from beginner to
            expert.
          </li>
        </ul>

        <h2 className="text-3xl font-semibold text-center mt-10">Join Us!</h2>
        <p className="mt-4 text-gray-700 text-lg text-center px-4">
          We invite you to join our vibrant community of gardening enthusiasts!
          Share your journey, learn new techniques, and discover the joy of
          gardening. Together, let is create beautiful spaces that nurture both
          plants and friendships.
        </p>

        {/* Join Us Button */}
        <div className="flex justify-center mt-6">
          <button
            /*  onClick={handleJoinUsClick} */
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Join Us
          </button>
        </div>

        {/* Project Bio Section */}
        <h2 className="text-3xl font-semibold text-center mt-10">
          Project Bio
        </h2>
        <p className="mt-4 text-gray-700 text-lg text-center px-4">
          Our project aims to create an inclusive platform for gardening lovers.
          We provide resources, workshops, and community events to help
          individuals connect and grow together. Our commitment is to ensure
          that everyone, regardless of experience level, can find joy and
          knowledge in their gardening pursuits. Join us in our mission to
          foster a sustainable and beautiful environment through gardening!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
