import React from 'react'

const Footer = () => {
  const footerStyles = {
    position: "fixed", left: 0, bottom: 0, width: "100%"
  }
  return (
    <footer className="footer text-lg-start mt-5  bg-info text-white" style={footerStyles}>
        {/* Copyright */}
        <div className="text-center p-3">
            © 2024 Copyright,  All Rights Reserved. 
            <a className="text-white" href="https://joelokoniha.com/"> joelokoniha.com</a>
        </div>
        {/* Copyright */}
    </footer>
  )
}

export default Footer