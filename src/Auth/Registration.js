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
import toast from "react-hot-toast";
import { useHistory, useParams,useLocation, } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../Store/Slice/AuthSlice';
function validateEmail(email) {
    // Basic email validation, you can replace it with a more robust solution if needed
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const SignUp = () => {
    const defaultTheme = createTheme();
    const history = useHistory();
    const dispatch=useDispatch();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        pincode: '',
        phone: '',
        address: '',
        receiveEmails: false,
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
        } else if (name === 'password' || name === 'confirmPassword') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                confirmPassword:
                    name === 'confirmPassword' && value !== formData.password
                        ? 'Passwords do not match'
                        : '',
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate on submit
        const newErrors = {};

        // Validate first name
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        // Validate last name
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        // Validate email
        if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        // Validate password
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        }

        // Validate confirm password
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.pincode.trim()) {
            newErrors.pincode = 'Pincode is required';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Mobile Number is required';
        }

        // Set errors
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Form is valid, perform your submission logic here
            //  console.log('Form submitted:', formData);
            const data = {
                firstname: formData.firstName,
                lastname: formData.lastName,
                email: formData.email,
                address: formData.address,
                password: formData.password,
                pincode: formData.pincode,
                phoneNO: formData.phone,
            }

            

            Api.signup(data)
                .then(res => {
                 //     console.log("res",res)
                    // Handle successful response
                    if (res.status == "Success") {
                        toast.success(res.message)
                        const datastore={
                            "token":res?.accessToken,
                             "auth":true
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
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    error={Boolean(errors.firstName)}
                                    helperText={errors.firstName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    error={Boolean(errors.lastName)}
                                    helperText={errors.lastName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email "
                                    name="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={Boolean(errors.email)}
                                    helperText={errors.email}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Mobile Number"
                                    name="phone"
                                    type='number'
                                    autoComplete="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    error={Boolean(errors.phone)}
                                    helperText={errors.phone}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
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
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="new-password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    error={Boolean(errors.confirmPassword)}
                                    helperText={errors.confirmPassword}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="address"
                                    label="Address"
                                    multiline
                                    rows={4}
                                    id="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                // error={Boolean(errors.address)}
                                // helperText={errors.address}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="pincode"
                                    label="Pincode"
                                    type="number"
                                    id="pincode"
                                    autoComplete="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    error={Boolean(errors.pincode)}
                                    helperText={errors.pincode}
                                />
                            </Grid>
                            {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="receiveEmails"
                      value={formData.receiveEmails}
                      onChange={handleChange}
                      color="primary"
                    />
                  }
                  label="I want to receive inspiration, marketing promotions, and updates via email."
                />
                            </Grid> */}
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign Up
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

export default SignUp;
