"use client";

import React, { useState } from 'react';
import { Typography, Box, Grid, TextField, Button } from '@mui/material';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import './appointment.css';


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

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
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

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <Grid className='appointment' container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
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
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
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
                                />
                            )}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, width: '27.5vw' }}>
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
                                sx={{ marginTop: 2, marginBottom: 2, width: '27.5vw' }}
                            />
                        )}
                    />
                    <Box sx={{ width: '27.5vw', paddingBottom: '10vh' }}>
                        <Typography>Appointment Date</Typography>
                        <Controller
                            name="appointmentDate"
                            control={control}
                            render={({ field }) => (
                                <DatePicker
                                    selected={field.value}
                                    onChange={(date) => field.onChange(date)}
                                    customInput={<TextField fullWidth variant="outlined" />}
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
