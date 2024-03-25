import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Api from '../Api/Api';
import { useDispatch } from 'react-redux';
import { useHistory, useParams,useLocation, } from "react-router-dom";
import { login } from '../Store/Slice/AuthSlice';
import toast from 'react-hot-toast';

function validateEmail(email) {
    // Basic email validation, you can replace it with a more robust solution if needed
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const Login = () => {
    const defaultTheme = createTheme();
    const dispatch=useDispatch()
    const history=useHistory()
    const [formData, setFormData] = useState({

        email: '',
        password: '',

    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Validate on change
        if (name === 'email') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: validateEmail(value) ? '' : 'Invalid email address',
            }));
        }
        // else if (name === 'password' || name === 'confirmPassword') {
        //     setErrors((prevErrors) => ({
        //         ...prevErrors,
        //         confirmPassword:
        //             name === 'confirmPassword' && value !== formData.password
        //                 ? 'Passwords do not match'
        //                 : '',
        //     }));
        // }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate on submit
        const newErrors = {};

        // Validate email
        if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        // Validate password
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        }

        // Set errors
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Form is valid, perform your submission logic here
           // console.log('Form submitted:', formData);
            const data={
                email:formData.email,
                password:formData.password
            }
            Api.login(data)
            .then(res => {
                  console.log("res",res)
                // Handle successful response
                if (res.status == "Success") {
                    toast.success(res.message)
                    const datastore={
                        "token":res?.accessToken,
                         "auth":true,
                         "userdata":res?.data
                    }
                  dispatch(login(datastore))
                    history.push("/")
                } else {
                  
                    toast.error(res.message)
                }
            })
            .catch(error => {
                // Handle error
                //console.log("error",error)
                toast.error(error?.response?.data?.message||"Somethings wents wrong !!")
        });
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>

                            <Grid item xs={12} >
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={Boolean(errors.email)}
                                    helperText={errors.email}
                                />
                            </Grid>

                            <Grid item xs={12} >
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    error={Boolean(errors.password)}
                                    helperText={errors.password}
                                />
                            </Grid>

                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/registration" variant="body2">

                                        Don't have an account? Sign Up
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign In
                        </Button>
                        {/* <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                            Already have an account? Sign in
                            </Link>
                        </Grid>
                        </Grid> */}
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Login;
