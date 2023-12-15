const nomes = ["Juninho", "Vidal", "Guido", "Dani", "Ruli", "Diego"];

function dividirEmGrupos(array, quantidade) {
  let numeroGrupo = 1;

  for (let i = 0; i < array.length; i += quantidade) {
    const grupo = `Grupo ${numeroGrupo}: ${array
      .slice(i, i + quantidade)
      .join(", ")}`;
    console.log(grupo);
    numeroGrupo++;
  }
}

dividirEmGrupos(nomes, 4);
