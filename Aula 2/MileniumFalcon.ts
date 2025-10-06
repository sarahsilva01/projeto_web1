import { SpaceCraft, ContainerShip } from './rest/Classe';

// classe herda de SpaceCraft e implementa ContainerShip
export class MilleniumFalcon extends SpaceCraft implements ContainerShip {
  // obrigatoriamente precisamos da variável da interface
  cargoContainers: number; // <-- plural

  // construtor
  constructor() {
    super('propulsor hipersônico'); // chama construtor da superclasse
    this.cargoContainers = 3;       // <-- plural
  }

  // vamos anular o método herdado
  jumpIntoHyperspace() : void {
    if (Math.random() >= 0.50) {
      super.jumpIntoHyperspace();
    } else {
      console.log('Falha ao entrar em hiperespaço');
    }
  }
}

//crinado objeto
//let obj1 = new MilleniumFalcon();
//obj1.jumpIntoHyperspace();
//let obj2 = new MilleniumFalcon();
//obj2.jumpIntoHyperspace();
//let obj3 = new MilleniumFalcon();
//obj3.jumpIntoHyperspace();