import { useEffect, useState } from 'react';
import Questionario from '../components/Questionario';
import QuestaoModel from '../model/questao'
const BASE_URL = 'http://localhost:3000/api';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [questao, setQuestao] = useState<QuestaoModel>();
  const [respostasCertas, setRepostasCertas] = useState<number>(0);
  const [ids, setIds] = useState<number[]>([]);


  const carregarQuestoes = async () => {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const ids = await resp.json();
    setIds(ids);
  };

  const carregarQuestao = async (id: number) => {
    const resp = await fetch(`${BASE_URL}/questoes/${id}`)
    const json = await resp.json();
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json);
    setQuestao(novaQuestao);
  };

  useEffect(() => {
    carregarQuestoes()
  }, []);

  useEffect(() => {
    ids.length > 0 && carregarQuestao(ids[0]);
  }, [ids])

  const questaoRespondida = (questaoRespondida: QuestaoModel) => {
    setQuestao(questaoRespondida);
    const acertou = questaoRespondida.acertou;
    setRepostasCertas(respostasCertas + (acertou ? 1 : 0));
  };

  const idProximaPergunta = () => {
    const proximoIndice = ids.indexOf(questao.id) + 1;
    return ids[proximoIndice]; 
  };

  const irPraProximoPasso = () => {
    const proximoId = idProximaPergunta();
    proximoId ? irPraProximaPergunta(proximoId) : finalizar();
  };

  const irPraProximaPergunta = (proximoId: number) => {
    carregarQuestao(proximoId);
  };

  const ehUltimaPergunta = () => {
    return idProximaPergunta() === undefined;
  }

  const finalizar = () => {
    router.push({
      pathname: "/resultado",
      query: {
        total: ids.length,
        certas: respostasCertas,
      }
    });
  };

  return questao ? (
    <Questionario 
      questao={questao}
      ultima={ehUltimaPergunta()}
      questaoRepondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />
  ) : false;
};
