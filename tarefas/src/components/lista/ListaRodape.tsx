import ListaTarefas from "../../models/ListaTarefas";
import ListaBotao from "./ListaBotao";

interface ListaRodapeProps {
    tarefas: ListaTarefas,
    mudou: (tarefas: ListaTarefas) => void
}

const ListaRodape = (props: ListaRodapeProps) => {

    const { tarefas, mudou } = props;

    const renderizarQtdDeItens = () => {
        return (
            <>
                <span className='text-gray-500 hidden lg:inline'>
                    {tarefas.quantidade}
                    {tarefas.quantidade === 0 
                      ? ' Nenhuma tarefa encontrada'
                      : tarefas.quantidade === 1 
                        ? ' Tarefa encontrada' 
                        : ' Tarefas encontradas'}
                </span>
                <span className="flex-1 hidden lg:inline"></span>
            </>
        );
    };

    const renderizarBotoesFiltro = () => {
        return (
            <>
                <ListaBotao selecionado={tarefas.exibindoTodas()}
                    onClick={() => mudou(tarefas.removerFiltro())}
                    className="hidden md:inline"
                    >
                    Todas
                </ListaBotao>
                <ListaBotao selecionado={tarefas.exibindoSomenteAtivas()}
                    onClick={() => mudou(tarefas.filtrarAtivas())}
                    className="mx-4"
                    >
                    Ativas
                </ListaBotao>
                <ListaBotao selecionado={tarefas.exibindoSomenteConcluidas()}
                    onClick={() => mudou(tarefas.filtrarConcluidas())}
                    >
                    Concluidas
                </ListaBotao>
            </>
        )
    };

    const renderizarExcluirConcluidas = () => {
        return (
            <>
                <span className="flex-grow"></span>
                <ListaBotao onClick={() => mudou(tarefas.excluirConcluidas())}>
                    Excluir <span className="hidden md:inline">concluídas</span>
                </ListaBotao>
            </>
        ); 
    };

    return (
        <li className='flex p-5'>
            {renderizarQtdDeItens()}
            {renderizarBotoesFiltro()}
            {renderizarExcluirConcluidas()}
        </li> 
    );
};

export default ListaRodape;