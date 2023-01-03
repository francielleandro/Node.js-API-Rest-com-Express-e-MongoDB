// Importa o módulo express
import express  from "express";

// Cria uma instância do aplicativo express
const app = express();

// Faz com que o aplicativo express use o middleware json, que é responsável por interpretar requisições com corpo em formato json
app.use(express.json());

// Cria um array de livros
const livros = [
    {id:1, title : 'Senhor dos Aneis'},
    {id:2, title : 'O Hobbit'}
]

// Cria uma rota GET na raiz da aplicação que retorna a string "Curso de Node"
app.get('/',(req,res) =>{
    res.status(200).send('Curso de Node');
})

// Cria uma rota GET em /livros que retorna o array de livros em formato json
app.get('/livros',(req,res) =>{
    res.status(200).json(livros)
})

// Cria uma rota POST em /livros que adiciona um novo livro ao array de livros com base no corpo da requisição e retorna uma mensagem de sucesso
app.post('/livros',(req, res) =>{
    livros.push(req.body);
    res.status(201).send('O livro foi cadastrado com sucesso');
})

// Exporta o aplicativo express
export default app;
