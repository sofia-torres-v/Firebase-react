
import { Box, Button, Paper, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toastIt, validateEmail } from "../../utils/utils";
import { getDocumentByProperty } from "../../actions/actions";
import { ToastContainer } from "react-toastify";
import bcrypt from "bcryptjs";

const LoginScreen = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async () => {
        const { email, password } = formData;
        
        console.log(email, password)
        if (!validateEmail(email)) {
            toastIt("Ingrese email válido por favor.", 3);
            return;
        }

        if (!email || !password ) {
            toastIt("Porfavor introduzca todos los campos", 3);
            return;
        }

        try {
            const docs = await getDocumentByProperty('Users', 'email', email);

            if (docs.length < 1) {
                toastIt('No existe ningun usuario registrado con ese correo', 3);
                return;
            }
            
            bcrypt.compare(password,docs[0].hash,(err,result)=>{
                if (err) {
                    toastIt('Ha ocurrido un error, intentelo mas tarde', 3);
                    return;
                }if(result){
                    navigate("/home");
                    return;
                }else{
                    toastIt('Contraseña incorecta, porfavor intente nuevamente', 3)
                }
            })

        } catch (error) {
            toastIt('Ha ocurrido un error vuelva a intentarlo mas tarde.', 3);
            console.log(error);
        }
    };
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
                    Login
                </Typography>
                <TextField
                    fullWidth
                    name="email"
                    id="email"
                    label="Email"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    name="password"
                    id="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                    onChange={handleChange}
                />
             
                <Button fullWidth variant="contained" onClick={handleLogin}>
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
                        No tienes Cuenta
                    </Typography>
                    <Link to="/register">Sign Up </Link>
                </Box>
            </Paper>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
        </Box>
    );
};

export default LoginScreen;
