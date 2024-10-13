/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { registerUser } from "@/utils/actions/registerUser";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export type UserData = {
  username: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const router = useRouter();

  const onSubmit = async (data: UserData) => {
    try {
      const res = await registerUser(data);
      if (res.success) {
        alert(res.message);
        router.push("/login");
      }
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="max-h-screen flex items-center justify-center bg-gray-100 py-14 px-12 sm:px-8 lg:px-10">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        {" "}
        {/* Increased max width */}
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Sign Up To Get <span className="text-green-600">Advice</span>
        </h2>
        <div className="flex gap-6">
          <div className="hidden lg:block w-1/2">
            <Image
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?t=st=1710081713~exp=1710085313~hmac=f637c194f1f143e63a84950cbf978997453777c872adf4aebbbecdaa445601a1&w=740"
              width={600} // Increased width
              height={300} // Increased height
              alt="sign up page"
              className="rounded-md object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("username")}
                  placeholder="User Name"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Password"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:from-green-600 hover:to-teal-700 focus:outline-none focus:ring-4 focus:ring-green-500 transition duration-200 ease-in-out transform hover:scale-105"
                >
                  Register
                </button>
              </div>
            </form>
            <p className="text-center mt-4 text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-green-600 hover:underline">
                Login
              </Link>
            </p>
            <div className="text-center mt-6 text-gray-500 divider">Or</div>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() =>
                  signIn("github", {
                    callbackUrl: "http://localhost:3000/dashboard",
                  })
                }
                className="p-3 bg-white border rounded-full shadow-md hover:shadow-lg"
              >
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  width={30}
                  height={30}
                  alt="github logo"
                />
              </button>
              <button
                className="p-3 bg-white border rounded-full shadow-md hover:shadow-lg"
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "http://localhost:3000/dashboard",
                  })
                }
              >
                <Image
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  width={30}
                  height={30}
                  alt="google logo"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
