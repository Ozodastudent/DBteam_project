import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/registration/Register";
import Sales from "./pages/sales/Sales";
import Rent from "./pages/rent/Rent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sales" element={<Sales/>}/>
        <Route path="/rent" element={<Rent/>}/>
      </Routes>
    </Router>
  );
}

export default App;


