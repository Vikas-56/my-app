import React,{useState} from 'react'


export default function TextForm(props) {

    const [text,setText] = useState('');
    const handleUpClick = ()=>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success")
    }

    const handleLoClick = ()=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success")

    }

    const handleCleartext = ()=>{
        let newText= '';
        setText(newText);
        props.showAlert("Text area is cleared","success")

    }
    
    const handleOnChange = (event)=>{
    
        setText(event.target.value);
          
    }


  return (
    <>
    <div className='container' style={{color: props.mode=== 'light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} 
            style={{backgroundColor: props.mode=== 'dark'?'#5149b1':'white', color: props.mode=== 'light'?'black':'white'}}
            id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowecase</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCleartext}>Reset</button>
        <div className="container my-2">
            <h2> Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p> 
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
    </div>
    </>
  );
}
