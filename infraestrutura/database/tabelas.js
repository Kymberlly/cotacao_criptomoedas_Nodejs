class Tabelas{
    init(conexao){
        this.conexao = conexao;
        this.criar_tb_candlestick();
    }

    criar_tb_candlestick(){
        const sql = "CREATE TABLE IF NOT EXISTS tb_candlestick (id_candlestick INT AUTO_INCREMENT PRIMARY KEY, moeda VARCHAR(45) NOT NULL, datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP, open FLOAT NOT NULL, low FLOAT NOT NULL, high FLOAT NOT NULL, close FLOAT NOT NULL);";
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(`Erro ao criar tb_candlestick: ${erro}.`);
                return
            }
        });
    }
}

module.exports = new Tabelas();