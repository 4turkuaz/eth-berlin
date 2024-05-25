import React from "react";
import "../style/Sidebar.css";

interface SidebarProps {
  position: "left" | "right";
  ad?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ position, ad }) => {
  return (
    <div className={`App-sidebar App-sidebar-${position}`}>
      <p>{ad ? ad : "Ad space"}</p>
    </div>
  );
};

export default Sidebar;
