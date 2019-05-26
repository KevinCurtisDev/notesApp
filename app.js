const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//Customise yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    handler: function () {
        console.log('Removing the new note!')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
        console.log('Listing notes.')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note!')
    }
})

console.log(yargs.argv)