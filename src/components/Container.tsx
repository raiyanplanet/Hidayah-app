// HidayahAppWebsite.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuran,
  faCalendarAlt,
  faCompass,
  faMosque,
  faStar,
  faHeart,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import android from "../assets/png/android.png";
import apple from "../assets/png/apple.png";
import companylogo from "../assets/png/logo.png";
import Developer from "../assets/png/me.jpg";
import Navber from "./Navber"; // Import Navber component
import HidayahAppShowcase from "./HidayahAppShowcase";

const HidayahAppWebsite: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const features = [
    {
      icon: faQuran,
      title: "Quran Reading",
      description: "Access the Holy Quran with translations and recitations.",
      color: "#7ED4AD",
    },
    {
      icon: faMosque,
      title: "Prayer Times",
      description: "Accurate prayer times based on your location.",
      color: "#FF4545",
    },
    {
      icon: faCompass,
      title: "Qibla Direction",
      description: "Find the Qibla direction easily wherever you are.",
      color: "#D76C82",
    },
    {
      icon: faCalendarAlt,
      title: "Islamic Calendar",
      description: "Stay updated with important Islamic dates.",
      color: "#7ED4AD",
    },
    {
      icon: faBook,
      title: "Hadith",
      description: "Access collections of Hadith for daily guidance.",
      color: "#FA4032",
    },
    {
      icon: faHeart,
      title: "Daily Duas",
      description: "A collection of Duas for every occasion.",
      color: "#CC2B52",
    },
    {
      icon: faStar,
      title: "Tasbih Counter",
      description: "Digital Tasbih for remembering Allah.",
      color: "#FBD288",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col items-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header Section */}
      <Navber darkMode={darkMode} toggleTheme={toggleTheme} />{" "}
      {/* Using Navber Component */}
      {/* App Images Section */}
      <HidayahAppShowcase />
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Features of Hidayah App
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg shadow-lg text-center  ${
                darkMode ? "bg-[#1E2A47]" : "bg-[#FDE7BB]"
              } text-white`}
            >
              <FontAwesomeIcon
                icon={feature.icon}
                style={{ color: darkMode ? feature.color : "#1E2A47" }} // Dynamically set color
                className="text-5xl mb-4"
              />
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-[#FDE7BB]" : "text-[#1E2A47]"
                } `}
              >
                {feature.title}
              </h3>
              <p
                className={`mt-2 ${
                  darkMode ? "text-[#FDE7BB]" : "text-[#1E2A47]"
                } `}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* About Section */}
      <section className="container w-[50%] max-sm:w-full mx-auto py-12 px-6 bg-transparent rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-8">
          About This App
        </h2>
        <div className="text-center flex flex-col items-center justify-center">
          <p className="font-medium mb-4">
            <strong>Developer Name:</strong> Tawsiful Alam Raiyan
          </p>
          <div className=" bg-white overflow-hidden rounded-full w-48 h-48">
            <img
              src={Developer}
              alt="Tawsiful Alam Rraiyan"
              className="w-40 mx-auto mb-6 "
            />
          </div>
          <p className="font-medium mb-4">
            <strong>Profession:</strong> Full Stack Web and Mobile app Developer
          </p>
          <p className="mb-6">
            The Hidayah App is developed to make Islamic resources easily
            accessible to everyone. It offers a range of features like Quran
            reading, prayer times, Qibla direction, and more to enrich your
            spiritual journey.
          </p>
        </div>
      </section>
      {/* About Company Section */}
      <section className="container gap-4 w-[50%] max-sm:w-full mx-auto flex flex-col items-center justify-center py-12 px-6 bg-transparent rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-6">About Raiyan Software</h2>
        <div className="bg-white rounded-full w-48 h-48">
          <img
            src={companylogo}
            alt="Raiyan Software Logo"
            className="w-40 mx-auto mb-6 "
          />
        </div>
        <p className="mb-4">
          Raiyan Software is a leading tech company committed to building
          innovative and user-friendly applications. Our mission is to empower
          users with tools that make life easier and more meaningful.
        </p>
        <p>
          Based in Bangladesh, Raiyan Software focuses on delivering
          high-quality solutions for both individuals and businesses worldwide.
        </p>
      </section>
      {/* Download Section */}
      <section
        className={`w-full py-12 text-center ${
          darkMode ? "bg-[#1E2A47]" : "bg-[#FDE7BB]"
        } text-white`}
      >
        <h2
          className={`text-2xl font-semibold  ${
            darkMode ? "text-[#FDE7BB]" : "text-[#1E2A47]"
          } `}
        >
          Download Hidayah App Today!
        </h2>
        <p
          className={`mt-4  ${darkMode ? "text-[#FDE7BB]" : "text-[#1E2A47]"} `}
        >
          Available on both Android and iOS platforms.
        </p>
        <div className="mt-6 flex justify-center gap-4 max-sm:flex max-sm:flex-col max-sm:px-10">
          <a
            href="https://expo.dev/artifacts/eas/uzdzeiTa91AUenK6He8Q2g.apk"
            className="bg-white flex items-center justify-center text-xl gap-2 text-slate-800 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-gray-200"
          >
            <img src={android} alt="" className="w-9" />
            Download Android
          </a>
          <a
            href="#"
            className="bg-white flex items-center justify-center text-xl gap-2 text-slate-800 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-gray-200"
          >
            <img src={apple} alt="" className="w-9" />
            Download Apple
          </a>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="w-full py-6 mt-auto">
        <p
          className={`text-center text-[#747474] 
          `}
        >
          © 2024 Hidayah App. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default HidayahAppWebsite;
