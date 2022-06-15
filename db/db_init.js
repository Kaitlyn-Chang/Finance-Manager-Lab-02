// (Re)Sets up the database, including a little bit of sample data
const db = require("./db_connection");

/**** Delete existing table, if any ****/

const drop_payment_table_sql = "DROP TABLE IF EXISTS payment;"

db.execute(drop_payment_table_sql);

/**** Create "payment" table (again)  ****/

const create_payment_table_sql = `
    CREATE TABLE payment (
        id INT NOT NULL AUTO_INCREMENT,
        item VARCHAR(45) NOT NULL,
        cost INT NOT NULL,
        description VARCHAR(150) NULL,
        PRIMARY KEY (id)
    );
`
db.execute(create_payment_table_sql);

/**** Create some sample items ****/

const insert_payment_table_sql = `
    INSERT INTO payment 
        (item, cost, description) 
    VALUES 
        (?, ?, ?);
`

db.execute(insert_payment_table_sql, ['Banana', '5', 'Grocery shopping']);

db.execute(insert_payment_table_sql, ['Orange', '6', null]);

db.execute(insert_payment_table_sql, ['Grape', '7', 'Favorite fruit']);

db.execute(insert_payment_table_sql, ['Cucumber', '1', 'Null']);

/**** Read the sample items inserted ****/

const read_payment_table_sql = "SELECT * FROM payment";

db.execute(read_payment_table_sql, 
    (error, results) => {
        if (error) 
            throw error;

        console.log("Table 'payment' initialized with:")
        console.log(results);
    }
);

db.end();

/*

// Alternatively, instead of putting SQL in string literals, read the SQL from files using the "fs" package.
// Put this code at the top, and remove all the SQL string literals defined through the file.
const fs = require("fs");

const drop_stuff_table_sql = fs.readFileSync(__dirname + "/db/queries/init/drop_stuff_table.sql", { encoding: "UTF-8" });
const create_stuff_table_sql = fs.readFileSync(__dirname + "/db/queries/init/create_stuff_table.sql", { encoding: "UTF-8" });
const insert_stuff_table_sql = fs.readFileSync(__dirname + "/db/queries/init/insert_stuff_table.sql", { encoding: "UTF-8" });
const read_stuff_table_sql = fs.readFileSync(__dirname + "/db/queries/init/read_stuff_table.sql", { encoding: "UTF-8" });

*/

