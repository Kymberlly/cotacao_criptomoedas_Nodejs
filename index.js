const expressCustomizado = require('./config/express.js');

const app = expressCustomizado()
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.')
});