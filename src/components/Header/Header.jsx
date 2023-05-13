import { Box, Button, CardHeader, FormControl, InputLabel, NativeSelect, Rating, Typography } from "@mui/material";

import "./Header.css";
import { Link } from "react-router-dom";




export function Header() {

    return (
        <header>
            <Box display={"flex"} marginLeft={"auto"} padding={"20px"} marginRight={"auto"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={"15px"} sx={{ m: "10px" }}>
                <Typography >
                    U-code
                </Typography>
                <Box marginLeft={"360px"} marginRight={"200px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} gap={"25px"} fontSize={"19px"}>
                    <Link to="/" style={{ textDecoration: "none", color: "575859" }}>Home</Link>

                    <FormControl >

                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option disabled value={"Modern"}>All Courses</option>
                            <option value={"Modern"}>Modern Businnes</option>
                            <option value={"Digital"}>Digital Marketing</option>
                            <option value={"Programming"}>Programming</option>
                            <option value={"Graphic"}>Graphic Design</option>
                            <option value={"LifeStyle"}>LifeStyle</option>
                        </NativeSelect>
                    </FormControl>
                    <Link color="#575859" style={{ textDecoration: "none", color: "575859" }} to="/">Pricing</Link>
                    <Link color="#575859" style={{ textDecoration: "none" }} href="https://google.com">Blog</Link>

                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} gap={"10px"} >
                    <Link to="/signin" style={{ textDecoration: "none", color: "575859" }}>Sign in</Link>
                    <Button variant="contained" color="success" href="https://google.com">Free Trial</Button>

                </Box>
            </Box>
        </header >
    )
}