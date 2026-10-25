const Pessoa = require('./Pessoa');
const util = require('../biblioteca/util');

class Aluno extends Pessoa {
  #matricula = '';

  constructor(nome, email, matricula) {
    super(nome, email);
    this.setMatricula(matricula);
  }

  setMatricula(matricula) {
    if (util.validarMatricula(matricula)) {
      this.#matricula = String(matricula).trim();
      return true;
    }
    return false;
  }

  getMatricula() {
    return this.#matricula;
  }

  getDados() {
    const dados = super.getDados();
    dados.matricula = this.#matricula;
    return dados;
  }
}

module.exports = Aluno;
