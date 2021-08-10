import listaProdutos from "../../data/listaProdutos";
export default function repeticao2 () {

    function renderLines() {
        return listaProdutos.map(produto => {
            return (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            );
        });
    }

    return (
        <div>
            {renderLines()}
        </div>
    );
}