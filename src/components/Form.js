import React, {useRef} from "react";

const Form = ({value, setValue}) => {
    const cityRef=useRef(null)

    function handleSubmit(event){
        event.preventDefault()
        setValue(cityRef.current.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" defaultValue={value} ref={cityRef}/>
            <button type="submit">Wyszukaj miasta</button>
        </form>
    )
}

export default Form