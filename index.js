const expressCustomizado = require('./config/express.js');
const Tabelas = require('./infraestrutura/database/tabelas.js');
const conexao = require('./infraestrutura/database/conexao.js');


conexao.connect(erro => {
    if (erro) {
        console.log(`Erro ao conectar ao banco de dados. ${erro}`);
        return;
    }

    Tabelas.init(conexao);

    const app = expressCustomizado().listen(3000, () => console.log('Servidor rodando na porta 3000.'));
});
