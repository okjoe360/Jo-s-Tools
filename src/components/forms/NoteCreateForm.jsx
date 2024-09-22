import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../Alert';
import Loading from '../Loading';
import ShorteningService from '../../services/shortService';
import { Editor } from 'primereact/editor';

const NoteCreateForm = () => {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [errorMssg, setErrorMssg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    let serve = new ShorteningService()
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMssg(null);
      if(title === '' || note === ''){
          setErrorMssg("Title or Note Link cannot be Empty!!!")
          return
      }
      const formData = new FormData();
      formData.append('title', title);
      formData.append('note', note);
      formData.append('shortened_url', '_');

      const req = await serve.create('note', formData);
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
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          {errorMssg && <Alert alertType="danger" alertMssg={errorMssg} closeAlert={()=>setErrorMssg(null)}/>}
            <form onSubmit={handleSubmit} encType="multipart/form-data" >
              
            <div className="input-group mb-3">
                <span className="input-group-text bg-info text-white px-2">Title</span>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} maxLength={300} className="form-control form-control-sm" required=""/>
            </div>

              <div className="form-group mb-3">
                  <label className="text-info">Note</label>
                  <div className="mb-2">
                    {/*<textarea cols={40} rows={6}  value={note} onChange={(e)=>setNote(e.target.value)}  className="form-control form-control-sm rounded-0"></textarea>*/}
                    {/*<ReactQuill theme="snow" style={{height:"200px"}} value={note} onChange={setNote} />*/}
                    <Editor value={note} onTextChange={(e) => setNote(e.htmlValue)} style={{ height: '150px' }} />
                  </div>
              </div>
              <div className='mt-3'>
                <button type='submit' className='btn btn-info rounded-0 shadow'>Save Note</button>
              </div>
          </form>
      </div>
    )
  }
  
  export default NoteCreateForm