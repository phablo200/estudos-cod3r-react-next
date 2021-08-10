import { useEffect, useState } from "react";

const Questao = () => {

    const [questao, setQuestao] = useState(null);

    useEffect(() => { 
        fetch('http://localhost:3000/api/questao/123')
            .then(resp => resp.json())
            .then(setQuestao);
    }, []);

    const renderizarRepostas = () => {
        if (questao) {
            return questao.respostas.map((resp, i) => {
                return <li key={i}>{resp}</li>;
            });
        }

        return false;
    }

    return (
        <div>
            <h1>Questão</h1>
            <div>
                <span>{questao?.enunciado}</span>
                <ul>
                    {renderizarRepostas()}
                </ul>
            </div>
        </div>
    );
};

export default Questao;