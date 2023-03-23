import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Avatar, Typography } from '@mui/material';
import Title from '../Title'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

function createData(id, orderid, date, name, shipTo, paymentMethod, status) {
  return { id, orderid, date, name, shipTo, paymentMethod, status };
}

const rows = [
  createData(
    0,
    '#0001',
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'Vasco, Goa',
    'complete',
  ),
  createData(
    1,
    '#00042',
    '16 Mar, 2019',
    'Paul McCartney',
    'House1',
    'Old Goa, Panaji, Goa',
    'pending',
  ),
  createData(2, '#00019', '16 Mar, 2019', 'Tom Scholz', 'Bunglow 2', 'Chicalim, Goa', 'pending'),
  createData(
    3,
    '#00023',
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'HeadLand, Sada, Goa',
    'pending',
  ),
  createData(
    4,
    '#00021',
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'Mangor Hill, Vasco Da-gama, Goa',
    'complete',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function PropertyVerify() {
  return (
    <div>
      <Title>Property Verified</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Property</TableCell>
            <TableCell>Location</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <Avatar src="/broken-image.jpg" />
              <TableCell>{row.orderid}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right" >
                <Typography >{row.status}</Typography>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
      </div>
  );
}