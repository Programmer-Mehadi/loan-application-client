import { Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
             <Typography   className='  text-center drop-shadow-md' gutterBottom sx={{ bgcolor: blue[600], color: blue[50], padding: '10px' }}>
               <p className='py-2 font-bold sm:text-lg md:text-4xl '> Loan Application Process</p>
               <div className='flex flex-wrap gap-4 justify-center '> <Link to='/' className=' text-lg bg-slate-900 p-2 rounded'>Add Application</Link>
                <Link to='/applicationlist' className=' text-lg bg-slate-900 p-2 rounded'>View Applications</Link></div>
                 
            </Typography>
            <div>
              
               
            </div>
        </div>
    );
};

export default Navbar;