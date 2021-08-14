import QuestaoModel from '../model/questao';
import styles from '../styles/Questao.module.css';
import Enunciado from './Enunciado';
import Resposta from './Resposta';
import Temporizador from './Temporizador';

const letras = [
	{valor: 'A', cor: '#F2C866'},
	{valor: 'B', cor: '#F266BA'},
	{valor: 'C', cor: '#85D4F2'},
	{valor: 'D', cor: '#BCE596'}
];

interface QuestaoProps {
	valor: QuestaoModel;
	tempoParaResposta?: number;
	respostaFornecida: (index: number) => void;
	tempoEsgotado: () => void;
};

const Questao = (props: QuestaoProps) => {
	const questao = props.valor;

	function renderizarRepostas () {
		return questao.respostas.map((resposta, i) => {
			return (
				<Resposta valor={resposta} 
					key={`${questao.id}-${i}`}	
					indice={i} 
					letra={letras[i].valor} 
					corFundoLetra={letras[i].cor}
					respostaFornecida={props.respostaFornecida}
				/>
			);
		})
	}

	return (
		<div className={styles.questao}>
			<Enunciado texto={questao.enunciado} />
			<Temporizador key={questao.id} 
				duracao={props.tempoParaResposta ?? 10} 
				tempoEsgotado={props.tempoEsgotado} />
			{renderizarRepostas()}
		</div>
	);
};

export default Questao;