import Brand from '@/components/brand/brand'
import CarShow from '../carShow/CarShow'
import './landing.css'
import Header from '@/components/Header/header'
import { Box, Typography,Button } from '@mui/material'
import Link from 'next/link'

export default function LandingPage(){
    return(
        <>
          <div className="landing-page"  >
             < Header />
          </div>
          <Box sx={{ display: 'flex',
                        flexDirection: 'column',
                        paddingTop: '25vh',
                        justifyContent: 'flex-end',
                        paddingLeft : '10vw', 
                        fontFamily: 'Lobster, cursive'
             }}>
              <Typography variant='h2' color='white'>
                Welcome to Rasseta 
              </Typography>
              <Typography variant='h5' color='white'>
                The best site for Car 
              </Typography>
          </Box>
          <Box  sx={{ display: 'flex',
                        flexDirection: 'row',
                        paddingLeft : '10vw',
                        paddingTop : '5vh' , 
                        justifyContent: 'flex-start' }}>
            <Link href="/About">
              <Button  sx={{ marginRight : '10 vw' , color : 'white' , backgroundColor : '#4169E1', ':hover ': { backgroundColor : 'white ', color : '#4169E1'} }}>
                      About Us
              </Button>
            </Link>
            
          </Box>
        
        

        </>     
    )
}