import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {logDOM} from "@testing-library/react";
import {store} from "./store";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    console.log(cash)

    function addCash(cash) {
        dispatch({type: 'ADD_CASH', payload: cash})
    }

    function getCash(cash) {
        dispatch({type: 'GET_CASH', payload: cash})
    }

    return (
        <div className="app">
            <div className='cash-count'>{cash}</div>
            <div className='container'>
                <button onClick={() => addCash(Number(prompt()))}>Cash in</button>
                <button onClick={() => getCash(Number(prompt()))}>Cash out</button>
            </div>
        </div>
    );
}

export default App;
