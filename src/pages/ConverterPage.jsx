import React, { useState, useEffect } from 'react'
import UnitConverterForm from '../components/forms/UnitConverterForm'
import CurrencyConverterForm from '../components/forms/CurrencyConverterForm'

const ConverterPage = () => {
  const [currentForm, setCurrentForm] = useState(<UnitConverterForm />)
  const [headerTitle, setHeaderTitle] = useState('Unit Converter')

  useEffect(() => {
    document.title = "Units Converter | Jo's Shortener and Converter";
  }, []);

  return (
    <section className="container">
        <div className="row my-3">
            <div className="col-sm-12 col-lg-6">
                <h2 className='text-info'>Shorter Links, Better Links</h2>
                <p className="lh-lg">
                Unit conversion is a fundamental tool that plays a crucial role in various aspects of daily life, 
                industry, science, education, and global commerce. 
                It enhances communication and understanding across borders, ensures accuracy in scientific 
                and engineering applications, and allows for efficient business operations. 
                From simplifying daily tasks like cooking to facilitating international collaboration and trade, 
                the ability to convert units is essential for navigating an increasingly interconnected world.
                </p>
            </div>
            <div className="col-sm-12 col-lg-6">
                <div className="card border-info shadow mb-3">
                    <div className="card-header text-white bg-info">
                        <div className="d-flex justify-content-between">
                            <span>{headerTitle}</span>
                            <nav>
                                <button className='btn btn-info' onClick={()=>{setCurrentForm(<UnitConverterForm />);setHeaderTitle('Unit Converter');}}>Units</button>
                                <button className='btn btn-info' onClick={()=>{setCurrentForm(<CurrencyConverterForm  />);setHeaderTitle('Currency Converter');}}>Currency</button>
                            </nav>
                        </div>
                    </div>
                    <div className="card-body">
                        <div>
                            {currentForm}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ConverterPage