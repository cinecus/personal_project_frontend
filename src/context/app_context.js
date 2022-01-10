import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from '../reducers/products_reducer'

import {
    ACTION_NAME
} from '../actions'

const initialState = {
    data_loading: false,
    single_data: {}
}

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [data, setData] = useState([])

    const fetchAPI = async () => {
        try {

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AppContext.Provider value={{ ...state, fetchAPI, data }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}