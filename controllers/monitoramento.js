const Monitoramento = require('../models/monitoramento.js');

module.exports = app => {

    app.get('/monitorar/:periodo/:moeda', (req, res) => {
        const { periodo, moeda } = req.params;
        const periodoObservacao = parseInt(periodo);

        Monitoramento.observador(periodoObservacao, moeda)
        .then(resultado => {
            const frase = 'Ok.'
            res.json({frase});
        })
        .catch(erro => {
            res.status(400).json({erro})
        });
    });

};