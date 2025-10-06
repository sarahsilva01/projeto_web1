// criando uma classe
class SpaceCraft {

  // definindo o construtor já com as variáveis
  constructor(public propulsor: string) {
  }

  teste (): number{
    return 1;
  }
  
  // método de instância
 jumpIntoHyperspace()  : void {
    console.log(`Entering hyperspace ${this.propulsor}`);
  }
}

// criando uma classe interface
interface ContainerShip {
    cargoContainers: number;
}

//preciamos exportar a classe e a interface
export { SpaceCraft, ContainerShip };