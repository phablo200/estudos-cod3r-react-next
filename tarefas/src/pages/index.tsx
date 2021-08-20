import { useState } from 'react';
import Lista from '../components/lista/Lista';
import mock from '../data/mock';

export default function Home() {

  const [tarefas, setTarefas] = useState(mock);


  return (
    <div className={`
      flex flex-col
      justify-center
      items-center
      bg-gray-300
      h-screen
    `}>
      <Lista tarefas={tarefas} mudou={(novasTarefas) => {
        setTarefas(novasTarefas);
      }} />
    </div>
  )
}
