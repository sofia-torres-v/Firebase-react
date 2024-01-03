import { Box } from "@mui/material";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import RegisterScreen from "./components/RegisterScreen/Register";

function App() {
    return (
        <Box sx={{ height: "100vh" }}>
            <Routes>
                <Route path="/Login" element={<LoginScreen />} />
                <Route path="/Register" element={<RegisterScreen />} />
            </Routes>
        </Box>
    );
}

export default App;
