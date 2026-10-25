const Pessoa = require('./Pessoa');

class Professor extends Pessoa {
  #disciplina = '';

  constructor(nome, email, disciplina) {
    super(nome, email);
    this.setDisciplina(disciplina);
  }

  setEmail(email) {
    if (typeof email === 'string' && email.trim().endsWith('.edu.br')) {
      return super.setEmail(email);
    }
    return false;
  }

  setDisciplina(disciplina) {
    if (typeof disciplina === 'string' && disciplina.trim() !== '') {
      this.#disciplina = disciplina.trim();
      return true;
    }
    return false;
  }

  getDisciplina() {
    return this.#disciplina;
  }

  getDados() {
    const dados = super.getDados();
    dados.disciplina = this.#disciplina;
    return dados;
  }
}

module.exports = Professor;
