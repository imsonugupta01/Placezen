import { Routes,Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import StudentProfile from "./Pages/StudentProfile";
import HomePage from "./Pages/HomePage";
import AdminLogin from "./Pages/AdminLogin";
import AdminProfile from "./Pages/AdminProfile";
import AdminApprovals from "./Pages/AdminApprovals";
import SignUpRequest from "./Approval NavPage/SignUpRequest";
import OffHiring from "./Pages/OffHiring";
import AddHiring from "./Pages/AddHiring";
import CampusDrive from "./Pages/CapusDrive";
import HiringDetails from "./Pages/HiringDetails";

function App(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/StudentLogin" element = {<Login/>} />
            <Route path="/AdminLogin" element={<AdminLogin/>}/>
            <Route path="/SignUp" element = {<SignUp/>}/>
            <Route path="/StudentProfile/:Id" element={<StudentProfile/>}/>
            <Route path="/AdminProfile/:Id" element={<AdminProfile/>}/>
            <Route path="/AdminApprovals/:Id" element={<AdminApprovals/>}/>
            <Route path="/SignUpRequest/:Id" element={<SignUpRequest/>}/>
            <Route path="/OffHiring/:Id" element={<OffHiring/>}/>
            <Route path="/AddHiring/:Id" element={<AddHiring/>}/>
            <Route path="/CampusDrive/:Id" element={<CampusDrive/>}/>
            <Route path="/HiringDetails/:Id/:JobId" element={<HiringDetails/>}/>
        </Routes>
    );
}
export default App;