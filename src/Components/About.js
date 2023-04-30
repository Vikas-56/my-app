import React from 'react'
// import { useState } from 'react';

export default function About(props) {
    // const [myStyle,setmyStyle]   = useState(
    // {
    //     color: 'balck',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#5149b1':'white',
        boarder: '2px solid',
        boarderColor: 'dark'?'white':'black',
    }

    

  return (
    <div className="container" >
        <h1 className='my-3'style={{color: props.mode === 'dark'?'white':'black'}}>About Us</h1>
        <div className="accordion" id="accordionExample"  >
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><strong>Analyze your text</strong></button>
                </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading time required.It has both light and dark mode for better compartable.
                        </div>
                    </div>
            </div>
            <div className="accordion-item" >
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><strong>Free to use</strong></button>
            </h2>
            <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body" style={myStyle}>
                TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text. TextUtils reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit.
                </div>
            </div>
            </div>
            <div className="accordion-item" >
            <h2 className="accordion-header" id="headingThree">
                <button
                className="accordion-button collapsed" style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                >
                <strong>Browser Compitable</strong>
                </button>
            </h2>
            <div
                id="collapseThree"
                className="accordion-collapse collapse" 
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc.
                </div>
            </div>
            </div>
      </div>
      
    </div>

  );
}
