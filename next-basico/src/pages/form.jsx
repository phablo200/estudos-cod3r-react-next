import { useState } from 'react';

export default function Form() {

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(0);
    const [usuarios, setUsuarios] = useState([]);

    const salvarUsuario = async () => {
        await fetch('api/form', {
            method: 'POST',
            body: JSON.stringify({nome, idade})
        });

        const resp = await fetch('api/form');
        setUsuarios(await resp.json());
    }

    const renderizaUsuarios = () => {
       return usuarios.map((usuario, i) => {
           return <li key={i}>{usuario.nome} tem {usuario.idade}</li>;
       })    
    }

    return (
        <div>
            <h1>Integrando com API #02</h1>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />

            <button onClick={salvarUsuario}>Enviar</button>

            <div>
                {renderizaUsuarios()}
            </div>
        </div>
    );
};
