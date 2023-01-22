const connection = require('../connection');

const getAll = async (req, res) => {

    // Get all the data from the database
    const rows = await connection.execute('SELECT * FROM esp32');

    return rows[0];
    
}

module.exports = {
    getAll
}