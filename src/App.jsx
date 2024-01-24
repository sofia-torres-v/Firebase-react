import { Box } from "@mui/material";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import RegisterScreen from "./components/RegisterScreen/Register";
import SellerLayout from "./components/SellerLayout/SellerLayout";
import AddProducts from "./pages/AddProducts/AddProducts";
import HomePages from "./pages/HomePages/HomePages";
import MyProducts from "./pages/MyProducts/MyProducts";

function App() {
    return (
        <Box sx={{ height: "100vh" }}>
            <Routes>
                <Route path="/" element={<HomePages />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />

                
                <Route path="/products" element={
                        <SellerLayout>
                            <MyProducts />
                        </SellerLayout>
                    }
                />
                <Route path="/addProducts" element={
                        <SellerLayout>
                            <AddProducts />
                        </SellerLayout>
                    }
                />
            </Routes>
        </Box>
    );
}

export default App;
