import React, { useState } from 'react';
import './style/App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import MainContent from './components/main';

function App() {
  const [ads, setAds] = useState<string[]>([]);

  const handleGenerateAds = (generatedAds: string[]) => {
    setAds(generatedAds);
  };

  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <Sidebar position="left" ad={ads[0]} />
        <MainContent onGenerateAds={handleGenerateAds} />
        <Sidebar position="right" ad={ads[1]} />
      </div>
    </div>
  );
}

export default App;
