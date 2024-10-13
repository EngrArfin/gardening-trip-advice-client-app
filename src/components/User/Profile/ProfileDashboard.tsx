import React, { useState } from "react";

const ProfileDashboard = () => {
  /*   const [postContent, setPostContent] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPhoto(URL.createObjectURL(file));
    }
  };

  const handleShare = () => {
    // Implement sharing functionality here, such as updating a state or sending data to a server.
    console.log("Post shared:", { content: postContent, photo: selectedPhoto });
    setPostContent("");
    setSelectedPhoto(null);
  }; */

  return (
    <div>
      <div className="max-w-2xl mx-auto p-4 bg-green-50">
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

        <main className="mt-4">
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <textarea
              /*  value={postContent} */
              /* onChange={(e) => setPostContent(e.target.value)} */
              placeholder="Share your latest gardening adventure..."
              className="w-full h-24 p-2 border rounded-md"
            />
            <input
              type="file"
              accept="image/*"
              /* onChange={handlePhotoUpload} */
              className="mt-2 block"
            />
            <button
              type="button"
              /* onClick={handleShare} */
              className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Share
            </button>
          </div>

          <div className="space-y-4">
            {/* Example Posts */}
            <div className="bg-white p-4 rounded-lg shadow">
              <p>
                <strong>Emily Green</strong> shared a new garden layout plan.
              </p>
              <img
                src="https://via.placeholder.com/400"
                alt="Garden Layout Image"
                className="w-full rounded-lg"
              />
              <p>Check out my new layout for a sustainable herb garden!</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p>
                <strong>Mark Planter</strong> posted a new plant addition.
              </p>
              <p>
                Just planted some lavender in the backyard. Can’t wait for the
                blooms!
              </p>
            </div>

            {/* Display Uploaded Photo */}
            {/*  {selectedPhoto && (
              <div className="bg-white p-4 rounded-lg shadow mt-4">
                <p>Your Photo:</p>
                <img
                  src={selectedPhoto}
                  alt="Selected"
                  className="w-full rounded-lg"
                />
                <p>{postContent}</p>
              </div>
            )} */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfileDashboard;
