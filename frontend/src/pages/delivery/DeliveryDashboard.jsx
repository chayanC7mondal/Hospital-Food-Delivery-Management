import { Outlet } from "react-router-dom";
import Sidebar from "./DeliverySidebar"; // Assuming the sidebar is specific to delivery personnel

const DeliveryDashboard = () => {
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
        {/* Main Outlet for Routing */}
        <Outlet />
      </div>
    </div>
  );
};

export default DeliveryDashboard;
