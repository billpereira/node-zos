const execute = require('../services/execCmd');

const options = {
	datasetName: 'a028356.test.alloc',
	dsorg: 'ps',
	space: {
		primary: 2,
		secondary: 0
	},
	unit: 'tracks',
	lrecl: 80,
	blksize: 8000,
	recfm: 'f,b'
};

const command = options =>
	`tsocmd 'alloc da("${options.datasetName}") dsorg(${options.dsorg}) space(${
		options.space.primary
	},${options.space.secondary}) ${options.unit} lrecl(${
		options.lrecl
	}) blksize(${options.blksize}) recfm(${options.recfm})  new'`;

execute(command(options)).then(msg=>console.log(msg)).catch(e=>console.log(e))
