const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];

const encontrarCarro =  (carros, posicao) => {
    
    if (posicao < 0 || posicao >= carros.length) {
        return 'Posição inválida';
    } else if (carros[posicao] === undefined) {
        return 'Carro não encontrado';
    }



    return carros.splice(posicao, 3).join(' - ');
}

console.log(encontrarCarro(nomes, 3));