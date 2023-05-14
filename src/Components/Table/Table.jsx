import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

import "./table.scss"

const rows = [
    {
        id: 1,
        product: "Egg Roll",
        image: "https://www.chefkunalkapur.com/wp-content/uploads/2021/08/CW0_7822-scaled.jpg?v=1628745250",
        customer: "Ishan Mandal",
        date: "14th March",
        quantity: 10,
        amount: 350,
        payment: "Online",
        status: "Delivered",
    },
    {
        id: 2,
        product: "Egg Roll",
        image: "https://www.chefkunalkapur.com/wp-content/uploads/2021/08/CW0_7822-scaled.jpg?v=1628745250",
        customer: "Ishan Mandal",
        date: "14th March",
        quantity: 10,
        amount: 350,
        payment: "Online",
        status: "Pending",
    },
    {
        id: 3,
        product: "Egg Roll",
        image: "https://www.chefkunalkapur.com/wp-content/uploads/2021/08/CW0_7822-scaled.jpg?v=1628745250",
        customer: "Ishan Mandal",
        date: "14th March",
        quantity: 10,
        amount: 350,
        payment: "Online",
        status: "Pending",
    },
    {
        id: 4,
        product: "Egg Roll",
        image: "https://www.chefkunalkapur.com/wp-content/uploads/2021/08/CW0_7822-scaled.jpg?v=1628745250",
        customer: "Ishan Mandal",
        date: "14th March",
        quantity: 10,
        amount: 350,
        payment: "Online",
        status: "Delivered",
    },
    {
        id: 5,
        product: "Egg Roll",
        image: "https://www.chefkunalkapur.com/wp-content/uploads/2021/08/CW0_7822-scaled.jpg?v=1628745250",
        customer: "Ishan Mandal",
        date: "14th March",
        quantity: 10,
        amount: 350,
        payment: "Online",
        status: "Pending",
    },
    {
        id: 6,
        product: "Egg Roll",
        image: "https://www.chefkunalkapur.com/wp-content/uploads/2021/08/CW0_7822-scaled.jpg?v=1628745250",
        customer: "Ishan Mandal",
        date: "14th March",
        quantity: 10,
        amount: 350,
        payment: "Online",
        status: "Delivered",
    },
    {
        id: 7,
        product: "Egg Roll",
        image: "https://www.chefkunalkapur.com/wp-content/uploads/2021/08/CW0_7822-scaled.jpg?v=1628745250",
        customer: "Ishan Mandal",
        date: "14th March",
        quantity: 10,
        amount: 350,
        payment: "Online",
        status: "Delivered",
    },
    {
        id: 8,
        product: "Egg Roll",
        image: "https://www.chefkunalkapur.com/wp-content/uploads/2021/08/CW0_7822-scaled.jpg?v=1628745250",
        customer: "Ishan Mandal",
        date: "14th March",
        quantity: 10,
        amount: 350,
        payment: "Online",
        status: "Delivered",
    },


];

function DataTable() {

    return (
        <div className='table'>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='tableCell'>Tracking ID</TableCell>
                            <TableCell className='tableCell'>Product</TableCell>
                            <TableCell className='tableCell'>Customer</TableCell>
                            <TableCell className='tableCell'>Date</TableCell>
                            <TableCell className='tableCell'>Quantity</TableCell>
                            <TableCell className='tableCell'>Amount</TableCell>
                            <TableCell className='tableCell'>Payment Method</TableCell>
                            <TableCell className='tableCell'>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell className='tableCell'>
                                    <div className="cellWrapper">
                                        <Avatar
                                            alt="Egg Roll"
                                            src={row.image}
                                            sx={{ width: 56, height: 56 }}
                                        />
                                        {row.product}
                                    </div>
                                </TableCell>
                                <TableCell className='tableCell'>{row.customer}</TableCell>
                                <TableCell className='tableCell'>{row.date}</TableCell>
                                <TableCell className='tableCell'>{row.quantity}</TableCell>
                                <TableCell className='tableCell'>{row.amount}</TableCell>
                                <TableCell className='tableCell'>{row.payment}</TableCell>
                                <TableCell className='tableCell'>
                                    <span className={`status ${row.status}`}>{row.status}</span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default DataTable