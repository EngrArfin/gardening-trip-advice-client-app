"user client";
import Image from "next/image";
import logo1 from "../../UI/icon/Logo1.jpg";

import { TbHomeEco } from "react-icons/tb";
import { MdGroupAdd, MdOndemandVideo } from "react-icons/md";

import Link from "next/link";
import { FcAdvertising } from "react-icons/fc";
import { GiTreehouse } from "react-icons/gi";
import { SiGooglenews } from "react-icons/si";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { signOut } from "next-auth/react";

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const UserNavBar = async ({ session: data }: { session: UserProps | null }) => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
          {/* search and logo */}
          <div className="flex">
            <div>
              <Image
                src={logo1}
                alt="profile img"
                width={40}
                height={40}
                className=" mx-auto border rounded-full items-center"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-black">
              <Link href="/dashboard" className="flex items-center">
                <TbHomeEco className="text-2xl" />
              </Link>
            </li>

            <li className="text-black">
              <Link href="/video" className="flex items-center">
                <MdOndemandVideo className="text-2xl" />
              </Link>
            </li>
            <li className="text-black">
              <Link href="/advertising" className="flex items-center">
                <FcAdvertising className="text-2xl" />
              </Link>
            </li>
            <li className="text-black">
              <Link href="/advertising" className="flex items-center">
                <GiTreehouse className="text-2xl" />
              </Link>
            </li>
            <li className="text-black">
              <Link href="/advertising" className="flex items-center">
                <MdGroupAdd className="text-2xl" />
              </Link>
            </li>
            <li className="text-black">
              <Link href="/advertising" className="flex items-center">
                <SiGooglenews className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2">
            <div>
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
            </div>

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
                  <Link
                    href="profile-dashboard/my-profile"
                    className="justify-between"
                  >
                    {session?.user?.name}
                    <span className="badge">follow</span>
                  </Link>
                </li>
                <li>
                  <Link href="/profile-dashboard">
                    {/* {session?.user?.email} */}
                    Pfofile
                  </Link>
                </li>
                <div>
                  {data?.user ? (
                    <button
                      onClick={() => signOut()}
                      className="btn btn-error btn-outline text-white  px-4"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      href="/login"
                      className="btn  btn-outline text-green-600  px-4"
                    >
                      login
                    </Link>
                  )}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNavBar;
