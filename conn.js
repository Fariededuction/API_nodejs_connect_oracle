const oracledb = require('oracledb');


let clientOpts = {};
if (process.platform === 'win64') {                                   // Windows
    clientOpts = { libDir: 'C:\oracle\instantclient_12_1' };
} else if (process.platform === 'darwin' && process.arch === 'x64') { // macOS Intel
    clientOpts = { libDir: process.env.HOME + '/Downloads/instantclient_12_1' };
} 
oracledb.initOracleClient(clientOpts);

oracledb.autoCommit = true;


const dbConfig = {
  user: '<your_user>',
  password: '<your_password>',
  connectString: '(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = )(PORT = ))(CONNECT_DATA = (SERVER = DEDICATED) (SERVICE_NAME = )))' // Example: "localhost:1521/ORCL"
};

module.exports = dbConfig