import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to UpperCase", "success");
    }

    const handleLowClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to LowerCase", "success");
    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleCapitalClick = () => {
        // console.log("Uppercase was clicked" + text);
        let oldTextArr = text.split("");
        for (let i = 0; i < oldTextArr.length; i++) {
            if (oldTextArr[i] === ".") {
                oldTextArr[i + 2] = oldTextArr[i + 2].toUpperCase();
            }
        }

        let newText = oldTextArr.join("");
        // console.log(newText);
        setText(newText);
        // props.showAlert("Text Converted to UpperCase", "success");
    }

    const handleOnChange = (event) => {
        // console.log("OnChange was clicked");
        setText(event.target.value)
    }
    
    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <h1 style={{ color: props.mode === 'light' ? '#042743' : 'white' }}> {props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCapitalClick}>Captilalize</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h2 >Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text:"Enter something to preview it here"}</p>
            </div>
        </>
    )
}
