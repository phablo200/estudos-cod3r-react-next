function gerarLista (final = 20) {
    const lista = [];
    for (let i = 1; i<=final; i++) {
        lista.push(<span>{i}, </span>)
    }
    return lista;
}

export default function Lista () {
    return (
        <div>
            <h1>{gerarLista()}</h1>
        </div>
    );
};
