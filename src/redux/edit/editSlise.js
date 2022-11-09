import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
    name: "edit",
    initialState: null,
    reducers: {
        setEdit: (_, {payload}) => payload
    },
})

export const { setEdit } = editSlice.actions;

export const editReducer = editSlice.reducer;