
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase Clicked" +text)
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleClearClick=()=>{
      let newText='';
      setText(newText);
    }
    const handleLowerClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);

    }
    const speak=()=>{
      let newText = new SpeechSynthesisUtterance();
      newText.text = text;
      window.speechSynthesis.speak(newText);
    }
    const handleOnChange=(event)=>{
        // console.log("On Change")
        setText(event.target.value);
    }
    const[text, setText]=useState('');
    
  return (
    <>

<div className='container '>
  <h1>{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary " onClick={handleUpClick}>Convert to UpperCase</button>
<button className='btn btn-primary mx-3' onClick={handleLowerClick}>Convert to LowerCase</button>
<button className='btn btn-primary mx-3' onClick={handleClearClick}>Clear All</button>
<button className='btn btn-primary' mx-3 onClick={speak}>Speak</button>
</div>
<div className='container my-3'>
  <h1>your text summary</h1>
  <p>{text.split(" ").length} words and {text.length} charecters</p>
  <p>{0.08*text.split(" ").length}Minutes read</p>

  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something in the textBox above to preview it here "}</p>
</div>

</>

  );
}
 

