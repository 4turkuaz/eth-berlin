import React, { useState } from "react";
import "../style/MainContent.css";
import GoogleSearch from "./GoogleSearch";
import Sidebar from "./Sidebar";

interface MainContentProps {
  onGenerateAds: (ads: string[]) => void;
}

const MainContent: React.FC<MainContentProps> = ({ onGenerateAds }) => {
  const [searchData, setSearchData] = useState<string>("");

  const generateAds = async () => {
    try {
      const response = await fetch("http://localhost:8000/generateAds", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchData }),
      });
      const result = await response.json();
      onGenerateAds(result.ads);
    } catch (error) {
      console.error("Error generating ads:", error);
    }
  };

  return (
    <div className="App-main">
     <GoogleSearch />
    </div>
  );
};

export default MainContent;
