import express from 'express';


const app = express();

app.get('/users', (request, response) => {
    console.log('listagem de usuarios');
    //response.send('Heloooo');
    response.json([
        'Aluno1',
        'Aluno2', 
        'Aluno3',
    ])
});

app.listen(3333);