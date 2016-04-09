var packageInfo = require('../../package.json');
var version = packageInfo.version;


var mode = process.env.NODE_ENV;

console.log('\u001b[90m                                                  | |');
console.log('                                                  | |');
console.log('       ____              _                        | |____ ');
console.log('      | __ )  __ _ _   _| |__   __ _ _   _ ___    | / ___| ');
console.log('      |  _ \\ / _` | | | | \'_ \\ / _` | | | / __|_  | \\___ \\ ');
console.log('______| |_) | (_| | |_| | | | | (_| | |_| \\__ \\ |_| |___) |');
console.log('___________/ \\__,_|\\__,_| | |_|\\__,_|\\__,_|___/\\___/|____/ ');
console.log('\u001b[90m                        | | version: \033[0m' + version + '\u001b[90m ' + mode);
console.log('\u001b[90m                        | | \u001b[93m           \u001b[91m _______   \u001b[94m      ');
console.log('\u001b[90m                        | | \u001b[93m    /\\    \u001b[91m |       | \u001b[94m  ,-´-, ');
console.log('\u001b[90m                        | | \u001b[93m   /  \\   \u001b[91m |       | \u001b[94m /     \\ ');
console.log('\u001b[90m                        | | \u001b[93m  /    \\  \u001b[91m |       | \u001b[94m \\     / ');
console.log('\u001b[90m                        | | \u001b[93m /______\\ \u001b[91m |_______| \u001b[94m  `-,-´\033[0m');
console.log(' ');


