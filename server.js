const http = require('http');
const port = 3000;

const rotas = {
    '/' : 'Curso de Node',
    '/livros' : 'Entrei na pagina de livros',
    '/autores' : 'Listagem de autores',
    '/about' : 'Rota sobre o Sobre'
}

const server = http.createServer((req,res)=>{
    res.writeHead(200, {
        'Content-Type' : 'text/plain'
    });
    res.end(rotas[req.url]);
})

server.listen(port, () =>{
    console.log(`Servidor on na porta ${port}`)
})