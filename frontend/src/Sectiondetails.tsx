"use client";
import { motion, useAnimation, useInView, easeOut } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { WaitlistHelper } from "./helper/waitlistHelper/waitlistHelper";
import { useTranslation } from "./lang/useTranslation";
import { SuccessPopup } from "./components/popup/SuccessPopup";
import { useToast } from "./components/toast";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3, ease: easeOut } },
};

export default function SectionDetails() {
  const { t } = useTranslation();
  const { addToast } = useToast();
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const headingControls = useAnimation();
  const emailControls = useAnimation();
  const headingRef = useRef<HTMLDivElement | null>(null);
  const emailRef = useRef<HTMLDivElement | null>(null);
  const headingInView = useInView(headingRef, { amount: 0.4 });
  const emailInView = useInView(emailRef, { amount: 0.4 });

  useEffect(() => {
    headingControls.start(headingInView ? "show" : "hidden");
  }, [headingInView, headingControls]);

  useEffect(() => {
    emailControls.start(emailInView ? "show" : "hidden");
  }, [emailInView, emailControls]);

  const resetForm = () => {
    setEmail("");
    setShowPopup(false);
    setIsJoined(false);
    setIsSubmitting(false);
  };

  const handleSubmitWaitlist = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setIsJoined(true);

    try {
      const waitlistHelper = new WaitlistHelper();
      const response = await waitlistHelper.submit({ email });

      if (response.success) {
        setShowPopup(true);
        addToast({ type: "success", message: response.message, duration: 5000 });
      } else {
        addToast({ type: "error", message: response.message, duration: 5000 });
      }
    } catch (error) {
      addToast({
        type: "error",
        message: "An error occurred. Please try again.",
        duration: 5000,
      });
    } finally {
      resetForm();
    }
  };

  return (
    <section className="relative bg-[#012219] py-16 md:py-28 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
          {/* LEFT SIDE CONTENT */}
          <motion.div
            ref={headingRef}
            variants={fadeUp}
            initial="hidden"
            animate={headingControls}
            className="text-left flex flex-col items-start justify-center"
          >
            {/* Heading */}
            <h2
              className="!text-[#AFEB2B] font-extrabold
              text-[2.8rem] sm:text-[3.6rem] md:text-[4rem] lg:text-[4.5rem]
              leading-[1.05] mb-6 tracking-tight"
            >
              Took only <br className="hidden sm:block" /> 5 seconds
            </h2>

            {/* Paragraph */}
            <p
              className="!text-[#AFEB2B] text-[1rem] sm:text-[1.1rem] md:text-[1.15rem]
              leading-relaxed max-w-md mb-8"
            >
              Join the waitlist today and be among the first to experience our
              exclusive early access.
            </p>

            {/* EMAIL FORM */}
            <motion.div
              ref={emailRef}
              variants={fadeRight}
              initial="hidden"
              animate={emailControls}
              className="flex items-center w-full max-w-sm bg-white rounded-full shadow overflow-hidden"
            >
              <input
                id="waitlist-email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handleSubmitWaitlist}
                disabled={isSubmitting}
                className={`font-semibold px-5 py-2 mr-1 rounded-full transition text-nowrap flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "bg-gray-400 text-gray-600 cursor-wait"
                    : "bg-[#AEEA30] text-black hover:bg-[#9cd426]"
                }`}
              >
                {isSubmitting ? (
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Join the waitlist"
                )}
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={emailControls}
            className="flex justify-center md:justify-end mt-10 md:mt-0"
          >
            <img
              src="/waitlistlogo.svg"
              alt="Join the waitlist"
              className="w-[400px] sm:w-[480px] md:w-[520px] lg:w-[600px] drop-shadow-[0_10px_28px_rgba(0,0,0,0.4)]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>

      {showPopup && <SuccessPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />}
    </section>
  );
}
