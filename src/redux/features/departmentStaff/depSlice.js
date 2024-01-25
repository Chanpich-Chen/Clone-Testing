import { createSlice } from "@reduxjs/toolkit"


// initial state
const initialState = {
    staff: [],
    total:0
}


//create slice that contains the reducer and action 
const depSlice = createSlice({
    name: 'departmentStaff',
    initialState,
    reducers: {
        showStaff (state,action){
            state.staff = action.payload;
        },
    }
});


//export actions of slice 
export const {showStaff} = depSlice.actions;
export default depSlice.reducer;