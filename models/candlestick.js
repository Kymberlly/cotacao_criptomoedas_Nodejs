class Candlestick{
    constructor(){
        this.valorInicial = null;
        this.valorFinal = null;
        this.menorValor = null;
        this.maiorValor = null;
    }

    setValorInicial(valorInicial){
        this.valorInicial = valorInicial;
    }

    setValorFinal(valorFinal){
        this.valorFinal = valorFinal;
    }

    setMenorMaiorValor(valor){
        if(!this.menorValor && !this.maiorValor){
            [this.menorValor, this.maiorValor] = [valor, valor];
            return;
        }

        if(this.menorValor > valor)
            this.menorValor = valor;
        
        else if(this.maiorValor < valor)
            this.maiorValor = valor;
    }

}

module.exports = new Candlestick()