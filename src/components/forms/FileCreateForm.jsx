import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../Alert';
import Loading from '../Loading';
import ShorteningService from '../../services/shortService';

const FileCreateForm = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const [errorMssg, setErrorMssg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let serve = new ShorteningService()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMssg(null);
    if(title === '' || file === null){
        setErrorMssg("Title or File cannot be Empty!!!")
        return
    }
    const formData = new FormData();
    formData.append('title', title);
    formData.append('desc', desc);
    formData.append('file', file);
    formData.append('shortened_url', '_');
    
    const req = await serve.create('file', formData);
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
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            
            <div className="input-group mb-3">
                <span className="input-group-text bg-info text-white px-2">Title</span>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} maxLength={300} className="form-control form-control-sm" required=""/>
            </div>

            <div className="form-group mb-3">
                <label className="text-info">Description</label>
                <div className="mb-2">
                    <textarea onChange={(e)=>setDesc(e.target.value)} value={desc} cols={40} rows={4} className="textarea form-control form-control-sm rounded-0"></textarea>
                </div>
            </div>

            
            <div className="form-group mb-3">
                <label className="text-info">File</label>
                <div className="mb-2">
                    <input type="file" onChange={(e)=>setFile(e.target.files[0])} accept="image/png, image/gif, image/jpeg, application/pdf, application/doc, application/docx, application/xlsx" className="col-12 form-control mb-3 fileinput form-control-file form-control-sm rounded-0" required=""/>
                </div>
            </div>
            <div className='mt-3'>
                <button type='submit' className='btn btn-info rounded-0 shadow'>Upload File</button>
            </div>
        </form>
        </div>

  )
}

export default FileCreateForm