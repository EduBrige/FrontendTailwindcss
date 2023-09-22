import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: '',
    name: ''
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.email = action.payload.email
            state.name = action.payload.name


        },

    }
})

export const { updateUser } = loginSlice.actions
export default loginSlice.reducer