import React from "react";
import "../style/MainContent.css";
import GoogleSearch from "./GoogleSearch";

interface MainContentProps {
  onGenerateAds: (ads: string[]) => void;
}

const MainContent: React.FC<MainContentProps> = ({ onGenerateAds }) => {
  return (
    <div className="App-main">
     <GoogleSearch />
    </div>
  );
};

export default MainContent;
