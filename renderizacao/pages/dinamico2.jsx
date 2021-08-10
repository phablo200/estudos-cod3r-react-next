export const getServerSideProps = async () => {
	const resp = await fetch('http://localhost:3000/api/produtos');
	const produtos = await resp.json();

	return {
		props: {
			produtos
		}
	}
};

export default function Dinamico2(props) {
	const renderProducts = () => {
		return props.produtos.map(produto => {
			return <li key={produto.id}>{produto.id} - {produto.nome} tem preço de R$ {produto.preco}</li>
		});
	};

	return (
		<div>
			<h1>Dinâmico #02</h1>
			<ul>
				{renderProducts()}
			</ul>
		</div>
	);
};