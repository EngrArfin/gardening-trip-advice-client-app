import React from "react";

const Profile = () => {
  return (
    <div>
      <h1>Hello, Profile!</h1>
      <div className="max-w-2xl mx-auto p-4 bg-green-50">
        {/* Cover Photo Section */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/800x200"
            alt="Cover Photo"
            className="w-full h-52 object-cover rounded-t-lg"
          />
          <button className="absolute right-4 bottom-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Edit Profile
          </button>
        </div>

        {/* Profile Info */}
        <header className="bg-white p-5 border-b border-gray-300 text-center">
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile Picture"
              className="rounded-full mb-4 -mt-16 border-4 border-white"
            />
            <div className="flex justify-center items-center">
              <h1 className="text-2xl font-bold">Jane Gardener</h1>
              <p className="badge text-sky-400 ml-2">5000 K</p>
              <span className="ml-1 text-green-400">followers</span>
            </div>
            <p className="text-gray-600">
              Gardening Enthusiast. Nature Lover. Landscape Planner.
            </p>
          </div>
        </header>

        {/* Navigation Menu */}
        <nav className="bg-white p-3 border-b border-gray-300">
          <ul className="flex space-x-5">
            <li>
              <a href="#" className="text-green-600 hover:underline">
                Trips
              </a>
            </li>
            <li>
              <a href="#" className="text-green-600 hover:underline">
                Plans
              </a>
            </li>
            <li>
              <a href="#" className="text-green-600 hover:underline">
                Plants
              </a>
            </li>
            <li>
              <a href="#" className="text-green-600 hover:underline">
                Photos
              </a>
            </li>
            <li>
              <a href="#" className="text-green-600 hover:underline">
                Videos
              </a>
            </li>
          </ul>
        </nav>

        {/* Bio Section */}
        <section className="bg-white p-4 rounded-lg shadow mt-4">
          <h2 className="text-xl font-bold mb-2">Bio</h2>
          <p>
            Jane is a passionate gardener who loves exploring new plants and
            designing sustainable garden layouts. With a focus on eco-friendly
            gardening techniques, she shares her journey and tips on maintaining
            a beautiful garden.
          </p>
        </section>

        {/* Photos Section */}
        <section className="bg-white p-4 rounded-lg shadow mt-4">
          <h2 className="text-xl font-bold mb-2">Photos</h2>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="https://via.placeholder.com/100"
              alt="Garden Photo 1"
              className="rounded-lg"
            />
            <img
              src="https://via.placeholder.com/100"
              alt="Garden Photo 2"
              className="rounded-lg"
            />
            <img
              src="https://via.placeholder.com/100"
              alt="Garden Photo 3"
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Followers/Friends Section */}
        <section className="bg-white p-4 rounded-lg shadow mt-4">
          <h2 className="text-xl font-bold mb-2">Followers/Friends</h2>
          <div className="flex space-x-4">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Friend 1"
                className="rounded-full mb-1"
              />
              <p className="text-sm">Emily Green</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Friend 2"
                className="rounded-full mb-1"
              />
              <p className="text-sm">Mark Planter</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Friend 3"
                className="rounded-full mb-1"
              />
              <p className="text-sm">Lily Bloom</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
