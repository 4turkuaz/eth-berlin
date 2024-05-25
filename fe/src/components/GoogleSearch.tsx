import React, { useEffect, useState, useRef } from 'react';
import { CssBaseline, Box, Container } from '@mui/joy';
import Sidebar from './Sidebar';

function GoogleSearch() {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const inputElementRef = useRef<HTMLInputElement | null>(null);
  const searchButtonRef = useRef<HTMLElement | null>(null);

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
      <Sidebar />
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ flex: 2, textAlign: 'center', maxWidth: '500px' }}>
          <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google" style={{ width: '50%' }} />
          <div id="gs_tti50" className="gcse-search"></div> {/* Add your known ID here */}
        </Box>
      </Container>
      <Sidebar />
    </>
  );
}

export default GoogleSearch;
