import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function EmailVerification() {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    return <h2 className="text-center mt-10">Invalid Access ❌</h2>;
  }

  const { email, ...userData } = location.state;
  userData.email=email;
  useEffect(() => {
    let interval;
    if (isResendDisabled && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    }
    if (timer === 0) setIsResendDisabled(false);

    return () => clearInterval(interval);
  }, [timer, isResendDisabled]);

  const handleVerify = async () => {
    try {
      console.log("email from location state",email)
  console.log("userData from location state",userData)
      const response=await axios.post("http://localhost:8000/api/auth/verifyotp", {
        email,
        otp,
      });
    console.log("verification response",response)
      // ✅ OTP Verified → now register user
      console.log(userData)
      const resp=await axios.post("http://localhost:8000/api/auth/register", userData);
      console.log("register route response",resp)
      setMessage("✅ Registration Successful!");

      setTimeout(() => navigate("/login"), 1500);
    } catch (e){
        console.log("error in hadle email verify",e)
      setMessage("❌ Invalid OTP");
    }
  };

  const handleResend = async () => {
    try {
      setIsResendDisabled(true);
      setTimer(10);

      await axios.post("http://localhost:8000/api/auth/resendotp", { email });

      setMessage("✅ OTP Resent!");
    } catch (e){
        console.log("error from the email verification",e)
      setMessage("❌ Error resending OTP");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg border rounded-xl bg-white">
      <h2 className="text-2xl font-semibold text-center">Email Verification</h2>

      <p className="text-gray-600 text-center mt-2">
        Enter the OTP sent to <span className="font-medium">{email}</span>
      </p>

      <input
        type="text"
        maxLength={6}
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="mt-4 w-full border p-3 rounded-lg text-center text-xl"
        placeholder="Enter OTP"
      />

      <button
        onClick={handleVerify}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg"
      >
        Verify OTP
      </button>

      <div className="text-center mt-4">
        <button
          disabled={isResendDisabled}
          onClick={handleResend}
          className={
            isResendDisabled
              ? "text-gray-400 cursor-not-allowed"
              : "text-blue-600 hover:underline"
          }
        >
          Resend OTP
        </button>

        {isResendDisabled && (
          <p className="text-sm text-gray-500 mt-1">
            You can resend OTP in {timer}s
          </p>
        )}
      </div>

      {message && (
        <p className="text-center mt-4 text-green-600 font-medium">{message}</p>
      )}
    </div>
  );
}
