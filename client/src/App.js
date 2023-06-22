import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />{" "}
        </Route>{" "}
        <Route path="/dashboard" element={<AdminRoute />}>
          {" "}
          <Route path="admin" element={<AdminDashboard />} />{" "}
          {/*          <Route path="admin/create-category" element={<CreateCategory />} />
                                              <Route path="admin/create-product" element={<CreateProduct />} />
                                              <Route path="admin/users" element={<Users />} /> */}{" "}
        </Route>{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
        <Route path="/forgot-password" element={<ForgotPasssword />} />{" "}
        <Route path="/register" element={<Register />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/policy" element={<Policy />} />{" "}
        <Route path="*" element={<Pagenotfound />} />{" "}
      </Routes>{" "}
    </>
  );
}

export default App;
