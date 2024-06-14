"use client"

import React, { useState } from 'react';
import { Typography, Box, Grid, TextField, Button } from '@mui/material';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import './appointment.css';
import axios from 'axios';


const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    firstName: z.string().min(1, { message: "First Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    contact: z.string().min(1, { message: "Contact is required" }),
    message: z.string().min(1, { message: "Message is required" }),
    appointmentDate: z.date({ invalid_type_error: "Invalid date" }),
});

type FormData = z.infer<typeof schema>;

const Appointments: React.FC = () => {
    const [appointmentDate, setAppointmentDate] = useState<Date | null>(new Date());

    const { control, handleSubmit, formState: { errors } , reset } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            firstName: '',
            email: '',
            contact: '',
            message: '',
            appointmentDate: new Date(),
        },
    });

    function formatDateToLocalDate(date: Date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        
        return `${year}-${month}-${day}`;
    }

    const onSubmit =  async (data: FormData) => {
        
        try {
            /*
            const response = await fetch('http://localhost:8080/appointment', {
                method : 'POST' ,
                headers : {
                    'Content-type' : 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    appointmentDate: formatDateToLocalDate(data.appointmentDate),
                }),
            });
            */
            const response = await axios.post('http://localhost:8080/appointment', {
                ...data,
                appointmentDate: formatDateToLocalDate(data.appointmentDate),
            });

            console.log(formatDateToLocalDate(data.appointmentDate));
            
            if(!response.status === 200) {
                throw new Error('Network response was not ok');
            }
            
            const result = await response.data;
            console.log('succes : ', result);
            reset();
        } 
        catch (error) {
            console.error('it was a fetch error : ', error)
        }
    };

    

    return (
        <Grid className='appointment' container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Box
                sx={{
                    width: '45%',
                    textAlign: 'center',
                    padding: '20px',
                    boxShadow: 3,
                    borderRadius: '5px',
                    backgroundColor: 'rgba(204, 108, 0, 0.4)',
                }}
            >
                <Typography
                    variant='h4'
                    align='center'
                    sx={{
                        fontWeight: 'bold',
                        padding: '10px',
                        borderRadius: '5px',
                        backgroundColor: '#1877F2',
                        color: '#FFFFFF',
                        mx: 'auto',
                        width: 'fit-content',
                    }}
                >
                    APPOINTMENTS
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                        marginTop: '20px',
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 5, width: '25vw' }}>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.name}
                                    helperText={errors.name ? errors.name.message : ''}
                                    sx={{ backgroundColor: '#fff', borderRadius: '8px' }}
                                />
                            )}
                        />
                        <Controller
                            name="firstName"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.firstName}
                                    helperText={errors.firstName ? errors.firstName.message : ''}
                                    sx={{ backgroundColor: '#fff', borderRadius: '8px' }}
                                />
                            )}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, width: '25vw' }}>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.email}
                                    helperText={errors.email ? errors.email.message : ''}
                                    sx={{ backgroundColor: '#fff', borderRadius: '8px' }}
                                />
                            )}
                        />
                        <Controller
                            name="contact"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Contact"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.contact}
                                    helperText={errors.contact ? errors.contact.message : ''}
                                    sx={{ backgroundColor: '#fff', borderRadius: '8px' }}
                                />
                            )}
                        />
                    </Box>
                    <Controller
                        name="message"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Message"
                                variant="outlined"
                                multiline
                                rows={3}
                                fullWidth
                                error={!!errors.message}
                                helperText={errors.message ? errors.message.message : ''}
                                sx={{ marginTop: 2, marginBottom: 2, width: '25vw', backgroundColor: '#fff', borderRadius: '8px' }}
                            />
                        )}
                    />
                    <Box sx={{ width: '25vw', paddingBottom: '10vh' }}>
                        <Typography sx={{ fontWeight: 'light', marginBottom: '10px', color: 'darkslategray' }}>Appointment Date</Typography>
                        <Controller
                            name="appointmentDate"
                            control={control}
                            render={({ field }) => (
                                <DatePicker
                                    selected={field.value}
                                    onChange={(date) => field.onChange(date)}
                                    customInput={<TextField fullWidth variant="outlined" sx={{ backgroundColor: '#fff', borderRadius: '8px' }} />}
                                />
                            )}
                        />
                        {errors.appointmentDate && (
                            <Typography color="error">{errors.appointmentDate.message}</Typography>
                        )}
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                        <Link href="/">
                            <Button variant="contained" color="primary">
                                Home
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};

export default Appointments;



