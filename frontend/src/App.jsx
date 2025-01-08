import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login"; // Import the Login component
import ChooseRole from "./pages/ChooseRole"; // Import the ChooseRole component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<Login />} />
        <Route path="/ChooseRole" element={<ChooseRole />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;
