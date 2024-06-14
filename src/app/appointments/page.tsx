"use client"
import { Typography, Box, Grid,  TextField, Button, IconButton } from '@mui/material'
import React, { useState } from 'react';
import './appointment.css'
import Link from 'next/link';
import { TextFieldProps } from '@mui/material';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

export default function Appointments(){
    const [appointmentDate, setAppointmentDate] = useState(new Date());
    const [email, setEmail] = useState<String> ('')
    const [emailError, setEmailError] = useState<boolean>(false);

    const handleEmailError = (event : React.ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value;
        setEmail(email)
        setEmailError(email.trim() === '' || !email.includes('@'));
    }
    const handleSubmit = () => {
        
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
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, width: '27.5vw'}}>
                            <TextField 
                            label="Email"
                            value={email}
                            onChange={handleEmailError}
                            error={emailError}
                            helperText={emailError ? 'Please enter a valid email address' : ''}
                            variant="outlined" 
                            fullWidth 
                            />
                            <TextField label="Contact" variant="outlined" fullWidth />
                        </Box> 
                       
                        <TextField
                            label="Message"
                            variant="outlined"
                            multiline
                            rows={3} // Augmenter le nombre de lignes pour le champ Message
                            
                            sx={{ marginTop: 2, marginBottom: 2 , width: '27.5vw'}} // Espacement supplémentaire au-dessus et en dessous du champ
                        />
                         <Box sx={{ width: '27.5vw', paddingBottom: '10vh'}}>
                             <Typography>Appointment Date</Typography>
                                 <DatePicker selected={appointmentDate} onChange={(date) => date && setAppointmentDate(date)}>
                            </DatePicker>
                        </Box>
                         
                        <Box sx={{ display: 'flex',
                                    flexDirection: 'row',
                                    gap : 5
                        }}>
                            <Button variant="contained" color="primary" type="submit">
                                Submit
                            </Button>
                            <Link href="/">
                                <Button variant="contained" color="primary" type="submit">
                                    Home
                                </Button>
                            </Link>

                        </Box>  
                    </Box>
                </Box>
                
            </Grid>
       </>
    )
}
