import React, { useState, useEffect } from 'react'
import CurrencyConverter from '../../services/currencyConverter';
import currencyList from '../../assets/currency_list.json';
import Alert from '../Alert';
import Loading from '../Loading';

const CurrencyConverterForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState(null);
    const [fromUnit, setFromUnit] = useState('');
    const [toUnit, setToUnit] = useState('')
    const [errorMssg, setErrorMssg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    let conv = new CurrencyConverter();
  
    const handleSubmit = async () => {
      //e.preventDefault();
      setIsLoading(true);
      if(inputValue === '' || fromUnit === '' || toUnit === ''){
          setErrorMssg("Fill all fields!!!")
          return
      }
      //const req = await api.currency_conv_get(fromUnit, toUnit, inputValue)
      const {rate, result} = await conv.getDirectCurrencyConv(fromUnit, toUnit, inputValue)
      setResult({rate, result});
      setIsLoading(false);
    }


    function clearInputFields(){
        setInputValue('');
        setResult(null);
        setFromUnit('')
        setToUnit('')
    }
    
    if (isLoading)return <Loading />
  return (
    <div className="p-1 mb-2">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. rd's content.</p>
        
        <section>
            {result && <div><h3 className='py-2 mb-3 border border-info text-center'>{result.result} {toUnit}</h3><p>Rate : {result.rate}</p></div>}
            
            <div className="form-floating mb-3">
                <input type="number" value={inputValue} onChange={(e)=>{setInputValue(e.target.value);}} className="form-control rounded-0" id="floatingInput" />
                <label className="text-info">Enter Value</label>
            </div>

            <div className='row'>
                <div className="col-lg-6">
                    <div className="form-floating mb-3">
                        <select onChange={(e)=>{setFromUnit(e.target.value);}} className="form-select rounded-0">
                            <option defaultValue=''>Open this select menu</option>
                            {currencyList.map((unit, idx)=>{
                                return (<option key={idx} value={unit.short}>{unit.long}</option>)
                            })}
                        </select>
                        <label className="text-info">Convert From</label>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="form-floating mb-3">
                        <select onChange={(e)=>{setToUnit(e.target.value)}} className="form-select rounded-0">
                            <option defaultValue=''>Open this select menu</option>
                            {currencyList.map((unit, idx)=>{
                                return (<option key={idx} value={unit.short}>{unit.long}</option>)
                            })}
                        </select>
                        <label className="text-info">Convert To</label>
                    </div>

                </div>

                <div className='d-flex justify-content-between my-2'>
                    <div>
                        <button className='btn btn-info' onClick={handleSubmit}>Convert</button>
                        <button className='btn btn-warning ms-2' onClick={clearInputFields}>Clear</button>
                    </div>
                    {errorMssg && <Alert alertType="warning" alertMssg={errorMssg} closeAlert={()=>setErrorMssg(null)}/>}
                </div>
            </div>
        </section>
    </div>
  )
}

export default CurrencyConverterForm