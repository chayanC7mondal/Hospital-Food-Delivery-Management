import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PatientPage from "./patients/PatientHome";
import DietChartPage from "./dietcharts/DietChart";

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
          Food Manager
        </h2>
      </div>

      {/* Sidebar Menu */}
      <List>
        <ListItem button component={Link} to="./AdminHomePage">
          <ListItemIcon>
            <HomeIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" style={{ color: "#fff" }} />
        </ListItem>
        <ListItem button component={Link} to="./PatientHome">
          <ListItemIcon>
            <PersonIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Manage Patients" style={{ color: "#fff" }} />
        </ListItem>
        <ListItem button component={Link} to="./DietChartPage">
          <ListItemIcon>
            <RestaurantMenuIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Diet Charts" style={{ color: "#fff" }} />
        </ListItem>
        <ListItem button component={Link} to="/admin/pantry">
          <ListItemIcon>
            <AssignmentTurnedInIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Pantry Management" style={{ color: "#fff" }} />
        </ListItem>
        <ListItem button component={Link} to="/admin/track-meals">
          <ListItemIcon>
            <LocalShippingIcon style={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText
            primary="Track Meal Preparation and Delivery"
            style={{ color: "#fff" }}
          />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
