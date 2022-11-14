// import openDatabase hook
import { openDatabase } from "react-native-sqlite-storage";

// use hook to create database
const myContactsDB = openDatabase({name: 'MyContacts.db'});
const contactsTableName = 'contacts';
const groupsTableName = 'groups';

module.exports = {
    // declare function that will create the contacts table
    createContactsTable: async function () {
        // declare a transaction that will execute a SQL statement
        (await myContactsDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${contactsTableName}(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    fullname TEXT,
                    phone TEXT,
                    email TEXT
                );`,
                // arguments needed when using an SQL prepared statement
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log('Contacts table created successfully');
                },
                error => {
                    console.log('Error creating contacts table ' + error.message);
                },
            );
        });
    },

    // declare function that will insert a row into the contacts table
    addContact: async function (fullname, phone, email) {
        // declare a transaction that will execute an SQL statement
        (await myContactsDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `INSERT INTO ${contactsTableName} (fullname, phone, email) VALUES ("${fullname}", "${phone}", "${email}")`,
                // arguments passed when using SQL prepared statements
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log(fullname + " added successfully");
                },
                error => {
                    console.log('Error adding contact ' + error.message);
                },
            );
        });
    },

    // declare function that will create the groups table
    createGroupsTable: async function () {
        // declare a transaction that will execute a SQL statement
        (await myContactsDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${groupsTableName}(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    description TEXT
                );`,
                // arguments needed when using an SQL prepared statement
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log('Groups table created successfully');
                },
                error => {
                    console.log('Error creating groups table ' + error.message);
                },
            );
        });
    },

    // declare function that will insert a row into the groups table
    addGroup: async function (name, description) {
        // declare a transaction that will execute an SQL statement
        (await myContactsDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `INSERT INTO ${groupsTableName} (name, description) VALUES ("${name}", "${description}")`,
                // arguments passed when using SQL prepared statements
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log(name + " added successfully");
                },
                error => {
                    console.log('Error adding group ' + error.message);
                },
            );
        });
    },
};