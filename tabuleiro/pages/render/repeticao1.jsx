export default function Repeticao1 () {

    const listaAprovados = [
        'João',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura'
    ];

    function renderizarLista () {
        return listaAprovados.map((item, i) => <li key={i}>{item}</li>);
    }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    );
}