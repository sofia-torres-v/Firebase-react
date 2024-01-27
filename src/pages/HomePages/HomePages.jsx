import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Container,
    Grid,
} from "@mui/material";
import HomeNavBar from "../../components/HomeNavBar/HomeNavBar";
import ProductCardLite from "../../components/ProductCardLite/ProductCardLite";
import data from "./data";
import Footer from "../../components/Footer/Footer";

const HomePages = () => {
    return (
        <Box>
            <HomeNavBar />
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 3,
                        mt: 5,
                    }}
                >
                    <FormControl sx={{ width: "100%" }}>
                        <InputLabel id="demo-simple-select-label">
                            Categoria
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Categoria"
                            value={""}
                        >
                            <MenuItem value={10}>Comida y Bebidas</MenuItem>
                            <MenuItem value={20}>Tecnología</MenuItem>
                            <MenuItem value={30}>Muebles y Hogar</MenuItem>
                            <MenuItem value={30}>Piezas de Autos</MenuItem>
                            <MenuItem value={30}>Electrodomésticos</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        sx={{ width: "100%" }}
                        name="productName"
                        label="Nombre del productos"
                        variant="outlined"
                    />
                </Box>
                <Grid
                    container
                    spacing={1}
                    sx={{ py: 8 }}
                >
                    {data.map((item, index) => {
                        return (
                            <Grid key={index} item xs={12} sm={6} md={4}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <ProductCardLite
                                        productName={item.productName}
                                        date={item.date}
                                        image={item.image}
                                        text={item.text}
                                        price={item.price}
                                        category={item.category}
                                        quantity={item.quantity.toString()}
                                        fullName={item.fullName}
                                    />
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
            <Footer/>
        </Box>
    );
};

export default HomePages;
