function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo.toFixed(2)}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar =  function(valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
}

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

CC.prototype = Object.create(Conta.prototype)
CC.prototype.construcor = CC

CC.prototype.sacar = function(valor) {
    if ((this.saldo + this.limite) < valor) {
        console.log(`Saldo insuficiente: ${this.saldo.toFixed(2)}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

const conta1 = new Conta(66, 77, 100)
conta1.depositar(200)
conta1.sacar(299.99)
conta1.sacar(1)

// const cc = new CC(11, 22, 10, 100)
// cc.sacar(90)