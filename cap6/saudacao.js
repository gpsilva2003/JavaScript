const pessoa = {
  nome: 'João',
  idade: 30,
  saudacao: function() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
};

pessoa.saudacao(); // Saída: Olá, meu nome é João e tenho 30 anos.

// Usando call para mudar o valor de this
const outraPessoa = {nome: 'Maria', idade: 25 };
pessoa.saudacao.call(outraPessoa); // Saída: Olá, meu nome é Maria e tenho 25 anos.
