'use client';
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import Link from 'next/link';
import { ArrowBackIos as ArrowBackIosIcon } from '@mui/icons-material';
import axios from 'axios';

const SignUpPage: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios('http://localhost:8080/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({ name, email, password }),
            });
            if (response.status !== 200) {
                const errorData = response.data;
                throw new Error(errorData.message || 'Erreur lors de l\'inscription');
            }
            const data = await response.data;
            localStorage.setItem('token', data.token);
            setSuccess('Inscription réussie ! Vous pouvez maintenant vous connecter.');
            window.location.href = '/login';
        } catch (error: any) {
            setError(error.message || 'Erreur lors de l\'inscription');
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
                        Sign Up
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
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
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
                        {error && (
                            <Typography color="error" variant="body2">
                                {error}
                            </Typography>
                        )}
                        {success && (
                            <Typography color="success" variant="body2">
                                {success}
                            </Typography>
                        )}
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
                            Sign Up
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
                            href="/login"
                            style={{ textDecoration: 'none', color: 'white' }}
                            onClick={() => window.location.href = '/login'}
                        >
                            Login
                        </Link>
                    </Button>
                </Box>
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

export default SignUpPage;
