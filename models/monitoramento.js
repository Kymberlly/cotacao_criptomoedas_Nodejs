const axios = require('axios');
const Candlestick = require('./candlestick.js');
const repositorio = require('../repositorio/monitoramento.js');

class Monitoramento{

    async observador(periodo, moeda){
        let valorRecenteMoeda;
        let periodoEmSegundos = periodo * 60;
        const tempoEsperaEmSegundos = 10;
        
        while(periodoEmSegundos > 0){
            try {
                const {data} = await axios.get('https://poloniex.com/public?command=returnTicker');

                if(data[moeda] === undefined)
                    return new Promise((_, reject) => reject(`Moeda ${moeda} não encontrada na API Poloniex.`));
                
                valorRecenteMoeda = data[moeda]['last'];

                if(Candlestick.valorInicial === null)
                    Candlestick.valorInicial = valorRecenteMoeda;

                Candlestick.setMenorMaiorValor(valorRecenteMoeda);
            }
            catch (error) {
                return new Promise((_, reject) => reject(`Ocorreu um erro: ${error}`));
            }

            await new Promise((resolve, _) => setTimeout(resolve, tempoEsperaEmSegundos * 1000));

            periodoEmSegundos -= tempoEsperaEmSegundos;
        }

        Candlestick.valorFinal = valorRecenteMoeda;
        return repositorio.adiciona(Candlestick);
    }

}

module.exports = new Monitoramento()
