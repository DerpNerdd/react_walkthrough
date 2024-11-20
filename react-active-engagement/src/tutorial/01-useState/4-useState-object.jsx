import {useState} from 'react'


const UseStateObject = () => {

    const [person, setPerson] = useState({
        name: 'Alan',
        age: 17,
        message: "Sigma Meal Skibidi Slicers"
    })

    // const [name, setName] = useState('Alan')
    // const [age, setAge] = useState(17)
    // const [message, setMessage] = useState("Sigma Meal Skibidi Slicers")

    const changeMessage = () => {
        setPerson({...person, message: "Erm What the Sigma"})
    }

  return (
    <>
        <h3>{person.name}</h3>
        <h4>{person.age}</h4>
        <h4>{person.message}</h4>
        <button className='btn' onClick={changeMessage}>
            Change Message
        </button>
    </>
  )
}

export default UseStateObject