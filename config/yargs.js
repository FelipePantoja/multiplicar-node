const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: '10'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime por consola la tabla de multiplicar', opts)
    .command('crear', 'Imprime en un archivo la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}