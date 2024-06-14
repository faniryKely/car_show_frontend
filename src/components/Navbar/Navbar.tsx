import { AppBar, Toolbar, IconButton, Box, Button, Typography } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MenuIcon from '@mui/icons-material/Menu';

import './nav.css'
import Link from 'next/link';

const Navbar = () => {
    return (
      <AppBar className='nav'>
        <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{ display: {xs: 'none', md: 'flex'}}}>
            <DirectionsCarIcon/>
        </IconButton>
        <Typography variant='h6' component="div" sx={{ flexGrow : 0.5,  fontSize: 30, fontWeight: 'bold', display: {xs: 'none', md: 'flex'}}}>Rasseta</Typography>
        <Box sx={{display: {xs: 'none', md: 'flex'}}} className="box">
            <Link href="/">
                <Button className='button' sx={{ fontWeight: 'bold', ':hover': { backgroundColor: 'white', color : 'black' }}} >Home</Button>
            </Link>
            <Link href="/appointments">
                <Button className='button' sx={{ fontWeight: 'bold', ':hover': { backgroundColor: 'white', color : 'black' }}} >Appointments</Button>
            </Link>
            <Link href="/Cars">
                <Button  className='button' sx={{ fontWeight: 'bold', ':hover': { backgroundColor: 'white', color : 'black' } }} >Cars</Button>
            </Link>
            <Link href="CarSearch">
                <Button className='button' sx={{ fontWeight: 'bold', ':hover': { backgroundColor: 'white', color : 'black' }}} >Car Search</Button>  
            </Link>
            <Link href="/login" >
                <Button  className='button' sx={{ fontWeight: 'bold', ':hover': { backgroundColor: 'white', color : 'black' }}}>Login</Button>
            </Link>
              
        </Box>
        <Box sx={{display: {xs: 'flex', md: 'none'}}}>
            <IconButton size='large' aria-label='logo' color='inherit' >
                 <MenuIcon />
            </IconButton>
         <Typography variant='h6' component="div" sx={{ paddingTop: 0.5, flexGrow : 0.5,  fontSize: 25, fontWeight: 'bold', display: {xs: 'flex', md: 'none'}}}>Rasseta Car</Typography>
           
        </Box>
        </Toolbar>
      </AppBar>
    );
};

export default Navbar;
