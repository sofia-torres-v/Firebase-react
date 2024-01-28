import { Box, Typography } from "@mui/material";
// import { MAIN_COLORS } from "../../utils/constans";

const Footer = () => {
    return (
    
            <Box
                sx={{
                    backgroundColor:'rgba(141, 153, 157, 0.318)',
                    display: "flex",
                    flexDirection:'column',
                    justifyContent: "space-between",
                    paddingX:5,
                    gap: 2,
                    paddingY: 1.5,
                    '@media (min-width: 600px)': {
                        flexDirection: 'row',
                    },
                }} 
            >
                <Typography variant="body1"  color="#000" sx={{}}>
                    Online Store 
                </Typography>

                
                <Typography variant="body2" color="#000" sx={{}}>
                     © Todos los Derechos Resrervados 2024.
                </Typography>
            </Box>

            
        
    );
};

export default Footer;
