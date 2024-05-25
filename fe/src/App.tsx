import React, { useState } from 'react';
import './style/App.css';
import Header from './components/header';
import GoogleSearch from './components/GoogleSearch';

function App() {
  const [ads, setAds] = useState<string[]>([]);

  const handleGenerateAds = (generatedAds: string[]) => {
    setAds(generatedAds);
  };

  return (
    <div className="App">
      
      <Header />
      <div className="App-body">
        <GoogleSearch />
      </div>
    </div>
  );
}

export default App;
