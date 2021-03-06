import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, fetchUsers, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./asyncAction/customers";
import {asyncCashAddCreator, asyncCashGetCreator, cashAddCreator, cashGetCreator} from "./store/cashReducer";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)
    console.log(cash)

    function addCash(cash) {
        dispatch({type: 'ADD_CASH', payload: cash})
        //dispatch(cashAddCreator(cash))
    }

    function getCash(cash) {
        dispatch({type: 'GET_CASH', payload: cash})
        //dispatch(cashGetCreator(cash))
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }

    function removeCustomer(customer) {
        dispatch(removeCustomerAction(customer.id))
    }
    return (
        <div className="app">
            <div className='container'>
                <div className='cash-count'>{cash}</div>
                <button onClick={() => addCash(Number(prompt()))}>Cash in</button>
                {/*<button onClick={() => dispatch(asyncCashAddCreator())}>Cash in</button>*/}
                <button onClick={() => getCash(Number(prompt()))}>Cash out</button>
                {/*<button onClick={() => dispatch(asyncCashGetCreator())}>Cash out</button>*/}
                <button onClick={() => addCustomer(prompt())}>Add client</button>
                <button onClick={() => dispatch(fetchCustomers())}>Add clients from data</button>
                {/*<button onClick={() => dispatch(fetchUsers())}>Add clients from data</button>*/}
            </div>
            {customers.length > 0
                ?
                <div>
                    {customers.map(customer =>
                        <div onClick={() => removeCustomer(customer)}
                             className='customers'>
                            {customer.name}
                        </div>
                    )}
                </div>
                :
                <div style={{fontSize: '2rem'}}>
                    No clients!
                </div>}
        </div>
    );
}

export default App;
