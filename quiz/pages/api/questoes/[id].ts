// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import questoes from "../bancoDeQuestoes";


export default function handler(req, res) {
	const id = +req.query.id;

	const unicaQuestaoOuNada = questoes.filter(q => q.id === id);
	
	if (unicaQuestaoOuNada.length === 1) {
		const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRepostas();
		res.status(200).json(questaoSelecionada.paraObjeto());
	} else {
		res.status(204).send();
	}
}
  