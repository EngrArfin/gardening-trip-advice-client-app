import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

const UserDashboard = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <ul className="menu bg-base-200 min-h-screen rounded-box">
        <li>
          <Link href="/dashboard">
            {/* Profile Image */}
            <Image
              src={session?.user?.image ?? "/default-user-image.png"}
              alt="profile img"
              width={40}
              height={40}
              className=" mx-auto border rounded-full items-center"
            />
            {/* Profile Name */} {session?.user?.name}
          </Link>
        </li>
        <li>
          <Link href="/dashboard/new-post">New Post</Link>
        </li>
        <li>
          <Link href="/dashboard/gardening-advice">Gardening Advice</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserDashboard;
