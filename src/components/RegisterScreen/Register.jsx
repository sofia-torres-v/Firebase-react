import { Box, Button, Paper, TextField } from "@mui/material";

import { Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toastIt, validateEmail } from "../../utils/utils";
import moment from "moment";
import { saveDocument } from "../../actions/actions";
import bcrypt from 'bcryptjs'
import CustomLoading from "../common/CustomLoading";

const RegisterScreen = () => {
    const [loading,setLoading] = useState(false);
    const [formData, setFormData]= useState({
        email: '',
        password:'',
        confirmPassword:'',
    })

    const handleChange =((event)=>{
        const { name, value }   = event.target;
        setFormData ({...formData,[name]:value});
    });

    const handleRegister = async ()=>{
        const{ email, password, confirmPassword} = formData;
        if (!validateEmail(email)) {
            toastIt('ingrese email valido.', 3);
            return
        }

        if (!password || !confirmPassword) {
            toastIt('porfavor introduzca todos los campos', 3);
            return
        }

        console.log('sunciono')
        if (password !== confirmPassword) {
            toastIt('las contraselas no coincides', 3
            );
            return;
        }

        //instalamos bcrypt para encriptar la contraseña
        bcrypt.hash(password,10, async(err,hash)=>{
            if (err) {
                console.log('ha habido un error:',err)
            }else{
                setLoading(true);
                await saveDocument('Users', {email,hash,password,date: moment().format()})
                setLoading(false);
            }
        })
    }
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}
        >
            <CustomLoading open={loading} />
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
                    name="email"
                    fullWidth
                    value={formData.email}
                    id="email"
                    label="Email"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextField
                    name="password"
                    fullWidth
                    value={formData.password}
                    id="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextField
                    name="confirmPassword"
                    fullWidth
                    value={formData.confirmPassword}
                    id="oonfirmPassword"
                    type="password"
                    label="Confirm password"
                    variant="outlined"
                    onChange={handleChange}
                />
                <Button fullWidth variant="contained" onClick={handleRegister}>
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
            {/* Same as */}
            <ToastContainer />
        </Box>
    );
};

export default RegisterScreen;
