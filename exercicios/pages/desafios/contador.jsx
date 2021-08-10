import { useState } from "react"

export default function desafioContador () {

    const [value, setValue] = useState(0);

    const increment = () => {
        setValue((value) => value + 1);
    }

    const decrement = () => {
        setValue(value => value - 1);
    }

    return (
        <>
            <h1>Contador {value}</h1>
            <button onClick={increment}>Incrementar +</button>
            <button onClick={decrement}>Decrementar -</button>
        </>
    )
}