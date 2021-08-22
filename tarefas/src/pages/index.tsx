import { useState } from 'react';
import Lista from '../components/lista/Lista';
import Cabecalho from '../components/template/Cabecalho';
import Conteudo from '../components/template/Conteudo';
import Formulario from '../components/formulario/Formulario';
import mock from '../data/mock';
import Tarefa from '../models/Tarefa';

export default function Home() {
  const [tarefas, setTarefas] = useState(mock);

  const novaTarefaCriada = (novaTarefa: Tarefa) => {
    setTarefas(tarefas.adicionarTarefa(novaTarefa));
  }

  return (
    <div className={`flex flex-col h-screen bg-gray-300`}>
      <Cabecalho>
        <Formulario  novaTarefaCriada={novaTarefaCriada} />
      </Cabecalho>
      <Conteudo>
        <Lista tarefas={tarefas} mudou={(novasTarefas) => {
          setTarefas(novasTarefas);
        }} />      
      </Conteudo>
    </div>
  )
}
