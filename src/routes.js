const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler');

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const response = h.response('Hello dunia');
            h.type('text/html');
            return response;
        },
    },
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
    }];

module.exports = routes;
