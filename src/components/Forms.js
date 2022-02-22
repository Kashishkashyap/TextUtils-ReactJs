import React, { useState } from 'react'

export default function Forms(props) {
  const [text,setText]= useState('');

  const uphandleClicked=()=>{
    let newtext= text.toUpperCase();
    setText(newtext);
    props.setAlert("Converted To Uppercase");
    setTimeout(() => {
      props.setAlert(null);
    }, 2000);
  }
  const lohandleClicked=()=>{
    let newtext= text.toLowerCase();
    setText(newtext);
    props.setAlert("Converted To Lowercase");
    setTimeout(() => {
      props.setAlert(null);
    }, 2000);
  }
  const copyhandleClicked=()=>{
    console.log("copied");
    var text= document.querySelector("#myBox");
    text.select();
    navigator.clipboard.writeText(text);
    props.setAlert("Text Copied To Clipboard");
    setTimeout(() => {
      props.setAlert(null);
    }, 2000);
  }
  const removeEShandleClicked=()=>{
    console.log("Removed Extra spaces");
    var newt=text.replace(/\s{2,}/g, ' ').trim();
    setText(newt);
   props.setAlert("Extra Spaces Removed");
   setTimeout(() => {
    props.setAlert(null);
  }, 2000);

  }
  const clearhandleClicked=()=>{
    setText(" ");
    props.setAlert("Text Reseted");
    setTimeout(() => {
      props.setAlert(null);
    }, 2000);
  }
  // without onuphandleClicked i will not be able to type text inside textarea
  const onuphandleClicked=(event)=>{
    setText(event.target.value);
  }
  return (
    <>
       <div className="container" style={{color: props.mode==='light'? 'black': 'white'}}>
           <h1>{props.heading}</h1>
           <div className="mb-3">
               <textarea  value={text} className='form-control' onChange={onuphandleClicked} id="myBox" style={{backgroundColor: props.mode==='light'? 'white': '#343a40',color: props.mode==='light'? 'black': 'white'}} cols="30" rows="10"></textarea>
           </div>
          <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={lohandleClicked}>Convert To LowerCase</button>
          <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={uphandleClicked}>Convert To UpperCase</button>
          <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={copyhandleClicked}>Copy text</button>
          <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={removeEShandleClicked}>Remove Extra Spaces</button>
          <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={clearhandleClicked}>Reset</button>
      
       </div>
      
       <div className="container mt-3" style={{color: props.mode==='light'? 'black': 'white'}}>
        <h1>Your text summmary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").length} Minutes reading Time</p> 
        <h2>Preview</h2>
        <p>{text.length>0? text : "Write text to preview "}</p>
      </div>
    </>
  )
}
