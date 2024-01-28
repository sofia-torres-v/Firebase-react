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

        console.log(email, password);
        if (!validateEmail(email)) {
            toastIt("Ingrese un correo válido por favor.", 3);
            return;
        }

        if (!email || !password) {
            toastIt("Porfavor compléte todos los campos", 3);
            return;
        }

        try {
            const docs = await getDocumentByProperty("Users", "email", email);

            if (docs.length < 1) {
                toastIt(
                    "No existe ningun Usuario registrado con ese correo",
                    3
                );
                return;
            }

            bcrypt.compare(password, docs[0].hash, (err, result) => {
                if (err) {
                    toastIt("Ha ocurrido un error, inténtelo mas tarde", 3);
                    return;
                }
                if (result) {
                    navigate("/home");
                    return;
                } else {
                    toastIt(
                        "Contraseña incorecta, porfavor intente nuevamente",
                        3
                    );
                }
            });
        } catch (error) {
            toastIt("Ha ocurrido un error vuelva a intentarlo mas tarde.", 3);
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
                elevation={3}
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
                    color="#3f3b3b"
                    sx={{ fontWeight: "bold" }}
                >
                    Iniciar sesión
                </Typography>
                <TextField
                    fullWidth
                    name="email"
                    id="email"
                    label="Correo Electrónico"
                    variant="outlined"
                    onChange={handleChange}
                    sx={{background:' rgb(246, 248, 249)'}}

            
                />
                <TextField
                    fullWidth
                    name="password"
                    id="password"
                    type="password"
                    label="Contraseña"
                    variant="outlined"
                    onChange={handleChange}
                    sx={{background:' rgb(246, 248, 249)'}}
             
                />

                <Button
                    fullWidth
                    variant="contained"
                    onClick={handleLogin}
                    sx={{
                        backgroundColor: "turquoise",         
                        color: "#000",
                        boxShadow: "none",
                        "&:hover": {
                            backgroundColor: "rgb(43, 196, 181)",
                        },
                    }}
                >
                    Iniciar
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
                        ¿ No tienes Cuenta ?
                    </Typography>
                    <Link
                        style={{
                            textDecoration: "none",
                            fontSize: "18px",
                            color: "#3f3b3b",
                            fontWeight: "bold",
                        }}
                        to="/register"
                    >
                        Regístrate{" "}
                    </Link>
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
