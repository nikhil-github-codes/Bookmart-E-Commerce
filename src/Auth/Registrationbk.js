import React, { useState } from 'react';

import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Registration = () => {




  return (

    <Container className=' mt-5  d-flex justify-content-center align-items-center'>
   
        <Form className='shadow p-3 my-5 mb-5 bg-white rounded' style={{maxWidth: '600px'}}>
          <h1 className="text-center mb-4">Register</h1>

          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text" id="username" placeholder="Enter your username" required />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" id="email" placeholder="Enter your email" required />
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" id="password" required />
          </FormGroup>
          <FormGroup>
            <Label for="confirmpassword">ConfirmPassword</Label>
            <Input type="password" id="password" required />
          </FormGroup>


          <Button color="primary" className="w-100 mt-3">
            Register
          </Button>
        </Form>
     

    </Container>
  );
};

export default Registration;
