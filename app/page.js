"use client";
import { useState } from "react";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import TheOldWaySection from "@/components/TheOldWaySection";
import CoreFeatures from "@/components/CoreFeatures";
import AIDriven from "@/components/AIDriven";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundColor: "#e0e6e2",
        }}
      >
        {/* Header */}
        <header className="fixed top-0 left-0 w-full z-50">
          <nav
            className="flex items-center justify-between px-4 md:px-8 py-3"
            style={{
              backgroundColor: "#191817",
              paddingBottom: 0,
              paddingTop: 0,
            }}
          >
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/Logos/Accuracam/AccuraCam.png"
                alt="AccuraCam Logo"
                className="object-contain"
                style={{ height: "75px" }}
              />
            </div>

            {/* Desktop Menu */}
            <div
              className="hidden md:flex items-center space-x-6"
              style={{ marginLeft: "10%" }}
            >
              <div
                className="flex items-center text-white hover:text-blue-200 cursor-pointer"
                style={{ fontSize: "12px" }}
              >
                <span>About</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
              <div
                className="flex items-center text-white hover:text-blue-200 cursor-pointer"
                style={{ fontSize: "12px" }}
              >
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
              <div
                className="flex items-center text-white hover:text-blue-200 cursor-pointer"
                style={{ fontSize: "12px" }}
              >
                <span>Industries</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
              <div
                className="flex items-center text-white hover:text-blue-200 cursor-pointer"
                style={{ fontSize: "12px" }}
              >
                <span>Resources</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
              <div
                className="flex items-center text-white hover:text-blue-200 cursor-pointer"
                style={{ fontSize: "12px" }}
              >
                <span>Contact</span>
              </div>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                className="flex items-center space-x-2 rounded-full"
                style={{
                  backgroundColor: "#fff",
                  color: "#0061A4",
                  padding: "20px 18px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                <img
                  src="/Icons/Vector.svg"
                  alt="Login Icon"
                  className="w-4 h-4"
                />
                <span>Login</span>
              </Button>

              <Button
                className="flex items-center space-x-2 rounded-full"
                style={{
                  backgroundColor: "#0061A4",
                  color: "#fff",
                  padding: "20px 18px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                <span>Book Demo</span>
                <img
                  src="/Icons/Vector.png"
                  alt="Book Demo Icon"
                  className="w-3 h-3"
                />
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <X className="text-white w-8 h-8" />
                ) : (
                  <Menu className="text-white w-8 h-8" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-[#191817] px-6 py-4 space-y-4">
              <div
                className="flex flex-col space-y-4 text-white text-sm"
                style={{ alignItems: "center" }}
              >
                <span>About</span>
                <span>Solutions</span>
                <span>Industries</span>
                <span>Resources</span>
                <span>Contact</span>
              </div>

              {/* Mobile Buttons */}
              <div
                className="flex flex-col space-y-3 mt-4"
                style={{ width: "50%", margin: "auto" }}
              >
                <Button
                  className="flex items-center justify-center space-x-2 rounded-full"
                  style={{
                    backgroundColor: "#fff",
                    color: "#0061A4",
                    padding: "14px 18px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  <img
                    src="/Icons/Vector.svg"
                    alt="Login Icon"
                    className="w-4 h-4"
                  />
                  <span>Login</span>
                </Button>

                <Button
                  className="flex items-center justify-center space-x-2 rounded-full"
                  style={{
                    backgroundColor: "#0061A4",
                    color: "#fff",
                    padding: "14px 18px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  <span>Book Demo</span>
                  <img
                    src="/Icons/Vector.png"
                    alt="Book Demo Icon"
                    className="w-3 h-3"
                  />
                </Button>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <main className="px-6 py-32 md:py-44" style={{ paddingBottom: "10px" }}>
          <div className="relative max-w-7xl mx-auto px-6 py-20">
            {/* Text Section */}
            <div className="relative z-10" style={{ marginLeft: "5%" }}>
              <h1 style={{ fontSize: "85px", fontWeight: "500" }}>
                Smart Field <br />
                <span>Photo Capture</span>
              </h1>
              <p
                className="text-gray-700 mb-8 leading-relaxed"
                style={{ maxWidth: "500px", fontSize: "26px" }}
              >
                Capture, tag, and sync inspection photos with courtroom-ready
                accuracy — instantly.
              </p>
              <Button
                className="text-white rounded-full"
                style={{
                  backgroundColor: "#0061A4",
                  color:"white",
                  padding: "25px 18px",
                }}
              >
                Watch How It Works
                <img
                  src="/Icons/Vector.png"
                  alt="Arrow Icon"
                  className="w-3 h-4 ml-2"
                />
              </Button>
            </div>

            {/* Overlapping Image */}
            <div
              className="absolute top-0 right-0"
              style={{
                width: "50%",
                zIndex: 20, // higher than text
              }}
            >
              <img
                src="/Images/Hero-mobiles.png"
                alt="Hero Mobiles"
                className="object-contain drop-shadow-2xl"
                style={{
                  width: "80%",
                  maxWidth: "600px",
                  filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))",
                }}
              />
            </div>
          </div>
        </main>
      </div>

      {/* Animation Section */}
      <div
        className="w-full overflow-hidden"
        style={{
          backgroundColor: "#fff",
          padding: "30px 0",
          position: "relative",
        }}
      >
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "scrollText 15s linear infinite",
          }}
        >
          <span
            style={{
              fontSize: "15px",
              fontWeight: "500",
              letterSpacing: "25px",
              color: "#000",
              marginRight: "100px",
            }}
          >
            A C C U R A C A M A C C U R A C A M A C C U R A C A M
          </span>
        </div>
      </div>

      <style>
        {`
@keyframes scrollText {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
`}
      </style>

      <TheOldWaySection />

      <CoreFeatures />

      <AIDriven />

      <Footer />
    </>
  );
}
