import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../Alert';
import Loading from '../Loading';
import ShorteningService from '../../services/shortService';


const LinkCreateForm = () => {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [errorMssg, setErrorMssg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    let serve = new ShorteningService()
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMssg(null);
        if(title === '' || link === null){
            setErrorMssg("Title or URL Link cannot be Empty!!!")
            return
          }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('url', link);
        formData.append('shortened_url', '_');

        const req = await serve.create('link', formData);
        setIsLoading(false);
        if(req.shortened_url){
          navigate(`/${req.shortened_url}`);
        }else{
          setErrorMssg("Network Error or Missing Fields...");
        }
      }
      if (isLoading)return <Loading />
  return (
    <div className="p-1 mb-2">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. rd's content.</p>
        {errorMssg && <Alert alertType="danger" alertMssg={errorMssg} closeAlert={()=>setErrorMssg(null)}/>}
        <form onSubmit={handleSubmit} encType="multipart/form-data" >

            <div className="input-group mb-3">
                <span className="input-group-text bg-info text-white px-2">Title</span>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} maxLength={300} className="form-control form-control-sm" required=""/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text bg-info text-white px-2">URL</span>
                <input type="url" value={link} onChange={(e)=>setLink(e.target.value)} maxLength={200} className="urlinput form-control form-control-sm" required=""/>
            </div>
            
            <div className='mt-3'>
                <button type='submit' className='btn btn-info rounded-0 shadow px-2'>Save URL</button>
            </div>
        </form>
    </div>
  )
}

export default LinkCreateForm