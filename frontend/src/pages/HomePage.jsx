import { Link } from "react-router-dom";
import HospitalImage from "../assets/homepage3.jpg"; // Import the image file
import LoginPage from "./Login";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      {/* Left side - Image as background without floating effect */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HospitalImage})`, // Use the imported image
        }}
      ></div>

      {/* Right side - Content with rounded corners and shadow effect */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 bg-white  rounded-lg">
        {/* Header with professional font and bold styling */}
        <h1 className="text-5xl font-extrabold text-gray-800 text-center leading-tight">
          Welcome to
          <br />
          Hospital Food Management
          <br />
          System
        </h1>

        {/* Paragraph with more professional text styling */}
        <p className="mt-6 text-lg text-gray-700 text-center font-medium">
          Efficiently manage hospital meal planning, preparation, and delivery.
          Track patient dietary needs, streamline pantry operations, and ensure
          timely delivery. Simplify food management and improve healthcare
          services.
        </p>

        <div className="flex flex-col items-center gap-4 mt-8 w-full">
          {/* Login Button */}
          <Link to="/LoginPage" className="w-full">
            <button className="w-full mt-4 py-2 px-4 border border-[#7f56da] text-[#7f56da] rounded-full hover:bg-[#7f56da] hover:text-white transition-all">
              Login
            </button>
          </Link>

          {/* Login as Guest Button */}
          <Link to="/guest" className="w-full">
            <button className="w-full mt-4 mb-6 py-2 px-4 border border-[#7f56da] text-[#7f56da] rounded-full hover:bg-[#7f56da] hover:text-white transition-all">
              Login as Guest
            </button>
          </Link>

          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#550080]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
