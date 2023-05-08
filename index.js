const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Bem-vindo à página inicial - Matheus Frota - Jefferson Nogueira</h1>');
});

app.get('/sobre', (req, res) => {
  res.send('<h1>Sobre nós</h1><p>Somos uma empresa dedicada a fornecer soluções tecnológicas inovadoras.</p>');
});

app.get('/contato', (req, res) => {
  res.send('<h1>Entre em contato</h1><p>Envie um e-mail para jefferson.nogueira@edu.br ou ligue para (85) 99998543132.</p>');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});