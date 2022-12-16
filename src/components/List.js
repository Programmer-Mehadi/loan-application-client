import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect } from 'react';


export default function List() {
    const [list, setList] = React.useState(null);

    useEffect(() => {

        fetch(`${process.env.REACT_APP_server_api}/list`)
            .then(res => res.json())
            .then(data => {
                console.log(data.length);
                setList(data);
            })

    }, [])

    return (
        <>
            {
           list?.length > 0 ?  <TableContainer component={Paper} className='w-[99%] mx-auto'>
           <Table sx={{ minWidth: 650 }} aria-label="simple table">
               <TableHead className='bg-blue-200'>
                   <TableRow>
                       <TableCell className='font-semibold'>First Name</TableCell>
                       <TableCell className='font-semibold'>Last Name</TableCell>
                       <TableCell className='font-semibold'>Age</TableCell>
                       <TableCell className='font-semibold'>Address</TableCell>
                       <TableCell className='font-semibold'>Mobile Number</TableCell>
                       <TableCell className='font-semibold'>Business Name</TableCell>
                       <TableCell className='font-semibold'>GST No</TableCell>
                       <TableCell className='font-semibold'>Company Address</TableCell>
                       <TableCell className='font-semibold'>Number of Employee</TableCell>
                       <TableCell className='font-semibold'>Loan Amount</TableCell>
                       <TableCell className='font-semibold'>Interest Rate</TableCell>
                       <TableCell className='font-semibold'>Loan Tenure</TableCell>
                       <TableCell className='font-semibold'>Fees and Charges</TableCell>

                   </TableRow>
               </TableHead>
               <TableBody>
                   {
                       list?.map(single => 
                           <TableRow
                               key={single._id}
                               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                           >

                               <TableCell component="th" scope="row">
                                   {single.firstName}
                               </TableCell>
                               <TableCell component="th" scope="row">
                                   {single.lastName}
                               </TableCell>
                               <TableCell component="th" scope="row">
                                   {single.age}
                               </TableCell>
                               <TableCell component="th" scope="row">
                                   {single.address}
                               </TableCell>
                               <TableCell component="th" scope="row">
                                   {single.mobileNumber}
                               </TableCell>
                               <TableCell component="th" scope="row">
                                   {single.businessName}
                               </TableCell>
                               <TableCell component="th" scope="row">
                                   {single.gstNo}
                               </TableCell>
                               <TableCell component="th" scope="row">
                                   {single.companyAddress}
                               </TableCell>
                               <TableCell component="th" scope="row">
                                   {single.numberOfEmployee}
                               </TableCell>
                               <TableCell component="th" scope="row">
                                   {single.loanAmount}
                               </TableCell>
                               <TableCell component="th" scope="row">
                                   {single.interestRate}
                               </TableCell>
                               <TableCell component="th" scope="row">
                                   {single.loanTenure}
                               </TableCell>
                               <TableCell component="th" scope="row">
                                   {single.feesAndCharges}
                               </TableCell>                        
                       </TableRow>
                       )
                       }
               </TableBody>
           </Table>
       </TableContainer> : <p className='text-red-600 text-center py-4 font-bold text-3xl'>No Application found.</p>
       }
        </>
    );
}