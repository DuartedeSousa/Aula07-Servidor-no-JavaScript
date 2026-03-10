//Importar o módulo HTTP nativo no Node.js
//Esse módulo permite criar servidores web
const http = require("http");

//Criarum servidor http
//Função que será executada toda vez que alguém acessar o servidor
const server = http.createServer((req, res) => { //A função é executada por si mesma
    //definir o status da resposta e o tipo de conteúdo
    //200 significa "requisição bem-sucedida"

    //res é resposta
    //content-type vai informar que estamos enviando um HTML
    res.writeHead(200, {"Content-type":"text/html"});

    //enviar a resposta para o navegador
    res.end(`
        <h1> API de Cachorros </h1>
        <p>Servidor Node.js funcionando<p>
        `);
});


//Faezr o servidor começar a escutar uma porta (3000)
//Isso significa que ele ficará que esperando requisições nessa porta
server.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`)
});