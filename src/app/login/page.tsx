'use client';
import React, { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';
import './login.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import setAuthHeader from '@/components/setAuthHeader';
import axios from 'axios';

const CustomLoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');

        try {
            const response = await axios('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({ email, password }),
            });

            if (response.status !== 200) {
                throw new Error('Invalid login credentials');
            }

            
            const data = await response.data;
            setAuthHeader(data.token); // Définir l'en-tête d'autorisation
            localStorage.setItem('token', data.token);
            console.log('Login successful:', data);

            // Rediriger vers la page admin
            window.location.href = '/admin';
        } catch (error: any) {
            setError(error.message || 'Erreur lors de la connexion : identifiants invalides');
        }
    };

    return (
       <>
        <div className='container'>
         <div className='login' >
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 18,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#A52A2A' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 3 }}
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                style: { cursor: 'text' }
                            }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                style: { cursor: 'text' }
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                backgroundColor: '#A52A2A',
                                '&:hover': {
                                    backgroundColor: '#B94A3B'
                                }
                            }}
                        >
                            Login
                        </Button>
                    </Box>
                    <Button
                        variant="contained"
                        sx={{
                            width: '50%',
                            backgroundColor: '#A52A2A',
                            '&:hover': {
                                backgroundColor: '#B94A3B'
                            }
                        }}
                    >
                        <Link
                            href="/signup"
                            style={{ textDecoration: 'none', color: 'white' }}
                            onClick={() => window.location.href = '/signup'}
                        >
                            Sign Up
                        </Link>
                    </Button>
                </Box>
                <Notification />
            </Container>
            <Box
                sx={{
                    ml: 2,
                    backgroundColor: '#A52A2A',
                    borderRadius: '80%',
                    height: '45px',
                    width: '45px',
                    display: 'flex',
                    position: 'fixed',
                    right: '30px',
                    bottom: '10%',
                    paddingLeft: '15px',
                    paddingTop: '10px'
                }}
            >
                <Link
                    href="/"
                    style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}
                >
                    <ArrowBackIosIcon />
                </Link>
            </Box>
        </div>
    </div>
       </>
    );
};

export default CustomLoginPage;