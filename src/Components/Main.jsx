import { useDispatch } from 'react-redux'
import { Button, Stack, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'

const openCycleColumns = [
    {
        field: 'open',
        headerName: 'Open',
        width: 100,
        renderCell: (params) => <Button variant='contained' size='small' sx={{ backgroundColor: '#F17130' }}>Open</Button>
    },
    { field: 'count_name', headerName: 'Count Name', flex: 1 },
    { field: 'created', headerName: 'Date Created', flex: 1 },
    { field: 'description', headerName: 'Discription', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 }
]

const approveCycleColumns = [
    {
        field: 'open',
        headerName: 'Open',
        width: 100,
        renderCell: (params) => <Button variant='contained' size='small' sx={{ backgroundColor: '#F17130' }}>Open</Button>
    },
    { field: 'count_name', headerName: 'Count Name', flex: 1 },
    { field: 'counted', headerName: 'Date Counted', flex: 1 },
    { field: 'description', headerName: 'Discription', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 }
]

const testOpenRows = [{ id: 0, count_name: 'Test Cycle-1', created: new Date().toLocaleDateString(), description: 'Turbos', status: 'Not Started' }]
const testApproveRows = [{ id: 0, count_name: 'Test Cycle-2', counted: new Date().toLocaleDateString(), description: 'Turbos', status: 'Pending Acct Approval' }]

const Main = () => {
    const dispatch = useDispatch()
    const [openRows, setOpenRows] = useState(testOpenRows)
    const [approveRows, setApproveRows] = useState(testApproveRows)

    return (
        <Stack height={'100vh'} spacing={3} marginTop={2}>
            <Typography marginBottom={0} fontWeight={'bold'}>Open Cycle Counts</Typography>
            <DataGrid
                columns={openCycleColumns}
                rows={openRows}
                loading={openRows.length === 0}
            />
            <Typography fontWeight={'bold'}>Cycle Counts Needing Approval</Typography>
            <DataGrid
                columns={approveCycleColumns}
                rows={approveRows}
                loading={approveRows.length === 0}
            />
        </Stack>
    )
}

export default Main