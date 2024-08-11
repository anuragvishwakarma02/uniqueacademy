import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    alignSelf: 'center',
    justifySelf: 'center',
    color: theme.palette.text.secondary,
}));

export default function ContactScreen() {
    return (<>
        {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> */}
        <Grid container spacing={2} sx={{mt:1}}>
            {/* Address */}
            <Grid item container xs={12} md={4}>
                <Grid item xs={12} container direction={'column'} align={'center'} justifyItems={'center'}>
                    <Item>
                        <Typography variant='body1'>Villa #210 Chandni Chowk</Typography>
                        <Typography variant='body2'>Nehru Nagar</Typography>
                        <Typography variant='body2'>Bhilai</Typography>
                    </Item>
                </Grid>
            </Grid>
            {/* Phone & Email */}
            <Grid item xs={12} md={4}>
                <Grid item xs={12} container direction={'column'} align={'center'} justifyItems={'center'}>
                    <Item>
                        <Typography variant='body2'>Email :<span>chachachu</span></Typography>
                        <Typography variant='body2'>Phone :<span>213321314</span></Typography>
                    </Item>
                </Grid>
            </Grid>
            {/* Social */}
            <Grid item xs={12} md={4}>
                <Grid item xs={12} container direction={'column'} align={'center'} justifyItems={'center'}>
                <Item>
                    <Typography variant='body2'>Insta :<span>insta</span></Typography>
                    <Typography variant='body2'>Facebook :<span>Facebook</span></Typography>
                </Item>
            </Grid>
        {/* <Grid item xs={12} md={12}>
            <Grid item xs={12} container direction={'column'} align={'center'} justifyItems={'center'}>
                <Item>more</Item>
                </Grid>
            </Grid> */}
        </Grid>
    </Grid >
        {/* </Box> */ }
    {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> */ }
    {/* </Box> */ }
    </>

    )
}
