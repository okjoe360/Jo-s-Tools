import React, {useState, useEffect} from 'react'
import LinkCreateForm from '../components/forms/LinkCreateForm';
import NoteCreateForm from '../components/forms/NoteCreateForm';
import FileCreateForm from '../components/forms/FileCreateForm';

const ShortenerPage = () => {
  const [currentForm, setCurrentForm] = useState(<LinkCreateForm />)
  const [headerTitle, setHeaderTitle] = useState('URL Links')

  useEffect(() => {
    document.title = "URL Shortener | Jo's Shortener and Converter";
  }, []);

  return (
    <section className="container">
        <div className="row mt-3">
            <div className="col-sm-12 col-lg-6">
                <h2 className='text-info'>Shorter Links, Better Links</h2>
                <p className="lh-lg">
                    Eliminate lengthy URLs from your email campaigns, social media posts, and messages.
                </p>
                <p className="lh-lg">
                    URL link shortening offers a range of advantages, from improving the user experience and aesthetics
                    of shared links to providing detailed analytics for marketing professionals. 
                    It also enhances brand visibility, boosts security, and makes links more accessible across 
                    multiple platforms and devices. In an increasingly digital world where URLs are ubiquitous, 
                    shortening them provides a simple but powerful tool for optimizing online interactions and 
                    driving better results from marketing efforts. Whether you're an individual sharing content on 
                    social media or a business running a global marketing campaign, the advantages of using shortened 
                    URLs are both practical and strategic.
                </p>
            </div>
            <div className="col-sm-12 col-lg-6">
                <div className="card border-info shadow mb-3">
                    <div className="card-header text-white bg-info">
                        <div className="d-flex justify-content-between">
                            <span>{headerTitle}</span>
                            <nav>
                                <button className='btn btn-info' onClick={()=>{setCurrentForm(<LinkCreateForm />);setHeaderTitle('URL Links');}}>Url</button>
                                <button className='btn btn-info' onClick={()=>{setCurrentForm(<NoteCreateForm />);setHeaderTitle('URL Links');}}>Note</button>
                                <button className='btn btn-info' onClick={()=>{setCurrentForm(<FileCreateForm />);setHeaderTitle('URL Links');}}>File</button>
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

export default ShortenerPage