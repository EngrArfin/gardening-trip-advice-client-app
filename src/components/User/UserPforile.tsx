import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { UserProps } from "./UserNavBar";

const UserPforile = async ({
  session: data,
}: {
  session: UserProps | null;
}) => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <Image
              height={100}
              width={100}
              alt="Tailwind CSS Navbar component"
              src={session?.user?.image ?? "/default-user-image.png"}
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              {session?.user?.name}
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>{session?.user?.email}</a>
          </li>
          <div>
            {data?.user ? (
              <button>Logout</button>
            ) : (
              <button
                onClick={() => signOut()}
                className="btn btn-error btn-outline text-white  px-4"
              >
                Logout
              </button>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default UserPforile;
