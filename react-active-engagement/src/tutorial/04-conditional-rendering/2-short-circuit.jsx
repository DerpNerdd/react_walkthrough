import {useState} from 'react'


//Short-circuit evaluation AKA Ternary in returns 
const ShortCircuit = () => {
    const [text, setText] = useState('Daniel-San Oni-Chan')
    const [isError, setIsError] = useState(false)
    const firstValue = text || 'Hewwo World!'
    const secondValue = text && 'Hewwo World!'


  return (
    <>
        <h1>{firstValue}</h1>
        <h1>Value: {secondValue}</h1>
        
        <button className="btn" onClick ={() => setIsError(!isError)}>Toggle Error</button>
        {isError && <h1>Error... Oopsie</h1>}
        {isError ? (<p> There is an Error Please Help </p>) : (<div> <h2>There is no error</h2> </div>)}
        <button className="btn" onClick = {() => setText("")}>Change ME</button>
    </>
  )
}

export default ShortCircuit