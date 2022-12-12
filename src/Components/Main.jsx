import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {Button} from 'primereact/button'
import {FilterMatchMode} from 'primereact/api'
import TableView from './DataTable'

const columns = [
    {field: 'date', header: 'Date', filter: true},
    {field: 'name', header: 'Name', filter: true}
]

const dataSet = [
    {date: '11/02/2022', name: 'Matt', id: 0},
    {date: '11/25/2022', name: 'Matt', id: 1},
    {date: '12/02/2022', name: 'Jill', id: 2}
]

const filters = {
    date: {value: null, matchMode: FilterMatchMode.EQUALS},
    name: {value: null, matchMode: FilterMatchMode.EQUALS}
}

const Main = () => {
    const dispatch = useDispatch()

    return (
        <div className='grid'>
            <section className='col-12'>
                <Button>New Cycle Count</Button>
            </section>
            <section className='col-12'>
                <TableView data={dataSet} columns={columns} tableFilters={filters} />
            </section>
            <section className='col-12'>
                <h1>3</h1>
            </section>
        </div>
    )
}

export default Main