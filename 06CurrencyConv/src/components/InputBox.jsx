import React from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange=[],
    selectCurrency='usd',
    amountDisable=false,
    currencyDisable=false,
    className = ""
}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1/2'>
                <label className="text-black/40 mb-2 inline-block">
                    {label}  {/* Corrected: use the label prop */}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"  // Fixed the placeholder text
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) =>onAmountChange && onAmountChange(Number(e.target.value)) }  // Call onAmount function on change
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className='text-black/40 mb-2 w-full'>Currency Type</p>  {/* Corrected: text-black/40 */}
                <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none' 
                value={selectCurrency}
                onChange={(e)=>onCurrencyChange &&
                     onCurrencyChange(e.target.value)}
                     disabled={currencyDisable}
                 >
                    <option value='usd'>USD</option>
                </select>
            </div>
        </div>
    );
}

export default InputBox;
