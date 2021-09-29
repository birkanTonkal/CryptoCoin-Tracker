import {useEffect, useReducer} from 'react'
import axios from "axios";

const COIN_API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"

const initial_state = {
    loading : false,
    coins : [],
    error : null
}

const reducer = (state, action) => {
    switch(action.type){
        case "MAKE_REQUEST":
            return {...state, loading:true, coins: [], error: null}
        case "GET_DATA":
            return {...state, loading:false, coins: action.payload, error: null}
        case "ERROR":
            return {...state, loading:false, coins: [], error: action.error}
        default:
            return state;
    }
}

function useFetch() {
    const [state, dispatch] = useReducer(reducer, initial_state);
    useEffect(() => {
        dispatch({type : "MAKE_REQUEST"});
        axios.get(COIN_API_URL).then(res => {
            dispatch({type : "GET_DATA", payload : res.data})
        }).catch(e => {
            dispatch({type : "ERROR", error : e})
        })
    }, [])
    return (
        state
    )
}

export default useFetch
