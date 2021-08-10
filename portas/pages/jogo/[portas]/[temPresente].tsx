import styles from '../../../styles/Jogo.module.css';
import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/porta";
import Link from 'next/link';
import { useRouter } from "next/router";
import { route } from 'next/dist/next-server/server/router';

const Jogo = () => {
	const router = useRouter();

	const [valido, setValido] = useState(false);
	const [portas, setPortas] = useState(criarPortas(3, 2));

	const attPortas = (novaPorta) => {
		const novasPortas = atualizarPortas(portas, novaPorta);
		setPortas(novasPortas);
	};

	const renderizarPortas = () => {
		return portas.map((porta, i) => {
				return <Porta key={i} value={porta} onChange={(novaPorta) => attPortas(novaPorta)}/>;
			}
		);
	}

	useEffect(() => {
		const portas = +router.query.portas;
		const temPresente = +router.query.temPresente;
		
		const qtdePortasValida = portas >= 3 && portas <= 15;
		const temPresenteValido = temPresente >= 1 && temPresente <= portas;

		setValido(qtdePortasValida && temPresenteValido);
	}, [portas, router.query.portas, router.query.temPresente]);

	useEffect(() => {
		const portas = +router.query.portas;
		const temPresente = +router.query.temPresente;
		setPortas(criarPortas(portas, temPresente));
	}, [router?.query]);

	return (
		<div id={styles.jogo}>
			<div className={styles.portas}>
				{valido ? 
					renderizarPortas()
					: <h1 style={{color: 'white'}}>Você passou parametros inválido...</h1>
				}
			</div>
			<div className={styles.botoes}>
				<Link href="/" passHref>
					<button>Reiniciar Jogo</button>
				</Link>
			</div>
		</div>
	);
};

export default Jogo;