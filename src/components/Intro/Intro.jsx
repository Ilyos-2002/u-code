import { Box, Button, IconButton, ImageListItem, Typography } from "@mui/material";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Link } from "react-router-dom";
// import { Img } from "./waist-up-shot-pretty-girl-smiles-pleasantly_273609-28224 1.png"

export function Intro() {
    return (

        < Box>
            <Box width={"600px"}>
                <Typography variant="h3">Anytime,anywhereDevelop your skill
                    by Online
                </Typography>

                <Typography variant="subtitle1">
                    Online education is a form of education where students use their home computers through the internet. For many nontraditional students, among them all those who want to continue.
                </Typography>
                <Box display={"flex"} gap={"25px"}>
                    <Button variant="contained" color="success">All Courses</Button>
                    <Link>
                        <IconButton aria-label="play" color="" size="medium" style={{ background: "white" }}>
                            <PlayCircleIcon />

                        </IconButton>
                        <Typography variant="h5">  Play Video</Typography>
                    </Link>
                </Box>
            </Box>
            <Box>
                <ImageListItem>
                    <img
                        src=""

                        loading="lazy"
                    />
                </ImageListItem>
                {/* <img src={"htpps://picsum.photos/"} alt="Apap" /> */}

            </Box>

        </Box>
    )
}