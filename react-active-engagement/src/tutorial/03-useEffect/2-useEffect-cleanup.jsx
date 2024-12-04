import {useState, useEffect} from 'react'

//Clean Up Functions


const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth)

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        console.log("Use Effect")
        window.addEventListener('resize', checkSize)
        return () => {
            console.log("Cleanup")
            window.removeEventListener('resize', checkSize)
        }
    })

    console.log("Render Component")

  return (
    <>
    <h1>Window Size: </h1>
    <h2>{size} PX</h2>
    </>
  )
}

export default UseEffectCleanup