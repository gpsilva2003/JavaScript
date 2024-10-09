var prompt = require('prompt');
  prompt.start();

  prompt.get(['usuario', 'email'], function (erro, resultado) {
    if (erro) { return onErr(erro); }
    console.log('Entrada pela console recebida:');
    console.log('  Usuário: ' + resultado.usuario);
    console.log('  Email: ' + resultado.email);
  });

  function onErr(erro) {
    console.log(erro);
    return 1;
  }
