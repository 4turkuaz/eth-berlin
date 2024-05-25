import React, { useEffect, useState, useRef } from 'react';
import { CssBaseline, Box, Container, Button } from '@mui/joy';
import Sidebar from './sidebar';

const ADS = [
  { "title": "Basketball Shoes", "image": "shoe.webp" },
  { "title": "Rolex", "image": "watch.webp" },
  { "title": "Sofa", "image": "sofa.webp" },
  { "title": "Yacht", "image": "yacht.jpg" },
  { "title": "Brave Plugin", "image": "brave.webp" },
  { "title": "ETHBerlin Hackathon", "image": "ethberlin.webp" },
  { "title": "Vacation in Venezuela", "image": "vacation.webp" },
  { "title": "Sunglasses", "image": "sunglasses.webp" }
];

function GoogleSearch() {
    const [searchHistory, setSearchHistory] = React.useState<string[]>([]);
    const [firstResult, setFirstResult] = React.useState(ADS[1]);
    const [secondResult, setSecondResult] = React.useState(ADS[2]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch("http://localhost:8000/generateAds", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ searchData: searchHistory.join("\n")}),
          });
          const result = await response.json();
          setFirstResult(ADS[parseInt(result["ads"][0])-1]);
          setSecondResult(ADS[parseInt(result["ads"][1])-1]);
        } catch (error) {
          console.error("Error generating ads:", error);
        }
      }
      if (searchHistory.length > 0) fetchData();
    }, [searchHistory]);

  useEffect(() => {
    const setupSearchListener = () => {
      const parentElement = document.getElementById('gs_tti50'); // Replace 'parent-id' with the actual ID of the parent element
      const inputElement = parentElement?.querySelector('input[name="search"]') as HTMLInputElement;
      const searchButton = document.querySelector('.gsc-search-button') as HTMLElement;

      if (inputElement && searchButton) {
        inputElementRef.current = inputElement;
        searchButtonRef.current = searchButton;

        const handleSearch = () => {
          if (inputElementRef.current) {
            setSearchHistory(prev => [...prev, inputElementRef.current!.value]);
          }
        };

        searchButton.addEventListener('click', handleSearch);

        // Cleanup event listener on unmount
        return () => {
          searchButton.removeEventListener('click', handleSearch);
        };
      }
    };

    const timeoutId = setTimeout(setupSearchListener, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    console.log(searchHistory);
  }, [searchHistory]);

  return (
    <>
      <CssBaseline />
      <Sidebar ad={firstResult}/>
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ flex: 2, textAlign: 'center', maxWidth: '500px' }}>
          <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google" style={{ width: '50%' }} />
          <div id="gs_tti50" className="gcse-search"></div> {/* Add your known ID here */}
        </Box>
      </Container>
        <Button color="primary" onClick={() => setSearchHistory(["nba results"])}>Set Search History</Button>
      <Sidebar ad={secondResult}/>
    </>
  );
}

export default GoogleSearch;
