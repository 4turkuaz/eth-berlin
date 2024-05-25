import React, { useState } from "react";
import "../style/MainContent.css";

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
      <textarea
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
        placeholder="Paste your search data here..."
      ></textarea>
      <button onClick={generateAds}>Generate Ads</button>
    </div>
  );
};

export default MainContent;
