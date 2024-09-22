import React, { useState, useEffect } from 'react'
import UnitConverter from '../../services/unitConvert';
import Alert from '../Alert';
import Loading from '../Loading';

const UnitConverterForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState(null);
    const [fromUnit, setFromUnit] = useState('');
    const [toUnit, setToUnit] = useState('');
    const [errorMssg, setErrorMssg] = useState(null);
    const [measuresList, setMeasuresList] = useState([]);
    const [measure, setMeasure] = useState('');
    const [measureUnitList, setMeasureUnitList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    let conv = new UnitConverter();
  
    const handleSubmit = () => {
      //e.preventDefault();
      setIsLoading(true);
      if(inputValue === '' || fromUnit === '' || toUnit === ''){
          setErrorMssg("Fill all fields!!!")
          return
      }
      setResult(conv.convertUnit(fromUnit, toUnit, inputValue));
      setIsLoading(false);
    }

    useEffect(()=>{
        const convMeasuredList = conv.measuresList()
        setMeasuresList(convMeasuredList);
    })

    function setMeasureOnclick(item){
        setMeasure(item);
        setMeasureUnitList(conv.convPossibilities(item));
        setResult(null);
        setFromUnit('')
        setToUnit('')
    }

    if (isLoading)return <Loading />
  return (
    <div className="p-1 mb-2">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. rd's content.</p>
        
        <div className="d-flex justify-content-between my-3">
            <div className="dropdown">
                <button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {measure ==='' ? 'Select to Continue' : measure.toLocaleUpperCase()}
                </button>
                <ul className="dropdown-menu overflow-y-scroll" style={{height:'200px'}}>
                    {measuresList.map((item, idx)=>{
                        return (<li key={idx}><button onClick={()=>setMeasureOnclick(item)} className="dropdown-item">{item.toLocaleUpperCase()}</button></li>)
                        })}
                </ul>
            </div>

            <div>
                <h3>{measure.toLocaleUpperCase()}</h3>
            </div>
        </div>
        
        
        <section>
            {result && <h3 className='py-2 mb-3 border border-info text-center'>{result} {toUnit}</h3>}
            
            <div className="form-floating mb-3">
                <input type="number" value={inputValue} onChange={(e)=>{setInputValue(e.target.value);}} className="form-control rounded-0" id="floatingInput" />
                <label className="text-info">Enter Value</label>
            </div>

            <div className='row'>
                <div className="col-lg-6">
                    <div className="form-floating mb-3">
                        <select onChange={(e)=>{setFromUnit(e.target.value);}} className="form-select rounded-0">
                            <option defaultValue=''>Open this select menu</option>
                            {measureUnitList.map((unit, idx)=>{
                                return (<option key={idx} value={unit.abbreviation}>{unit.singular}</option>)
                            })}
                        </select>
                        <label className="text-info">Convert From</label>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="form-floating mb-3">
                        <select onChange={(e)=>{setToUnit(e.target.value)}} className="form-select rounded-0">
                            <option defaultValue=''>Open this select menu</option>
                            {measureUnitList.map((unit, idx)=>{
                                return (<option key={idx} value={unit.abbreviation}>{unit.singular}</option>)
                            })}
                        </select>
                        <label className="text-info">Convert To</label>
                    </div>

                </div>

                <div className='d-flex justify-content-between my-2'>
                    <div>
                        <button className='btn btn-info' onClick={handleSubmit}>Convert</button>
                        <button className='btn btn-warning ms-2' onClick={()=>{setMeasureOnclick('');setInputValue('');}}>Clear</button>
                    </div>
                    {errorMssg && <Alert alertType="warning" alertMssg={errorMssg} closeAlert={()=>setErrorMssg(null)}/>}
                </div>
            </div>
        </section>
    </div>
  )
}

export default UnitConverterForm