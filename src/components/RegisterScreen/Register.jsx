import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Paper,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material";
import { Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toastIt, validateEmail } from "../../utils/utils";
import { getDocumentByProperty, saveDocument } from "../../actions/actions";
import moment from "moment";
import bcrypt from "bcryptjs";
import CustomLoading from "../common/CustomLoading";

const RegisterScreen = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        userRole: "buyer",
    });

    const navigate = useNavigate();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = async () => {
        const { fullName, email, password, userRole, confirmPassword } =
            formData;
        if (!validateEmail(email)) {
            toastIt("Ingrése un email válido por favor.", 3);
            return;
        }

        if (!password || !confirmPassword || !fullName) {
            toastIt("Porfavor compléte todos los campos", 3);
            return;
        }

        console.log("funcionó");
        if (password !== confirmPassword) {
            toastIt("Las contraseñas no coinciden", 3);
            return;
        }

        //Instalamos bcrypt para encriptar la contraseña
        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) {
                console.log("Ocurrió un error:", err);
            } else {
                setLoading(true);
                const docs = await getDocumentByProperty(
                    "Users",
                    "email",
                    email
                );
                if (docs.length > 0) {
                    toastIt("Este Usuario ya existe", 2);
                    return;
                }

                await saveDocument("Users", {
                    fullName,
                    email,
                    hash,
                    userRole,
                    date: moment().format(),
                });
                setLoading(false);
                toastIt(
                    "Regístro exitoso. Redirigiendo a Inicio de Sesión.",
                    1
                );

                //Para que demore el redirigir y poder ver el mensaje
                setTimeout(() => {
                    navigate("/Login");
                }, 3000);
            }
        });
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100%",
            }}
        >
            <CustomLoading open={loading} />
            <Paper
                elevation={3}
                sx={{
                    p: 5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1.2,
                    width: "400px",
                    height: "100%",
                    mt: 2,
                    mb: 2,
                    
                }}
            >
                <Typography
                    variant="h4"
                    color="#3f3b3b"
                    sx={{ fontWeight: "bold" }}
                >
                    Regístrate
                </Typography>

                <TextField
                    name="fullName"
                    fullWidth
                    value={formData.fullName}
                    id="email"
                    label="Nombre Completo"
                    variant="outlined"
                    onChange={handleChange}
                    sx={{background:' rgb(246, 248, 249)'}}
                />
                <TextField
                    name="email"
                    fullWidth
                    value={formData.email}
                    id="email"
                    label="Correo Electrónico"
                    variant="outlined"
                    onChange={handleChange}
                    sx={{background:' rgb(246, 248, 249)'}}
                />
                <TextField
                    name="password"
                    fullWidth
                    value={formData.password}
                    id="password"
                    type="password"
                    label="Contraseña"
                    variant="outlined"
                    onChange={handleChange}
                    sx={{background:' rgb(246, 248, 249)'}}
                />
                <TextField
                    name="confirmPassword"
                    fullWidth
                    value={formData.confirmPassword}
                    id="confirmPassword"
                    type="password"
                    label="Confirmar Contraseña"
                    variant="outlined"
                    onChange={handleChange}
                    sx={{background:' rgb(246, 248, 249)'}}
                />

                <FormControl sx={{ alignSelf: "start"}}>
                    <FormLabel  id="demo-radio-buttons-group-label">
                        Rol
                    </FormLabel>
                    <RadioGroup 
                        name="userRole"
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="buyer"
                        value={formData.userRole}
                        onChange={handleChange}
                       
                    >
                        <FormControlLabel 
                            value="buyer"
                            control={<Radio  sx={{ color: 'turquoise !important' }}/>}
                            label="Comprador(a)"
                        />

                        <FormControlLabel
                            value="seller"
                            control={<Radio  sx={{ color: 'rgb(43, 196, 181) !important' }} />}
                            label="Vendedor(a)"
                        />
                    </RadioGroup>
                </FormControl>

                <Button fullWidth variant="contained" onClick={handleRegister}  
                  sx={{
                        backgroundColor: "rgb(43, 196, 181)",
                        border: "1px solid turquoise",
                        color: "#000",
                      
                        boxShadow: "none",
                        "&:hover": {
                            backgroundColor: "rgb(43, 196, 181)",
                        },
                    }}>
                    Registrar
                </Button>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <Typography
                        style={{ paddingTop: 2 }}
                        variant="body1"
                        color="initial"
                    >
                        ¿ Ya tienes Cuenta ?
                    </Typography>
                    <Link
                        style={{
                            textDecoration: "none",
                            fontSize: "18px",
                            paddingTop: 2,
                            color: "#3f3b3b",
                            fontWeight: "bold",
                        }}
                        to="/login"
                    >
                        {" "}
                        Inicia Sesión{" "}
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

export default RegisterScreen;
