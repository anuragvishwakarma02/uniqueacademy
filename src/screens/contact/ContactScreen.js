import React from 'react'
import { Box,Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
export default function ContactScreen() {
    return (<>
        {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> */}
            <Grid container spacing={2}>
            {/* Address */}
                <Grid item xs={12} md={4}>
                    <Item>Address</Item>
                </Grid>
                {/* Phone & Email */}
                <Grid item xs={12} md={4}>
                    <Item>Phone & Email</Item>
                </Grid>
                {/* Social */}
                <Grid item xs={12} md={4}>
                    <Item>Social</Item>
                </Grid>
                <Grid item xs={6} md={8}>
                    <Item>more</Item>
                </Grid>
            </Grid>
        {/* </Box> */}
        {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> */}
        {/* </Box> */}
    </>

    )
}
