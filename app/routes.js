module.exports = function(app, passport) {

    // route for home page
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });
}
