import {useState, useEffect} from 'react';

//By default useEffect runs after every re-render

const UseEffectBasics = () => {
    const [value, setvalue] = useState(0);

    useEffect(() => {
        console.log('useEffect called');
        if (value > 0){
            document.title=`New Messages: (${value})`;
        }
    }); 

    console.log("Rendering Complete")

    return (
        <>
            <h1>{value}</h1>
            <button className='btn' onClick={() => setvalue(value + 1)}>Click me</button>
        </>
    );
};

export default UseEffectBasics;