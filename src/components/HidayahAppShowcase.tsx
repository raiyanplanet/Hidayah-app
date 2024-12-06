import { useState } from "react";
// app screen
import homedark from "../assets/mobile ss/homedark.jpg";
import homelight from "../assets/mobile ss/homelight.jpg";
import prayerdark from "../assets/mobile ss/prayerdark.jpg";
import prayerlight from "../assets/mobile ss/prayerlight.jpg";
import tasbhidark from "../assets/mobile ss/tasbhidark.jpg";
import tasbhilight from "../assets/mobile ss/tasbhilight.jpg";

const HidayahAppShowcase = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handler for toggling dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Image sources for light and dark modes
  const images = {
    home: isDarkMode ? homedark : homelight,
    prayer: isDarkMode ? prayerdark : prayerlight,
    tasbih: isDarkMode ? tasbhidark : tasbhilight,
  };

  return (
    <section className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
        Explore the Hidayah App
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 text-center">
        Dive into the features of the Hidayah App. Here are screenshots
        showcasing its elegant design, intuitive functionality, and useful
        features.
      </p>

      {/* Dark Mode Toggle */}
      <div className="flex justify-center mb-10">
        <button
          onClick={toggleDarkMode}
          className={`px-4 py-2 rounded-md ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Home Screens */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
            Home Screens
          </h3>
          <div className="flex justify-center">
            <img
              src={images.home}
              alt={`Hidayah Home Screen (${isDarkMode ? "Dark" : "Light"})`}
              className="w-full max-w-[200px] rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Prayer Screens */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
            Prayer Screens
          </h3>
          <div className="flex justify-center">
            <img
              src={images.prayer}
              alt={`Hidayah Prayer Screen (${isDarkMode ? "Dark" : "Light"})`}
              className="w-full max-w-[200px] rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Tasbih Screens */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
            Tasbih Screens
          </h3>
          <div className="flex justify-center">
            <img
              src={images.tasbih}
              alt={`Hidayah Tasbih Screen (${isDarkMode ? "Dark" : "Light"})`}
              className="w-full max-w-[200px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HidayahAppShowcase;
