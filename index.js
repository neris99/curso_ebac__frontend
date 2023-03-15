//clase de abstração
class Veiculo {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    acelerar() {
        console.log('Acelerando...');
    }

    frear() {
        console.log('Freando...');
        }
}

//duas classes herdeiras da classe anterior que seria veiculo
class Carro extends Veiculo {
    constructor(marca, modelo, ano, cor, portas) {
        super(marca, modelo, ano, cor);
        this.portas = portas;
    }

    abrirPortas() {
        console.log('Abrindo portas...');
    }

    fecharPortas() {
        console.log('Fechando portas...');
    }
}

    class Moto extends Veiculo {
    constructor(marca, modelo, ano, cor, cilindradas) {
        super(marca, modelo, ano, cor);
        this.cilindradas = cilindradas;
    }

    empinar() {
        console.log('Empinando...');
    }

    derrapar() {
        console.log('Derrapando...');
    }
}

//instancias do objeto veiculo
const meuCarro = new Carro('Fiat', 'Uno', 2021, 'vermelho', 4);
const minhaMoto = new Moto('Honda', 'CG 160', 2020, 'preta', 160);
const meuOutroCarro = new Carro('Chevrolet', 'Cruze', 2019, 'branco', 4);


meuCarro.acelerar(); // Acelerando...
minhaMoto.empinar(); // Empinando...
meuOutroCarro.frear(); // Freando...
