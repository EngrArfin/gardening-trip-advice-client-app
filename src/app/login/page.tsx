/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import login from "../../UI/image/login.jpg";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="max-h-screen flex items-center justify-center bg-gray-100 py-14 px-12 sm:px-8 lg:px-10">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Login To Get <span className="text-blue-600">Advice </span>
        </h2>
        <div className="flex gap-6">
          <div className="hidden lg:block w-1/2">
            <Image
              src={login}
              width={500}
              height={200}
              alt="login page"
              className="rounded-md object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                  className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-center mt-4 text-sm text-gray-600">
              have no account?{" "}
              <Link href="/register" className="text-blue-600 hover:underline">
                sign up
              </Link>
            </p>
            <div className="text-center mt-6 text-gray-500 divider">Or</div>

            <div className="flex justify-center gap-4 mt-4">
              <button className="p-3 bg-white border rounded-full shadow-md hover:shadow-lg">
                <Image
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  width={24}
                  height={24}
                  alt="google logo"
                />
              </button>
              <button className="p-3 bg-white border rounded-full shadow-md hover:shadow-lg">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  width={24}
                  height={24}
                  alt="github logo"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
