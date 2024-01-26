import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/registration/Register";
import Sales from "./pages/sales/Sales";
import Rent from "./pages/rent/Rent";
import EachHome from "./pages/eachHome/EachHome";
import RegistrationType from "./pages/registration/register_type";
import RegisterCustomer from "./pages/registration/RegisterCustomer";
import RegisterAgent from "./pages/registration/RegisterAgent";
import Search from "./pages/search/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sales" element={<Sales/>}/>
        <Route path="/rent" element={<Rent/>}/>
        <Route path="/sales/:id" element={<EachHome/>}/>
        <Route path="/register_type" element={<RegistrationType/>}/>
        <Route path="/register_customer" element={<RegisterCustomer/>}/>
        <Route path="/register_agent" element={<RegisterAgent/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </Router>
  );
}

export default App;
