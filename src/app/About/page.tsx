import { Grid, Box, Typography } from '@mui/material';
import './about.css'
import Link from 'next/link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const AboutPage = () => {
    return (
        <Grid className='about' container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh',
        }}>
            <Box sx={{ width: '80%', textAlign: 'center', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: 3 }}>
                <Typography 
                    variant='h4' 
                    sx={{ 
                        color: 'white', 
                        backgroundColor: 'royalblue', 
                        ':hover': { backgroundColor: 'white', color: '#4169E1' },
                        padding: '10px',
                        borderRadius: '5px',
                        margin: '0 auto',
                        width: 'fit-content'
                    }}
                >
                    About Us
                </Typography>
                <Typography variant='body1' sx={{ marginTop: '20px', fontSize: '18px', lineHeight: '1.6' }}>
                    Welcome to our car dealership website! We specialize in selling both modern cars and classic car collections.
                    Whether you're looking for the latest models or rare vintage vehicles, we have something for every car enthusiast.
                    Our mission is to provide high-quality vehicles at competitive prices, with a focus on customer satisfaction.
                </Typography>
                <Typography variant='body1' sx={{ marginTop: '20px', fontSize: '18px', lineHeight: '1.6' }}>
                    We offer a wide range of services including car financing, trade-ins, and after-sales support to ensure a seamless
                    and enjoyable car buying experience. Browse our extensive inventory online or visit our showroom to find your dream car today!
                </Typography>
                <Typography variant='body1' sx={{ marginTop: '20px', fontSize: '18px', lineHeight: '1.6' }}>
                    Developers: Riantsoa, Manoa Lahatra, Faniry, Antenaina
                </Typography>
                <Box sx={{ marginTop: '2vh' , borderRadius :' 5px',height : '3vh', marginLeft : '37vw', backgroundColor : 'royalblue', width : '5vw'}}>
                <Link
                        href="/"
                        style={{
                            textDecoration: 'none',
                            color: 'white',
                           
                        }}
                    >
                        <ArrowBackIosIcon />
                </Link>
            </Box>
            </Box>
           
          
        </Grid>
    );
}

export default AboutPage;
