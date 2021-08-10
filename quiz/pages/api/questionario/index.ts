import questoes from "../bancoDeQuestoes";
import { embaralhar } from '../../../functions/arrays';

const questionario = (req, res) => {
	const ids = embaralhar(questoes.map(q => q.id));
	res.status(200).json(ids);
};

export default questionario;