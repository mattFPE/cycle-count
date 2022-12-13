import {Panel} from 'primereact/panel'
import {InputText} from 'primereact/inputtext'
import {Divider} from 'primereact/divider'
import TableView from './DataTable'

const tableHeader = (
    <div className='table-header flex flex-column'>
        <section>Adjustments</section>
        <Divider className='mb-5' />
        <section className='flex justify-content-evenly'>
            <span className='p-float-label'>
                <InputText id="itemFilter" />
                <label htmlFor='itemFilter'>Item</label>
            </span>
            <span className='p-float-label'>
                <InputText id="itemFilter" />
                <label htmlFor='itemFilter'>Item</label>
            </span>
            <span className='p-float-label'>
                <InputText id="itemFilter" />
                <label htmlFor='itemFilter'>Item</label>
            </span>
            <span className='p-float-label'>
                <InputText id="itemFilter" />
                <label htmlFor='itemFilter'>Item</label>
            </span>
            <span className='p-float-label'>
                <InputText id="itemFilter" />
                <label htmlFor='itemFilter'>Item</label>
            </span>
        </section>
    </div>
)

const countsTable = {
    tableName: 'Adjustments',
    emptyMessage: 'No Items to Display',
    filterDisplayType: 'row',
    customHeader: tableHeader,
    columns: [
        {field: 'item', header: 'Item', filter: false, headerStyle: {fontSize: '10px'}, bodyStyle: {fontSize: '10px'}},
        {field: 'description', header: 'Description', filter: false, headerStyle: {fontSize: '10px'}, bodyStyle: {fontSize: '10px'}},
        {field: 'unit', header: 'Units', filter: false, headerStyle: {fontSize: '10px'}, bodyStyle: {fontSize: '10px'}},
        {field: 'qtyOnHand', header: 'Qty On Hand', filter: false, headerStyle: {fontSize: '10px'}, bodyStyle: {fontSize: '10px'}},
        {field: 'onHandValue', header: 'On Hand Value', filter: false, headerStyle: {fontSize: '10px'}, bodyStyle: {fontSize: '10px'}},
        {field: 'newQty', header: 'New Qty', filter: false, headerStyle: {fontSize: '10px'}, bodyStyle: {fontSize: '10px'}},
        {field: 'newValue', header: 'New Value', filter: false, headerStyle: {fontSize: '10px'}, bodyStyle: {fontSize: '10px'}},
        {field: 'change', header: '% Change', filter: false, headerStyle: {fontSize: '10px'}, bodyStyle: {fontSize: '10px'}},
        {field: 'class', header: 'Class', filter: false, headerStyle: {fontSize: '10px'}, bodyStyle: {fontSize: '10px'}},
        {field: 'subclass', header: 'Subclass', filter: false, headerStyle: {fontSize: '10px'}, bodyStyle: {fontSize: '10px'}},
        {field: 'storedMultiLoc', header: 'Stored Multi. Loc.', filter: false, headerStyle: {fontSize: '10px'}, bodyStyle: {fontSize: '10px'}},
        {field: 'lastCount', header: 'Last Count', filter: false, headerStyle: {fontSize: '10px'}, bodyStyle: {fontSize: '10px'}},
        {field: 'lastAdjust', header: 'Last Adjusted', filter: false, headerStyle: {fontSize: '10px'}, bodyStyle: {fontSize: '10px'}},
        {field: 'serianlNumbers', header: 'Active S/N', filter: false, headerStyle: {fontSize: '10px'}, bodyStyle: {fontSize: '10px'}}
    ]
}

const testData = [
    {id: 0, item: 'Turbo', description: 'A turbocharger'}
]

const Create = () => {    
    return (
        <div>
            <Panel header='Primamry Information'></Panel>
            <TableView data={testData} tableDefinition={countsTable} />
        </div>
    )
}

export default Create