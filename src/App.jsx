import { Box } from "@mui/material";
import "./App.css";
// import LoginScreen from "./components/LoginScreen/LoginScreen";
import RegisterScreen from "./components/RegisterScreen/Register";

function App() {
    return (
        <Box sx={{ height: "100vh" }}>
            {/* <LoginScreen /> */}
            <RegisterScreen />
        </Box>
    );
}

export default App;
