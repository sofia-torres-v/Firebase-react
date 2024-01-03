import { Box, Button, Paper, TextField } from "@mui/material";

import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <Paper
                elevation={2}
                sx={{
                    p: 5,
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
                    Register
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
                    type="password"
                    label="Password"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    id="outlined-basic"
                    type="password"
                    label="Confirm password"
                    variant="outlined"
                />
                <Button fullWidth variant="contained">
                    Click me
                </Button>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <Typography variant="body1" color="initial">
                        Ya tienes Cuenta
                    </Typography>
                    <Link to="/login">Login </Link>
                </Box>
            </Paper>
        </Box>
    );
};

export default RegisterScreen;
