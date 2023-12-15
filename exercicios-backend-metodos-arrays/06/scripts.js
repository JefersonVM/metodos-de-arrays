const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

const encontrarDono = (usuarios, nomePet) => {
    const dono = usuarios.find(usuario => usuario.pets.includes(nomePet));
    return dono ? `O dono(a) do(a) ${nomePet} é o(a) ${dono.nome}` : `Que pena ${nomePet}, não encontramos seu dono(a)`;
}

console.log(encontrarDono(usuarios, "Snow"));