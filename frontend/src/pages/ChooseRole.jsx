import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ShootingStarsBackground from "../components/ShootingStarsBackground"; // Import the shooting star background

const ChooseRole = ({ visitor }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const password = "zxc";

  const mockLogin = async (fields, role) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (fields.email || fields.pantryCode) {
          resolve({ status: "success", role });
        } else {
          reject({ status: "error", message: "Network Error" });
        }
      }, 1000);
    });
  };

  const navigateHandler = async (role) => {
    setLoader(true);

    try {
      let fields;

      if (role === "Food Manager") {
        if (visitor === "guest") {
          fields = { email: "foodmanager@chamchum.com", password };
        } else {
          navigate("/LoginPage", { state: { role } }); // Pass role to the login page
          return;
        }
      } else if (role === "Inner Pantry") {
        if (visitor === "guest") {
          fields = { pantryCode: "1234", password };
        } else {
          navigate("/LoginPage", { state: { role } }); // Pass role to the login page
          return;
        }
      } else if (role === "Delivery Personnel") {
        if (visitor === "guest") {
          fields = { email: "delivery@chamchum.com", password };
        } else {
          navigate("/LoginPage", { state: { role } }); // Pass role to the login page
          return;
        }
      }

      const response = await mockLogin(fields, role);
      if (response.status === "success") {
        setLoader(false);

        if (role === "Food Manager") {
          navigate("/FoodManager/dashboard");
        } else if (role === "Inner Pantry") {
          navigate("/InnerPantry/dashboard");
        } else if (role === "Delivery Personnel") {
          navigate("/DeliveryPersonnel/dashboard");
        }
      }
    } catch (error) {
      setLoader(false);
      setMessage(error.message || "An error occurred");
      setShowPopup(true);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Shooting Stars Background */}
      <ShootingStarsBackground />

      {/* Foreground Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-gray-800 p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-white">
            Choose Your Role
          </h1>
          <p className="text-sm text-gray-300">
            Select a role to log in and explore your dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            onClick={() => navigateHandler("Food Manager")}
            className="bg-white hover:bg-purple-500 hover:shadow-lg cursor-pointer p-6 rounded-lg text-center transition border border-gray-300"
          >
            <div className="text-5xl mb-4">
              <i className="fas fa-utensils"></i>
            </div>
            <h2 className="text-xl font-semibold mb-2">Food Manager</h2>
            <p className="text-sm text-gray-500">
              Manage the restaurant menu, inventory, and pricing.
            </p>
          </div>

          <div
            onClick={() => navigateHandler("Inner Pantry")}
            className="bg-white hover:bg-purple-500 hover:shadow-lg cursor-pointer p-6 rounded-lg text-center transition border border-gray-300"
          >
            <div className="text-5xl mb-4">
              <i className="fas fa-warehouse"></i>
            </div>
            <h2 className="text-xl font-semibold mb-2">Inner Pantry</h2>
            <p className="text-sm text-gray-500">
              Oversee kitchen stock and prepare orders.
            </p>
          </div>

          <div
            onClick={() => navigateHandler("Delivery Personnel")}
            className="bg-white hover:bg-purple-500 hover:shadow-lg cursor-pointer p-6 rounded-lg text-center transition border border-gray-300"
          >
            <div className="text-5xl mb-4">
              <i className="fas fa-truck"></i>
            </div>
            <h2 className="text-xl font-semibold mb-2">Delivery Personnel</h2>
            <p className="text-sm text-gray-500">
              Deliver orders to customers and track deliveries.
            </p>
          </div>
        </div>

        {loader && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="flex flex-col items-center">
              <div className="loader border-t-4 border-white rounded-full w-12 h-12 animate-spin"></div>
              <p className="mt-4 text-white">Please Wait</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChooseRole;
