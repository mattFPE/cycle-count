import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import {InputText} from 'primereact/inputtext'
import { useRef, useState } from 'react'

const TableView = ({data, columns, tableFilters}) => {
    const [selectedRow, setSelectedRow] = useState(null)
    const dt = useRef(null)

    const selectionChange = (e) => {
        console.log(e.value)
        setSelectedRow(e.value)
    }

    return (
        <DataTable ref={dt} value={data} dataKey="id"  filterDisplay="row" responsiveLayout="scroll" selectionMode="single" selection={selectedRow} onSelectionChange={selectionChange}>
            {columns.map(column => <Column key={column.field} field={column.field} header={column.header} filter={column.filter} />)}
        </DataTable>
    )
}

export default TableView