export const getStaticProps = async () => {
	console.log('[Server] gerando props para o componente...');
	
	const resp = await fetch('http://localhost:3000/api/produtos');
	const produtos = await resp.json();

	return {
		revalidate: 7,
		props: {
			produtos
		}
	}
};

export default function Estatico3(props) {
	const renderProducts = () => {
		return props.produtos.map(produto => {
			return <li key={produto.id}>{produto.nome} tem preço de R$ {produto.preco}</li>
		});
	};

	return (
		<div>
			<h1>Estatico #04</h1>
			<ul>
				{renderProducts()}
			</ul>
		</div>
	);
};