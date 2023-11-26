class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado')
            return
        }

        this.ligado = true
    }

    desligado() {
        if (!this.ligado) {
            console.log(this.nome + ' já ligado')
            return
        }

        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }

    falaOi() {
        console.log('Oi')
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'S22')
console.log(s1)
console.log(s1.falaOi())