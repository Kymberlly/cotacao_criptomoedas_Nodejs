const conexao = require('./conexao.js');

const executaQuery = (sql, parametros='') => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, parametros, (erro, resultados) => {
            if(erro)
                return reject(erro);
            
            resolve(resultados);
        });
    });
};

module.exports = executaQuery
