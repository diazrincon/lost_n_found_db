const db = require('../config/db.config.js');
const Report = db.reports;

// Post a Report
exports.create = (req, res) => {
    // Save to MariaDB database
    Report.create({
        title: req.body.title,
        item_desc: req.body.item_desc,
        author: req.body.author,
        item_desc: req.body.item_desc,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    })
        .then(report => {
            // Send created Report to client
            res.json(report);
        })
        .catch(error => res.status(400).send(error))
};

// Fetch all Reports
exports.findAll = (req, res) => {
    Report.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] }
    })
        .then(reports => {
            res.json(reports);
        })
        .catch(error => res.status(400).send(error))
};

// Find a Report by Id
exports.findById = (req, res) => {
    Report.findById(
        req.params.reportId,
        { attributes: { exclude: ["createdAt", "updatedAt"] } }
    )
        .then(report => {
            if (!report) {
                return res.status(404).json({ message: "Report Not Found" })
            }
            return res.status(200).json(report)
        }
        )
        .catch(error => res.status(400).send(error));
};