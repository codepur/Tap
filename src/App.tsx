import "./App.css";
import SignUp from "../src/pages/regular/SignUp";
import Login from "./pages/regular/Login";
import { Route, Routes } from "react-router-dom";
import ForgetPassword from "./pages/regular/ForgetPassword";
import DashBoard from "./pages/protected/DashBoard";
import Profile from "./pages/protected/Profile";
// import SignUp from "./pages/regular/SignUp";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgetpassword" element={<ForgetPassword />} />
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;
