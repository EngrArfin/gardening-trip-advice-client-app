import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  /* console.log(session); */

  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Dashboard</h1>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome To Dashboard : <hr />
            <p>Profile Name: {session?.user?.name}</p>
            <p>Email: {session?.user?.email}</p>
            <p className="items-center">
              Pfrofile:
              <Image
                src={session?.user?.image ?? "/default-user-image.png"}
                alt="profile img"
                width={100}
                height={100}
                className=" mx-auto border rounded-full items-center"
              />
            </p>
          </h1>
        </>
      )}
    </div>
  );
};

export default Dashboard;
