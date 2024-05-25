import { Box } from "@mui/joy";


export default function Sidebar({ad}: any) {
    return (
        <Box mt={20}>
            <img src={"/"+ad.image} alt={ad.title} style={{ maxWidth: "300px", maxHeight: "300px" }} /><br />
            {ad.title}
        </Box>
    );
}