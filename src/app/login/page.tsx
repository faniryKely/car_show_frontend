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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const CustomLoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Invalid login credentials');
            }

            
            const data = await response.json();
            console.log('Login successful:', data);
            
        } catch (error: any) {
            setError(error.message || 'Erreur lors de la connexion : identifiants invalides');
        }
    };

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
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
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                backgroundColor: 'rgba(126, 126, 129, 0.842)'
                            }}
                        >
                            Login
                        </Button>
                    </Box>
                    <Button
                        variant="contained"
                        sx={{
                            width: '50%',
                            backgroundColor: 'rgba(126, 126, 129, 0.842)'
                        }}
                    >
                        <Link
                            href="/signup"
                            style={{ textDecoration: 'none', color: 'white' }}
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
                    backgroundColor: 'rgba(126, 126, 129, 0.842)',
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
    );
};

export default CustomLoginPage;