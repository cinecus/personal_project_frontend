import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { signin } from "../../constant/redux_demo_data"


const initialState = {
    user: null,
    loading: false,
    error: ""
}

export const signinAsync = createAsyncThunk(
    'signin',
    async ({ username, password }, store) => {
        try {
            const user = await signin(username, password)
            return user
        } catch (error) {
            throw error
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signout: (state, action) => {
            state.user = null
            state.loading = false
            state.error = ''
        }
    },
    extraReducers: {
        [signinAsync.pending]: (state, action) => {
            state.loading = true
            state.error = ''
        },
        [signinAsync.fulfilled]: (state, action) => {
            state.user = action.payload
            state.loading = false
            state.error = ''
        },
        [signinAsync.rejected]: (state, action) => {
            state.user = null
            state.loading = false
            state.error = action.error.message
        }
    }
})

export const { signout } = authSlice.actions

export default authSlice.reducer