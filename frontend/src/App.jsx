import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
