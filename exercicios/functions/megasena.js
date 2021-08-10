export const gerarNumbers = (quantidade = 6, numeros = []) => {
    let qtde = +quantidade;
    if (qtde < 6 && qtde>60) {
        throw "Quantidade inválida";
    }

    if (numeros.length === qtde) {
        return numeros.sort((n1, n2) => n1 - n2);
    }

    const numeroAleatorio = parseInt(Math.random() * 60) + 1;
    if (!numeros.includes(numeroAleatorio)) {
        console.log('numeroAleatorio', numeroAleatorio);
        return gerarNumbers(qtde, [...numeros, numeroAleatorio]);
    } else {
        return gerarNumbers(qtde, numeros);
    }
}