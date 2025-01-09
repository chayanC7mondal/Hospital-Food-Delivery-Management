import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login"; // Import the Login component
import ChooseRole from "./pages/ChooseRole"; // Import the ChooseRole component
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<Login />} />
        <Route path="/ChooseRole" element={<ChooseRole />} />
        <Route path="/Signup" element={<Signup />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;
