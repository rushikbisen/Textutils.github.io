
import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick =()=>{
        console.log("Uppercase was clicked" + text);
        let newText =text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick =()=>{
        console.log("Uppercase was clicked" + text);
        let newText =text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }
    const handleOnChange =(event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const handleClearClick =()=>{
        // console.log("Uppercase was clicked" );
        let newText = '';
        setText(newText)
        props.showAlert("Clear text!","success");
    }
    const handleCopy =() =>{
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy to clipboard!","success");
    }
    const handleExtraSpace = () =>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove Extra Spaces!","success");
    }
     const [text, setText] = useState(''); 
    //  text="new text"; wrong way to change the state
    // setText("new text"); correct way to change the state
    return (
        <>
 <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control"  value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode ==='light'?'white':'black'}} id="myBox" rows="10"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
</div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
   <h1>Your Text summary</h1>
  <p> {text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"enter something inthe textbox above to preview it here"}</p>
   </div>  
  </> 
  )
}
