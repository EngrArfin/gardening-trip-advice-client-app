import Link from "next/link";

const ForgetOtpConfirm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form action="" className="space-y-6">
          <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
            Confirm OTP
          </h1>
          <div className="space-y-4">
            <p className="text-gray-700">
              An OTP has been sent to your email: (admin@gmail.com). It is valid
              for 3 minutes.
            </p>
            <label className="block text-sm font-medium text-gray-700">
              Please Enter the OTP Here
            </label>
            <input
              type="text"
              placeholder="Enter OTP Here"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <Link
            href="forget-password-confirm"
            className="block w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl text-center"
          >
            Confirm OTP
          </Link>
          <div className="text-center">
            <p className="text-gray-700">Did not receive the OTP?</p>
            <button className="text-accent" type="submit">
              Resend OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetOtpConfirm;
