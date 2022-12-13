import {useDispatch, useSelector} from "react-redux"
import {setMain, setCreate} from "../redux/viewSlice"
import {Button} from 'primereact/button'

const ControlBar = () => {
    const view = useSelector((state) => state.view)
    const dispatch = useDispatch()

    const pages = [
        {
            label: 'Create New Cycle Count',
            command: () => dispatch(setCreate())
        },
        {
            label: 'Return to Overview',
            command: () => dispatch(setMain())
        }
    ]
    
    return (
        <>
            {view.main && <Button label='Create New Cycle Count' onClick={() => dispatch(setCreate())} />}
            {view.create && <Button label='Return to Overview' onClick={() => dispatch(setMain())} />} 
        </>
    )
}

export default ControlBar