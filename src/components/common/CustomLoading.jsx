import { Backdrop, Box, CircularProgress } from "@mui/material";

// eslint-disable-next-line react/prop-types
const CustomLoading = ({ open }) => {
    return (
        <Box>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Box>
    );
};

export default CustomLoading;
