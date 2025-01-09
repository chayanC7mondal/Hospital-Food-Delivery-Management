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
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
          Delivery Dashboard
        </h2>
        <p>
          Welcome to the Delivery Personnel Dashboard. Here you can manage your
          assigned meal deliveries, mark deliveries as completed, and track your
          delivery status.
        </p>

        {/* Main Outlet for Routing */}
        <Outlet />
      </div>
    </div>
  );
};

export default DeliveryDashboard;
