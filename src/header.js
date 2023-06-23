import React from "react";
import "./header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HeaderOption from "./headerOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { NoEncryption } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./Firebase";
function AvatarImage() {
  return (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SuXBmOmRrKY_bZf_9MQx5rJ5YNctobGxoAIqDCchaA&usqp=CAU&ec=48600113"
      alt="Avatar"
      height="25px"
    />
  );
}
function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png"
          alt=""
        ></img>
        <div className="header_search">
          <SearchOutlinedIcon />
          <input placeholder="Search" type="text"></input>
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatRoundedIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption avatar={true} title="Me" onClick={logoutApp} />
      </div>
    </div>
  );
}

export default Header;
