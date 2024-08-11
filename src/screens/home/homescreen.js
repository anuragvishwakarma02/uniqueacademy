import { colors, Grid,Box, Typography } from '@mui/material';
import * as React from 'react';
// import Style from '../../app-styles'
// import dashboard from '../../images/giphy.webp'
// import PreloadImage from '../../utils/preloadimg';
// import Image from 'react-image-webp';
import Carousels from '../../component/Carousel'
export default function Home() {
    return (
        <React.Fragment>
            <Carousels axis='horizontal' infiniteLoop={true} autoPlay={true} interval={'2000'} transitionTime={'1000'}   showThumbs={false} />
        </React.Fragment>


    )
}