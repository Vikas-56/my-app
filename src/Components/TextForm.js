import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText= text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        console.log("Uppercase was clicked");
        let newText= text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
    
        setText(event.target.value);
       
    }

    const [text,setText] = useState();
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div class="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handleLoClick}>Convert to Uppercase</button>
    </div>
    <div className="container my-2">
        <h2> Your text summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p> 
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
