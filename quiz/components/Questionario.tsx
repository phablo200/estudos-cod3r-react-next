import styles from '../styles/Questionario.module.css';
import QuestaoModel from '../model/questao';
import Questao from './Questao';
import Botao from './Botao';

interface QuestionarioProps {
    questao: QuestaoModel,
    ultima: boolean,
    questaoRepondida: (questao: QuestaoModel) => void,
    irPraProximoPasso: () => void
};

const Questionario = (props: QuestionarioProps) => {
    
    const respostaFornecida = (indice: number) => {
        if (props.questao.naoRespondida) {
            props.questaoRepondida(props.questao.responderCom(indice));
        }
    };

    return (
        <div className={styles.questionario}>
            { props.questao ? (
            <Questao 
                valor={props.questao}
                tempoParaResposta={6}
                respostaFornecida={respostaFornecida}
                tempoEsgotado={props.irPraProximoPasso}
            />
            ) : false
            }

            <Botao onClick={props.irPraProximoPasso} 
                texto={props.ultima ? 'Finalizar' : 'Próxima'}
            />
        </div>
    )
};

export default Questionario;