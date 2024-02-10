const { program } = require('commander');
const axios = require('axios');

program
    .option('-v, --version', 'output the version number')
    .option('-i, --indicadores', 'fetch data from mindicador.cl/api')
    .option('--first')
    .option('-s, --separator <char>', 'output the first path segment')
    .parse(process.argv);

const options = program.opts();

if ('version' in options) {
    console.log('Version: 1.0.0');
}

if ('indicadores' in options) {
    console.log('Fetching data from mindicador.cl/api')
    axios.get('https://mindicador.cl/api')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(`Error: ${error}`);
        })
}

if ('first' in options) {
    console.log(options.separator)
    const limit = options.first ? 1 : undefined;
    console.log(program.args[0].split(options.separator, limit));
}

