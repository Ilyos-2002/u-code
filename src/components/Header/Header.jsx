import { CardHeader, Rating, Typography } from "@mui/material";

import "./Header.css";




export function Header() {

    return (
        <header>
            <CardHeader />
            <Typography component="legend">Controlled</Typography>
            <Rating
                name="simple-controlled"
                value={"rate"}
            // onChange={(event, newValue) => {
            //     setValue(newValue);
            // }}
            />
        </header>
    )
}