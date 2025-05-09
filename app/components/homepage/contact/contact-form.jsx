"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        userInput
      );

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        {"I'm open to work opportunities that match my skills and interests. Feel free to reach out if you have any questions!"}
      </p>

      <div className="space-y-5">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
            <span>Your Name</span>
            {!userInput.name && <span className="text-xs text-violet-400">*</span>}
          </label>
          <div className="relative">
            <input
              className="w-full bg-[#10172d]/80 border border-indigo-900/50 focus:border-indigo-500/70 rounded-lg p-3 text-white placeholder-gray-500 text-sm outline-none transition duration-300 focus:shadow-md focus:shadow-indigo-500/10"
              type="text"
              placeholder="John Doe"
              maxLength="100"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
            <span>Your Email</span>
            {!userInput.email && <span className="text-xs text-violet-400">*</span>}
          </label>
          <div className="relative">
            <input
              className="w-full bg-[#10172d]/80 border border-indigo-900/50 focus:border-indigo-500/70 rounded-lg p-3 text-white placeholder-gray-500 text-sm outline-none transition duration-300 focus:shadow-md focus:shadow-indigo-500/10"
              type="email"
              placeholder="example@domain.com"
              maxLength="100"
              required={true}
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
            />
            {error.email && (
              <p className="mt-1 text-sm text-pink-500 flex items-center gap-1">
                <span className="inline-block w-1 h-1 bg-pink-500 rounded-full"></span>
                Please provide a valid email address
              </p>
            )}
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
            <span>Your Message</span>
            {!userInput.message && <span className="text-xs text-violet-400">*</span>}
          </label>
          <div className="relative">
            <textarea
              className="w-full bg-[#10172d]/80 border border-indigo-900/50 focus:border-indigo-500/70 rounded-lg p-3 text-white placeholder-gray-500 text-sm outline-none transition duration-300 focus:shadow-md focus:shadow-indigo-500/10 resize-none"
              placeholder="Write your message here..."
              maxLength="500"
              name="message"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows="5"
              value={userInput.message}
            />
          </div>
        </div>

        {error.required && (
          <div className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-lg">
            <p className="text-sm text-pink-500">All fields are required!</p>
          </div>
        )}

        <div className="pt-2">
          <button
            className="w-full relative overflow-hidden group bg-gradient-to-br from-violet-600 to-indigo-700 hover:from-violet-500 hover:to-indigo-600 text-white font-medium rounded-lg text-sm px-6 py-3.5 transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-[#161331] focus:ring-offset-2"
            onClick={handleSendMail}
            disabled={isLoading}
          >
            <span className="absolute right-0 -mt-12 group-hover:-mt-1 transition-all duration-1000 w-full h-32 rotate-12 group-hover:-rotate-12 bg-white/10"></span>
            <span className="relative flex items-center justify-center gap-2">
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Message...
                </>
              ) : (
                <>
                  Send Message
                  <TbMailForward size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;