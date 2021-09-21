const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const consign = require('consign');

module.exports = () => {

    const optionsSwagger = {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "API Cotação de Criptomoedas",
                version: "1.0.0",
                description: "Cotação de criptomoeda utilizando Nodejs e Mysql.",
                contact: {
                    name: "Kymberlly Melo",
                    url: "https://github.com/Kymberlly"
                },
                servers: [
                    { url: "http://localhost:3000" }
                ]
            }
        },
        apis: ['./controllers/monitoramento.js']
    };

    const specs = swaggerJsDoc(optionsSwagger);
    const app = express();

    app.use(express.json());
    app.use("/", swaggerUi.serve, swaggerUi.setup(specs));

    consign().include('./controllers').into(app);

    return app;
};