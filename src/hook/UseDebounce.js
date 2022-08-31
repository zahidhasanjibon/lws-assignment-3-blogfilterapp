import { useEffect, useState } from 'react';

function UseDebounce(value,delay) {

    const [searchVal,setSearchVal] = useState('')
    useEffect(() => {
        const timeout = setTimeout(() => {
            if(!value){
                return setSearchVal(" ")
            }
            setSearchVal(value)
        },delay)
        return () => {
                clearTimeout(timeout)
        }
    },[value,delay])


  return searchVal
}

export default UseDebounce