"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilleniumFalcon = void 0;
var Classe_1 = require("./rest/Classe");
// classe herda de SpaceCraft e implementa ContainerShip
var MilleniumFalcon = /** @class */ (function (_super) {
    __extends(MilleniumFalcon, _super);
    // construtor
    function MilleniumFalcon() {
        var _this = _super.call(this, 'propulsor hipersônico') || this; // chama construtor da superclasse
        _this.cargoContainers = 3; // <-- plural
        return _this;
    }
    // vamos anular o método herdado
    MilleniumFalcon.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.50) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log('Falha ao entrar em hiperespaço');
        }
    };
    return MilleniumFalcon;
}(Classe_1.SpaceCraft));
exports.MilleniumFalcon = MilleniumFalcon;
//crinado objeto
//let obj1 = new MilleniumFalcon();
//obj1.jumpIntoHyperspace();
//let obj2 = new MilleniumFalcon();
//obj2.jumpIntoHyperspace();
//let obj3 = new MilleniumFalcon();
//obj3.jumpIntoHyperspace();
