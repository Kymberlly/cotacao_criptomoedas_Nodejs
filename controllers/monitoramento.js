/**
* @swagger
*   components:
*       schemas:
*           Cotacao:
*               type: object
*               required:
*                   - periodo
*                   - moeda
*               properties:
*                   periodo:
*                       type: integer
*                       description: Período da cotação valores entre 5, 10 e 15
*                   moeda:
*                       type: list
*                       description: Sigla da moeda a ser cotada
*               example:
*                   periodo: 1
*                   moeda: ["BTC_XMR", "BTC_KNC", "BTC_ZEC"]
 */

/**
 * @swagger
 * /monitorar/{periodo}/{moeda}:
 *  get:
 *      sumary: Armazena no banco de dados o valor da cotação gerada pela moeda
 *      parameters:
 *          - in: path
 *            name: periodo
 *            schema:
 *                type: integer
 *            required: true
 *            description: O período da cotação
 *          - in: path
 *            name: moeda
 *            schema:
 *                type: string
 *            required: true
 *            description: A sigla do par de moedas
 *      responses:
 *          "200":
 *              description: Sucesso ao armazenar a cotação
 * 
 * /monitoramento:
 *  post:
 *      sumary: Armazena no banco de dados o valor da cotação gerada pela moeda
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Cotacao'
 *      responses:
 *          "200":
 *              description: Sucesso ao armazenar a cotação
 *                  
 */

const Monitoramento = require('../models/monitoramento.js');

module.exports = app => {

    app.get('/monitorar/:periodo/:moeda', (req, res) => {
        const { periodo, moeda } = req.params;
        const periodoObservacao = parseInt(periodo);

        Monitoramento.observador(periodoObservacao, moeda)
            .then(resultado => res.json(resultado))
            .catch(erro => res.status(400).json({ erro }));
    });

};