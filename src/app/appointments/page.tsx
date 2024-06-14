"use client"
import { Typography, Box, Grid,  TextField, Button } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import React, { useState } from 'react';
import './appointment.css'

export default function Appointments(){
    const [date, setDate] = useState(new Date());
    const [emailError, setEmailError] = useState<Boolean>(false);

    const handleEmailError = (event : React.ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value;
        setEmailError(email.trim() === '' || !email.includes('@'));
    }
    return( 
       <>
         <Grid className='appointment'  container justifyContent="center" alignItems="center" style={{ height: '100vh'}}>
                <Box 
                    sx={{ 
                        width: '50%', 
                        textAlign: 'center', 
                        padding: '20px', 
                        boxShadow: 3,
                        borderRadius: '5px',
                        backgroundColor: '#fff',
                       
                        
                    }}
                > 
                    <Typography 
                        variant='h4' 
                        align='center'  
                        sx={{ 
                            fontWeight: 'bold', 
                            padding: '10px', 
                            borderRadius: '5px',
                            backgroundColor: '#1877F2', // Bleu roi de Facebook
                            color: '#FFFFFF',
                            mx: 'auto', // Centrer le texte horizontalement
                            width: 'fit-content'
                        }}
                    >
                        APPOINTMENTS
                    </Typography>
                    <Box 
                        component="form" 
                        sx={{ 
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 2,
                            marginTop: '20px'
                        }} 
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                            <TextField label="Name" variant="outlined" fullWidth />
                            <TextField label="First Name" variant="outlined" fullWidth />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                            <TextField label="Email" variant="outlined" fullWidth />
                            <TextField label="Contact" variant="outlined" fullWidth />
                        </Box>
                        <TextField
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={6} // Augmenter le nombre de lignes pour le champ Message
                            
                            sx={{ marginTop: 2, marginBottom: 2 , width: '28vw'}} // Espacement supplémentaire au-dessus et en dessous du champ
                        />
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Grid>
       </>
    )
}
