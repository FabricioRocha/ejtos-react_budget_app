import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            // Budget component
                            <div className='col-sm'>
                                <Budget />
                            </div>
                        }        

                        {
                          //Remaining component
                            <div className='col-sm'>
                                <Remaining />
                            </div>
                        }        

                        {
                           //ExpenseTotal component
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                        }

                        {
                            <div className="col-sm">
                                <Currency/>
                            </div>
                        }        
                       
                        {
                            /* Add ExpenseList component here */
                            
                            <div className='row mt-3'>
                                <h2 className='mt-3'>Allocation</h2>
                                <ExpenseList/>
                            </div>
                        }         

                        {
                            /* Add ExpenseItem component here */
                        }        

                        {
                            /* Add AllocationForm component here under */
                            <div className="row mt-3">
                                <h2>Change allocation</h2>
                                <AllocationForm/>              
                            </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
