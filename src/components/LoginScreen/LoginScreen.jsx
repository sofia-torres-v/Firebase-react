import { Box, Button, Paper, TextField } from "@mui/material";

import { Typography } from "@mui/material";

const LoginScreen = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                border: "1px solid red",
            }}
        >
            <Paper
                elevation={2}
                sx={{
                    p: 5,
                    // border: "1px solid blue",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    width: "400px",
                }}
            >
                <Typography
                    variant="h4"
                    color="primary"
                    sx={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                    Login
                </Typography>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                />
                <Button fullWidth variant="contained">
                    Click me
                </Button>
            </Paper>
        </Box>
    );
};

export default LoginScreen;
