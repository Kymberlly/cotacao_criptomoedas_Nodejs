const query = require('../infraestrutura/database/queries.js');

class Monitoramento {

    adiciona(candlestick){
        const sql = "INSERT INTO tb_candlestick SET ?";
        return query(sql, candlestick);
    }

}

module.exports = new Monitoramento();