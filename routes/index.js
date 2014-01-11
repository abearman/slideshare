var ContentHandler = require('./content');
var ErrorHandler = require('./error').errorHandler;

module.exports = exports = function(app, db) {

    var contentHandler = new ContentHandler(db);

    // The main page of the blog
    app.get('/', contentHandler.displayMainPage);

    //app.post('/car_request', contentHandler.handleCarRequest);

    // Error handling middleware
    app.use(ErrorHandler);
}
