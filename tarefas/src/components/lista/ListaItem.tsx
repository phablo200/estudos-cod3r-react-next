import Selecao from './Selecao';

interface ListaItemProps {
    valor: string;
    concluido: boolean;
    alterarStatus: () => void
};

const ListaItem = (props) => {

    const estiloTexto = props.concluido 
        ? 'line-through text-gray-300' 
        : 'text-gray-600';

    return (
        <li onClick={props.alterarStatus} className={`
            bg-white text-black
            flex items-center p-5
            border-b border-gray-400 cursor-pointer
        `}>
            <Selecao valor={props.concluido} />
            <span className={`font-light ml-5 ${estiloTexto}`}>
                {props.valor}
            </span>
        </li>
    );
};

export default ListaItem;