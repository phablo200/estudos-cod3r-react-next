export const embaralhar = (elementos: any[]): any[] => {
	return elementos
		.map(el => ({valor: el, aleatorio: Math.random()}))
		.sort((a, b) => a.aleatorio - b.aleatorio)
		.map(el => el.valor)
}