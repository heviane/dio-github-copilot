// module.exports = {
//     presets: ['@babel/preset-env'],
// };

/*
    O projeto está configurado como um módulo ES6 ("type": "module" no package.json).
    O Jest, por padrão, usa o sistema de módulos CommonJS.
    Por isso, configuramos o Babel para transformar ES6 para CommonJS.
*/

export default {
    presets: ['@babel/preset-env'],
};