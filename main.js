// Classe abstrata
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    emitirSom() {
        console.log(`${this.nome} faz um som.`);
    }
}

// Classes herdeiras
class Cachorro extends Animal {
    latir() {
        console.log(`${this.nome} está latindo.`);
    }
}

class Gato extends Animal {
    miar() {
        console.log(`${this.nome} está miando.`);
    }
}

// Instâncias de objetos
const cachorro1 = new Cachorro('Bobby');
const gato1 = new Gato('Whiskers');
const cachorro2 = new Cachorro('Rex');

cachorro1.emitirSom(); // Bobby faz um som.
cachorro1.latir(); // Bobby está latindo.

gato1.emitirSom(); // Whiskers faz um som.
gato1.miar(); // Whiskers está miando.

cachorro2.emitirSom(); // Rex faz um som.
cachorro2.latir(); // Rex está latindo.
