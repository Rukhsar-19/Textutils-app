
import React ,{useState}from 'react'

export default function Textform(props) {
    const handleupClick=()=>{
        console.log("uppercase was clicked"  +  text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to upper case!","success");
    }

    const handleLoClick=()=>{
      console.log("lowercase was clicked"  +  text);
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("Convert to Lower case!","success");
  }

  const handleClearClick=()=>{
    console.log("Clear was clicked"  +  text);
    let newText='';
    setText(newText)
    props.showAlert("Text Cleared!","success");
}


    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }

    const [text,setText]=useState('');

  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'black'}} >
    
        <h1>{props.heading}</h1>


<div className="mb-3">

  <textarea className="form-control"value={text}  onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleupClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-1  my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1  my-1" onClick={handleClearClick}>ClearText</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary here</h1>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length}characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Mintues Read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter the text above here to preview it"}</p>
    </div>
    </>
  )
}
