import { Box, Button, IconButton, Typography } from "@mui/material";

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
                <Box>
                    <Button variant="contained" color="success">All Courses</Button>
                    <IconButton aria-label="play" color="primary" size="medium">
                        {/* <PlayArrowIcon /> */}
                        Play Video
                    </IconButton>
                </Box>
            </Box>
            <Box></Box>

        </Box>
    )
}