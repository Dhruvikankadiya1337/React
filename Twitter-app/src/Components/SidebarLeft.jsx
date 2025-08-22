import React from "react";
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaUser, FaFeather } from "react-icons/fa";

export default function SidebarLeft() {
  return (
    <div style={{
      width: "250px",
      padding: "20px",
      borderRight: "1px solid #e6ecf0",
      height: "100vh",
      position: "sticky",
      top: 0
    }}>
      {/* Twitter Logo */}
      <div style={{ fontSize: "28px", fontWeight: "bold", color: "#1DA1F2", marginBottom: "30px" }}>
        🐦 Twitter
      </div>

      {/* Navigation Links */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={navItemStyle}><FaHome /> <span style={{ marginLeft: "15px" }}>Home</span></li>
        <li style={navItemStyle}><FaHashtag /> <span style={{ marginLeft: "15px" }}>Explore</span></li>
        <li style={navItemStyle}><FaBell /> <span style={{ marginLeft: "15px" }}>Notifications</span></li>
        <li style={navItemStyle}><FaEnvelope /> <span style={{ marginLeft: "15px" }}>Messages</span></li>
        <li style={navItemStyle}><FaBookmark /> <span style={{ marginLeft: "15px" }}>Bookmarks</span></li>
        <li style={navItemStyle}><FaUser /> <span style={{ marginLeft: "15px" }}>Profile</span></li>
      </ul>

      {/* Tweet Button */}
      <button style={{
        marginTop: "30px",
        width: "100%",
        padding: "12px 0",
        backgroundColor: "#1DA1F2",
        color: "#fff",
        border: "none",
        borderRadius: "25px",
        fontWeight: "bold",
        cursor: "pointer",
        fontSize: "16px"
      }}>
        <FaFeather style={{ marginRight: "8px" }}/> Tweet
      </button>
    </div>
  );
}

// Navigation item hover style
const navItemStyle = {
  display: "flex",
  alignItems: "center",
  padding: "12px 10px",
  borderRadius: "25px",
  cursor: "pointer",
  fontSize: "18px",
  color: "#0f1419",
  marginBottom: "10px",
  transition: "background-color 0.2s",
  hover: {
    backgroundColor: "#e8f5fe"
  }
};
