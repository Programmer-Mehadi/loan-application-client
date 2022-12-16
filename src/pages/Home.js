import { Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';
import Form from '../components/Form';
const Home = () => {
    return (
        <div>
            <Typography   className='sm:text-lg md:text-2xl font-bold' gutterBottom sx={{ bgcolor: blue[600], color: blue[50], padding: '10px' }}>
                Loan Application Process
            </Typography>
            <Form></Form>
        </div>
    );
};

export default Home;