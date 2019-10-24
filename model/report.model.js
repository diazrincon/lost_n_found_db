module.exports = (sequelize, Sequelize) => {

    const Report = sequelize.define('report', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING(64)
        },
        item_desc: {
            type: Sequelize.TEXT
        },
        author: {
            type: Sequelize.TEXT('tiny')
        },
        latitude: {
            type: Sequelize.DOUBLE
        },
        longitude: {
            type: Sequelize.DOUBLE
        },
        image_path: {
            type: Sequelize.TEXT('medium')
        }
    });

    return Report;
}