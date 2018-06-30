
# Frontend Engineer Test

## 1.0 Avaliação

1.1 Capacidade de seguir instruções

1.2 Qualidade, lógica e semântica do código

1.3 Utilização de APIs REST

1.4 Nível de conhecimento das ferramentas utilizadas

1.5 Capacidade de finalização de um projeto

1.6 Uso do Git como controle de versão

1.7 Qualidade dos testes

--

## 2.0 Tarefas

2.1 Clonar o repositório (_commitar_ o mais frequente possível).

2.2 Usar a API aberta em [https://iextrading.com](https://iextrading.com) para desenvolver um dashboard simples com 2 views/rotas.

- 2.2.1 Mostrar top 20 stocks em preço com um campo de busca.

- 2.2.2 Mostrar um stock específico com todos os dados que achar relevante.

--

### 2.1 Tecnologia

#### 2.1.1 Requerimentos para o teste

- 2.1.1.1 Framework de view: React (**Necessário**)

- 2.1.1.2 Framework de estado: Redux (**Sugerido**)

- 2.1.1.3 Framework de rotas: w/e

- 2.1.1.4 Preprocessador de CSS: SASS (**Sugerido**)

#### 2.1.2 Pontuação Bônus

- 2.1.2.1 Apresentar projeto no [Docker](https://www.docker.com/)

- 2.1.2.2 Utilizar [TypeScript](https://www.typescriptlang.org/)

- 2.1.2.3 Utilizar [webpack](https://webpack.js.org/) e produzir um único arquivo de _output_

- 2.1.2.4 Utilizar [socket.io](https://socket.io) para criar um grafico _real time_ do mercado (endpoint fornecido pela API acima)

- 2.1.2.5 Utilizar gráficos D3.js

- 2.1.2.6 Utilizar tipos imutáveis ou [Immutable-JS](https://facebook.github.io/immutable-js/)

#

### 🗜 Run with WebpackServer

##### Instal dependencies
```
$ npm install
```
##### Run server
```
$ npm run start
```

#

### 🗜 Run with Docker

##### Docker image Build

```j
docker build -t tracksale:php5 docker/
```
##### Docker start container
após o build da imagem...
```java
docker run -it --rm \
-p 3000:80 \
-v {$ pwd}:/var/www/html/ \
tracksale:php5
```  
```java
pwd <- caminho absoluto para a pasta /dist/
```
Por exemplo, no meu caso ficaria desta forma:
```java
docker run -it --rm \
-p 3000:80 \
-v /Users/vinicius/Develop/www/frontend-engineer-test/dist:/var/www/html/ \
tracksale:php5
```
# 
### 🔥 Ambos disponíveis em:
```java
 http://localhost:3000
```

### Considerações


* Optei por manter a arquitetura do CSS separada dos componentes, porém ela é toda baseada em componentes.
* Webpack como task-runner
* SASS como pré-processador de CSS
* Usei o axios, ele é uma alternativa ao socket.io
* Não utilizei o TypeScript, devido a pouca documentação quanto implementa-lo com React
* 🛠
