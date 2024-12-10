import {useState, useEffect} from 'react'
const url = 'https://api.github.com/users/DerpNerdd'

const MultipleReturns = () => {
    //Webpage state changes: You can use these to setup your own loading sscreens progress bars...etc... as well as a custom error component for wrong pages or permissions
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState('default-user')

    useEffect(() => {
        fetch(url)
        .then((resp) => {
            if(resp.status >= 200 && resp.status <= 299){
                return resp.json()
            } else {
                setIsLoading(false)
                setIsError(true)
                throw new Error(resp.statusText)
            }
        })
        .then((user) => {
            const {login} = user
            setUser(login)
            setIsLoading(false)
        }).catch((err) => {
            console.log(err)
            setIsLoading(false)
            setIsError(true)
        })
    })

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error: Unable to fetch user data.</div>

  return (
    <div>
        <h1>{user}</h1>
    </div>
  )
}

export default MultipleReturns