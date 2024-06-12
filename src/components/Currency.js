import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency } = useContext(AppContext);
    const [getCurrency, setCurrency] = useState(currency)
    
    return (
        <div>
            <label>Currency (
                <select className= "MuiOutlinedInput-notchedOutline" value={getCurrency} onChange={onSelectChange} >
                    <option value="£">£ Pound</option>
                    <option value="$">$ Dollar</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
            ) </label>
        </div>
    );

    function onSelectChange(evt) {
        setCurrency(evt.target.value);
    }
};
export default Currency;
