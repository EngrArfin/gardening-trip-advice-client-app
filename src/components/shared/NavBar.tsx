"use client";

import Link from "next/link";
import logo from "../../UI/icon/Logo.jpg";

import Image from "next/image";
import { signOut } from "next-auth/react";

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Navbar = ({ session }: { session: UserProps | null }) => {
  return (
    <div className="navbar bg-base-100  border-b  w-[90%] mx-auto">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">Gardening Advice</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/support">Support</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <div className="overflow-hidden w-50 h-6 bg-gray-200 flex items-center justify-center">
            <Image
              src={logo}
              alt="Logo"
              width={80}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <Link
              href="/"
              className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition duration-200"
            >
              <span className="text-green-600 text-center">Advice </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">Gardening Advice</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>

          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {session?.user ? (
          <button
            onClick={() => signOut()}
            className="btn btn-error btn-outline text-white  px-4"
          >
            Logout
          </button>
        ) : (
          <Link href="/login" className="btn  btn-outline text-green-600  px-4">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
