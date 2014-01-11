var SlidesharesDAO = require('../controllers/slideshares').CarsDAO;
var sanitize = require('validator').sanitize; // Helper to sanitize form input

/* The ContentHandler must be constructed with a connected db */
function ContentHandler (db) {
    "use strict";

    var slideshares = new SlidesharesDAO(db);

    this.displayMainPage = function(req, res, next) {
        "use strict";
        res.render('landing_page', {
            title: 'blog homepage'
        });
    }

    this.handleNewSlideshare = function(req, res, next) {
        "use strict";

        var name = req.body.name;
        var make = req.body.make;
        var model = req.body.model;
        var year = req.body.year;
        var pricePerHr = req.body.pricePerHr;
        var pricePerDay = req.body.pricePerDay;
        var street = req.body.street;
        var city = req.body.city;
        var state = req.body.state;
        var zip = req.body.zip;

        if (!req.username) return res.redirect("/signup");

        cars.insertEntry(name, make, model, year, pricePerHr, pricePerDay, street, city, state, zip, function(err, permalink) {
            "use strict";

            if (err) return next(err);

            // now redirect to the blog permalink
            return res.redirect("/car/" + permalink)
        });
    }
}

module.exports = ContentHandler;
