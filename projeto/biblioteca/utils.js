function validarEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }

  email = email.trim();

  if (email.includes(' ')) {
    return false;
  }

  const partes = email.split('@');
  if (partes.length !== 2) {
    return false;
  }

  const usuario = partes[0];
  const dominio = partes[1];

  if (usuario.length === 0 || dominio.length === 0) {
    return false;
  }

  if (dominio.endsWith('.com') && dominio.length > 4) {
    return true;
  }

  if (dominio.endsWith('.edu.br') && dominio.length > 7) {
    return true;
  }

  return false;
}

function validarMatricula(matricula) {
  matricula = String(matricula).trim();

  if (matricula.length < 8 || matricula.length > 12) {
    return false;
  }

  for (let i = 0; i < matricula.length; i++) {
    if (matricula[i] < '0' || matricula[i] > '9') {
      return false;
    }
  }

  return true;
}

function validarCPF(cpf) {
  if (typeof cpf !== 'string') {
    return false;
  }

  cpf = cpf.replace(/\D/g, '');

  if (cpf.length !== 11) {
    return false;
  }

  let todosIguais = true;
  for (let i = 1; i < 11; i++) {
    if (cpf[i] !== cpf[0]) {
      todosIguais = false;
    }
  }
  if (todosIguais) {
    return false;
  }

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma = soma + Number(cpf[i]) * (10 - i);
  }
  let digito1 = (soma * 10) % 11;
  if (digito1 === 10) {
    digito1 = 0;
  }

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma = soma + Number(cpf[i]) * (11 - i);
  }
  let digito2 = (soma * 10) % 11;
  if (digito2 === 10) {
    digito2 = 0;
  }

  if (digito1 === Number(cpf[9]) && digito2 === Number(cpf[10])) {
    return true;
  }
  return false;
}

function mostrarDados(objeto) {
  const dados = objeto.getDados();

  console.log('----------------------------');
  for (const campo in dados) {
    if (dados[campo] === '') {
      console.log(campo + ': (nao informado)');
    } else {
      console.log(campo + ': ' + dados[campo]);
    }
  }
}

module.exports = {
  validarEmail,
  validarMatricula,
  validarCPF,
  mostrarDados,
};
