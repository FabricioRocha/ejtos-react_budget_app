import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { expenses } = useContext(AppContext);

    const [newBudget, setNewBudget] = useState(budget);
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    const handleBudgetChange = (event) => {
        if (event.target.value > 20000) {
            alert ("Budget cannot exceed 20000.");
        } else if (event.target.value < totalExpenses ) {
            alert ("Insufficient budget for the expenses");
        } else {
            setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
