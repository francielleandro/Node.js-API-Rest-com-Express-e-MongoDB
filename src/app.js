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

// Retorna um livro em especifico a apartir de um id
app.get('/livros/:id',(req, res) =>{
    let index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
})


// Cria uma rota POST em /livros que adiciona um novo livro ao array de livros com base no corpo da requisição e retorna uma mensagem de sucesso
app.post('/livros',(req, res) =>{
    livros.push(req.body);
    res.status(201).send('O livro foi cadastrado com sucesso');
})

// Atualiza o titulo de um livro em especifico a apartir de um id
app.put('/livros/:id',(req, res) =>{
    let index = buscaLivro(req.params.id);
    
    livros[index].title = req.body.title;

    res.status(200).json(livros);
})

// Deleta um livro em especifico a apartir de um id
app.delete('/livros/:id',(req, res) =>{
    let { id } = req.params;
    let index = buscaLivro(id);
    
    livros.splice(index,1);

    res.status(200).json(`Livro ${id} removido com sucesso!`);
})


// Metodo para buscar livros a partir do id
function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id);
}
// Exporta o aplicativo express
export default app;
