import React from "react";
import logo from "../assets/midas-brand.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../services/auth/authSlice.js";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Dropdown, Space} from "antd";
import { HiChevronDown, HiUser } from "react-icons/hi";
import Common from "../components/common";
import RightSider from "./RightSider";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };



  const data = useSelector((state) => state.auth.userInfo?.data?.user);

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          {data?.firstName} {data?.lastName}
        </a>
      ),
    },

    {
      key: "2",
      label: (
        <Common.Buttons
          name="Logout"
          onClick={handleLogout}
          className="my-button btn-primary text-uppercase flex bg-[#0d2f66]"
        />
      ),
    },
  ];

  if (!data) {
    return null; // or you can return some default UI, such as a loading spinner
  }

  return (
    <div className="flex items-center justify-between bg-white shadow-sm px-3">
      <div>
        <Link to="/">
          <img src={logo} alt="..." className="h-11" />
        </Link>
      </div>
      <h3 className="fs-15 fw-600 text-primary mb-0 h-0 flex items-center justify-center">
        MiDas Hospital, Pani Pokhari, Kathmandu
      </h3>

<div className="flex items-center ">

<RightSider />
<Dropdown
  menu={{ items }}
  className="h-38 ml-5 text-white flex cursor-pointer items-center rounded-md bg-main px-3 py-1"
>
  <div onClick={(e) => e.preventDefault()}>
    <Space>
      <HiUser size={18} />
      <HiChevronDown size={18} />
    </Space>
  </div>
</Dropdown>

</div>
  
    </div>
  );
}

export default Navbar;
