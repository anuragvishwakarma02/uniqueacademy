import React, { useState } from 'react'
import { Carousel ,ScrollingCarousel} from '@trendyol-js/react-carousel';
import { Avatar, Typography, Box, Grid, Paper } from '@mui/material'
import Image from '../images/person1.jpg'
import Image2 from '../images/person2.jpg'
import { styled } from '@mui/material/styles';

const imagelist = [
    {
        name: "Munna Bhaiya",
        person_image: Image,
        desc: "Munna Tripathi is a volatile and power-hungry character, the son of a crime lord. Bablu Pandit, on the other hand, is initially portrayed as a more restrained and educated character, the younger brother of Guddu Pandit. Their relationship takes a twist as they form an alliance amidst the crime-ridden backdrop of Mirzapur, leading to darkly humorous situations as they navigate the complexities of the criminal world."
    },
    {
        name: "Bablu",
        person_image: Image2,
        desc: " Bablu Pandit is initially portrayed as a more restrained and educated character, the younger brother of Guddu Pandit. Their relationship takes a twist as they form an alliance amidst the crime-ridden backdrop of Mirzapur, leading to darkly humorous situations as they navigate the complexities of the criminal world."
    },
    {
        name: "Guddu",
        person_image: Image,
        desc: "THis is a brilliant person"
    },
    {
        name: "Pysco",
        person_image: Image2,
        desc: "THis is a brilliant person"
    },
    {
        name: "Chucha",
        person_image: Image,
        desc: "THis is a brilliant person"
    },
    {
        name: "Pysco",
        person_image: Image2,
        desc: "THis is a brilliant person"
    },
    {
        name: "Pysco",
        person_image: Image,
        desc: "THis is a brilliant person"
    }

]
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    alignSelf: 'center',
    justifySelf: 'center',
    color: theme.palette.text.secondary,
}));

export default function PeopleCarousel() {
    const [managers, setManagers] = useState(imagelist)
    const [selectedManager, setSelectedManager] = useState(managers[0])

    const handleSelectManager = (selectedManagerIndex) => {
        setSelectedManager(managers[selectedManagerIndex])
    }
    return (<>
        {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> */}
        <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item container xs={12} md={12}>
                <Carousel show={2.5} slide={2} transition={0.5} infinite={true} swiping={true} responsive={true}>
                    {managers.map((manager, index) => (<>
                        <Avatar  sx={{width:'15vw',height:"15vw"}} key={index + manager.name} alt={manager.name} src={manager.person_image}
                            onClick={e => handleSelectManager(index)}
                        ></Avatar>
                        {/* <Typography>{index}</Typography> */}
                    </>
                    ))
                    }
                </Carousel>
            </Grid>

            <Grid item container align={'center'} justifyItems={'center'} spacing={2} sx={{ mt: 4,ml:2,mr:2,mb:2 }}>
                {/* Image section */}
                <Grid item xs={12} md={5} >
                    <Avatar sx={{width:'35vw',height:"35vw",borderRadius:'10px'}} variant='square' alt={selectedManager.name} src={selectedManager.person_image}></Avatar>
                </Grid>
                {/* Description section */}
                <Grid item xs={12} md={7} >
                    <Typography variant='h2'> {selectedManager.name} </Typography>
                    <Typography variant='h6' sx={{mt:2}}> {selectedManager.desc} </Typography>
                </Grid>
            </Grid>

        </Grid>

        {/* </Box> */}




    </>)
}
