import { colors, Grid, Box, Typography, Divider } from '@mui/material';
import * as React from 'react';
// import Style from '../../app-styles'
// import dashboard from '../../images/giphy.webp'
// import PreloadImage from '../../utils/preloadimg';
// import Image from 'react-image-webp';
import VisionScreen from '../vision/VisionScreen';
import AboutScreen from '../about/AboutScreen';
import ContactScreen from '../contact/ContactScreen';
import Carousels from '../../component/Carousel'
import UpcomingEventsScreen from '../events/UpcomingEventsScreen';
import OurTeamScreen from '../manager/OurTeamScreen';
export default function Home() {
    return (<>
        <>
            {/* <Carousels axis='horizontal' infiniteLoop={true} autoPlay={true} interval={'2000'} transitionTime={'1000'}   showThumbs={false} /> */}
            <Carousels axis='horizontal' showThumbs={false} />
        </>
        <VisionScreen />
        <Divider />
        <OurTeamScreen />
        <Divider />
        <UpcomingEventsScreen />
        <Divider />
        <ContactScreen />

    </>

    )
}