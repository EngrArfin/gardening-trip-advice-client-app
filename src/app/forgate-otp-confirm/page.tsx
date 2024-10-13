import Link from "next/link";

const ForgetOtpCOnfirm = () => {
  return (
    <div>
      <div>
        <div className="justify-center">
          <form action="" className="space-y-6">
            <div className="flex gap-6">
              <div className="w-full lg:w-1/2">
                <form
                  /* onSubmit={handleSubmit(onSubmit)}  */ className="space-y-6"
                >
                  <div>
                    <p>
                      An Otp hase been send your Email: (admin@gmail.com) . It
                      valide 3 mintite
                    </p>
                    <label className="block text-sm font-medium text-gray-700">
                      Please Enter The OTP Here
                    </label>
                    <input
                      type="otp"
                      /* {...register("password")} */
                      placeholder="Enter OTP Here"
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <Link
                    href="forget-password"
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                  >
                    Confirm OTP
                  </Link>
                </form>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetOtpCOnfirm;
