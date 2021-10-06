import React, { useState } from 'react'
import { Grow, Grid, Container } from '@mui/material';
import Forms from './Forms';
import Posts from './Posts';
// import { makeStyles } from '@mui/styles';
// import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery';




export default function Body() {
    const [currentId, setCurrentId] = useState(null);

    const matches = useMediaQuery('(max-width:600px)');

    return (
        <Grow in style={{ marginTop: "70px" }}>
            <Container>
                <Grid container justifyContent="space-between" spacing={2} sx={{ flexDirection: matches && "column-reverse" }}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Forms currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>

                </Grid>
            </Container>


        </Grow >
    )
}
