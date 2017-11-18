const connect = require('./connection');

module.exports = {
    /**
     * Get all data from `burgers` tbl
     * return array ordered by id
     */
    selectAll: (cb) => {
        connect.execute('SELECT * FROM burgers ORDER BY id', (error, result) => {
            if (error) { return console.log(error); }
            return cb(result);
        });
    },
    /**
     * INSERTS data from form into `burgers` tbl
     * takes one param for burger name
     */
    insertOne: (bg_name) => {
        connect.execute('INSERT INTO burgers (burger_name) VALUES (?)', [bg_name], (error, result) => {
            if (error) { return console.log(error); }
        });
    },
    /**
     * Updates `burgers` tbl based on id
     * takes two params
     * burger id and new `devoured` data
     */
    updateOne: (_id, _devoured) => {
        connect.execute('UPDATE burgers SET devoured = ? WHERE id = ?;', [_devoured, _id], (error, result) => {
            if (error) { return console.log(error); }
        });
    }
}
