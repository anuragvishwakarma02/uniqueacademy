import React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import { useNavigate } from "react-router-dom";
import PeopleCarousels from '../../component/PeopleCarousels';
export default function OurTeamScreen() {
    const navigate = useNavigate();
    const handlePageClickRedirect = (e) => {
        navigate(`/managers`)
    
      }
    return (<>
        <Grid container direction={'column'} align={'center'} justifyItems={'center'} sx={{ mt: 1, mb: 2 }}>
            <Typography variant='h2'>
                Our Team
            </Typography>
        </Grid>
        <PeopleCarousels></PeopleCarousels>

        <Grid container direction={'column'} align={'center'} justifyItems={'center'} sx={{ mt: 1, mb: 2 }}>

            <Button onClick={handlePageClickRedirect}>
                Know More
            </Button>
        </Grid>
    </>


    )
}
