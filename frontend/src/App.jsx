import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login"; // Import the Login component
import ChooseRole from "./pages/ChooseRole"; // Import the ChooseRole component
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/manager/AdminDashboard"; // Admin layout
import AdminHomePage from "./pages/manager/AdminHomepage"; // Nested component
import PatientPage from "./pages/manager/patients/PatientHome"; // Nested component
import DietChartPage from "./pages/manager/dietcharts/DietChart"; // Nested component
import PantryDashboard from "./pages/pantry/PantryDashboard"; // Pantry layout
import PantryHomePage from "./pages/pantry/PantryHome"; // Nested component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<Login />} />
        <Route path="/ChooseRole" element={<ChooseRole />} />
        <Route path="/Signup" element={<Signup />} />
        {/* Admin Routes */}
        <Route path="/AdminDashboard" element={<AdminDashboard />}>
          <Route path="AdminHomepage" element={<AdminHomePage />} />
          <Route path="PatientHome" element={<PatientPage />} />
          <Route path="DietChartPage" element={<DietChartPage />} />
        </Route>
        <Route path="/PantryDashboard" element={<PantryDashboard />}>
          <Route path="PantryHomePage" element={<PantryHomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
