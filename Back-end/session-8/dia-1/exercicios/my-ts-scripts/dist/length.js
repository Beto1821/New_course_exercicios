"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
exports.default = (value, fromUnit, toUnit) => {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    console.log('çheguei aqui');
    return value * Math.pow(10, exponent);
};
