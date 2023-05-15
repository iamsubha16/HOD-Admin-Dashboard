import React from 'react'

import { DataGrid } from '@mui/x-data-grid';

import Button from '@mui/material/Button';

import { userRows } from '../../datasheet';
import { userColumns } from '../../datasheet';

import "./datatable.scss"
import { Container } from '@mui/material';

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
                        <div className="viewButton">
                            <Button variant="outlined">View</Button>
                        </div>
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