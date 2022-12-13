import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'
import { useRef, useState } from 'react'

const TableView = ({ data, tableDefinition }) => {
    const [selectedRow, setSelectedRow] = useState(null)
    const dt = useRef(null)

    const selectionChange = (e) => {
        console.log(e.value)
        setSelectedRow(e.value)
    }

    const tableHeader = (
        <div className='table-header'>
            {tableDefinition.tableName}
        </div>
    )

    return (
        <DataTable
            value={data}
            dataKey="id"
            filterDisplay={tableDefinition.filterDisplayType}
            responsiveLayout="scroll"
            selectionMode="single"
            emptyMessage={tableDefinition.emptyMessage}
            header={tableDefinition.customHeader ? tableDefinition.customHeader : tableHeader}
            selection={selectedRow}
            onSelectionChange={selectionChange}
        >
            {
                tableDefinition.columns.map(column => 
                    <Column 
                        key={column.field} 
                        field={column.field} 
                        header={column.header} 
                        filter={column.filter}
                        headerStyle={column.headerStyle ? column.headerStyle : '' }
                        bodyStyle={column.bodyStyle ? column.bodyStyle : ''}
                    />
                )
            }
        </DataTable>
    )
}

export default TableView