import React,{useState} from 'react'


export default function TextForm(props) {

    const [text,setText] = useState('');
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success")
    }

    const handleLoClick = ()=>{
        console.log("Uppercase was clicked");
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success")

    }

    const handleOnChange = (event)=>{
    
        setText(event.target.value);
       
    }

    const countword = () => { 
        let xx=0;
        if(text===null){
            xx === 0;
            
        }
        else{
            xx=word.split(' ').length
        }
        return xx;
     }


  return (
    <>
    <div className='container' style={{color: props.mode=== 'light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} 
            style={{backgroundColor: props.mode=== 'dark'?'grey':'white', color: props.mode=== 'light'?'black':'white'}}
            id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowecase</button>
        <div className="container my-2">
            <h2> Your text summary</h2>
            <p>{countword.text} words and {text.length} characters</p> 
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
    </div>
    </>
  );
}
