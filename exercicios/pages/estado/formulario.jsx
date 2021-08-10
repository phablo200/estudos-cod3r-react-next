import { useState } from "react";

export default function formulario () {
    const [value, setValue] = useState("");

    const alterarInput = (value) => {
        setValue(value);
    }
    return (
        <div>
            <input type="text" value={value} onChange={(ev) => alterarInput(ev.target.value)} />
        </div>
    );
}