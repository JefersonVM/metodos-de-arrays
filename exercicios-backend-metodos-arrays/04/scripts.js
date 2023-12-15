const pacientes = ["Jeferson", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

const automatizarAtendimento = (pacientes, tipoOperacao, nomePaciente) => {
  if (tipoOperacao === "agendar") {
    pacientes.push(nomePaciente);
    return `Paciente ${nomePaciente} adicionado com sucesso!`;
  } else if (tipoOperacao === "atender") {
    if (pacientes.length === 0) {
      return "Não há pacientes para atender.";
    }else {
      const pacienteAtendido = pacientes.shift();
      return `Próximo paciente a ser atendido(a): ${pacienteAtendido}`;
    }
  }
};

console.log(automatizarAtendimento(pacientes, "agendar", "Ricardo"));
console.log(automatizarAtendimento(pacientes, "agendar", "Marta"));
console.log(automatizarAtendimento(pacientes, "agendar", "Paula"));
console.log(automatizarAtendimento(pacientes, "atender"));
console.log(automatizarAtendimento(pacientes, "atender"));
console.log(automatizarAtendimento(pacientes, "atender"));

console.log(pacientes);
