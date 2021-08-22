import { useState } from "react";
import Tarefa from '../../models/Tarefa';

interface FormularioProps {
    novaTarefaCriada: (tarefa: Tarefa) => void;
}

const Formulario = (props: FormularioProps) => {

    const [descricao, setDescricao] = useState('');

    const criarNovaTarefa = () => {
        if (descricao?.trim().length > 0) {
            const novaTarefa = Tarefa.criarAtiva(Math.random(), descricao);
            props.novaTarefaCriada(novaTarefa);
            setDescricao('');
        }
    }

    return (
        <div className="flex flex-1 justify-center">
            <input type="text" value={descricao} 
                onChange={(e) => setDescricao(e.target.value)} 
                onKeyDown={(e) => e.key==='Enter' ? criarNovaTarefa() : false }
                className={`
                    w-1/2 py-2 px-3 rounded-lg border-2 text-3xl
                    border-purple-300
                    focus:outline-none focus:ring-2 focus:ring-purple-600
                `}
                placeholder="Informe sua nova tarefa"
            />
            
            <button onClick={criarNovaTarefa} className={`
                ml-3 px-5 py-4 focus:outline-none rounded-lg
                bg-purple-600 text-white text-xl
            `}>
                +
            </button>
        </div>
    )
};

export default Formulario;