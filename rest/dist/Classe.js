"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceCraft = void 0;
// criando uma classe
var SpaceCraft = /** @class */ (function () {
    // definindo o construtor já com as variáveis
    function SpaceCraft(propulsor) {
        this.propulsor = propulsor;
    }
    SpaceCraft.prototype.teste = function () {
        return 1;
    };
    // método de instância
    SpaceCraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace ".concat(this.propulsor));
    };
    return SpaceCraft;
}());
exports.SpaceCraft = SpaceCraft;
