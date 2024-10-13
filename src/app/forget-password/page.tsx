import React from "react";

const ForgetPassword = () => {
  return (
    <div>
      <div className="justify-center">
        <form action="" className="space-y-6">
          <div className="flex gap-6">
            <div className="w-full lg:w-1/2">
              <form
                /* onSubmit={handleSubmit(onSubmit)}  */ className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Enter New Password
                  </label>
                  <input
                    type="password"
                    /* {...register("password")} */
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
                    /* {...register("password")} */
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
              </form>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
