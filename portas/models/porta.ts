export default class PortaModel {
	#numero: number
	#temPresente: boolean
	#selecionada: boolean
	#aberta: boolean
	
	constructor (numero: number, temPresente: boolean = false, selecionada: boolean = false, aberta: boolean = false) {
		this.#numero = numero;
		this.#temPresente = temPresente;
		this.#selecionada = selecionada;
		this.#aberta = aberta;
	}

	get numero (): number {
		return this.#numero;
	}

	get temPresente (): boolean {
		return this.#temPresente;
	}

	get selecionada (): boolean {
		return this.#selecionada;
	}

	get aberta (): boolean {
		return this.#aberta;
	}

	get fechada (): boolean {
		return !this.aberta;
	}

	desselecionar () {
		const selecionada = false;
		return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta);
	}

	alternarSelecao () {
		const selecionada = !this.selecionada;
		return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta);
	}

	abrir () {
		const aberta = true;
		return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta);
	}
}