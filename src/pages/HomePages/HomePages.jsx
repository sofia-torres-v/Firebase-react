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
                    <FormControl sx={{ width: "50%" }}>
                        
                        <InputLabel id="demo-simple-select-label">
                            Categoria
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Categoria"
                            value={''} 
                        >
                            <MenuItem value={10}>Ropa</MenuItem>
                            <MenuItem value={20}>Artefactos</MenuItem>
                            <MenuItem value={30}>Muebles</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        sx={{ width: "50%" }}
                        name="productName"
                        label="Nombre del productos"
                        variant="outlined"
                    />
                </Box>
                <Grid container spacing={1} sx={{py:5}}>
                        {data.map((item,index)=>{
                            return( 
                            <Grid key={index} item xs={4}>
                                <ProductCardLite
                                    title={item.title}
                                    date={item.date}
                                    image={item.image}
                                    text={item.text}
                                    quantity={item.quantity.toString()}
                                />
                            </Grid>
                            );
                    
                        })}



                </Grid>
            </Container>
        </Box>
    );
};

export default HomePages;
