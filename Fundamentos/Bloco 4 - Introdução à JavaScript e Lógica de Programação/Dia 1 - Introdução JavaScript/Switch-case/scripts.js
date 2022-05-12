let processoSeletivo = "lista";

switch (processoSeletivo){
  case "aprovada":
    console.log("Parabéns, você foi aprovada");
    break;

  case "lista":
    console.log("Você está na lista de espera");
    break;
  
    case "reprovada":
      console.log ("Você não foi selecionado para essa chamada");
      break;
    default:
      console.log("não se aplica");
      break;
}
