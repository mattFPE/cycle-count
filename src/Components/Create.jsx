import { Stack, Card, CardHeader, CardContent, TextField } from "@mui/material"
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

const columns = [
    { field: 'item', headerName: 'Item', flex: 1 },
    { field: 'description', headerName: 'Description', minWidth: 100, flex: 1 },
    { field: 'units', headerName: 'Units', flex: 1 },
    { field: 'onhand', headerName: 'Qty On Hand', flex: 1 },
    { field: 'onHandValue', headerName: 'On Hand Value', flex: 1 },
    { field: 'newCount', headerName: 'New Qty', flex: 1, editable: true },
    { field: 'newValue', headerName: 'New Value', flex: 1 },
    { field: 'percentChange', headerName: '% Change', flex: 1 },
    { field: 'class', headerName: 'Class', flex: 1 },
    { field: 'subclass', headerName: 'Subclass', flex: 1 },
    { field: 'multiLocation', headerName: 'Stored Multiple Locations', flex: 1 },
    { field: 'lastCount', headerName: 'Last Count', flex: 1 },
    { field: 'lastAdjust', headerName: 'Last Adjustment', flex: 1 },
    { field: 'serialNumbers', headerName: "Active Serial #'s", flex: 1 }
]

const testData = [
    { id: 0, item: 'Test Item', newCount: '', description: "hello test kjbijkbh kjbkjh k kjhkjh kjhkj h" }
]

const Create = () => {
    return (
        <Stack spacing={2.5} mt={2}>
            <Card variant="outlined">
                <CardHeader title="Primary Information" />
                <CardContent >
                    <TextField disabled id="documentnumber" label="Reference #" defaultValue="To Be Generated" />
                    <TextField sx={{ marginLeft: 3 }} id="date" label="Date" defaultValue={new Date().toLocaleDateString()} />
                    <TextField sx={{ marginLeft: 3 }} id="time" label="Time" defaultValue={new Date().toLocaleTimeString()} />
                    <TextField sx={{ marginLeft: 3 }} id="description" label="Description" />
                    <TextField sx={{ marginTop: 3 }} id="notes" label="Notes" fullWidth multiline rows={4} />
                </CardContent>
            </Card>
            <Card variant="outlined">
                <CardHeader title="Counts" />
                <CardContent sx={{ height: 800 }} >
                    <DataGrid
                        columns={columns}
                        rows={testData}
                        loading={testData.length === 0}
                        sx={{ fontSize: '11px' }}
                        experimentalFeatures={{ newEditingApi: true }}
                        components={{ Toolbar: GridToolbar }}
                    />
                </CardContent>
            </Card>
        </Stack>
    )
}

export default Create