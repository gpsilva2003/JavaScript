function Pessoa(primeiro, ultimo) {
  this.primeiro = primeiro;
  this.ultimo = ultimo;
}
Pessoa.prototype.Nomecompleto = function() {
  return this.primeiro + ' ' + this.ultimo;
};
Pessoa.prototype.NomecompletoReverso = function() {
  return this.ultimo + ', ' + this.primeiro;
};
var s = new Pessoa('Wilson','Simonal');
console.log(s.primeiro);
console.log(s.ultimo);
console.log(s.Nomecompleto());
console.log(s.NomecompletoReverso());
