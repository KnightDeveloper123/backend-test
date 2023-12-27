const { Client } = require('pg')

const connectionString = 'postgres://default:1kZgGLUqVy5r@ep-small-firefly-24588041-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb'
const client = new Client({
    //   user: 'default',
    //   host: 'ep-small-firefly-24588041-pooler.us-east-1.postgres.vercel-storage.com',
    //   database: 'verceldb',
    //   password: '1kZgGLUqVy5r',
    //   port: 5432,
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false, // Use this option cautiously, see note below
    },
})
client.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // client.end()
});

module.exports = client;