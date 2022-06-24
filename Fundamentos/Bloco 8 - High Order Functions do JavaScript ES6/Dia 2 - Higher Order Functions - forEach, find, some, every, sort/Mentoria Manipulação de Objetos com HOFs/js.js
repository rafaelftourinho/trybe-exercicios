const jogo = [
  {
    classe: 'Guerreiro',
    status: {
      hp: 150,
      atk: 10,
      def: 30,
    },
    habilidades:['Pular', 'Bloquear', 'Ataque Rapido'],
  },
  {
    classe: 'Arqueiro',
    status: {
      hp: 100,
      atk: 20,
      def: 15,
    },
    habilidades:['Desviar', 'Precisão', 'Tiro flamejante'],
  },
  {
    classe: 'Mago',
    status: {
      hp: 85,
      atk: 40,
      def: 10,
    },
    habilidades:['Bola de fogo', 'Teleportar', 'Nevasca'],
  }
]
​
​
//Encontre o personagem que utiliza a habilidade Teleportar
//Saida Esperada: Mago
const habilidadeTeleportar = jogo.find((personagem) => personagem.habilidades.includes('Teleportar'));
console.log(habilidadeTeleportar.classe);
​
​
//Verifique se todas as classes tem 3 habilidades
//Saida Esperada: true
const habilidades = jogo.every((elemento) => elemento.habilidades.length === 3);
console.log(habilidades);
​
​
//Verifique se pelo menos uma classe tem o hp maior que 150 e retorne um valor booleano.
//Saida Esperada: false
const hpMaior = jogo.some((elemento) => elemento.status.hp > 150);
console.log(hpMaior);
​
​
//Crie uma função que liste todas as habilidades do Arqueiro
// Saida Esperada: [ 'Desviar', 'Precisão', 'Tiro flamejante' ]
const habilidadeArqueiro = () =>{
  const arqueiro = jogo.find((elemento) => elemento.classe === "Arqueiro")
  arqueiro.habilidades.forEach((elemento) => console.log(elemento))
}
habilidadeArqueiro();
​
​
//Crie uma função que ordene as classes pelo maior ataque e imprima o nome da classe e o ataque:
//Esperado: "O ataque do mago é 40"
//Esperado: "O ataque do Arqueiro é 20"
//Esperado: "O ataque do Guerreiro é 10"
const maiorAtaque = () => {
  const ordenado = jogo.sort((acc, crr) => crr.status.atk - acc.status.atk);
  ordenado.forEach((elemento) => console.log(`O ataque do ${elemento.classe} é ${elemento.status.atk}`));
}
maiorAtaque();
​
​
​
//Faça uma função que retorne a somatoria de todos os ataques
// Esperado: "O ataque total é 70"
​
​
​
//Faça uma função que retorne um novo array com todas as habilidades ordenadas
// saida esperada: 
// [
//   'Ataque Rapido',
//   'Bloquear',
//   'Bola de fogo',
//   'Desviar',
//   'Nevasca',
//   'Precisão',
//   'Pular',
//   'Teleportar',
//   'Tiro flamejante'
// ]
