import {createSlice} from '@reduxjs/toolkit'

export const viewSlice = createSlice({
    name: 'view',
    initialState: {
        main: true,
        create: false
    },
    reducers: {
        setMain: (state) => state = {main: true, create: false},
        setCreate: (state) => state = {main: false, create: true} 
    }
})

export const {setMain, setCreate} = viewSlice.actions

export default viewSlice.reducer