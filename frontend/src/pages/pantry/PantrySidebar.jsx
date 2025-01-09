import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TaskIcon from "@mui/icons-material/Task"; // For managing tasks
import GroupIcon from "@mui/icons-material/Group"; // For managing delivery personnel

const Sidebar = () => {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#6a4c9c", // Purple background
        padding: "20px",
        boxShadow:
          "5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.3)", // 3D effect
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Sidebar Header */}
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#fff",
            margin: 0,
          }}
        >
          Inner Pantry
        </h2>
      </div>

      {/* Sidebar Menu */}
      <List>
        <ListItem button component={Link} to="#">
          <ListItemIcon>
            <HomeIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" style={{ color: "#fff" }} />
        </ListItem>

        <ListItem button component={Link} to="./PantryTasks">
          <ListItemIcon>
            <TaskIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText
            primary="Food Preparation Tasks"
            style={{ color: "#fff" }}
          />
        </ListItem>
        <ListItem button component={Link} to="./DeliveryPersonnel">
          <ListItemIcon>
            <GroupIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText
            primary="Delivery Personnel"
            style={{ color: "#fff" }}
          />
        </ListItem>
        <ListItem button component={Link} to="./TrackMeals">
          <ListItemIcon>
            <LocalShippingIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText
            primary="Track Meal Deliveries"
            style={{ color: "#fff" }}
          />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
