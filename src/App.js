import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Users from "./pages/Users";
import Interests from "./pages/Interests";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import EditInterest from "./pages/EditIntetest";
import AddQ from "./pages/AddQ";
import ProfilMbkm from "./pages/ProfilMbkm";
import ProfilMinat from "./pages/ProfilMinat";
import AddUserExcel from "./pages/AddUserExcel";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/add" element={<AddUser/>}/>
        <Route path="/users/addExcel" element={<AddUserExcel/>}/>
        <Route path="/users/edit/:id" element={<EditUser/>}/>
        <Route path="/interests" element={<Interests/>}/>
        <Route path="/interests/edit/:id" element={<EditInterest/>}/>
        <Route path="/interests/mbkm/:id" element={<ProfilMbkm/>}/>
        <Route path="/interests/minat/:id" element={<ProfilMinat/>}/>
        <Route path="/formq" element={<AddQ/>}/> */}

{/* Route Deployment Github */}
        <Route path="/jimat_ui_front" element={<Dashboard/>}/>
        <Route path="/jimat_ui_front/signup" element={<SignUp/>}/>
        <Route path="/jimat_ui_front/users" element={<Users/>}/>
        <Route path="/jimat_ui_front/users/add" element={<AddUser/>}/>
        <Route path="/jimat_ui_front/users/addExcel" element={<AddUserExcel/>}/>
        <Route path="/jimat_ui_front/users/edit/:id" element={<EditUser/>}/>
        <Route path="/jimat_ui_front/interests" element={<Interests/>}/>
        <Route path="/jimat_ui_front/interests/add" element={<AddInterest/>}/>
        <Route path="/jimat_ui_front/interests/edit/:id" element={<EditInterest/>}/>
        <Route path="/jimat_ui_front/interests/mbkm/:id" element={<ProfilMbkm/>}/>
        <Route path="/jimat_ui_front/interests/minat/:id" element={<ProfilMinat/>}/>
        <Route path="/jimat_ui_front/formq" element={<AddQ/>}/>
      </Routes> 
      </BrowserRouter>
    </div>
    );
}

export default App;
