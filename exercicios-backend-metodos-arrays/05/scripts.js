const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

const agendarPaciente = (pacientes, nomePaciente) => {
  pacientes.push(nomePaciente);
  return pacientes;
};

const atenderPaciente = (pacientes) => {
  if (pacientes.length === 0) {
    return "Não há pacientes para atender.";
  } else {
     pacientes.shift();
    return pacientes ;
  }
};

const cancelarAtendimento = (pacientes, nomePaciente) => {
  const indexPaciente = pacientes.indexOf(nomePaciente);
  if (indexPaciente === -1) {
    return "Paciente não encontrado.";
  } else {
    pacientes.splice(indexPaciente, 1);
    return pacientes;
  }
};

console.log(agendarPaciente(pacientes, "Ricardo"));
console.log(atenderPaciente(pacientes)); 
console.log(cancelarAtendimento(pacientes, "Maria"));
