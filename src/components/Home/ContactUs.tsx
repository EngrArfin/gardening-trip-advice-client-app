import React from "react";
import coverImage from "../../UI/image/gallery3.jpg"; // Adjust the path based on your project structure

const ContactUs: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${coverImage.src})` }}
    >
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 w-11/12 md:w-2/3 lg:w-1/2">
        <h1 className="text-4xl font-bold text-center text-green-700">
          Contact Us
        </h1>
        <p className="mt-2 text-lg text-center text-gray-700">
          We did love to hear from you! Reach out to us with any questions,
          suggestions, or feedback.
        </p>

        <div className="mt-8">
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
