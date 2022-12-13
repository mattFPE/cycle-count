import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { Button } from 'primereact/button'
import { FilterMatchMode } from 'primereact/api'
import TableView from './DataTable'

const openCycleCountsTable = {
    tableName: 'Open Cycle Counts',
    emptyMessage: 'No cycle counts to complete at this time',
    filterDisplayType: 'menu',
    columns: [
        { field: 'document', header: 'Document #', filter: true },
        { field: 'createddate', header: 'Date Created', filter: true },
        { field: 'status', header: 'Status', filter: true }
    ]
}

const approvalCycleCountTable = {
    tableName: 'Cycle Counts Needing Accounting Approval',
    emptyMessage: 'No cycle counts to approve at this time',
    filterDisplayType: 'menu',
    columns: [
        { field: 'document', header: 'Document #', filter: true },
        { field: 'datecounted', header: 'Date Counted', filter: true },
        { field: 'timecounted', header: 'Time Counted', filter: true },
        { field: 'status', header: 'Status', filter: true }
    ]
}

const Main = () => {
    const dispatch = useDispatch()

    return (
        <div className='grid'>
            <section className='col-12 mt-5'>
                <TableView data={[]} tableDefinition={openCycleCountsTable} />
            </section>
            <section className='col-12 mt-5'>
                <TableView data={[]} tableDefinition={approvalCycleCountTable} />
            </section>
        </div>
    )
}

export default Main