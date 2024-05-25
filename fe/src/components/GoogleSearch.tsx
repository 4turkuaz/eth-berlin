import React, { useEffect } from 'react';
import { CssBaseline, Box, Container} from '@mui/joy';
import Sidebar from './sidebar';

function GoogleSearch() {

    const [searchHistory, setSearchHistory] = React.useState<string[]>([]);

    useEffect(() => {
        const inputElement =document.getElementsByName('search')[0] as HTMLInputElement;
        const element = document.getElementsByClassName('gsc-search-button');
        element[1]?.addEventListener('click', () => {
            if (inputElement) {
                console.log(inputElement.value);
                setSearchHistory([...searchHistory, inputElement.value]);
            }
        });
    }, [searchHistory]);

    console.log(searchHistory);

    return (
        <>
        <CssBaseline />
        <Sidebar />
        <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent:'center'}}>
            <Box sx={{ flex: 2, textAlign: 'center', maxWidth: '500px' }}>
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google" style={{ width: '50%' }} />
            <div className="gcse-search"></div>
            </Box>
        </Container>
        <Sidebar />
        </>
    );
}

export default GoogleSearch;
