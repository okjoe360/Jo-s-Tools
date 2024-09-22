import React, { useState } from 'react';
import Api from '../services/api';
import Alert from '../components/Alert';
import Loading from '../components/Loading';
import contactUs from '../assets/contactUs.jpg'

const contactStyle = {backgroundImage: `url(${contactUs})`, backgroundColor: '#cccccc', height: '100vh', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMssg, setErrorMssg] = useState(null);
    const [alertType, setAlertType] = useState('danger');
    const [isLoading, setIsLoading] = useState(false);

    let api = new Api();

    const handleSubmit = async () => {
        setIsLoading(true);
        setErrorMssg(null);
        if(name === '' || email === ''){
            setErrorMssg("Name or Email cannot be Empty!!!")
            return
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        const res = await api.createContact(formData);
        setIsLoading(false);
        if(res.status === 201){
            setErrorMssg('Message Sent');
            setAlertType('success');
            setName('');
            setEmail('');
            setMessage('');
        }else{
            setErrorMssg('Message Not Sent');
            setAlertType('danger');
        }

    }

    if (isLoading)return <Loading />
  return (
        <section style={contactStyle}>
            <div className="row">
                <div className="col-lg-4">
                    <div className='card shadow m-3 '>
                        <div className="card-header bg-info text-white">
                            Contact Us
                        </div>
                        <div className="card-body bg-info-subtle">
                            {errorMssg && <Alert alertType={alertType} alertMssg={errorMssg} closeAlert={()=>setErrorMssg(null)}/>}
                            <div>
                                <div className="form-floating mb-3">
                                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/>
                                    <label>Full Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control"/>
                                    <label>Email address</label>
                                </div>

                                <div className="form-floating">
                                    <textarea  value={message} onChange={(e)=>setMessage(e.target.value)} className="form-control" rows={6}></textarea>
                                    <label>Message</label>
                                </div>

                                <div className='mt-3'>
                                    <button className='btn btn-info' onClick={handleSubmit}>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8"></div>
            </div>
        </section>
  )
}

export default Contact