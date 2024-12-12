import {useState} from 'react'

const ControlledInputs = () => {

    const [person, setPerson] = useState({firstName: "", email: "", age: ""})
    const [people, setPeople] = useState([])
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        if(person.firstName && person.email && person.age) {
            const newPerson = {...person, id: new Date(new Date().getTime()).getTime().toString()}
            setPeople([...people, newPerson])
            setPerson({firstName: "", email: "", age: ""})
        }
    }

    return (
    <>
        <article className="form">
            <form>
                <div className="form-control">
                    <label htmlFor="firstName">Name:</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name='firstName' 
                        value={person.firstName} 
                        onChange={handleChange} required 
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name='email' 
                        value={person.email} 
                        onChange={handleChange} required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="age">Age:</label>
                    <input 
                        type="number" 
                        id="age" 
                        name='age' 
                        value={person.age} 
                        onChange={handleChange} required
                    />
                </div>
                <button className="btn" type='submit' onClick={handleSubmit}>Add Person</button>
            </form>
        </article>
        <article>
            {people.map((person) => {
                const {id, firstName, email, age} = person
                return(
                     <div key={id} className="item">
                    <h4>{firstName}</h4>
                    <p>{email}</p>
                    <p>{age} years old</p>
                </div>
                )
            })}
        </article>
    </>
    )
}

export default ControlledInputs