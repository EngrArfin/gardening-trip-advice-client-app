import React from "react";

const ForgetPasswordConfirm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form action="" className="space-y-6">
          <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
            Recovery Forget Password
          </h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter New Password
              </label>
              <input
                type="password"
                placeholder="Enter New Password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                placeholder="Confirm New Password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              >
                Confirm
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordConfirm;
