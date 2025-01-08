import React from "react";

export const RedButton = ({ children, ...props }) => (
  <button
    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-400 focus:outline-none"
    {...props}
  >
    {children}
  </button>
);

export const BlackButton = ({ children, ...props }) => (
  <button
    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none"
    {...props}
  >
    {children}
  </button>
);

export const DarkRedButton = ({ children, ...props }) => (
  <button
    className="bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-400 focus:outline-none"
    {...props}
  >
    {children}
  </button>
);

export const BlueButton = ({ children, ...props }) => (
  <button
    className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none"
    {...props}
  >
    {children}
  </button>
);

export const PurpleButton = ({ children, ...props }) => (
  <button
    className="bg-purple-900 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none"
    {...props}
  >
    {children}
  </button>
);

export const LightPurpleButton = ({ children, ...props }) => (
  <button
    className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-500 focus:outline-none"
    {...props}
  >
    {children}
  </button>
);

export const GreenButton = ({ children, ...props }) => (
  <button
    className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none"
    {...props}
  >
    {children}
  </button>
);

export const BrownButton = ({ children, ...props }) => (
  <button
    className="bg-brown-800 text-white px-4 py-2 rounded-md hover:bg-brown-600 focus:outline-none"
    {...props}
  >
    {children}
  </button>
);

export const IndigoButton = ({ children, ...props }) => (
  <button
    className="bg-indigo-800 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none"
    {...props}
  >
    {children}
  </button>
);
