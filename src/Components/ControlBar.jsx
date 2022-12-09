import { Box, Button } from "@mui/material"
import {useDispatch, useSelector} from "react-redux"
import {setMain, setCreate} from "../redux/viewSlice"

const pages = [
    {viewState: 'main', change: setCreate, text: 'Create Cycle Count'},
    {viewState: 'create', change: setMain, text: 'Go Back to Overview'}
]

const ControlBar = () => {
    const view = useSelector((state) => state.view)
    const dispatch = useDispatch()
    
    return (
        <Box sx={{marginBottom: 3}}>
            {pages.map((page) => view[page.viewState] && <Button variant="contained" sx={{backgroundColor: '#F17130'}} onClick={() => dispatch(page.change())}>{page.text}</Button>)}
        </Box>
    )
}

export default ControlBar