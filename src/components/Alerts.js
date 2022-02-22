import React from 'react'

export default function Alerts(props) {
  return (
     
    // props.alert && <div>
    //   <div classNameName="alert alert-success" role="alert">
    //     {props.alert}
    //   </div>  
    //   <button type="button" classNameName="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    //     </div>      
    <div style={{height:"50px"}}>
        {props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{props.alert}</strong>
        </div>}
    </div>
   
  )
}
