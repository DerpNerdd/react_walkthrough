import {useState} from 'react'

const ControlledInputs = () => {
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [people, setPeople] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(firstName && email) {
            const person = {id: new Date(new Date().getTime()).getTime().toString(), firstName, email}
            console.log(person)
            setPeople((people)=>{
                return [...people, person]
            })
            setFirstName("")
            setEmail("")
        }else{
            console.log("Empty Values")
        }
    }

  return (
    <>
        <article>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-control">
                    <label htmlFor="firstName">Name:</label>
                    <input type="text" id="firstName" name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <button className="btn" type='submit'>Add Person</button>
            </form>
            {people.map((person, index)=> {
                const {id, firstName, email} = person
                return(
                     <div key={id} className="item">
                    <h4>{firstName}</h4>
                    <p>{email}</p>
                </div>
                )
            })}
        </article>
    </>
  )
}

export default ControlledInputs