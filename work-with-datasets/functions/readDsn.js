const execute = require('../services/execCmd');
// const dataset = process.argv[2]

const command = dsname => `cat "//'${dsname}'"`;
const readDsn =  dataset =>  execute(command(dataset))
// readDsn(dataset).then(a=>console.log(`Resultado: \n${a}`))

module.exports = readDsn