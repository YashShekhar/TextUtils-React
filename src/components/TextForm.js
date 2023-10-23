import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    const handleUpperCaseClick = () => {
        // console.log("Uppercase clicked1!!");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!!", "success");
    };
    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!!", "success");
    };
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!!", "success");
    };
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied Text!!", "success");
    };
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Space!!", "success");
    };
    const handleOnChange = (event) => {
        // console.log("On Change clicked1!!");
        setText(event.target.value);
    };
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p><i>You can read above text in {0.008 * text.split(" ").length} Minutes</i></p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    );
}
