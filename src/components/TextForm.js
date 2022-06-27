import React, {useState} from 'react'
import PropTypes from 'prop-types'




export default function TextForm(props) {
    const handleUpperCase =() => {
        // we added new text which we get from uer to the console
        console.log("clicked to be uppercase"+ text);
        // we defined variable and converted the text which we got  from user into upper text
        let newText = text.toUpperCase();
        // we then returned the variable inside the settext function so that it can print it 
        setText(newText);

    }
    const handleOnCHange =(event ) => {
        setText(event.target.value)

    }
    // this is use state hook which helps use to set a state for the text
    const [text, setText] = useState("Enter text here");
// setText("new text");// correct way to change the text

    return (
    <div>
        <h1>{props.heading} </h1>
<div className="mb-3">
<textarea className="form-control" value = {text} onChange = {handleOnCHange} id="exampleFormControlTextarea1" rows="9"></textarea>
</div>
<button className="btn btn-one"onClick={handleUpperCase}>Convert to uppercase</button>
    </div>


  )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}