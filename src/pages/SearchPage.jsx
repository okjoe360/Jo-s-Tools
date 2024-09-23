import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {QRCodeCanvas} from 'qrcode.react';
import Constants from '../services/constants';
import ShorteningService from '../services/shortService';
import Alert from '../components/Alert';
import Loading from '../components/Loading';



const SearchPage = () => {
  let location = useLocation();
  const navigate = useNavigate();
  let serve = new ShorteningService();

  const [link, setLink] = useState(null);
  const [linkData, setLinkData] = useState(null);
  const [fileData, setFileData] = useState(null);
  const [errorMssg, setErrorMssg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

    let constants = new Constants()

    const BASE_URL = constants.base_url + "/"
    const HOST_NAME = window.location.hostname
    const HOST_NAME1 = `${window.location.protocol}//${window.location.hostname}`;

  const getLinkData = async()=>{
    setIsLoading(true);
    const loc = location.pathname.split('/')[1]
    setLink(loc);
    const res = await serve.query(loc);
    setIsLoading(false);
    if(res.status === 404){
            setErrorMssg(res.message + ' , close to redirect back...');
            //setTimeout(()=>{navigate('/shortener')}, 2000)
        }
    setLinkData(res);
    if(res.type==="file") setFilePreview(res);
  }

  function setFilePreview(linkedData){
    const imageList = ["png", "jpg", "jpeg", "gif"]
    const msOfficeList = ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx']
    const videoList = ['mp4', 'ogg']
            
        if (linkedData.type === 'file'){
            let fileName = BASE_URL + linkedData.data.file
            var lastItem = fileName.split(".").pop();
        
            if (imageList.includes(lastItem)){
                setFileData(`<img src="${fileName}" width="100%" alt="..."/>`)
            }else if(fileName.endsWith(".pdf")){
                setFileData(`<iframe src="${fileName}" width="100%" height="500"></iframe>`);
            }else if(msOfficeList.includes(lastItem)){
                //$("#file__preview").append(`<iframe src="https://view.officeapps.live.com/op/embed.aspx?src=https://tools.joelokoniha.com${fileLink}" width="100%" height="800"></iframe>`);
                setFileData(`<iframe src="https://docs.google.com/gview?url=${fileName}&embedded=true" width="100%" height="500"></iframe>`);
            }else if(videoList.include(lastItem)){
                setFileData(`<video width="320" height="240" controls><source src="${fileName}" type="video/mp4">Your browser does not support the video tag.</video>`)
            }
        }
    }

  useEffect(() => {
            getLinkData();
        }, []);

  const handleRedirect=()=>{
        navigate('/shortener');
        }

  //useEffect(()=>{
  //      if(linkData.type === 'file'){
  //          setFilePreview();
  //      }
  //      }, [linkData])


  if (isLoading)return <Loading />

  if (!linkData || !linkData.data) return <div className='text-center mt-3'>{errorMssg ? <Alert alertType="warning" alertMssg={errorMssg} closeAlert={()=>{setErrorMssg(null);handleRedirect();}}/> : <h3>Loading...</h3>}</div>

  return (
    <div className="container">
        <div className="row py-3">
            <div className="col-lg-6">
                <div className="">
                    <h6 className="">Your Link : {HOST_NAME + "/" + link}</h6>
                    <p className="">TITLE : {linkData.data.title}</p> 
                    <p className="">SHORT CODE : {link}</p>
                    {linkData.type === 'url' && <a className="btn btn-info shadow" href={linkData.data.url} target='_blank'>Go To Your Link</a>
        }
                    <p className=""><small className="text-muted">Created at {new Date(linkData.data.created_at).toLocaleDateString(undefined, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</small></p>
                </div>
            </div>
            <div className="col-lg-6">
                <div id="qrcode" className="mx-auto">
                    {link && <QRCodeCanvas value={BASE_URL + link } />}
                </div>

                
            </div>
        </div>
        {errorMssg && <Alert alertType="warning" alertMssg={errorMssg} closeAlert={()=>setErrorMssg(null)}/>}
        {
        linkData.type === 'note' &&         
        <div className="card shadow">
            <div className="card-header bg-info text-white">{linkData.data.title}</div>
            <div className="card-body"><div dangerouslySetInnerHTML={{__html: linkData.data.note}} /></div>
        </div>
        }

        {
            linkData.type === 'file' && 
            <div>
                <div className="bg-info text-white p-2">{linkData.data.title}</div>
                <div id="file__preview__wrapper" className="p-3 border border-default">
                    <div>{fileData && <div dangerouslySetInnerHTML={{__html: fileData}} />}</div>
                </div>
            </div>
        }
    </div>
  )
}

export default SearchPage