module.exports = function (app) {

    const reports = require('../controller/report.controller.js');

    // Create a new Report
    app.post('/api/reports/create', reports.create);

    // Retrieve all Report
    app.get('/api/reports', reports.findAll);

    // Retrieve a single Report by Id
    app.get('/api/reports/:reportId', reports.findById);
}