import React from "react";

export default function SidebarRight() {
  return (
    <div style={{
      width: "250px",
      padding: "20px",
      borderLeft: "1px solid #e6ecf0",
      height: "100vh",
      position: "sticky",
      top: 0,
      backgroundColor: "#f5f8fa"
    }}>
      <h4>Trends</h4>
      <p>#ReactJS</p>
      <p>#ReduxToolkit</p>
      <p>#ViteJS</p>
      <h4 style={{ marginTop: "30px" }}>Who to follow</h4>
      <p>@dhruvi</p>
      <p>@developer</p>
    </div>
  );
}
