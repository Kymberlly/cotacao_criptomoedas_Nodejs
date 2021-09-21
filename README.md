# API Cotação de Criptomoedas


### Gerando a imagem Docker do projeto localmente
O arquivo Dockerfile possui todas as configurações necessárias para que seja realizado o build da aplicação.


1. Necessário ter o Docker instalado no computador;
2. No diretório do projeto, abrir o terminal ou o cmd e digitar o seguinte comando:

```
docker image build -t node_my:1.0.0 .
```

Após a geração da imagem, verifique se a mesma foi criada através do comando:
```
docker images
```

Caso a imagem tenha sido criada, a mesma deverá estar presente na lista de imagens registradas.


### Iniciando a aplicação

1. Após a criação da imagem, vamos utilizar o Docker Compose para gerenciar a imagem da aplicação e do MySQL. Na raiz do projeto abra o terminal ou cmd e execute o seguinte comando:
```
docker-compose up -d
```

Através deste comando a aplicação estará disponível no endereço [localhost:3000](https://localhost:3000).


Caso queira finalizar a aplicação basta digitar no terminal ou cmd o seguinte comando:
```
docker-compose down
```
