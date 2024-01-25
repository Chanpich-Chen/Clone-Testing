import { configureStore } from '@reduxjs/toolkit'
import depSlice from './features/departmentStaff/depSlice'
export const store = configureStore({
    reducer: {
        departmentStaff: depSlice,
    },
})