import ListaTarefas from '../models/ListaTarefas';
import Tarefa from '../models/Tarefa';
import TipoFiltro from '../models/TipoFiltro';

const lista: Tarefa[] = [
    Tarefa.criarAtiva(1, 'Estudar Next'),
    Tarefa.criarAtiva(2, 'Limpar'),
    Tarefa.criarConcluida(3, 'Comprar livro do mẽs'),
];

export default new ListaTarefas(lista, TipoFiltro.NENHUM);