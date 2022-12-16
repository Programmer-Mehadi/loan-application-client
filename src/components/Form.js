import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

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
    const [error, setError] = useState(null);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const [value, setValue] = useState(0);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        address: '',
        mobileNumber: '',
        businessName: '',
        gstNo: '',
        companyAddress: '',
        numberOfEmployee: '',
        loanAmount: '',
        interestRate: '',
        loanTenure: '',
        feesAndCharges: ''
    })

    const insertData = (data) => {
        console.log(formData)
        console.log(data);
    }
    const formDataSet = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        const preData = formData;
        preData[name] = value;
        setFormData(preData);
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <form onSubmit={handleSubmit(insertData)}>
            <Box sx={{ width: '95%', margin: 'auto' }} className='pt-4' >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className='w-fit mx-auto'>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable"
                        scrollButtons
                    >
                        <Tab label="Personal Details" {...a11yProps(0)} className='font-bold' />
                        <Tab className='font-bold' label="Business Details" {...a11yProps(1)} />
                        <Tab className='font-bold' label="Loan Application Details" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                {/*  first tabs */}
                <TabPanel value={value} index={0} className='flex flex-col w-[90%] max-w-[600px]  mx-auto'  >
                    <div className='flex flex-col justify-center mb-6'>
                        <TextField onBlur={formDataSet} className='' id="outlined-basic" label="First Name" variant="outlined" name='firstName' defaultValue={formData.firstName} {...register("firstName", { required: "FirstName is required" })} />
                        {
                            errors.firstName && <p className='text-red-500 my-1 '>{errors.firstName.message}*</p>
                        }

                    </div>
                    <div className='flex flex-col justify-center mb-6'>
                        <TextField onBlur={formDataSet} className='' id="outlined-basic" label="Last Name" variant="outlined" name='lastName' defaultValue={formData.lastName}
                            {...register("lastName", { required: "LastName is required" })}
                        />
                        {
                            errors.lastName && <p className='text-red-500 my-1 '>{errors.lastName.message}*</p>
                        }
                    </div>
                    <div className='flex flex-col justify-center mb-6'>
                        <TextField onBlur={formDataSet} className=' ' id="outlined-basic" label="Age" type='number' variant="outlined" name='age' defaultValue={formData.age}  {...register("age", { required: "Age is required" })} />
                        {
                            errors.age && <p className='text-red-500 my-1 '>{errors.age.message}*</p>
                        }
                    </div>
                    <div className='flex flex-col justify-center mb-6'>
                        <TextField onBlur={formDataSet} className='' id="outlined-basic" label="Address" variant="outlined" name='address' defaultValue={formData.address}
                            {...register("address", { required: "Address is required" })}
                        />
                        {
                            errors.address && <p className='text-red-500 my-1 '>{errors.address.message}*</p>
                        }
                    </div>
                    <div className='flex flex-col justify-center mb-6'>
                        <TextField onBlur={formDataSet} className='w-[90%] max-w-[600px]' id="outlined-basic" label="Mobile number" variant="outlined" name='mobileNumber' defaultValue={formData.mobileNumber}
                            {...register("mobileNumber", { required: "Mobile number is required" })}
                        />
                        {
                            errors.mobileNumber && <p className='text-red-500 my-1 '>{errors.mobileNumber.message}*</p>
                        }
                    </div>

                </TabPanel>
                {/*  second tabs */}
                <TabPanel value={value} index={1} className='flex flex-col w-[90%] max-w-[600px] mx-auto'  >
                    <div className='flex flex-col justify-center mb-6'>
                        <TextField onBlur={formDataSet} className='  ' id="outlined-basic" label="Bussiness Name" variant="outlined" name='businessName' defaultValue={formData.businessName} {...register("businessName", { required: "Business Name is required" })} />
                        {
                            errors.businessName && <p className='text-red-500 my-1 '>{errors.businessName.message}*</p>
                        }
                    </div>
                    <div className='flex flex-col justify-center mb-6'>
                        <TextField onBlur={formDataSet} className=' ' id="outlined-basic" label="GST no" variant="outlined" name='gstNo' defaultValue={formData.gstNo}
                            {...register("gstNo", { required: "GST No is required" })}
                        />
                        {
                            errors.gstNo && <p className='text-red-500 my-1 '>{errors.gstNo.message}*</p>
                        }
                    </div>
                    <div className='flex flex-col justify-center mb-6'>
                        <TextField onBlur={formDataSet} className=' ' id="outlined-basic" label="Address" variant="outlined" name='companyAddress' defaultValue={formData.companyAddress}
                            {...register("companyAddress", { required: "Company Address No is required" })}
                        />
                        {
                            errors.companyAddress && <p className='text-red-500 my-1 '>{errors.companyAddress.message}*</p>
                        }
                    </div>
                    <div className='flex flex-col justify-center mb-6'>
                        <TextField onBlur={formDataSet} className='' id="outlined-basic" label="Number of employee" type='number' variant="outlined" name='numberOfEmployee' defaultValue={formData.numberOfEmployee}
                            {...register("numberOfEmployee", { required: "Employee number is required" })}
                        />
                        {
                            errors.numberOfEmployee && <p className='text-red-500 my-1 '>{errors.numberOfEmployee.message}*</p>
                        }
                    </div>

                </TabPanel>
                {/* third tabs */}
                <TabPanel value={value} index={2} className='flex flex-col w-[90%] max-w-[600px] mx-auto'  >
                    <div className='flex flex-col justify-center mb-6'>
                        <TextField onBlur={formDataSet} className='' id="outlined-basic" label="Loan Amount" type='text' defaultValue={formData.loanAmount} variant="outlined" name='loanAmount'
                            {...register("loanAmount", { required: "Loan Amount is required" })}
                        />
                        {
                            errors.loanAmount && <p className='text-red-500 my-1 '>{errors.loanAmount.message}*</p>
                        }
                    </div>
                    <div className='flex flex-col justify-center mb-6'>
                        <TextField onBlur={formDataSet} className=' ' id="outlined-basic" label="Interest Rate" type='text' variant="outlined" name='interestRate' defaultValue={formData.interestRate} 
 {...register("interestRate", { required: "Interest Rate is required" })}

                        />
                        {
                            errors.interestRate && <p className='text-red-500 my-1 '>{errors.interestRate.message}*</p>
                        }
                    </div>
                    <div className='flex flex-col justify-center mb-6'>
                        <TextField onBlur={formDataSet} type='text' className='' id="outlined-basic" label="Loan Tenure" variant="outlined" name='loanTenure' defaultValue={formData.loanTenure} 
 {...register("loanTenure", { required: "Loan Tenure is required" })}
                        />
                        {
                            errors.loanTenure && <p className='text-red-500 my-1 '>{errors.loanTenure.message}*</p>
                        }
                    </div>
                    <div className='flex flex-col justify-center mb-6'>
                        <TextField onBlur={formDataSet} type='text' className=' ' id="outlined-basic" label="Fees & Charges" variant="outlined" name='feesAndCharges' defaultValue={formData.feesAndCharges} 
 {...register("feesAndCharges", { required: "Fees and Charges Rate is required" })}
                        />
                        {
                            errors.feesAndCharges && <p className='text-red-500 my-1 '>{errors.feesAndCharges.message}*</p>
                        }
                    </div>
                    <div className='flex flex-col justify-center mb-6'>
                        <Button type='submit' variant="contained" className='text-white bg-[#2196f3] px-6'>Submit</Button>
                    </div>

                </TabPanel>

            </Box>
        </form>
    );
}