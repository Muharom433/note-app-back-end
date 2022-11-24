const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler, deleteAll, homepage } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    }, {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    }, {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    }, {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    }, {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    }, {
        method: 'DELETE',
        path: '/notes/all',
        handler: deleteAll,
    }, {
        method: 'GET',
        path: '/home',
        handler: homepage,
    }];

module.exports = routes;
