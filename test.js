const sequelize = require('./config/connection');

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connection successful!');
    } catch (err) {
        console.error('❌ Database connection failed:', err);
    } finally {
        await sequelize.close();
    }
}

testConnection();
