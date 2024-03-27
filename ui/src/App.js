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
import OnlineHiring from "./Pages/OnlineHiring";
import AddOnlineHiring from "./Pages/AddOnlineHiring";
import HiringResponseSheet from "./Pages/HiringResponseSheeet";
import StuOnlineHiring from "./Pages/StuOnlineHiring";
import EventAdmin from "./Session/EventAdmin";
import EventDetailsAdd from "./Session/EventDetailsAdd";
import EventStudent from "./Session/EventStudent";
import Contactus from "./Pages/Contactus";
import Recuriter from "./Pages/Recuriter";
import Coordinator from "./Pages/Coordinators";
import StuApplied from "./Pages/StuApplied";
import StuPending from "./Pages/StuPending";
import AdminCoordinator from "./Pages/AdminCoordinators";
import AddCoorniators from "./Pages/AddCoordinators";
import StuProfilePage from "./Pages/StuProfilePage";
import AllStudents from "./Students/AllStudents";
import ChangePassword from "./Pages/ChangePassword";
import AdminProfilePage from "./Pages/AdminProfilePage";
import PostStudent from "./Pages/PostStudent";
import AddHiringStudent from "./Pages/AddHiringStudent";
import ApproveHiringDetails from "./Pages/ApproveHiringDetails";
import Adminresult from "./Results/Adminresult";
import AddResult from "./Results/AddResult";
import CompanyWiseResult from "./Results/CompanyWiseResult";
import StudentResult from "./Results/StudentResult";
import StudentCompWiseResult from "./Results/StudentCompanyWiseResult";

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
            <Route path="/OnlineHiring/:Id" element={<OnlineHiring/>}/>
            <Route path="/AddOnlineHiring/:Id" element={<AddOnlineHiring/>}/>
            <Route path="/responseSheet/:Id/:jobId" element={<HiringResponseSheet/>}/>
            <Route path="/OnlineHiring2/:Id" element={<StuOnlineHiring/>}/>
            <Route path="/Events/:Id" element={<EventAdmin/>}/>
            <Route path="/addEvents/:Id" element={<EventDetailsAdd/>}/>
            <Route path="/EventStudent/:Id" element={<EventStudent/>}/>
            <Route path="/Contactus" element = {<Contactus/>}/>
            <Route path="/Recuriter" element={<Recuriter/>}/>
            <Route path="/Coordinators" element={<Coordinator/>}/>
            <Route path="/StuApplied/:Id" element={<StuApplied/>}/>
            <Route path="/StuPending/:Id" element={<StuPending/>}/>
            <Route path="/AdminCoordinators/:Id" element={<AdminCoordinator/>}/>
            <Route path="/AddCoordinators/:Id" element={<AddCoorniators/>}/>
            <Route path="/StuProfilePage/:Id" element={<StuProfilePage/>}/>
            <Route path="/allStudents" element={<AllStudents/>}/>
            <Route path="/changePass/:Id" element={<ChangePassword/>}/>
            <Route path="/AdminProfilePage/:Id" element={<AdminProfilePage/>}/>
            <Route path="/PostStudent/:Id" element={<PostStudent/>}/>
            <Route path="/AddHiringStudent/:Id" element={<AddHiringStudent/>}/>
            <Route path="/ApproveHiringDetails/:Id/:jobId" element={<ApproveHiringDetails/>}/>
            <Route path="/Adminresult/:Id" element={<Adminresult/>}/>
            <Route path ="/AddResult/:Id" element={<AddResult/>}/>
            <Route path="/CompanyWiseResult/:comp" element={<CompanyWiseResult/>}/>
            <Route path="/StudentResult" element={<StudentResult/>}/>
            <Route path="/CompStudResult/:comp" element={<StudentCompWiseResult/>}/>
        </Routes>
    );
}
export default App;