const mysqldump = require('mysqldump')
const path = require('path')

mysqldump({
    connection: {
        host: '192.34.62.10',
        user: 'USERNAME',
        password: 'PASSWORD',
        database: 'dorms',
    },
    dumpToFile: path.join(__dirname, `../db/dump.sql`),
})