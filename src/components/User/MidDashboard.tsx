"use client";
import Image from "next/image";
import { useState } from "react";
import photo1 from "../../UI/image/gallery1.jpg";
import photo2 from "../../UI/image/gallery2.jpg";
import photo3 from "../../UI/image/gallery3.jpg";
import photo4 from "../../UI/image/gallery4.jpg";

const MidDashboard = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "John Doe",
      content:
        "Test your soil's pH and nutrient levels to understand what plants will thrive best. You can purchase a soil testing kit or send a sample to a local extension service. Once you know your soil's condition, amend it with compost or organic matter to improve its structure and nutrient content.",
      image: photo1,
      likes: 10,
      comments: [],
      shares: 2,
    },
    {
      id: 2,
      author: "Jane Smith",
      content:
        "Adding a layer of mulch around your plants helps retain moisture, suppress weeds, and regulate soil temperature. Organic mulches like bark, straw, or compost will also enrich the soil as they decompose.",
      image: photo2,
      likes: 8,
      comments: [],
      shares: 0,
    },
    {
      id: 3,
      author: "Devis Luci",
      content:
        "Water deeply but less frequently to encourage deep root growth. Morning watering is best, as it allows plants to absorb moisture before the heat of the day. Avoid watering leaves directly; aim for the base of the plant to prevent fungal diseases.",
      image: photo3,
      likes: 12,
      comments: [],
      shares: 1,
    },
    {
      id: 4,
      author: "Heven Smith",
      content:
        "If you grow vegetables, practice crop rotation each season to prevent soil depletion and reduce pest and disease buildup. This means not planting the same type of plants in the same spot every year, which keeps the soil healthier and your plants stronger!",
      image: photo4,
      likes: 7,
      comments: [],
      shares: 0,
    },
  ]);

  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState(null);

  const handlePost = () => {
    if (!newPostContent.trim() && !newPostImage) return;

    const newPost = {
      id: posts.length + 1,
      author: "Arfin Mia",
      content: newPostContent,
      image: newPostImage,
      likes: 0,
      comments: [],
      shares: 0,
    };

    setPosts([newPost, ...posts]);
    setNewPostContent("");
    setNewPostImage(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPostImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (postId, comment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <div className="bg-gray-100 p-6">
      <main className="w-full max-w-3xl mx-auto">
        {/* Create Post Section */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <textarea
            placeholder="What's on your mind?"
            className="w-full border rounded p-2 mb-2"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-2"
          />
          <div className="flex justify-end">
            <button
              onClick={handlePost}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Post
            </button>
          </div>
        </div>

        {/* Feed Posts */}
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <svg
                className="h-8 w-8 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-6a3 3 0 110 6 3 3 0 010-6z" />
              </svg>
              <span className="font-semibold">{post.author}</span>
            </div>
            <p className="mb-2">{post.content}</p>
            {post.image && (
              <Image
                src={post.image}
                alt="Post Image"
                height={300} // Adjust the height as needed
                width={300} // Adjust the width as needed
                className="w-full max-h-80 object-cover rounded-md mb-2"
              />
            )}
            <div className="flex justify-between text-gray-500 mt-2">
              <span>{post.likes} Likes</span>
              <span>{post.comments.length} Comments</span>
              <span>{post.shares} Shares</span>
            </div>
            <div className="flex space-x-4 mt-2">
              <button
                onClick={() => handleLike(post.id)}
                className="text-blue-500"
              >
                Like
              </button>
              <button className="text-green-500">Comment</button>
              <button className="text-yellow-500">Share</button>
            </div>
            {/* Comment Section */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Write a comment..."
                className="w-full border rounded p-2"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.target.value.trim()) {
                    handleComment(post.id, e.target.value);
                    e.target.value = "";
                  }
                }}
              />
              {post.comments.map((comment, index) => (
                <div key={index} className="mt-2 text-gray-700">
                  <strong>Current User:</strong> {comment}
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default MidDashboard;
