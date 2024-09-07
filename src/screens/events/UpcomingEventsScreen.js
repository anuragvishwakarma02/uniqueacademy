import React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import { useNavigate } from "react-router-dom";

export default function UpcomingEventsScreen() {
    const navigate = useNavigate();
    const handlePageClickRedirect = (e) => {
        navigate(`/events`)

    }

    return (
        <Grid container direction={'column'} align={'center'} justifyItems={'center'} sx={{ mt: 1, mb: 2 }}>
            <Typography variant='h2'>
                Upcoming Events
            </Typography>
            <Typography variant='h7'>
                Coming Soon...
            </Typography>
            <Button onClick={handlePageClickRedirect}>All Events</Button>
        </Grid>
    )
}
