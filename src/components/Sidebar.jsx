import React from "react";
import {IoPerson, IoReader, IoHome, IoLogOut, IoCheckbox, IoCloudUpload} from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {LogOut, reset} from '../features/authSlice.js';

const Sidebar = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.auth);

const logout = () =>{
  dispatch(LogOut());
  dispatch(reset());
  navigate("/");
};

  return (
    <div>
    <aside className="menu pl-4 has-shadow">
        <p className="menu-label">General</p>
      <ul className="menu-list">
        <li> 
            <NavLink to={"/jimat_ui_front/dashboard"}><IoHome/> Dashboard </NavLink>
        </li>
        <li>
            <NavLink to={"/jimat_ui_front/interests"}><IoReader/> Interests</NavLink>
        </li>
        <li>
            <NavLink to={"/jimat_ui_front/formq"}><IoCheckbox/> Form Pertanyaan</NavLink>
        </li>
    </ul>
  {user && user.role === "admin" && (
    <div>
      <p className="menu-label">
    Admin
  </p>
  <ul className="menu-list">
    <li>
    <NavLink to={"/jimat_ui_front/users"}><IoPerson/> users</NavLink>
    </li>
    <li>
    <NavLink to={"/jimat_ui_front/users/addExcel"}><IoCloudUpload/> Add Users</NavLink>
    </li>
  </ul>
    </div>
  )}

  <p className="menu-label">Settings</p>
  <ul className="menu-list">
    <li>
        <button onClick={logout} className='button is-white'><IoLogOut/>Logout</button>
    </li>
  </ul>
</aside>
    </div>
  )
}

export default Sidebar