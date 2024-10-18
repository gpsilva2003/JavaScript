const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// Cria a aplicação Express
const app = express();

// Cria o servidor HTTP
const server = http.createServer(app);

// Inicializa o Socket.IO e conecta ao servidor HTTP
const io = new Server(server);

// Define a rota principal para servir a página HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/chat.html');
});

// Evento de conexão: acontece quando um cliente se conecta ao Socket.IO
io.on('connection', (socket) => {
  console.log('Um usuário se conectou');

  // Recebe uma mensagem do cliente e reenvia a todos os clientes conectados
  socket.on('chat message', (msg) => {
    console.log('Mensagem recebida: ' + msg);
    io.emit('chat message', msg); // Envia a mensagem para todos os clientes
  });

  // Evento de desconexão: acontece quando um cliente se desconecta
  socket.on('disconnect', () => {
    console.log('Um usuário se desconectou');
  });
});

// Configura o servidor para escutar na porta 3000
server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
