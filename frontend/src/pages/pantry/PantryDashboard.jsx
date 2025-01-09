import { Outlet } from "react-router-dom";
import Sidebar from "./PantrySidebar";

const PantryDashboard = () => {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default PantryDashboard;
