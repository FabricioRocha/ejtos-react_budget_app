import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    // const [getCurrency, setCurrency] = useState(currency);
    
    return (
        <div>
            <label>Currency (
                <select className= "MuiOutlinedInput-notchedOutline" value={currency} onChange={onSelectChange} >
                    <option value="£">£ Pound</option>
                    <option value="$">$ Dollar</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
            ) </label>
        </div>
    );

    function onSelectChange(evt) {
        // setCurrency(evt.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: evt.target.value
        });
    }
};
export default Currency;
