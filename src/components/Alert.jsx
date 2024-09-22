import React from 'react'

const Alert = ({ alertType, alertMssg, closeAlert }) => {
  return (
        <div className={`alert alert-${alertType} alert-dismissible fade show`} role="alert">
            <strong>{alertMssg}</strong>
            <button type="button" className="btn-close" onClick={closeAlert}></button>
        </div>
  )
}

export default Alert