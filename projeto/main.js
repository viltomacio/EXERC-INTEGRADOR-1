const util = require('./biblioteca/util');
const Pessoa = require('./pessoas/Pessoa');
const Aluno = require('./pessoas/Aluno');
const Professor = require('./pessoas/Professor');

const pessoa1 = new Pessoa('Maria Silva', 'maria@email.com');
const pessoa2 = new Pessoa('Joao Souza', 'joao-sem-arroba.com');

const aluno1 = new Aluno('Ana Costa', 'ana@ifb.edu.br', '20231234567');
const aluno2 = new Aluno('Carlos Lima', 'carlos@email.com', 'abc123');

const professor1 = new Professor('vitor', 'vitor@ifb.edu.br', 'Programacao');
const professor2 = new Professor(
  'vitora',
  'vitoria@gmail.com',
  'Banco de Dados'
);

const lista = [pessoa1, pessoa2, aluno1, aluno2, professor1, professor2];

console.log('===== RELATORIO FINAL =====');
for (let i = 0; i < lista.length; i++) {
  util.mostrarDados(lista[i]);
}

let completos = 0;
let incompletos = 0;

for (let i = 0; i < lista.length; i++) {
  const dados = lista[i].getDados();
  let ok = true;

  for (const campo in dados) {
    if (dados[campo] === '') {
      ok = false;
    }
  }

  if (ok) {
    completos++;
  } else {
    incompletos++;
  }
}

console.log('');
console.log('===== RESUMO =====');
console.log('Total de cadastros: ' + lista.length);
console.log('Cadastros completos: ' + completos);
console.log('Cadastros com dado invalido: ' + incompletos);

console.log('');
console.log('===== TESTES =====');
console.log("pessoa2.setEmail('x@y.com'):", pessoa2.setEmail('x@y.com'));
console.log(
  "aluno2.setMatricula('99999999'):",
  aluno2.setMatricula('99999999')
);
console.log(
  "professor2.setEmail('p@site.com'):",
  professor2.setEmail('p@site.com')
);
console.log(
  "professor2.setEmail('p@ifb.edu.br'):",
  professor2.setEmail('p@ifb.edu.br')
);
console.log("validarCPF('529.982.247-25'):", util.validarCPF('529.982.247-25'));
console.log("validarCPF('111.111.111-11'):", util.validarCPF('111.111.111-11'));
