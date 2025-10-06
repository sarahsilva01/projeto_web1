import { ContainerShip, SpaceCraft } from "./Classe";
import { MilleniumFalcon } from "./MileniumFalcon";

let ship = new SpaceCraft('drive fraco')
ship.jumpIntoHyperspace()

let falcon = new MilleniumFalcon();
falcon.jumpIntoHyperspace()


let goodForTheJob = (ship: ContainerShip) : boolean => ship.cargoContainers > 2

goodForTheJob(falcon)

console.log(`Is falcon good for the job? ${goodForTheJob(falcon)? 'Yes' : 'No'}`)
