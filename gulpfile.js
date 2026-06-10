const { src, dest, parallel, series } = require('gulp');

function copyNodeIcons() {
	return src(['nodes/**/*.svg', 'nodes/**/*.png']).pipe(dest('dist/nodes'));
}

function copyCredentialIcons() {
	return src(['credentials/**/*.svg', 'credentials/**/*.png']).pipe(dest('dist/credentials'));
}

exports['build:icons'] = parallel(copyNodeIcons, copyCredentialIcons);
