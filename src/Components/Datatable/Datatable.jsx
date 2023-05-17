import React from 'react'

import { DataGrid } from '@mui/x-data-grid';

import Button from '@mui/material/Button';

import { userRows } from '../../datasheet';
import { userColumns } from '../../datasheet';

import "./datatable.scss"
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Datatable() {
    const actionCol = [
        {
            field: "action",
            headerName: "Action",
            width: 250,
            sortable: false,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">
                                <Button variant="outlined">View</Button>
                            </div>
                        </Link>
                        <div className="deleteButton">
                            <Button variant="outlined" color="error">
                                Delete
                            </Button>
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className='datatable'>
            <div className="dataTableTitle">
                Add New User
                <Link to="/users/new" className='addUser'>
                    <Button variant="contained" color="success">
                        Add User
                    </Button>
                </Link>
            </div>
            <Container maxWidth="xl">
                <DataGrid
                    rows={userRows}
                    columns={userColumns.concat(actionCol)}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </Container>
        </div>
    )
}

export default Datatable