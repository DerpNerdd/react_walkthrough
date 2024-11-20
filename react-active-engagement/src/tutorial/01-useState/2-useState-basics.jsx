import {useState} from 'react'

//Remember the component name must be uppercase
//Invoke inside the function not outside the function
//Dont call hooks conditionally


const UseStateBasics = () => {

    const [text, setText] = useState("Random Title")

    //Function to change the text
    const handleClick = () => {
        if(text === "Random Title"){
            setText("Updated Title")
        }else{
            setText("Random Title")
        }
    }
  return (
    <>
        <h1>{text}</h1>
        <button className="btn" onClick={handleClick}>
            Change Title
        </button>
    </>
  )
}

export default UseStateBasics