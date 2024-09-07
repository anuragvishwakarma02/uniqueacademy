import { Grid, Typography } from '@mui/material'
import React from 'react'
import PreloadImage from '../../utils/preloadimg'
import Mission from '../../images/mission2.avif'
import Vision from '../../images/vision.avif'
import Values from '../../images/values.avif'
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
const imgageStyles = { width: "25vw", height: '25vw', borderRadius: '45px', backgroundColor: '#fff' }
export default function VisionScreen() {
  return (<>
    <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>

      <Grid item container spacing={2} direction={'row'} align={'center'} justifyItems={'center'} >
        <Grid item container direction={'column'} xs={12} md={4} align={'center'} justifyItems={'center'}>
          <Grid item>
            <PreloadImage alt="Mission" src={Mission} style={imgageStyles} />
          </Grid>
          <Grid item>
            <Typography>Mission2</Typography>
          </Grid>
        </Grid>

        <Grid item container direction={'column'} xs={12} md={4} align={'center'} justifyItems={'center'}>
          <Grid item>
            <PreloadImage alt="Mission" src={Vision} style={imgageStyles} />
          </Grid>
          <Grid item>
            <Typography>Vision</Typography>
          </Grid>
        </Grid>

        <Grid item container direction={'column'} xs={12} md={4} align={'center'} justifyItems={'center'}>
          <Grid item>
            <PreloadImage alt="Mission" src={Values} style={imgageStyles} />
          </Grid>
          <Grid item>
            <Typography>Values</Typography>
          </Grid>
        </Grid>
      </Grid>

    </Grid>


  </>)
}
