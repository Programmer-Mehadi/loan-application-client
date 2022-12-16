import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Form() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '95%', margin: 'auto' }} >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className='w-fit mx-auto'>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable"
                    scrollButtons
                >
                    <Tab label="Personal Details" {...a11yProps(0)} />
                    <Tab label="Business Details" {...a11yProps(1)} />
                    <Tab label="Loan Application Details" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} className='flex flex-col'  >
                <div>
                    <TextField className='w-[90%] max-w-[600px] mb-6 ' id="outlined-basic" label="First Name" variant="outlined" />
                </div>
                <div>
                    <TextField className='w-[90%] max-w-[600px] mb-6' id="outlined-basic" label="Last Name" variant="outlined" />
                </div>
                <div>
                    <TextField className='w-[90%] max-w-[600px] mb-6' id="outlined-basic" label="Age" variant="outlined" />
                </div>
                <div>
                    <TextField className='w-[90%] max-w-[600px]' id="outlined-basic" label="Mobile number" variant="outlined" />
                </div>

            </TabPanel>
            <TabPanel value={value} index={1} className='flex flex-col'  >
                <div>
                    <TextField className='w-[90%] max-w-[600px] mb-6 ' id="outlined-basic" label="Bussiness Name" variant="outlined" />
                </div>
                <div>
                    <TextField className='w-[90%] max-w-[600px] mb-6' id="outlined-basic" label="GST no" variant="outlined" />
                </div>
                <div>
                    <TextField className='w-[90%] max-w-[600px] mb-6' id="outlined-basic" label="Address" variant="outlined" />
                </div>
                <div>
                    <TextField className='w-[90%] max-w-[600px]' id="outlined-basic" label="Number of employee" variant="outlined" />
                </div>

            </TabPanel>
            <TabPanel value={value} index={2} className='flex flex-col'  >
                <div>
                    <TextField className='w-[90%] max-w-[600px] mb-6' id="outlined-basic" label="Loan Amount" type='number'  variant="outlined"/>
                </div>
                <div>
                    <TextField className='w-[90%] max-w-[600px] mb-6' id="outlined-basic" label="Interest Rate" type='number'  variant="outlined" />
                </div>
                <div>
                    <TextField type='number' className='w-[90%] max-w-[600px] mb-6' id="outlined-basic" label="Loan Tenure" variant="outlined" />
                </div>
                <div>
                    <TextField type='number' className='w-[90%] max-w-[600px]' id="outlined-basic" label="Fees & Charges" variant="outlined" />
                </div>

            </TabPanel>

        </Box>
    );
}