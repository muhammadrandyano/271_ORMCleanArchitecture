const db = require('../models');

async function connectDatabase() {
    try {
        await db.sequelize.authenticate();
        console.log('Database connectedsuccessfully');

        await db.sequelize.sync({ alter: true });
        console.log('Database Synchronized successfully');

    } catch (err) {
        console.error('Database connection failed:', err.message);
        process.exit(1);
    }
}

module.exports = connectDatabase;