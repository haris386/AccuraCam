"use client";
import { useState } from "react";
const faqs = [
  {
    id: 1,
    question: "Is Accurascore Suitable For Small Companies Too?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    id: 2,
    question: "Can I Assign Different Roles To My Team Members?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    id: 3,
    question: "Does Accurascore Automatically Calculate Financials?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    id: 4,
    question: "Is Accurascore Cloud-Based?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    id: 5,
    question: "Can I Export My Data From The System?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
];

export default function AIDriven({ faqId }) {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (faqId) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };
  return (
    <>
      <div style={{ width: "100%", backgroundColor: "#fcfcfc" }}>
        <img src="/Images/multiColor.png" alt="" />
      </div>
      <section
        className="py-16 lg:py-20 "
        style={{
          background: "linear-gradient(to right, #fcfcfc 40%, #e9f2f7 100%)",
        }}
      >
        <div
          className="px-4 sm:px-6 lg:px-8"
          style={{ width: "90%", margin: "auto" }}
        >
          {/* Grid Section */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
            style={{ alignItems: "center" }}
          >
            {/* Mobile Image */}
            <div>
              <div className="relative w-full max-w-md">
                <img
                  src="/Images/leftMobile.png"
                  alt="Integrated Notes & File Management"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Claim Images & Attachments Card */}
            <div className="p-8 lg:p-10">
              <h4 className="text-2xl mb-3 text-orange-500">
                <span className=" text-gray-900" style={{ fontSize: "30px" }}>
                  AI-Driven Label <br />
                  Suggestions
                </span>
              </h4>
              <p
                className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6"
                style={{ fontSize: "15px" }}
              >
                Automatically detects objects within images and intelligently
                recommends the most accurate, context-specific tags to ensure
                precise categorization and faster organization.
              </p>
            </div>

            {/* Report Compile Card */}
            <div className="p-8 lg:p-10">
              <h4 className="text-2xl mb-3 text-orange-500">
                <span className=" text-gray-900" style={{ fontSize: "30px" }}>
                  Effortless System <br />
                  Integration
                </span>
              </h4>
              <p
                className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6"
                style={{ fontSize: "15px" }}
              >
                Tagged media is automatically and instantly synced to the
                corresponding AccuraCore and ClaimCore records, ensuring
                seamless accessibility across the platform and completely
                removing the need for any manual uploads or file management.
              </p>
            </div>

            {/* RT Image */}
            <div>
              <div className="relative w-full max-w-md">
                <img
                  src="/Images/effortless.png"
                  alt="Organize Your Company & Empower Your Team"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative w-full h-[400px] flex flex-col justify-center"
        style={{
          backgroundImage: "url('/Images/getTheApp.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "16rem 0rem 13rem 0rem",
        }}
      >
        {/* Text Content */}
        <div className="relative z-10 text-left px-6 md:px-16">
          <h2
            className="text-white leading-snug"
            style={{ fontWeight: 500, fontSize: "40px" }}
          >
            Leave the Old Way <br /> Behind —
            <span style={{ color: "#ffd1b5", fontWeight: 700 }}>AccuraCam</span>
            <br />
            Gets It Done Faster....!
          </h2>
        </div>

        {/* Centered Button/Text */}
        <div className="relative z-10 flex justify-center mt-8">
          <p
            className="text-white tracking-widest"
            style={{ fontWeight: 600, fontSize: "140px" }}
          >
            GET THE APP
          </p>
        </div>
      </section>
      <div style={{ width: "100%", backgroundColor: "#f4f0ed" }}>
        <img src="/Images/multiColor.png" alt="" />
      </div>
      <section className="custom-section">
        <div style={{ width: "90%" }}>
          <h4 className="text-2xl mb-3 text-orange-500">
            <span className=" text-gray-900" style={{ fontSize: "30px" }}>
              How AccuraCam
              <br />
              Streamlines Your Workflow"
            </span>
          </h4>
          <p
            className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6"
            style={{ fontSize: "15px", marginLeft: "115px" }}
          >
            AccuraCam brings every step of your claims photo process into one
            <br /> intelligent, connected platform. From the moment you capture
            an
            <br /> image to the instant it’s available in your reporting system,{" "}
            <br /> every action is automated, accurate, and effortless.
          </p>
        </div>
      </section>

      <section className="w-full" style={{ backgroundColor: "#f4f0ed" }}>
        <div className="grid grid-rows-3">
          {/* Row 1 */}
          <div
            className="grid grid-cols-3 py-6"
            style={{ borderTop: "1px solid #ddd" }}
          >
            <div className="flex items-center" style={{ padding: "0 4rem" }}>
              <h3 className=" text-black" style={{ fontSize: "20px" }}>
                Embed Metadata
              </h3>
            </div>
            <div className="text-black text-base leading-relaxed">
              Timestamp, GPS, and user ID are securely stored within each file
              for full authenticity.
            </div>
            <div
              className="flex justify-end items-center"
              style={{ padding: "0 4rem" }}
            >
              <img
                src="/Icons/arrowleft.png"
                alt="Arrow Icon"
                className="w-6 h-6"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div
            className="grid grid-cols-3 py-6"
            style={{
              borderTop: "1px solid #ddd",
              borderBottom: "1px solid #ddd",
            }}
          >
            <div className="flex items-center" style={{ padding: "0 4rem" }}>
              <h3 className=" text-black" style={{ fontSize: "20px" }}>
                Secure Sharing
              </h3>
            </div>
            <div className="text-black text-base leading-relaxed">
              Share files safely with encryption and access controls for
              complete security.
            </div>
            <div
              className="flex justify-end items-center"
              style={{ padding: "0 4rem" }}
            >
              <img
                src="/Icons/arrowleft.png"
                alt="Arrow Icon"
                className="w-6 h-6"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div
            className="grid grid-cols-3 py-6"
            style={{ borderBottom: "1px solid #ddd" }}
          >
            <div className="flex items-center" style={{ padding: "0 4rem" }}>
              <h3 className=" text-black" style={{ fontSize: "20px" }}>
                Instant Access
              </h3>
            </div>
            <div className="text-black text-base leading-relaxed">
              Access your organized photos anytime, anywhere, without delays or
              manual searching.
            </div>
            <div
              className="flex justify-end items-center"
              style={{ padding: "0 4rem" }}
            >
              <img
                src="/Icons/arrowleft.png"
                alt="Arrow Icon"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id={faqId} className="py-12 px-6" style={{width:"95%", margin:"auto"}}>
          {/* Heading */}
          <div className="mb-8">
            <h4 className="text-2xl mb-3 text-orange-500">
              <span className=" text-gray-900" style={{ fontSize: "30px" }}>
                Frequently
                <br />
                Asked Questions
              </span>
            </h4>
          </div>

          {/* FAQ List - Single Column */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white p-[25px] rounded-[10px] ">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center text-left hover:text-blue-600 transition-colors duration-200"
                >
                  <span className="text-base font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 flex-shrink-0 ${
                      openFaq === faq.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* FAQ Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === faq.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-4 text-gray-600 leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
