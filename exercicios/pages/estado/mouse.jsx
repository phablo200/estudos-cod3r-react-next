import { useState } from "react";

export default function mouse () {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const estilo = {
        backgroundColor: "#222",
        color: "#FFF",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        display: "flex"
    };

    const quandoMover = (ev) => {
        setX(ev.clientX);
        setY((v) => ev.clientY);
    };

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    );
};
