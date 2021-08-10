import { useState } from 'react';
import Botao from '../components/Botao';
import Questao from '../components/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

const questaoMock = new QuestaoModel(1, 'Melhor Cor ?', [
  RespostaModel.errada('Verde'),
  RespostaModel.certa('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.errada('Cinza')
]);

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock);

  const repostaFornecida = (indice: number) :void => {
    setQuestao(questao.responderCom(indice));
  }

  const tempoEsgotado = (): void => {
    if (questao.naoRespondida) {
      setQuestao(questao.responderCom(-1));
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questao valor={questao} 
        respostaFornecida={repostaFornecida} 
        tempoEsgotado={tempoEsgotado} 
        tempoParaResposta={5}
      />
      <Botao texto="Próxima" href="/resultado" />
    </div>
  );
};
