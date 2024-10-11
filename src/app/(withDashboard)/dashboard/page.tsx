// pages/dashboard.js

import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import MidDashboard from "@/components/User/MidDashboard";

// Sample story data
const storiesData = [
  { id: 1, username: "Alice", imageUrl: "/images/story1.jpg" },
  { id: 2, username: "Bob", imageUrl: "/images/story2.jpg" },
  { id: 3, username: "Charlie", imageUrl: "/images/story3.jpg" },
  { id: 4, username: "David", imageUrl: "/images/story4.jpg" },
  { id: 5, username: "Eve", imageUrl: "/images/story5.jpg" },
];

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {/* Stories Section */}
      <div className="stories-wrapper p-4 border-b border-gray-300">
        <div className="stories-container flex overflow-x-auto gap-3">
          {storiesData.map((story) => (
            <div
              key={story.id}
              className="story-card flex-shrink-0 w-20 flex flex-col items-center"
            >
              <Image
                src={session?.user?.image ?? "/default-user-image.png"}
                alt={`${story.username}'s story`}
                className="rounded-2xl border-2 border-blue-600 transition-transform duration-300 transform hover:scale-110"
                width={100}
                height={100}
              />
              <p className="text-center text-xs mt-2">{story.username}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dashboard Content */}
      <MidDashboard />

      {/* Add any additional dashboard content below */}
    </div>
  );
};

export default Dashboard;
