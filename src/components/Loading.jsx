import React from 'react'
import './Loading.css'; 

const Loading = () => {
  return (
    <div className="loading-overlay">
        <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}

export default Loading