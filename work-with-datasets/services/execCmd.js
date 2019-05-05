const { exec } = require('child_process');

const execCmd = cmd =>
	new Promise((resolve, reject) => {
		exec(cmd, (error, stdout, stderr) => {
			if (error) {
				reject(error);
			}
			resolve(stdout ? stdout : stderr);
		});
	});

    module.exports = execCmd