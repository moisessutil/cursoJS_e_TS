class ValidaCpf {
    constructor(cpf) {
        this.cpfLimpo = cpf.replace(/\D+/g, '')
    }

    valida() {
        if (typeof this.cpfLimpo === 'undefined') return false
        if (this.cpfLimpo.length !== 11) return false

        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const digito1 = this.criaDigito(cpfParcial)
        const digito2 = this.criaDigito(cpfParcial + digito1)
        
        const novoCpf = cpfParcial + digito1 + digito2

        if (novoCpf === this.cpfLimpo) {
            return `O cpf ${this.cpfLimpo} é válido`
        } else {
            return `O cpf ${this.cpfLimpo} é inválido`
        } 

        
    }

    criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial)
        let regressivo = cpfArray.length + 1
        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val))
            regressivo--
            return ac
        }, 0)
        const digito = 11 - (total % 11)

        return String(digito) > 9 ? '0' : String(digito)
    }
}

const cpf = new ValidaCpf('082.522.149-83')
console.log(cpf.valida())